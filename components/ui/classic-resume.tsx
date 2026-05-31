export function ClassicResume() {
    return (
        <div className="w-full h-full bg-white text-black !text-black p-8 md:p-12 font-serif overflow-y-auto custom-scrollbar-light selection:bg-yellow-200 selection:text-black animate-fade-in" style={{ color: "black" }}>
            {/* Header */}
            <div className="text-center border-b-2 border-black pb-4 mb-6">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 uppercase">Daksh Srivastava</h1>
                <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-xs md:text-sm font-sans text-gray-600">
                    <span>Mumbai, India</span>
                    <span>|</span>
                    <a href="mailto:dakshshrivastav56@gmail.com" className="hover:underline">dakshshrivastav56@gmail.com</a>
                    <span>|</span>
                    <span>+91-9588415901</span>
                    <span>|</span>
                    <a href="https://linkedin.com/in/daksh-srivastava" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/daksh-srivastava</a>
                    <span>|</span>
                    <a href="https://github.com/Daksh-create349" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/Daksh-create349</a>
                    <span>|</span>
                    <a href="https://dakshsportfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline">dakshsportfolio.vercel.app</a>
                </div>
            </div>

            {/* Content Grid */}
            <div className="space-y-6">

                {/* Education */}
                <section>
                    <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-4 pb-1">Education</h2>
                    <div className="flex justify-between mb-1">
                        <div className="font-bold">ITM Skills University</div>
                        <div className="italic text-gray-700">Navi Mumbai, India</div>
                    </div>
                    <div className="flex justify-between text-sm mb-3">
                        <div className="italic">B.Tech – Computer Science Engineering (Full Stack & AI/ML)</div>
                        <div className="font-mono text-xs text-gray-700">June 2025 – Dec 2029</div>
                    </div>

                    <div className="flex justify-between mb-1">
                        <div className="font-bold">Maharashtra State Board (MSBSHSE)</div>
                        <div className="italic text-gray-700">India</div>
                    </div>
                    <div className="flex justify-between text-sm">
                        <div className="italic">Higher Secondary Certificate (HSC)</div>
                        <div className="font-mono text-xs text-gray-700">June 2023 – March 2025</div>
                    </div>
                </section>

                {/* Technical Skills */}
                <section>
                    <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-4 pb-1">Technical Skills</h2>
                    <div className="text-sm space-y-1 font-sans">
                        <div className="grid grid-cols-[140px_1fr] py-0.5">
                            <span className="font-bold text-gray-900">Languages</span>
                            <span className="text-gray-800">Python, JavaScript, TypeScript, SQL, HTML, CSS</span>
                        </div>
                        <div className="grid grid-cols-[140px_1fr] py-0.5">
                            <span className="font-bold text-gray-900">Frameworks</span>
                            <span className="text-gray-800">React 19, Next.js, Node.js, Express.js, FastAPI, Tailwind CSS, Three.js</span>
                        </div>
                        <div className="grid grid-cols-[140px_1fr] py-0.5">
                            <span className="font-bold text-gray-900">AI / ML</span>
                            <span className="text-gray-800">Google Gemini API, OpenAI API, XGBoost, LLM Integration, Prompt Engineering</span>
                        </div>
                        <div className="grid grid-cols-[140px_1fr] py-0.5">
                            <span className="font-bold text-gray-900">Cloud & DevOps</span>
                            <span className="text-gray-800">Firebase, Google Earth Engine, Docker, Celery, Redis, Vercel</span>
                        </div>
                        <div className="grid grid-cols-[140px_1fr] py-0.5">
                            <span className="font-bold text-gray-900">Databases</span>
                            <span className="text-gray-800">PostgreSQL, PostGIS, MongoDB, MySQL, Firebase Realtime Database</span>
                        </div>
                        <div className="grid grid-cols-[140px_1fr] py-0.5">
                            <span className="font-bold text-gray-900">Tools</span>
                            <span className="text-gray-800">Git, GitHub OAuth, JWT, REST APIs, Vite, VS Code</span>
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section>
                    <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-4 pb-1">Projects</h2>

                    <div className="mb-4">
                        <div className="flex justify-between items-baseline mb-1">
                            <div className="text-sm md:text-base">
                                <strong className="font-bold">AQUILA — Climate Intelligence Engine</strong> <span className="font-serif italic text-xs text-gray-700">/ FastAPI, Google Earth Engine, React 19, Three.js, XGBoost, PostgreSQL/PostGIS, Docker</span>
                            </div>
                            <div className="font-mono text-xs text-gray-700 shrink-0 ml-2">2025</div>
                        </div>
                        <ul className="list-disc ml-5 text-sm space-y-1 text-gray-700 leading-relaxed">
                            <li>Built production-grade geospatial flood detection platform processing Sentinel-1 SAR and Sentinel-2 optical imagery via Google Earth Engine for any city globally; implemented physics-based false-positive correction (COPERNICUS DEM slope filtering, HAND drainage masking, JRC tidal correction) with probabilistic confidence scoring</li>
                            <li>Designed decoupled full-stack architecture: async FastAPI GEE orchestration backend with adaptive Otsu SAR thresholding and React 19 + Three.js 3D globe frontend featuring 8 toggleable GeoJSON layers, real-time metrics panel, and Dockerized multi-service stack (Celery, Redis, PostGIS); integrated XGBoost 5-day flood forecaster</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between items-baseline mb-1">
                            <div className="text-sm md:text-base">
                                <strong className="font-bold">GitHub Guardian — DevSecOps Security Auditing Platform</strong> <span className="font-serif italic text-xs text-gray-700">/ FastAPI, React, Python, GitHub OAuth, OpenAI API, JWT</span>
                            </div>
                            <div className="font-mono text-xs text-gray-700 shrink-0 ml-2">2025</div>
                        </div>
                        <ul className="list-disc ml-5 text-sm space-y-1 text-gray-700 leading-relaxed">
                            <li>Built full-stack forensic security platform combining SAST with Git DAG history traversal to detect live API keys, SSL certificates, SQL injection, and XSS paths in current and deleted commits; custom non-linear scoring prevents alert fatigue</li>
                            <li>Implemented GitHub OAuth 2.0 + JWT auth, AI Architectural Reviewer (OpenAI/Gemini) for critical-path file and Jupyter Notebook analysis, and Desktop Wizard with auto-generated .gitignore and one-click push; live at <a href="https://github-guardian.vercel.app" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">github-guardian.vercel.app</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between items-baseline mb-1">
                            <div className="text-sm md:text-base">
                                <strong className="font-bold">HyperMind — Adaptive AI Learning Companion</strong> <span className="font-serif italic text-xs text-gray-700">/ React 19, TypeScript, Google Gemini 2.5 API, Tailwind CSS, Recharts, ReactFlow, Vite</span>
                            </div>
                            <div className="font-mono text-xs text-gray-700 shrink-0 ml-2">2025</div>
                        </div>
                        <ul className="list-disc ml-5 text-sm space-y-1 text-gray-700 leading-relaxed">
                            <li>Built adaptive AI education platform using Gemini 2.5 Flash/Pro across Concept Tutor, Debate Mode, and Quiz Generator; supports multimodal input - image vision, PDF parsing (pdfjs-dist), and Text-to-Speech playback</li>
                            <li>Engineered Generative UI rendering dynamic Recharts charts and ReactFlow flowcharts/mind maps from AI output; integrated Gemini Live for real-time voice/video sessions; deployed at <a href="https://hypermind-official.vercel.app" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">hypermind-official.vercel.app</a></li>
                        </ul>
                    </div>
                </section>

                {/* Experience */}
                <section>
                    <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-4 pb-1">Experience</h2>

                    <div className="mb-4">
                        <div className="flex justify-between items-baseline mb-1">
                            <div>
                                <span className="font-bold">Google Student Ambassador</span> <span className="font-serif italic text-gray-700">/ Google</span>
                            </div>
                            <div className="font-mono text-xs text-gray-700">2026 – Present</div>
                        </div>
                        <div className="text-xs text-gray-600 mb-2">India</div>
                        <ul className="list-disc ml-5 text-sm space-y-1 text-gray-700 leading-relaxed">
                            <li>Lead Google Cloud, Workspace, and AI/ML developer workshops on campus; act as liaison between Google and the university ecosystem, promoting GDSC and Google Career Certificate programs</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between items-baseline mb-1">
                            <div>
                                <span className="font-bold">Student Ambassador</span> <span className="font-serif italic text-gray-700">/ LetsUpgrade</span>
                            </div>
                            <div className="font-mono text-xs text-gray-700">September 2025 – December 2025</div>
                        </div>
                        <div className="text-xs text-gray-600 mb-2">India (Remote)</div>
                        <ul className="list-disc ml-5 text-sm space-y-1 text-gray-700 leading-relaxed">
                            <li>Organized technical workshops, webinars, and coding events for university students; drove community engagement through cross-functional event coordination and leadership initiatives</li>
                        </ul>
                    </div>
                </section>

                {/* Achievements & Leadership */}
                <section>
                    <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-4 pb-1">Achievements & Leadership</h2>
                    <ul className="list-disc ml-5 text-sm space-y-2 text-gray-700 leading-relaxed">
                        <li><strong>Hackathon Finalist (2024–2025):</strong> Achieved finalist standing in competitive national hackathon demonstrating innovation in full-stack and AI development</li>
                        <li><strong>GitHub Achievements:</strong> Earned Pull Shark (x2), Pair Extraordinaire, Galaxy Brain, Quickdraw, and YOLO badges across 64 public repositories</li>
                        <li><strong>Self-Directed Learning:</strong> Independently mastered Google Earth Engine geospatial APIs, Gemini Live real-time AI streaming, and DevSecOps tooling through project-driven development</li>
                    </ul>
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
