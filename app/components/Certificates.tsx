'use client';

import Image from 'next/image';

export default function Certificates() {
    const certificates = [
        {
            title: 'Certified Web Developer',
            issuer: 'Udemy',
            date: '2024',
            img: '/assets/portfolio-1.png', // Placeholder
        },
        {
            title: 'UI/UX Design Masterclass',
            issuer: 'Coursera',
            date: '2023',
            img: '/assets/portfolio-2.png', // Placeholder
        },
        {
            title: 'Graphic Design Professional',
            issuer: 'Adobe',
            date: '2022',
            img: '/assets/portfolio-3.png', // Placeholder
        },
    ];

    return (
        <section id="certificates" className="py-24 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-4">Certificates</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Professional certifications and achievements.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl border-2 border-red-600 hover:border-red-500 transition-colors duration-300 shadow-xl bg-white dark:bg-gray-900"
                        >
                            <div className="relative aspect-video w-full overflow-hidden rounded-t-xl">
                                <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                    {/* Placeholder Icon/Text since we might not have real certificate images yet */}
                                    <span className="text-4xl">🏆</span>
                                </div>
                                {/* Uncomment when real images are available
                                <Image
                                    src={cert.img}
                                    alt={cert.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                */}
                            </div>

                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                                <p className="text-blue-600 font-medium mb-1">{cert.issuer}</p>
                                <p className="text-gray-500 text-sm">{cert.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
