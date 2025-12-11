import Image from 'next/image';

export default function About() {
    const skills = [
        { name: 'Graphic Design', level: '95%' },
        { name: 'Web Development', level: '90%' },
        { name: 'UI/UX Design', level: '85%' },
        { name: 'IT Support', level: '80%' },
    ];

    return (
        <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div className="relative group max-w-md mx-auto w-full">
                    {/* Decorative blur backdrop */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] opacity-30 blur-2xl group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                    {/* Image Container with hover border effect */}
                    <div className="relative rounded-[2rem] shadow-2xl transform hover:rotate-0 transition-all duration-500 group z-10 aspect-[3/4] border-2 border-gray-300 dark:border-gray-700 hover:border-red-600 dark:hover:border-red-600">
                        {/* Image Mask */}
                        <div className="absolute inset-[2px] rounded-[calc(2rem-2px)] overflow-hidden bg-white dark:bg-gray-800">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                            <Image
                                src="/assets/profile-final.jpg"
                                alt="HIRWA NSHUTI Olivier"
                                fill
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Decorative corner elements */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600/10 rounded-full blur-xl -z-10"></div>
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-600/10 rounded-full blur-xl -z-10"></div>
                </div>

                <div className="space-y-8">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">ABOUT ME</h2>
                        <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Hi! My name is <strong>HIRWA NSHUTI Olivier</strong>. I am a passionate Graphic Designer and IT Professional.
                        With 5 years of experience, I have acquired a diverse set of skills ranging from graphic design to IT solutions, ensuring every project is a success.
                    </p>

                    <div className="space-y-6">
                        {skills.map((skill) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-2 font-medium">
                                    <span>{skill.name}</span>
                                    <span>{skill.level}</span>
                                </div>
                                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: skill.level }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-6 text-sm">
                        <div>
                            <p className="text-gray-500 dark:text-gray-400 mb-1">Name</p>
                            <p className="font-semibold text-base">HIRWA NSHUTI Olivier</p>
                        </div>
                        <div>
                            <p className="text-gray-500 dark:text-gray-400 mb-1">Email</p>
                            <a href="mailto:nshutiolivier29@gmail.com" className="font-semibold text-base hover:text-blue-600 transition-colors">nshutiolivier29@gmail.com</a>
                        </div>
                        <div>
                            <p className="text-gray-500 dark:text-gray-400 mb-1">Phone</p>
                            <a href="tel:0784580525" className="font-semibold text-base hover:text-blue-600 transition-colors">0784580525</a>
                        </div>
                        <div>
                            <p className="text-gray-500 dark:text-gray-400 mb-1">Experience</p>
                            <p className="font-semibold text-base">5 Years</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
