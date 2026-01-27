import React, { useState, useRef } from 'react';
import { Upload, X, FileText, CheckCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Quote: React.FC = () => {
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
        // Reset the file input
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
                alert('Thank you! Your quote request has been submitted successfully.');
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
        <div className="w-full fade-in bg-slate-100 min-h-screen">
            {/* Header */}
            <div className="relative h-[160px] w-full overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1e40af 100%)' }}>
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">Online Quote-CNC Machining/Sheet Metal/3D Printing</h1>
                    <p className="text-slate-300 mt-2">Upload your design files and get a quote within 2-4 hours</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                                        <input
                                            type="text"
                                            name="company"
                                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                                            placeholder="Company name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Quantity</label>
                                        <select
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
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Material Preference</label>
                                        <select
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
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Surface Finish</label>
                                        <select
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
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Additional Notes</label>
                                    <textarea
                                        name="message"
                                        rows={3}
                                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                                        placeholder="Tolerances, special requirements, or other specifications..."
                                    ></textarea>
                                </div>

                                {/* File Upload Area */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                                        <Upload className="w-5 h-5 text-accent" />
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
                                                Supported formats: STEP, STP, DWG, DXF, IGS, STL, PDF, Images
                                            </p>
                                            <p className="text-xs text-slate-400 mt-2">
                                                Maximum file size: 20MB per file
                                            </p>
                                        </div>
                                    </div>

                                    {/* File List */}
                                    {selectedFiles.length > 0 && (
                                        <div className="mt-4 space-y-2">
                                            <p className="text-sm font-medium text-slate-700 mb-2">
                                                Selected Files ({selectedFiles.length})
                                            </p>
                                            {selectedFiles.map((file, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200"
                                                >
                                                    <div className="flex items-center gap-3 flex-1 min-w-0">
                                                        <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                                                            <FileText className="w-5 h-5 text-accent" />
                                                        </div>
                                                        <div className="min-w-0 flex-1">
                                                            <p className="text-sm font-medium text-slate-700 truncate">{file.name}</p>
                                                            <p className="text-xs text-slate-500">{formatFileSize(file.size)}</p>
                                                        </div>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() => removeFile(index)}
                                                        className="flex-shrink-0 p-2 hover:bg-red-100 rounded-full transition-colors"
                                                        title="Remove file"
                                                    >
                                                        <X className="w-4 h-4 text-red-500" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={uploading}
                                    className="w-full bg-accent hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {uploading ? (
                                        <>Processing...</>
                                    ) : (
                                        <>
                                            <CheckCircle className="w-5 h-5" />
                                            Submit Quote Request
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

                    {/* Right Column - Info Panel */}
                    <div className="lg:col-span-1">
                        {/* Quote Info Card */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
                            <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                                <Info className="w-5 h-5 text-accent" />
                                Quote Details
                            </h3>
                            <div className="space-y-4 text-sm">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-slate-700">Fast Response</p>
                                        <p className="text-slate-500">Quotation within 2-4 hours (Mon-Sat, 9am-6pm GMT+8)</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-slate-700">No Obligation</p>
                                        <p className="text-slate-500">Free quotes with no commitment required</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-slate-700">Secure Files</p>
                                        <p className="text-slate-500">Your designs are protected and confidential</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Supported Services */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
                            <h3 className="text-lg font-bold text-primary mb-4">Supported Services</h3>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                    Laser Cutting
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                    Metal Stamping
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                    CNC Punching
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                    Bending & Forming
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                    Surface Finishing
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                    Welding & Assembly
                                </li>
                            </ul>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-primary rounded-xl p-6 text-white">
                            <h3 className="text-lg font-bold mb-3">Need Help?</h3>
                            <p className="text-slate-300 text-sm mb-4">
                                Our engineering team is ready to assist with your project.
                            </p>
                            <div className="space-y-2 text-sm">
                                <p className="flex items-center gap-2">
                                    <span className="text-slate-400">Email:</span>
                                    <span>info@qumetal.com</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <span className="text-slate-400">Phone:</span>
                                    <span>+86 13473836059</span>
                                </p>
                            </div>
                            <Link
                                to="/contact"
                                className="block w-full mt-4 py-2.5 bg-accent hover:bg-sky-600 text-white font-medium rounded-lg text-center transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
