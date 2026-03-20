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
            <div className="relative min-h-[40vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#0a0f1a]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/80 to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-4 relative z-20">
                    <div className="max-w-4xl">
                        <Link to="/services" className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-xs mb-6 hover:text-orange-400 transition-colors group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Services
                        </Link>
                        <h1 className="text-4xl md:text-7xl font-display font-black uppercase text-white leading-none tracking-tighter mb-6">
                            {service.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Overview Section */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                    <span className="w-8 h-px bg-orange-500"></span> Service Overview
                                </div>
                                <h2 className="text-3xl md:text-5xl font-display font-bold uppercase text-slate-900 mb-8 leading-tight">
                                    Precision Engineering <br />& Manufacturing
                                </h2>
                                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                {service.features && (
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex gap-3 items-start p-3 rounded-lg bg-slate-50 border border-slate-100">
                                                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                                <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="relative">
                                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">
                                    {(service.gallery && service.gallery[0]) || service.image ? (
                                        <img src={(service.gallery && service.gallery[0]) || service.image} alt={service.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-slate-900 text-white font-display font-bold text-2xl uppercase tracking-tighter opacity-10 italic">Industrial Excellence</div>
                                    )}
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Specifications Section */}
            {
                service.specifications && (
                    <section className="py-24 bg-[#0a0f1a] text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="container mx-auto px-4 relative z-10">
                            <div className="max-w-7xl mx-auto">
                                <div className="text-center mb-16">
                                    <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                        <span className="w-8 h-px bg-orange-500"></span> Technical Authority
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-display font-bold uppercase text-white mb-6 tracking-tight italic">Key Capabilities & Specifications</h2>
                                    <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full"></div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                                    {service.specifications.map((spec, idx) => {
                                        const parts = spec.split(':');
                                        const label = parts[0];
                                        const value = parts.slice(1).join(':').trim();
                                        return (
                                            <div key={idx} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm flex flex-col items-center text-center">
                                                <div className="text-orange-500 font-display font-black text-2xl mb-3 group-hover:scale-110 transition-transform duration-500 tracking-tighter">
                                                    {value || label}
                                                </div>
                                                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.25em] leading-tight">
                                                    {value ? label : "Feature"}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }

            {/* Dynamic Sections (Tools, Techniques, etc.) */}
            {
                service.sections && service.sections.map((section, sIdx) => (
                    <section key={sIdx} className={`py-24 ${sIdx % 2 === 0 ? 'bg-slate-50' : 'bg-white border-y border-slate-100'}`}>
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-16 max-w-3xl mx-auto">
                                <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                    <span className="w-8 h-px bg-orange-500"></span> Technical Capabilities
                                </div>
                                <h2 className="text-3xl md:text-5xl font-display font-bold uppercase text-slate-900 mb-6">{section.title}</h2>
                                {section.description && (
                                    <p className="text-lg text-slate-500 leading-relaxed">{section.description}</p>
                                )}
                            </div>

                            <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
                                {section.items.map((item, iIdx) => (
                                    <div key={iIdx} className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-500 flex flex-col h-full w-full sm:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] min-w-[280px] max-w-[360px]">
                                        {item.image && (
                                            <div className="relative overflow-hidden h-56 bg-slate-100 flex-shrink-0">
                                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10 transition-all duration-500"></div>
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                                />
                                            </div>
                                        )}
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h4 className="text-xl font-display font-bold text-slate-900 uppercase mb-3 group-hover:text-orange-600 transition-colors italic tracking-tight">
                                                {item.title}
                                            </h4>
                                            <p className="text-sm text-slate-500 leading-relaxed flex-grow font-medium">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))
            }

            {/* Design Guidelines Table */}
            {
                service.guidelines && (
                    <section className="py-24 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-7xl mx-auto">
                                <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                    <span className="w-8 h-px bg-orange-500"></span> Technical Documentation
                                </div>
                                <h2 className="text-3xl md:text-5xl font-display font-bold uppercase text-slate-900 mb-6">{service.guidelines.title}</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-4xl">{service.guidelines.description}</p>

                                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">
                                    <table className="w-full text-left border-collapse min-w-[800px]">
                                        <thead>
                                            <tr className="bg-slate-900 border-b border-slate-800">
                                                <th className="px-8 py-6 text-xs font-bold uppercase tracking-[0.2em] text-orange-500 w-1/4">Design Element</th>
                                                <th className="px-8 py-6 text-xs font-bold uppercase tracking-[0.2em] text-white w-1/3">Suggestions (Industry Standard)</th>
                                                <th className="px-8 py-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Benefits & Rationale</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 italic-last-col">
                                            {service.guidelines.data.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-slate-50/80 transition-all group">
                                                    <td className="px-8 py-5 font-display font-bold text-slate-900 uppercase tracking-tight text-sm bg-slate-50/50 group-hover:text-orange-600">
                                                        {row.element}
                                                    </td>
                                                    <td className="px-8 py-5 text-sm font-semibold text-slate-700">
                                                        {row.suggestions}
                                                    </td>
                                                    <td className="px-8 py-5 text-sm text-slate-500 font-medium leading-relaxed">
                                                        {row.benefits}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }

            {/* Process Section */}
            {
                service.process && (
                    <section className="py-24 bg-[#0a0f1a] text-white overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
                        <div className="container mx-auto px-4 relative z-10">
                            <div className="text-center mb-16">
                                <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                    <span className="w-8 h-px bg-orange-500"></span> Execution Workflow
                                </div>
                                <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter italic">Optimized Process</h2>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative">
                                {service.process.map((step, idx) => (
                                    <div key={idx} className="relative group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-300">
                                        <div className="text-5xl font-display font-black text-white/5 absolute top-4 right-6 group-hover:text-orange-500/10 transition-colors">0{idx + 1}</div>
                                        <div className="w-12 h-12 bg-orange-500 text-white rounded flex items-center justify-center font-display font-bold text-xl mb-6 shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                                            {idx + 1}
                                        </div>
                                        <h4 className="text-xl font-display font-bold uppercase mb-4 text-white tracking-widest">{step.title}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )
            }

            {/* Project Gallery Area */}
            {
                (service.gallery || service.galleryWithCaptions) && (
                    <section className="py-24 bg-white border-t border-slate-100">
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-16">
                                <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                                    <span className="w-8 h-px bg-orange-500"></span> Project Showcase
                                </div>
                                <h2 className="text-3xl md:text-5xl font-display font-bold uppercase text-slate-900">Portfolio Highlights</h2>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
                                {service.gallery && service.gallery.map((img, idx) => (
                                    <div key={idx} className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-slate-100 border border-slate-100">
                                        <img
                                            src={img}
                                            alt={`${service.title} - ${idx + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                            <span className="text-white font-bold text-xs uppercase tracking-widest border-b border-orange-500 pb-1">Enlarge Detail</span>
                                        </div>
                                    </div>
                                ))}

                                {service.galleryWithCaptions && service.galleryWithCaptions.map((item, idx) => (
                                    <div key={`cap-${idx}`} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden hover:border-orange-500/20 transition-all flex flex-col">
                                        <div className="relative overflow-hidden aspect-video">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        </div>
                                        <div className="p-4">
                                            <h4 className="font-display font-bold uppercase text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-xs text-slate-500">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )
            }

            {/* Final Call To Action */}
            <section className="py-32 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1),transparent_70%)] opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500/20"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-5xl md:text-8xl font-display font-black uppercase text-white mb-8 tracking-tighter leading-none">
                        START YOUR <br /> <span className="text-orange-500 italic">NEXT PROJECT</span>
                    </h2>
                    <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                        Connect with our engineering experts for precision sheet metal services. ISO 9001:2015 certified production with rapid global logistics.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/quote" className="px-12 py-5 bg-orange-500 hover:bg-orange-600 text-white font-display font-bold text-xl uppercase tracking-widest rounded-md shadow-[0_10px_40px_rgba(249,115,22,0.3)] transition-all transform hover:-translate-y-1">
                            Request Quote
                        </Link>
                        <Link to="/contact" className="px-12 py-5 border border-white/20 hover:bg-white/5 text-white font-display font-bold text-xl uppercase tracking-widest rounded-md transition-all">
                            Talk to Engineer
                        </Link>
                    </div>
                    <p className="mt-8 text-slate-500 text-sm font-bold uppercase tracking-widest italic opacity-50">
                        * Direct Factory Pricing & Technical Review within 24 Hours
                    </p>
                </div>
            </section>
        </div >
    );
};
