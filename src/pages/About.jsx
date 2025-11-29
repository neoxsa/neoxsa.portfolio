import React from 'react'
import { GithubIcon, Linkedin, Download } from 'lucide-react'

function About() {
    return (
        <section className="min-h-[calc(100vh-120px)] bg-gradient-to-b from-black via-black to-green-900/5 px-6 lg:px-20 py-16 lg:py-28">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-16 text-center lg:text-left">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">About Me</h1>
                    <div className="h-1 w-20 bg-green-400 mb-8"></div>
                    <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                        I'm a passionate full-stack developer with a love for creating beautiful, responsive web applications. 
                        With expertise in modern JavaScript frameworks and a cyberpunk aesthetic, I build digital experiences that are 
                        both functional and visually striking.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Bio Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-green-400 mb-6">Who I Am</h2>
                        <div className="space-y-4 text-gray-300">
                            <p>
                                I'm a self-taught developer from [Your Location], currently working on innovative web projects 
                                that combine cutting-edge technology with stunning design. I specialize in building responsive, 
                                scalable applications that solve real-world problems.
                            </p>
                            <p>
                                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                                or enjoying the digital landscape of the metaverse. I believe in continuous learning and pushing the 
                                boundaries of what's possible on the web.
                            </p>
                            <p>
                                I'm always excited to collaborate on interesting projects and meet fellow developers. Feel free to 
                                reach out — let's build something amazing together!
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex gap-4 mt-8">
                            <a href="#contact" className="px-6 py-3 bg-green-400 text-black font-semibold rounded hover:bg-green-300 transition">
                                Get in Touch
                            </a>
                            <button className="px-6 py-3 border border-green-400 text-green-400 font-semibold rounded hover:bg-green-400/10 transition flex items-center gap-2">
                                <Download size={18} /> Resume
                            </button>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-green-400 mb-6">Skills & Tech Stack</h2>
                        
                        {/* Frontend */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-white mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-3">
                                {['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML5', 'CSS3'].map(skill => (
                                    <span key={skill} className="px-4 py-2 bg-green-400/10 border border-green-400 text-green-300 rounded-full text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Tools */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Tools & Others</h3>
                            <div className="flex flex-wrap gap-3">
                                {['Git', 'GitHub', 'VS Code', 'Canva', 'Inkscape'].map(skill => (
                                    <span key={skill} className="px-4 py-2 bg-green-400/10 border border-green-400 text-green-300 rounded-full text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience & Education */}
                <div className="grid lg:grid-cols-2 gap-16 mt-20">
                    {/* Experience */}
                    <div>
                        <h2 className="text-2xl font-bold text-green-400 mb-8">Experience</h2>
                        <div className="space-y-8">
                            {[
                                {
                                    role: 'Full-Stack Developer',
                                    company: 'Tech Startup XYZ',
                                    duration: '2023 - Present',
                                    description: 'Building scalable web applications with React and Node.js, managing databases, and collaborating with designers.'
                                },
                                {
                                    role: 'Frontend Developer',
                                    company: 'Freelance',
                                    duration: '2022 - 2023',
                                    description: 'Developed responsive websites for various clients using React and Tailwind CSS, focusing on performance and UX.'
                                }
                            ].map((job, i) => (
                                <div key={i} className="border-l-2 border-green-400 pl-6">
                                    <h3 className="text-lg font-bold text-white">{job.role}</h3>
                                    <p className="text-green-400 font-medium">{job.company}</p>
                                    <p className="text-sm text-gray-400 mb-2">{job.duration}</p>
                                    <p className="text-gray-300">{job.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <h2 className="text-2xl font-bold text-green-400 mb-8">Education</h2>
                        <div className="space-y-8">
                            {[
                                {
                                    degree: 'Bachelor of Science in Computer Science',
                                    school: 'University Name',
                                    year: '2019 - 2023',
                                    details: 'Graduated with honors, focused on web development and software engineering.'
                                },
                                {
                                    degree: 'Advanced Web Development Bootcamp',
                                    school: 'Online Academy',
                                    year: '2022',
                                    details: 'Intensive 12-week program covering MERN stack, databases, and deployment.'
                                }
                            ].map((edu, i) => (
                                <div key={i} className="border-l-2 border-green-400 pl-6">
                                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                                    <p className="text-green-400 font-medium">{edu.school}</p>
                                    <p className="text-sm text-gray-400 mb-2">{edu.year}</p>
                                    <p className="text-gray-300">{edu.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="mt-20 text-center">
                    <h2 className="text-2xl font-bold text-green-400 mb-8">Connect With Me</h2>
                    <div className="flex justify-center gap-6">
                        <a href="https://github.com/neoxsa" target="_blank" rel="noreferrer" className="p-3 bg-green-400/10 border border-green-400 rounded-lg text-green-400 hover:bg-green-400 hover:text-black transition">
                            <GithubIcon size={24} />
                        </a>
                        <a href="https://linkedin.com/in/neoxsa" target="_blank" rel="noreferrer" className="p-3 bg-green-400/10 border border-green-400 rounded-lg text-green-400 hover:bg-green-400 hover:text-black transition">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
