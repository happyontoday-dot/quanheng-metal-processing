import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
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
            <div className="bg-slate-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Articles
                    </Link>

                    {/* Category Badge */}
                    <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full mb-4">
                        {post.category}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>

                    {/* Meta Info */}
                    <div className="flex items-center gap-6 text-sm text-slate-300">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-5 h-5" />
                            <span>{post.author}</span>
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
                <div className="mt-12 bg-gradient-to-r from-primary to-accent p-8 rounded-2xl text-white text-center">
                    <h3 className="text-2xl font-bold mb-3">Need Steel Materials or Processing Services?</h3>
                    <p className="mb-6 text-slate-100">
                        Quanheng Metal provides quality steel materials and professional processing services. Contact us for the latest quotations.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors shadow-lg"
                    >
                        Contact Us Now
                    </Link>
                </div>
            </div>
        </div>
    );
};
