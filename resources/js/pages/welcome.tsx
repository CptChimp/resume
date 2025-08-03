import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="📄 Alex Johnson - Resume">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-gray-50 py-8 px-4 dark:bg-gray-900">
                {/* Navigation */}
                <header className="mb-8 w-full max-w-4xl mx-auto">
                    <nav className="flex items-center justify-between">
                        <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            📄 Digital Resume
                        </div>
                        <div className="flex gap-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="px-4 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>
                </header>

                {/* Resume Content */}
                <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                    {/* Header Section */}
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                                👨‍🎓
                            </div>
                            <h1 className="text-3xl font-bold mb-2">Hugo Berneis</h1>
                            <p className="text-xl mb-4">High School Student & Aspiring Developer</p>
                            <div className="flex flex-wrap justify-center gap-4 text-sm">
                                <span className="flex items-center gap-1">
                                    📧 alex.johnson@email.com
                                </span>
                                <span className="flex items-center gap-1">
                                    📱 (555) 123-4567
                                </span>
                                <span className="flex items-center gap-1">
                                    📍 Hometown, State
                                </span>
                                <span className="flex items-center gap-1">
                                    💼 linkedin.com/in/alexjohnson
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        {/* About Section */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                                🎯 About Me
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Motivated high school senior with a passion for technology and problem-solving. 
                                Currently pursuing computer science studies while maintaining excellent academic performance. 
                                Eager to apply my technical skills and creativity in a professional environment.
                            </p>
                        </section>

                        {/* Education Section */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                                🎓 Education
                            </h2>
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                        Hometown High School
                                    </h3>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">2020 - 2024</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">High School Diploma (Expected)</p>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">GPA: 3.8/4.0</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                                        Honor Roll
                                    </span>
                                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                                        AP Computer Science
                                    </span>
                                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                                        Mathematics Club
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* Skills Section */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                                💻 Technical Skills
                            </h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Programming</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-sm">JavaScript</span>
                                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">Python</span>
                                        <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded text-sm">HTML/CSS</span>
                                    </div>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Tools</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded text-sm">Git</span>
                                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">VS Code</span>
                                        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-sm">Figma</span>
                                    </div>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Other</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded text-sm">Problem Solving</span>
                                        <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded text-sm">Team Work</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Projects Section */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                                🚀 Projects
                            </h2>
                            <div className="space-y-4">
                                <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                            Personal Portfolio Website
                                        </h3>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">2024</span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                                        Designed and developed a responsive personal website showcasing my projects and skills. 
                                        Built with HTML, CSS, and JavaScript featuring modern design principles.
                                    </p>
                                    <div className="flex gap-2">
                                        <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">HTML/CSS</span>
                                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">JavaScript</span>
                                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Responsive Design</span>
                                    </div>
                                </div>

                                <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                            Student Grade Calculator
                                        </h3>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">2023</span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                                        Created a Python application that helps students calculate their GPA and track academic progress. 
                                        Features include grade input validation and semester-wise calculations.
                                    </p>
                                    <div className="flex gap-2">
                                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Python</span>
                                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full text-sm">CLI</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Experience Section */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                                💼 Experience
                            </h2>
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                        Volunteer Tech Support
                                    </h3>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">2023 - Present</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">Local Community Center</p>
                                <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
                                    <li>Assisted seniors with basic computer skills and troubleshooting</li>
                                    <li>Helped set up and maintain computer lab equipment</li>
                                    <li>Provided patient, clear instruction to users of all skill levels</li>
                                </ul>
                            </div>
                        </section>

                        {/* Activities Section */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                                🏆 Activities & Achievements
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                    <span className="text-2xl">🥇</span>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">Regional Coding Competition</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">2nd Place (2024)</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                    <span className="text-2xl">📚</span>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">National Honor Society</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Member (2023-2024)</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                    <span className="text-2xl">🎵</span>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">School Jazz Band</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Trumpet Player (4 years)</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                    <span className="text-2xl">🤝</span>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">Peer Tutoring Program</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Math & Science Tutor</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Footer */}
                        <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-600">
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                🌟 Ready to bring enthusiasm, fresh perspective, and technical skills to your team!
                            </p>
                            <div className="flex justify-center gap-4">
                                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                                    📧 Contact Me
                                </button>
                                <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-semibold">
                                    📄 Download PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
                    Built with ❤️ using Laravel & React • 
                    <a 
                        href="https://app.build" 
                        target="_blank" 
                        className="font-medium text-blue-600 hover:underline dark:text-blue-400 ml-1"
                    >
                        Powered by app.build
                    </a>
                </footer>
            </div>
        </>
    );
}