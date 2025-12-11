export default function Statistics() {
    const stats = [
        { number: '3+', label: 'Years Experience' },
        { number: '50+', label: 'Projects Completed' },
        { number: '40+', label: 'Happy Clients' },
        { number: '100%', label: 'Satisfaction Rate' },
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                {stat.number}
                            </div>
                            <div className="text-blue-100 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
