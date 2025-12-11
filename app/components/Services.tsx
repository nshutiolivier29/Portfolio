export default function Services() {
    const services = [
        {
            title: 'Web Design',
            desc: 'Responsive, accessible, and modern websites built with care.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: 'UI / UX',
            desc: 'User-focused interfaces and thoughtful interactions.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: 'Branding',
            desc: 'Logos, identity systems, and brand strategy to stand out.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
        },
    ];

    return (
        <section id="services" className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-4">Services</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        I offer a range of services to help you build and grow your brand.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className="relative w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {/* Animated Red Border Background */}
                                <div className="absolute -inset-1 bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                                <div className="absolute -inset-[3px] rounded-[0.8rem] bg-gradient-to-r from-red-600 via-red-300 to-red-600 animate-[pulse_3s_linear_infinite] blur-sm opacity-70"></div>
                                <div className="absolute -inset-[2px] rounded-[0.8rem] bg-[conic-gradient(from_90deg_at_50%_50%,#991b1b_0%,#ef4444_50%,#991b1b_100%)] animate-[spin_4s_linear_infinite]"></div>

                                {/* Icon Container */}
                                <div className="absolute inset-[2px] bg-blue-50 dark:bg-gray-900 rounded-xl flex items-center justify-center text-blue-600 z-10 h-[calc(100%-4px)] w-[calc(100%-4px)]">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
