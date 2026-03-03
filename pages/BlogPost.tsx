import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, Tag, ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';

export const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="w-full fade-in bg-slate-50 min-h-screen">
            {/* Header */}
            <div className="relative overflow-hidden bg-slate-900 py-16">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/80"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
                </div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                        Back to Articles
                    </Link>

                    {/* Category Badge */}
                    <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full mb-4">
                        {post.category}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" aria-hidden="true" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-5 h-5" aria-hidden="true" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" aria-hidden="true" />
                            <span>{Math.max(1, Math.ceil((post.content?.split(' ').length ?? 200) / 200))} min read</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <article className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100">
                    <div className="prose prose-slate max-w-none">
                        <ReactMarkdown
                            components={{
                                h1: ({ children }) => (
                                    <h1 className="text-3xl font-bold text-primary mb-6 mt-8 first:mt-0">
                                        {children}
                                    </h1>
                                ),
                                h2: ({ children }) => (
                                    <h2 className="text-2xl font-bold text-primary mb-4 mt-8 pb-2 border-b-2 border-accent/20">
                                        {children}
                                    </h2>
                                ),
                                h3: ({ children }) => (
                                    <h3 className="text-xl font-semibold text-primary mb-3 mt-6">
                                        {children}
                                    </h3>
                                ),
                                p: ({ children }) => (
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        {children}
                                    </p>
                                ),
                                ul: ({ children }) => (
                                    <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4 ml-4">
                                        {children}
                                    </ul>
                                ),
                                strong: ({ children }) => (
                                    <strong className="font-semibold text-primary">
                                        {children}
                                    </strong>
                                ),
                                blockquote: ({ children }) => (
                                    <blockquote className="border-l-4 border-accent pl-4 py-2 my-6 bg-slate-50 italic text-slate-600">
                                        {children}
                                    </blockquote>
                                ),
                                hr: () => <hr className="my-8 border-slate-200" />,
                                em: ({ children }) => (
                                    <em className="text-slate-500 text-sm">{children}</em>
                                ),
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </div>
                </article>

                {/* CTA Section */}
                <div className="mt-12 relative overflow-hidden bg-slate-900 rounded-2xl p-8 md:p-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/80"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                        <div className="flex-shrink-0 w-14 h-14 bg-accent/20 border border-accent/30 rounded-2xl flex items-center justify-center">
                            <Tag className="w-7 h-7 text-accent" aria-hidden="true" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-2">Need Steel Materials or Processing Services?</h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Quanheng Metal provides quality steel materials and professional processing services. Contact us for the latest quotations.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-accent hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg cursor-pointer hover:shadow-xl whitespace-nowrap"
                            >
                                Contact Us <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Back to Blog */}
                <div className="mt-8 text-center">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-accent transition-colors text-sm font-medium">
                        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                        Back to All Articles
                    </Link>
                </div>
            </div>
        </div>
    );
};
