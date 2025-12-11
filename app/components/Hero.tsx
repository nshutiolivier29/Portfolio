import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-28 pb-12 md:pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent dark:from-blue-900/20 -z-10" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 animate-fade-in-up order-2 md:order-1">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                            I'm a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Designer</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
                            With over 3 years of experience creating stunning websites, apps, and digital experiences that leave a lasting impression.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="#portfolio"
                            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold tracking-wide shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                MY WORK
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        </Link>

                        <a
                            href="/resume.pdf"
                            download="Hirwa_Nshuti_Resume.pdf"
                            className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-100 dark:border-gray-700 rounded-full font-bold tracking-wide hover:border-red-500 dark:hover:border-red-500 hover:text-red-600 dark:hover:text-red-500 shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            HIRE ME
                        </a>
                    </div>


                </div>

                <div className="relative w-full max-w-lg mx-auto aspect-[3/4] order-1 md:order-2">
                    {/* Decorative blurred backdrop */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 opacity-30 blur-2xl rounded-full animate-pulse"></div>

                    {/* Card background with rotation */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-[2rem] transform rotate-3 border border-gray-200 dark:border-gray-700"></div>

                    {/* Image Container with hover border effect */}
                    <div className="absolute inset-0 rounded-[2rem] shadow-2xl transform hover:rotate-0 transition-all duration-500 group z-10 border-2 border-gray-300 dark:border-gray-700 hover:border-red-600 dark:hover:border-red-600">
                        {/* Image Mask */}
                        <div className="absolute inset-[2px] rounded-[calc(2rem-2px)] overflow-hidden bg-white dark:bg-gray-800">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                            <Image
                                src="/assets/hero-new.jpg"
                                alt="Designer Portrait"
                                fill
                                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
