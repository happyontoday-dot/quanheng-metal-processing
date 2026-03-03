import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, Upload, X, CheckCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
  const [uploading, setUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;
    const maxSize = 20 * 1024 * 1024; // 20MB
    const fileArray = Array.from(files);
    const validFiles = fileArray.filter((file) => {
      if (file.size > maxSize) {
        alert(`File "${file.name}" is too large. Maximum size is 20MB.`);
        return false;
      }
      return true;
    });
    setSelectedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const formValues = Object.fromEntries(formData.entries());

      // 1. Upload files first
      const uploadedFiles = [];

      for (const file of selectedFiles) {
        try {
          // Get presigned URL
          const uploadConfigRes = await fetch('/.netlify/functions/get-upload-url', {
            method: 'POST',
            body: JSON.stringify({
              filename: file.name,
              filetype: file.type
            })
          });

          if (!uploadConfigRes.ok) throw new Error('Failed to get upload URL');

          const { uploadUrl, key } = await uploadConfigRes.json();

          // Upload to S3 directly
          const uploadRes = await fetch(uploadUrl, {
            method: 'PUT',
            body: file,
            headers: {
              'Content-Type': file.type
            }
          });

          if (!uploadRes.ok) throw new Error('Failed to upload file to storage');

          uploadedFiles.push({
            name: file.name,
            key: key,
            size: file.size,
            type: file.type
          });

        } catch (err) {
          console.error("File upload error", err);
          alert(`Failed to upload ${file.name}. Please try again.`);
          setUploading(false);
          return;
        }
      }

      // 2. Submit form data with file keys
      const submitRes = await fetch('/.netlify/functions/submit-quote', {
        method: 'POST',
        body: JSON.stringify({
          ...formValues,
          files: uploadedFiles
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (submitRes.ok) {
        alert('Thank you! Your message has been sent successfully. We will contact you soon.');
        (e.target as HTMLFormElement).reset();
        setSelectedFiles([]);
      } else {
        const errorData = await submitRes.json();
        throw new Error(errorData.error || 'Submission failed');
      }

    } catch (error: any) {
      console.error('Form submission error:', error);
      alert(`Error: ${error.message || 'Something went wrong'}. Please try again.`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full fade-in bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden bg-slate-900 py-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/80"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-accent text-xs font-semibold mb-4 tracking-widest uppercase">Get In Touch</div>
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Get in touch for quotes, technical questions, or factory tours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Form Section (Takes 2/3 width) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-accent via-orange-500 to-primary"></div>
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="contact-company" className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        autoComplete="organization"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-quantity" className="block text-sm font-medium text-slate-700 mb-1">Quantity</label>
                      <select
                        id="contact-quantity"
                        name="quantity"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors bg-white"
                      >
                        <option value="">Select quantity</option>
                        <option value="1-10">1 - 10 pcs</option>
                        <option value="11-50">11 - 50 pcs</option>
                        <option value="51-100">51 - 100 pcs</option>
                        <option value="101-500">101 - 500 pcs</option>
                        <option value="501-1000">501 - 1,000 pcs</option>
                        <option value="1001-5000">1,001 - 5,000 pcs</option>
                        <option value="5001-10000">5,001 - 10,000 pcs</option>
                        <option value="10000+">10,000+ pcs</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="contact-material" className="block text-sm font-medium text-slate-700 mb-1">Material Preference</label>
                      <select
                        id="contact-material"
                        name="material"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors bg-white"
                      >
                        <option value="">Select material</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Stainless Steel">Stainless Steel</option>
                        <option value="Carbon Steel">Carbon Steel</option>
                        <option value="Galvanized Steel">Galvanized Steel</option>
                        <option value="Copper">Copper</option>
                        <option value="Brass">Brass</option>
                        <option value="Other">Other (specify in notes)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-surface-finish" className="block text-sm font-medium text-slate-700 mb-1">Surface Finish</label>
                      <select
                        id="contact-surface-finish"
                        name="surface_finish"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors bg-white"
                      >
                        <option value="">Select finish</option>
                        <option value="None">None / As Machined</option>
                        <option value="Powder Coating">Powder Coating</option>
                        <option value="Anodizing">Anodizing</option>
                        <option value="Electroplating">Electroplating</option>
                        <option value="Zinc Plating">Zinc Plating</option>
                        <option value="Nickel Plating">Nickel Plating</option>
                        <option value="Chrome Plating">Chrome Plating</option>
                        <option value="Painting">Painting</option>
                        <option value="Brushing">Brushing</option>
                        <option value="Polishing">Polishing</option>
                        <option value="Sandblasting">Sandblasting</option>
                        <option value="Other">Other (specify in notes)</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1">Additional Notes</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                      placeholder="Describe your project needs, tolerances, or other specifications..."
                    ></textarea>
                  </div>

                  {/* File Upload Area */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                      <Upload className="w-5 h-5 text-accent" aria-hidden="true" />
                      Upload Design Files
                    </h3>

                    <div
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer ${dragActive
                        ? 'border-accent bg-accent/5'
                        : 'border-slate-300 hover:border-accent bg-slate-50'
                        }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        onChange={(e) => handleFileSelect(e.target.files)}
                        className="hidden"
                        accept=".pdf,.dwg,.dxf,.stp,.step,.igs,.iges,.stl,.obj,.3mf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx,.zip,.rar"
                      />
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                          <Upload className="w-8 h-8 text-accent" />
                        </div>
                        <p className="text-lg font-medium text-slate-700 mb-1">
                          Drag & drop files here or click to browse
                        </p>
                        <p className="text-sm text-slate-500">
                          Supported formats: STEP, DWG, PDF, Images...
                        </p>
                      </div>
                    </div>

                    {/* File List */}
                    {selectedFiles.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {selectedFiles.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200"
                          >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded flex items-center justify-center">
                                <FileText className="w-4 h-4 text-accent" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-slate-700 truncate">{file.name}</p>
                                <p className="text-xs text-slate-500">{formatFileSize(file.size)}</p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="flex-shrink-0 p-1 hover:bg-red-100 rounded-full transition-colors"
                              title="Remove file"
                            >
                              <X className="w-4 h-4 text-red-500" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mb-5 bg-accent/5 border border-accent/20 rounded-xl px-5 py-3 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                    <p className="text-sm text-slate-600"><span className="font-semibold text-accent">Fast Response</span> — We typically reply within 24 hours on business days.</p>
                  </div>
                  <button
                    type="submit"
                    disabled={uploading}
                    className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
                  >
                    {uploading ? 'Sending...' : (
                      <>
                        <CheckCircle className="w-5 h-5" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center mt-4">
                    By submitting, you agree to our{' '}
                    <Link to="/privacy" className="text-accent hover:underline">Privacy Policy</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info (Takes 1/3 width) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold text-primary mb-8">Get In Touch</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: <MapPin className="w-5 h-5 text-accent" aria-hidden="true" />,
                    label: 'Factory Location',
                    content: 'No. 29 Fuzhen Industrial Park, Nanpi County, Cangzhou, Hebei Province, China'
                  },
                  {
                    icon: <Phone className="w-5 h-5 text-accent" aria-hidden="true" />,
                    label: 'Phone',
                    content: '+86 13473836059'
                  },
                  {
                    icon: <Mail className="w-5 h-5 text-accent" aria-hidden="true" />,
                    label: 'Email',
                    content: 'info@qumetal.com'
                  },
                  {
                    icon: <Clock className="w-5 h-5 text-accent" aria-hidden="true" />,
                    label: 'Business Hours',
                    content: 'Mon–Fri: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 12:00 PM'
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-xl border border-slate-100 shadow-sm p-4 hover:shadow-md hover:border-accent/20 transition-all duration-200">
                    <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">{item.label}</p>
                      <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
