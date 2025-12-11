'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const projects = [
        {
            title: 'Project One',
            desc: 'Branding & UI',
            img: '/assets/portfolio-1.png',
        },
        {
            title: 'Project Two',
            desc: 'Web Design',
            img: '/assets/portfolio-2.png',
        },
        {
            title: 'Project Three',
            desc: 'App Mockup',
            img: '/assets/portfolio-3.png',
        },
        {
            title: 'Project Four',
            desc: 'Illustration',
            img: '/assets/portfolio-4.png',
        },
    ];

    return (
        <section id="portfolio" className="py-24 bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Some recent works — hover and click to view.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl cursor-pointer border-2 border-red-600 hover:border-red-500 transition-colors duration-300 shadow-xl"
                            onClick={() => setSelectedImage(project.img)}
                        >
                            <div className="relative overflow-hidden rounded-[calc(1rem-2px)] bg-white dark:bg-gray-800">
                                <div className="relative aspect-video w-full">
                                    <Image
                                        src={project.img}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                                    <h3 className="text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {project.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
                        onClick={() => setSelectedImage(null)}
                    >
                        &times;
                    </button>
                    <div className="relative w-full max-w-5xl aspect-video">
                        <Image
                            src={selectedImage}
                            alt="Project Preview"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
