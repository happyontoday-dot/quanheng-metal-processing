import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export const Blog: React.FC = () => {
    return (
        <div className="w-full fade-in bg-slate-50 min-h-screen">
            <div className="bg-slate-900 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
                            className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                        >
                            {/* Blog Image Placeholder */}
                            <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <Tag className="w-16 h-16 text-white opacity-50" />
                            </div>

                            {/* Blog Content */}
                            <div className="p-6">
                                {/* Category Badge */}
                                <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-3">
                                    {post.category}
                                </div>

                                {/* Title */}
                                <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                </h2>

                                {/* Excerpt */}
                                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {/* Meta Info */}
                                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User className="w-4 h-4" />
                                        <span>{post.author}</span>
                                    </div>
                                </div>

                                {/* Read More Link */}
                                <Link
                                    to={`/blog/${post.id}`}
                                    className="inline-flex items-center gap-2 text-accent hover:text-sky-600 font-medium text-sm group/link"
                                >
                                    Read More
                                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Empty State if no posts */}
                {blogPosts.length === 0 && (
                    <div className="text-center py-20">
                        <Tag className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-slate-600 mb-2">No Articles Yet</h3>
                        <p className="text-slate-500">Stay tuned for more exciting content</p>
                    </div>
                )}
            </div>
        </div>
    );
};
