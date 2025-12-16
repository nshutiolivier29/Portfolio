'use client';

import { useState } from 'react';

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            text: '"Hirwa did an amazing job on our website. Communication was clear and the final product exceeded expectations."',
            author: 'Hirwa',
            img: '/assets/profile-final.jpg',
        },
        {
            text: '"Great work and quick turnaround. Highly recommend for UI/UX and branding."',
            author: 'Nshuti',
            img: '/assets/nshuti.jpg',
        },
        {
            text: '"Professional and thoughtful designs — exactly what we needed."',
            author: 'Olivier',
            img: '/assets/hero-new.jpg',
        },
    ];

    const next = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="py-24">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">Testimonials</h2>

                <div className="max-w-4xl mx-auto relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {testimonials.map((testi, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-4">
                                    <div className="h-full">
                                        <div className="relative bg-white dark:bg-gray-800 p-12 rounded-3xl shadow-xl text-center flex flex-col items-center h-full z-10">
                                            <div className="w-20 h-20 relative mb-6 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900">
                                                <img
                                                    src={testi.img}
                                                    alt={testi.author}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                            <p className="text-2xl italic text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                                {testi.text}
                                            </p>
                                            <strong className="text-lg font-bold text-blue-600">
                                                - {testi.author}
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-8 md:mt-0 md:absolute md:top-1/2 md:w-full md:-ml-4 top-auto">
                        <button
                            onClick={prev}
                            className="md:absolute md:-left-12 md:-translate-y-1/2 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors z-10"
                            aria-label="Previous"
                        >
                            ‹
                        </button>
                        <button
                            onClick={next}
                            className="md:absolute md:-right-12 md:-translate-y-1/2 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors z-10"
                            aria-label="Next"
                        >
                            ›
                        </button>
                    </div>

                    <div className="flex justify-center space-x-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-700'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
