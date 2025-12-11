'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
    const [status, setStatus] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            (e.target as HTMLFormElement).reset();
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-6 max-w-2xl">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Contact</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Want to work together? Send a message below.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                        <input
                            id="name"
                            name="name"
                            required
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+250 XXX XXX XXX"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            placeholder="Project inquiry, collaboration, etc."
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            placeholder="Tell me about your project..."
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"
                        ></textarea>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && (
                            <span className="text-green-600 font-medium animate-fade-in">
                                Message sent successfully!
                            </span>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}
