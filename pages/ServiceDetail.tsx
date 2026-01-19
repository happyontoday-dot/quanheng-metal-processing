import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export const ServiceDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = services.find((s) => s.id === slug);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return (
        <div className="w-full fade-in bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[200px] w-full overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1e40af 100%)' }}>
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12">
                    <Link to="/services" className="text-slate-200 hover:text-white flex items-center mb-4 transition-colors w-fit">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-primary mb-4">Service Overview</h2>
                            {service.description && (
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                            )}

                            {service.specifications && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                                    {service.specifications.map((spec, idx) => (
                                        <div key={idx} className="bg-slate-50 border border-slate-100 rounded-lg p-3 flex items-center">
                                            <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>
                                            <span className="text-slate-700 font-medium">{spec}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {service.features && (
                                <div className="mt-6 mb-6">
                                    <h3 className="text-xl font-bold text-primary mb-3">Key Features & Benefits</h3>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <CheckCircle className="w-6 h-6 text-accent mt-0.5 mr-3 flex-shrink-0" />
                                                <span className="text-slate-700 text-lg">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {service.process && (
                                <div className="mt-8 mb-8">
                                    <h3 className="text-2xl font-bold text-primary mb-4">Our Stamping Process</h3>
                                    <div className="relative">
                                        <div className="space-y-4">
                                            {service.process.map((step, idx) => (
                                                <div key={idx} className="relative flex flex-col md:flex-row gap-4">
                                                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex-grow hover:border-accent/30 transition-colors">
                                                        <h4 className="text-lg font-bold text-primary mb-1">{step.title}</h4>
                                                        <p className="text-slate-600 leading-relaxed">{step.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {service.gallery && service.gallery.length > 0 && (
                                <div className="mt-6">
                                    <h3 className="text-xl font-bold text-primary mb-4">Project Gallery</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {service.gallery.map((img, idx) => (
                                            <div key={idx} className="group relative overflow-hidden rounded-lg aspect-square bg-slate-100">
                                                <img
                                                    src={img}
                                                    alt={`${service.title} - Image ${idx + 1}`}
                                                    loading="lazy"
                                                    decoding="async"
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {service.galleryWithCaptions && service.galleryWithCaptions.length > 0 && (
                                <div className="mt-6">
                                    <h3 className="text-xl font-bold text-primary mb-4">Surface Finishing Options</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {service.galleryWithCaptions.map((item, idx) => (
                                            <div key={idx} className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                                                <div className="relative overflow-hidden aspect-square bg-slate-100">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        loading="lazy"
                                                        decoding="async"
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </div>
                                                <div className="p-4">
                                                    <h4 className="text-lg font-bold text-primary mb-2">{item.title}</h4>
                                                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-primary rounded-2xl p-6 text-white sticky top-24">
                            <h3 className="text-2xl font-bold mb-3">Ready to Start?</h3>
                            <p className="text-slate-300 mb-6">
                                Contact us today for a free quote. Our engineering team is ready to review your specifications.
                            </p>
                            <Link
                                to="/contact"
                                className="block w-full py-4 bg-accent hover:bg-sky-600 text-white font-bold rounded-xl text-center transition-all shadow-lg hover:shadow-sky-900/50"
                            >
                                Request a Quote
                            </Link>
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <p className="text-sm text-slate-400 mb-2">Need immediate assistance?</p>
                                <p className="font-semibold">support@quanheng-metal.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
