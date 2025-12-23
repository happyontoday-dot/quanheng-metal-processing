import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="w-full fade-in bg-slate-50 min-h-screen">
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Get in touch for quotes, technical questions, or factory tours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-8">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 mr-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Factory Location</h3>
                  <p className="text-slate-600 mt-1">
                    No. 123 Industrial Park Road,<br />
                    Bao'an District, Shenzhen,<br />
                    Guangdong Province, China
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 mr-4">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Phone</h3>
                  <p className="text-slate-600 mt-1">
                    +86 123 4567 8900 (Office)<br />
                    +86 987 6543 2100 (Sales)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 mr-4">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Email</h3>
                  <p className="text-slate-600 mt-1">
                    sales@quanheng-metal.com<br />
                    info@quanheng-metal.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 mr-4">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Business Hours</h3>
                  <p className="text-slate-600 mt-1">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 12:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Netlify Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);

                fetch('/', {
                  method: 'POST',
                  headers: { "Content-Type": "application/x-www-form-urlencoded" },
                  body: new URLSearchParams(formData as any).toString()
                })
                  .then(() => alert('Thank you! Your message has been sent.'))
                  .catch((error) => alert('Submission failed. Please try again or email us directly.'));
              }}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <input name="bot-field" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                  placeholder="Request for Quotation - Project A"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                  placeholder="Please describe your project needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};