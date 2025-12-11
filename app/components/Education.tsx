export default function Education() {
    const education = [
        {
            degree: 'Bachelor of Science in Computer Science',
            school: 'University of Rwanda',
            year: '2018 - 2022',
            description: 'Focused on software engineering, web development, and UI/UX design.',
        },
        {
            degree: 'Advanced Diploma in Graphic Design',
            school: 'Rwanda Coding Academy',
            year: '2020 - 2021',
            description: 'Specialized in digital design, branding, and visual communication.',
        },
        {
            degree: 'Certificate in Web Development',
            school: 'Online Certification',
            year: '2021',
            description: 'Completed intensive training in modern web technologies and frameworks.',
        },
    ];

    return (
        <section id="education" className="py-24 bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-4">Education</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        My academic background and professional certifications.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-red-600 dark:hover:border-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                                        {edu.school}
                                    </p>
                                </div>
                                <div className="mt-2 md:mt-0">
                                    <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-semibold">
                                        {edu.year}
                                    </span>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400">
                                {edu.description}
                            </p>

                            {/* Decorative element */}
                            <div className="absolute top-8 left-0 w-1 h-16 bg-gradient-to-b from-blue-600 to-purple-600 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
