import Link from 'next/link';

export default function Blog() {
    const posts = [
        {
            title: 'Modern Web Design Trends 2024',
            excerpt: 'Explore the latest design trends shaping the web in 2024...',
            date: 'Dec 10, 2024',
            category: 'Design',
            image: '/assets/portfolio-1.png',
        },
        {
            title: 'Building Responsive Websites',
            excerpt: 'Learn best practices for creating mobile-first responsive designs...',
            date: 'Dec 5, 2024',
            category: 'Development',
            image: '/assets/portfolio-2.png',
        },
        {
            title: 'UI/UX Design Principles',
            excerpt: 'Master the fundamental principles of user interface design...',
            date: 'Nov 28, 2024',
            category: 'UI/UX',
            image: '/assets/portfolio-3.png',
        },
    ];

    return (
        <section id="blog" className="py-24 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-4">Latest Blog Posts</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Insights, tutorials, and thoughts on design and development.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <article
                            key={index}
                            className="group bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden border-2 border-red-600 dark:border-red-600 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <div className="relative aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800">
                                <div className="absolute inset-0 flex items-center justify-center text-4xl">
                                    📝
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs font-semibold px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full">
                                        {post.category}
                                    </span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                        {post.date}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                    {post.excerpt}
                                </p>

                                <Link
                                    href="#"
                                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm hover:gap-2 transition-all"
                                >
                                    Read More
                                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
