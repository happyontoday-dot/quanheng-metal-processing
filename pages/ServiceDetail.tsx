import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export const ServiceDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = services.find((s) => s.id === slug);

    if (!service) {
        return <Navigate to="/products" replace />;
    }

    return (
        <div className="w-full fade-in bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[400px] w-full bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-60">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10"></div>
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-16">
                    <Link to="/products" className="text-slate-300 hover:text-white flex items-center mb-6 transition-colors w-fit">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-primary mb-6">Service Overview</h2>
                            {service.description && (
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    {service.description}
                                </p>
                            )}

                            {service.features && (
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold text-primary mb-4">Key Features & Benefits</h3>
                                    <ul className="space-y-4">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <CheckCircle className="w-6 h-6 text-accent mt-0.5 mr-3 flex-shrink-0" />
                                                <span className="text-slate-700 text-lg">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-primary rounded-2xl p-8 text-white sticky top-24">
                            <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                            <p className="text-slate-300 mb-8">
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
