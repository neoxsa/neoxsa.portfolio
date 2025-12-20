import { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, Github, TriangleAlertIcon, CircleCheckIcon, OctagonXIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';


function Contact() {

  const form = useRef();
  const [captchaToken, setCaptchaToken] = useState(null);

  useEffect(() => {
    //Load Turnstile script
    // expose callbacks that the Turnstile widget will call
    window.__turnstileCallback = (token) => {
      setCaptchaToken(token);
    };

    window.__turnstileExpire = () => {
      setCaptchaToken(null);
    };

    // Only add script if it's not already present
    if (!document.querySelector('script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup global callbacks on unmount
      try {
        delete window.__turnstileCallback;
      } catch (e) {
        console.log("error::", e)
      }
      try {
        delete window.__turnstileExpire;
      } catch (e) {
        console.log("error::", e)
      }
    };
  }, [])

  useEffect(() => {
    if (captchaToken) console.debug('Turnstile token:', captchaToken);
  }, [captchaToken]);

  // EmailJS Handler
  const sendEmail = async (e) => {
    e.preventDefault();

    // Check if token exists FIRST
    if (!captchaToken) {
      toast.warning("Please verify you are human");
      return;
    }

    try {
      // Then verify with API
      const verifyRes = await fetch("/api/verify-turnstile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: captchaToken })
      });

      const verifyData = await verifyRes.json();

      if (!verifyData.success) {
        toast.error("Verification failed. Please try again.");
        return;
      }

      // Set time field before sending
      form.current.time.value = new Date().toLocaleString();

      // Send email
      await emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PK
        )
        .then(() => {
          toast.success("Successfully sent!");
          form.current.reset();
          setCaptchaToken(null);
        })
        .catch((err) => {
          toast.error("Failed to send. Please try again later.");
          console.error("EmailJS Error:", err);
          setCaptchaToken(null);
        });

    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  }


  const fieldClass = "border border-white/6 p-2 rounded-lg text-gray-100 focus:outline-none focus:border-green-400 "

  return (
    <section className="min-h-[calc(100vh-120px)] flex items-center justify-center p-12 ">

      <Toaster
        position='top-center'
        theme='system'
        toastOptions={{ duration: 3000 }}
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

          {/* Turnstile widget */}
          <div
            className='cf-turnstile'
            data-sitekey={String(import.meta.env.VITE_TURNSTILE_SITE_KEY)}
            data-callback="__turnstileCallback"
            data-expired-callback="__turnstileExpire"
          ></div>
          {/* <Turnstile
            sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
            onVerify={(token) => setCaptchaToken(token)}
            onExpire={() => setCaptchaToken(null)}
          /> */}


          <div className="flex items-center gap-3 mt-2">
            <button
              type="submit"
              className="inline-flex gap-2 text-green-400 border-2 border-green-400 px-8 py-3 font-semibold uppercase tracking-widest bg-green-500/10 hover:bg-green-600 active:bg-green-600 hover:text-black active:text-black transition-all duration-300 relative z-20 rounded-lg"
            >Send Message</button>
          </div>

        </form>
      </div>
    </section>
  )
}

export default Contact