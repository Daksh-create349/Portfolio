import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export function ClassicResume() {
    return (
        <div className="w-full h-full bg-white text-black !text-black p-8 md:p-12 font-serif overflow-y-auto custom-scrollbar-light selection:bg-yellow-200 selection:text-black" style={{ color: "black" }}>
            {/* Header */}
            <div className="text-center border-b-2 border-black pb-6 mb-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 uppercase">Daksh Srivastava</h1>
                <p className="text-lg italic text-gray-700 mb-4">Full Stack Developer & Computer Science Student</p>

                <div className="flex flex-wrap justify-center gap-4 text-sm font-sans text-gray-600">
                    <div className="flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        <span>+91 9588415901</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        <span>dakshshrivastav56@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>Mumbai, Maharashtra</span>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="space-y-6">

                {/* Education */}
                <section>
                    <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-4 pb-1">Education</h2>
                    <div className="flex justify-between mb-2">
                        <div className="font-bold">ITM Skills University</div>
                        <div className="italic">Navi Mumbai, India</div>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                        <div>Bachelor of Technology in Computer Science Engineering</div>
                        <div>June 2025 – Dec 2029</div>
                    </div>
                    <ul className="list-disc ml-5 text-sm space-y-1 text-gray-700">
                        <li>Relevant Coursework: Data Structures, Algorithms, Database Management, Web Development, AI/ML</li>
                    </ul>

                    <div className="flex justify-between mt-4 mb-2">
                        <div className="font-bold">Maharashtra State Board</div>
                        <div className="italic">India</div>
                    </div>
                    <div className="flex justify-between text-sm">
                        <div>Higher Secondary Certificate</div>
                        <div>June 2023 – March 2025</div>
                    </div>
                </section>

                {/* Experience */}
                <section>
                    <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-4 pb-1">Experience</h2>
                    <div className="flex justify-between mb-1">
                        <div className="font-bold">Student Ambassador</div>
                        <div className="italic">Sep 2025 – Dec 2025</div>
                    </div>
                    <div className="text-sm font-semibold mb-2">LetsUpgrade</div>
                    <ul className="list-disc ml-5 text-sm space-y-1 text-gray-700">
                        <li>Promoted technology education initiatives and engaged with student community to drive participation.</li>
                        <li>Organized and facilitated technical workshops, webinars, and coding events for university students.</li>
                        <li>Collaborated with cross-functional teams to enhance student engagement and program reach.</li>
                    </ul>
                </section>

                {/* Projects */}
                <section>
                    <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-4 pb-1">Projects</h2>

                    <div className="mb-4">
                        <div className="flex justify-between">
                            <div className="font-bold">AI-Powered Web Application</div>
                            <div className="text-sm">2025</div>
                        </div>
                        <div className="text-xs italic text-gray-600 mb-1">Next.js, Firebase, Python, OpenAI API</div>
                        <ul className="list-disc ml-5 text-sm space-y-1 text-gray-700">
                            <li>Built a full-stack web application leveraging AI APIs to solve real-world user problems.</li>
                            <li>Implemented responsive UI with Next.js framework and managed backend with Firebase.</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between">
                            <div className="font-bold">E-Commerce Platform</div>
                            <div className="text-sm">2024</div>
                        </div>
                        <div className="text-xs italic text-gray-600 mb-1">JavaScript, HTML, CSS, Firebase</div>
                        <ul className="list-disc ml-5 text-sm space-y-1 text-gray-700">
                            <li>Developed a fully functional e-commerce website with product catalog, cart, and checkout features.</li>
                            <li>Implemented user authentication and real-time database synchronization using Firebase.</li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex justify-between">
                            <div className="font-bold">SQL Database Management System</div>
                            <div className="text-sm">2024</div>
                        </div>
                        <div className="text-xs italic text-gray-600 mb-1">SQL, Python</div>
                        <ul className="list-disc ml-5 text-sm space-y-1 text-gray-700">
                            <li>Designed and implemented relational database schemas for business data management.</li>
                            <li>Optimized complex SQL queries for improved performance and data retrieval efficiency.</li>
                        </ul>
                    </div>
                </section>

                {/* Technical Skills */}
                <section>
                    <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-4 pb-1">Technical Skills</h2>
                    <div className="text-sm space-y-2">
                        <div><span className="font-bold">Languages:</span> Python, JavaScript, SQL, HTML, CSS</div>
                        <div><span className="font-bold">Frameworks:</span> Next.js, React, Node.js, Express.js</div>
                        <div><span className="font-bold">Tools:</span> Firebase, Git, GitHub, VS Code, REST APIs</div>
                        <div><span className="font-bold">Databases:</span> MySQL, PostgreSQL, Firebase Realtime Database, MongoDB</div>
                    </div>
                </section>

            </div>

            <div className="mt-12 text-center text-xs text-gray-400 font-sans border-t pt-4">
                -- End of Document --
            </div>

            <style jsx global>{`
        .custom-scrollbar-light::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar-light::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar-light::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 3px;
        }
        .custom-scrollbar-light::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
        </div>
    )
}
