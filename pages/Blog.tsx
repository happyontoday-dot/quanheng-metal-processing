import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { useSEO } from '../hooks/useSEO';

export const Blog: React.FC = () => {
    useSEO({
        title: "Metal Fabrication Industry News & Insights | QUMETAL Blog",
        description: "Expert articles on sheet metal fabrication, CNC machining, 3D printing, and precision manufacturing. Industry trends, technical guides, and market insights from QUMETAL."
    });

    return (
        <div className="w-full fade-in bg-slate-50 min-h-screen">
            {/* Hero */}
            <div className="relative overflow-hidden bg-slate-900 pt-24 pb-16 md:pt-32 md:pb-24">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/80"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-accent text-xs font-semibold mb-4 tracking-widest uppercase">
                        Industry Insights
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4">Industry News & Insights</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                        Latest updates on metal fabrication industry trends, technical insights, and market analysis
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col"
                        >
                            {/* Blog Image */}
                            <div className="h-48 relative overflow-hidden bg-gradient-to-br from-primary to-slate-700 flex items-center justify-center">
                                {/* Subtle grid pattern overlay */}
                                <div className="absolute inset-0 opacity-10" style={{
                                    backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
                                    backgroundSize: '24px 24px'
                                }}></div>
                                <div className="relative z-10 flex flex-col items-center gap-3">
                                    <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center border border-white/20">
                                        <Tag className="w-7 h-7 text-white" aria-hidden="true" />
                                    </div>
                                    <span className="text-white/60 text-xs font-semibold tracking-widest uppercase px-3 py-1 bg-white/10 rounded-full border border-white/10">
                                        {post.category}
                                    </span>
                                </div>
                                {/* Hover gradient shimmer */}
                                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Blog Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                {/* Category Badge */}
                                <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-3 self-start">
                                    {post.category}
                                </div>

                                {/* Title */}
                                <h2 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors leading-snug">
                                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                </h2>

                                {/* Excerpt */}
                                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>

                                {/* Divider */}
                                <div className="border-t border-slate-100 pt-4">
                                    {/* Meta Info */}
                                    <div className="flex items-center justify-between text-xs text-slate-400">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                                                <span>{post.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <User className="w-3.5 h-3.5" aria-hidden="true" />
                                                <span>{post.author}</span>
                                            </div>
                                        </div>
                                        {/* Read More Link */}
                                        <Link
                                            to={`/blog/${post.id}`}
                                            className="inline-flex items-center gap-1 text-accent hover:text-orange-600 font-semibold group/link"
                                        >
                                            Read More
                                            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Empty State if no posts */}
                {blogPosts.length === 0 && (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Tag className="w-10 h-10 text-slate-300" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-600 mb-2">No Articles Yet</h3>
                        <p className="text-slate-500">Stay tuned for more exciting content</p>
                    </div>
                )}
            </div>
        </div>
    );
};
