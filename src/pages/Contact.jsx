import { Link } from 'react-router-dom'
import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill out all fields.')
      return
    }
    setStatus('Sending...')
    // Simulate sending
    setTimeout(() => {
      setStatus('Message sent — thanks!')
      setForm({ name: '', email: '', message: '' })
    }, 900)
  }

  const fieldClass = "border border-white/6 p-2 rounded-lg text-gray-100 focus:outline-none focus:border-green-400 "

  console.log(form);

  return (
    <section className="min-h-[calc(100vh-120px)] flex items-center justify-center p-12">
      <div className="w-full max-w-4xl bg-white/j5 rounded-2xl grid md:grid-cols-2 gap-7 p-7 backdrop-blur-md shadow-lg outline outline-green-400 ">
        <div className="p-2">
          <h2 className="m-0 mb-2 text-2xl text-green-400">Get in touch</h2>
          <p className="text-gray-300 mb-4 leading-6">
            I'm currently open to new opportunities and freelance work. Send a message
            and I&apos;ll get back to you as soon as I can.
          </p>

          <div className="flex flex-col gap-2">
            <a href="mailto:sadabanwar@outlook.com" className="w-fit text-green-300 font-medium hover:underline ">sadabanwar@outlook.com</a>
            <a href="https://linkedin.com/in/neoxsa" target="_blank" rel="noreferrer" className="w-fit text-blue-400 font-medium  hover:underline">LinkedIn</a>
            <a href="https://github.com/neoxsa" target="_blank" rel="noreferrer" className="w-fit text-gray-400 font-medium hover:underline">GitHub</a>
          </div>
        </div>

        <form className="p-1 flex flex-col gap-3" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-2">
            <span className="text-sm text-gray-300">Name</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className={fieldClass}
              placeholder="Your name"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm text-gray-300">Email</span>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className={fieldClass}
              placeholder="you@example.com"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm text-gray-300">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className={fieldClass} 
              placeholder="Tell me about your project..."
              rows={6}
            />
          </label>

          <div className="flex items-center gap-3 mt-2">
            <button 
            type="submit" 
            className="inline-flex gap-2 text-green-400 border-2 border-green-400 px-8 py-3 font-semibold uppercase tracking-widest bg-green-500/10 hover:bg-green-600 active:bg-green-600 hover:text-black active:text-black transition-all duration-300 relative z-20 rounded-lg"
            >Send Message</button>
            <Link to="/" className="text-gray-300 cursor-pointer">Back</Link>
          </div>

          {status && <p className="mt-2 text-red-300 font-semibold">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
