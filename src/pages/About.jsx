import { aboutPara, intro, skills, socialUrl } from '#constants/constants'
import { GithubIcon, Linkedin, Download } from 'lucide-react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <section className="min-h-[calc(100vh-120px)] bg-gradient-to-b from-transparent via-black to-green-900/5 px-6 lg:px-20 py-16 lg:py-28">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-16 text-center md:text-left">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">About Me</h1>
                    <div className="h-1 w-20 inline-flex bg-green-400 mb-8"></div>
                    <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                       {intro.aboutIntro}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Bio Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-green-400 mb-6">Who I Am</h2>
                        <div className="space-y-4 text-gray-300">
                            <p>k
                               {aboutPara.p1}
                            </p>
                            <p>
                                {aboutPara.p2}
                            </p>
                            <p>
                                {aboutPara.p3}
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex gap-4 mt-8">
                            <Link
                                to='/contact'
                                className="px-6 py-3 bg-green-400 text-black font-semibold rounded hover:bg-green-300 transition">
                                Get in Touch
                            </Link>
                            {/* <button className="px-6 py-3 border border-green-400 text-green-400 font-semibold rounded hover:bg-green-400/10 transition flex items-center gap-2">
                                <Download size={18} /> Resume
                            </button> */}
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-green-400 mb-6">Skills & Tech Stack</h2>

                        {/* Frontend */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-white mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.frontend.map(skill => (
                                    <span key={skill} className="px-4 py-2 bg-green-400/10 border-dashed border border-green-400 text-green-300 rounded-full text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Tools */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Tools & Others</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.tools.map(skill => (
                                    <span key={skill} className="px-4 py-2 bg-green-400/10 border-dashed border border-green-400 text-green-300 rounded-full text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="mt-20 text-center">
                    <h2 className="text-2xl font-bold text-green-400 mb-8">Connect With Me</h2>
                    <div className="flex justify-center gap-6">
                        <a href={socialUrl.github} target="_blank" rel="noreferrer" className="p-3 bg-green-400/10 border border-green-400 rounded-lg text-green-400 hover:bg-green-400 hover:text-black transition">
                            <GithubIcon size={24} />
                        </a>
                        <a href={socialUrl.linkedIn} target="_blank" rel="noreferrer" className="p-3 bg-green-400/10 border border-green-400 rounded-lg text-green-400 hover:bg-green-400 hover:text-black transition">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
