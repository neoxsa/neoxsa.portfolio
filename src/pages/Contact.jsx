import { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import { Mail, Linkedin, Github, TriangleAlertIcon, CircleCheckIcon, OctagonXIcon } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { Toaster, toast } from 'sonner';


function Contact() {

  const form = useRef();
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const [isSent, setIsSent] = useState(false);
  const [showWarning, setShowWarning] = useState(true);

  // reCAPTCHA handler
  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    if (form.current) {
      form.current["g-recaptcha-response"].value = token;
    }
  };

  // EmailJS Handler
  const sendEmail = (e) => {
    e.preventDefault();

    // Token check
    if (!recaptchaToken) alert("Please complete the reCAPTCHA");


    // Time field before sending
    form.current.time.value = new Date().toLocaleString();

    if (recaptchaToken) {
      emailjs
        .sendForm(
          "service_wvzlrnm",
          "template_mr0uz23",
          form.current,
          "efRBSTSYnQz50SD7P"
        )
        .then(
          () => {
            setIsSent(true);
            setShowWarning(false);
            form.current.reset();
            setRecaptchaToken(null);
          })
        .catch((err) => {
          setIsSent(false);
          setShowWarning(true);
          setRecaptchaToken(null);
          console.log("Error", err);
        })

    }
  }

  // Toast notify Handler
  const notify = () => {
    isSent ? toast.success('Successfully sent!') : showWarning ? toast.warning('Please fill all the fields!') : toast.error('Failed to send!')
  }

  const fieldClass = "border border-white/6 p-2 rounded-lg text-gray-100 focus:outline-none focus:border-green-400 "

  return (
    <section className="min-h-[calc(100vh-120px)] flex items-center justify-center p-12">

      <Toaster
        position='top-center'
        theme='system'
        toastOptions={{ duration: 2000 }}
        icons={{
          success: <CircleCheckIcon className='text-green-500' size={20} />,
          error: <OctagonXIcon className='text-red-500' size={20} />,
          warning: <TriangleAlertIcon className='text-yellow-500' size={20} />,
        }}

      />

      <div className="max-w-4xl bg-white/j5 rounded-2xl grid md:grid-cols-2 gap-7 p-7 backdrop-blur-md shadow-lg outline outline-green-400 ">
        <div className="p-2">
          <h2 className="m-0 mb-2 text-2xl text-green-400">Get in touch</h2>
          <p className="text-gray-300 mb-4 leading-6">
            I'm currently open to new opportunities and freelance work. Send a message
            and I&apos;ll get back to you as soon as I can.
          </p>

          <div className="flex flex-col gap-2">
            <a
              href="mailto:sadabanwar@outlook.com"
              className="w-fit text-green-300 font-medium hover:underline flex">
              <Mail size={20} />&nbsp;&gt; sadabanwar@outlook.com
            </a>
            <a
              href="https://linkedin.com/in/neoxsa"
              target="_blank"
              rel="noreferrer"
              className="w-fit text-blue-400 font-medium  hover:underline flex">
              <Linkedin size={20} />&nbsp;&gt; LinkedIn
            </a>
            <a
              href="https://github.com/neoxsa"
              target="_blank" rel="noreferrer"
              className="w-fit text-gray-400 font-medium hover:underline flex">
              <Github size={20} />&nbsp;&gt; GitHub
            </a>
          </div>
        </div>

        <form className="p-1 flex flex-col gap-3" ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">Name</label>
            <input
              type='text'
              name="name"
              className={fieldClass}
              placeholder="Your name"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">Email</label>
            <input
              type='email'
              name="email"
              className={fieldClass}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">Message</label>
            <textarea
              name="message"
              className={fieldClass}
              placeholder="Your message..."
              rows={6}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <input
              type='hidden'
              name='time'
              value=""
            />
          </div>

          <ReCAPTCHA
            sitekey="6LfTCx4sAAAAAB22PdY7a1pvaCQNYFgH2CG4VzYT"
            onChange={handleRecaptchaChange}
          />

          <div className="flex items-center gap-3 mt-2">
            <button
              type="submit"
              onClick={notify}
              className="inline-flex gap-2 text-green-400 border-2 border-green-400 px-8 py-3 font-semibold uppercase tracking-widest bg-green-500/10 hover:bg-green-600 active:bg-green-600 hover:text-black active:text-black transition-all duration-300 relative z-20 rounded-lg"
            >Send Message</button>
          </div>

        </form>
      </div>
    </section>
  )
}

export default Contact
