import React from 'react';

export const Privacy: React.FC = () => {
    return (
        <div className="w-full fade-in bg-slate-50 min-h-screen">
            <div className="bg-slate-900 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                        Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100">

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-primary mb-4">Introduction</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Quanheng Metal Processing Factory ("we", "our", or "us") is committed to protecting your privacy.
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                            visit our website or use our services.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
                        <p className="text-slate-600 leading-relaxed mb-3">
                            We may collect personal information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                            <li>Fill out our contact form</li>
                            <li>Request a quotation</li>
                            <li>Subscribe to our newsletter</li>
                            <li>Communicate with us via email or phone</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed mt-3">
                            The personal information we collect may include: name, email address, phone number, company name,
                            project details, and any attachments you provide.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
                        <p className="text-slate-600 leading-relaxed mb-3">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                            <li>Respond to your inquiries and provide customer support</li>
                            <li>Process quotation requests and project proposals</li>
                            <li>Send you information about our services and updates</li>
                            <li>Improve our website and services</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-primary mb-4">Information Sharing and Disclosure</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We do not sell, trade, or rent your personal information to third parties. We may share your
                            information only in the following circumstances:
                        </p>
                        <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mt-3">
                            <li>With service providers who assist us in operating our website and conducting our business</li>
                            <li>When required by law or to protect our rights</li>
                            <li>With your explicit consent</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-primary mb-4">Data Security</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We implement appropriate technical and organizational measures to protect your personal information
                            against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                            over the Internet is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-primary mb-4">Cookies and Tracking Technologies</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Our website may use cookies and similar tracking technologies to enhance user experience. You can
                            choose to disable cookies through your browser settings, though this may affect certain functionality
                            of our website.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-primary mb-4">Your Rights</h2>
                        <p className="text-slate-600 leading-relaxed mb-3">
                            You have the right to:
                        </p>
                        <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your personal information</li>
                            <li>Opt-out of marketing communications</li>
                            <li>Lodge a complaint with a supervisory authority</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-primary mb-4">Third-Party Links</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Our website may contain links to third-party websites. We are not responsible for the privacy
                            practices of these external sites. We encourage you to review their privacy policies.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-primary mb-4">Children's Privacy</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Our services are not directed to individuals under the age of 18. We do not knowingly collect
                            personal information from children.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-primary mb-4">Changes to This Privacy Policy</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We may update this Privacy Policy from time to time. Any changes will be posted on this page with
                            an updated revision date. We encourage you to review this policy periodically.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
                        <p className="text-slate-600 leading-relaxed">
                            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                        </p>
                        <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                            <p className="text-slate-700"><strong>Email:</strong> info@qumetal.com</p>
                            <p className="text-slate-700 mt-2"><strong>Phone:</strong> +86 13473836059</p>
                            <p className="text-slate-700 mt-2">
                                <strong>Address:</strong> No. 29 Fuzhen Industrial Park, Nanpi County, Cangzhou, Hebei Province, China
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};
