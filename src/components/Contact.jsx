import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-5xl font-bold text-center mb-12"
      >
        Contact Me
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left Side */}
        <div className="glass p-8 rounded-3xl">
          <h3 className="text-3xl font-bold mb-6">
            Let's Work Together
          </h3>

          <p className="text-gray-400 mb-8">
            Looking for a Full Stack Developer for your next project?
            Feel free to connect.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-xl" />
              <a
                href="mailto:rutujaborchate07@gmail.com"
                className="hover:text-cyan-400 transition"
              >
                rutujaborchate07@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <FaPhone className="text-cyan-400 text-xl" />
              <a
                href="tel:+918591489376"
                className="hover:text-cyan-400 transition"
              >
                +91 8591489376
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-cyan-400 text-xl" />
              <a
                href="https://www.linkedin.com/in/rutujaborchate/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                LinkedIn Profile
              </a>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-4">
              <FaGithub className="text-cyan-400 text-xl" />
              <a
                href="https://github.com/Rutuja07072003"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <form className="glass p-8 rounded-3xl">
          <div className="mb-5">
            <input
              type="text"
              placeholder="Your Name"
              className="
                w-full
                bg-slate-800
                p-4
                rounded-xl
                outline-none
              "
            />
          </div>

          <div className="mb-5">
            <input
              type="email"
              placeholder="Your Email"
              className="
                w-full
                bg-slate-800
                p-4
                rounded-xl
                outline-none
              "
            />
          </div>

          <div className="mb-5">
            <textarea
              rows="6"
              placeholder="Your Message"
              className="
                w-full
                bg-slate-800
                p-4
                rounded-xl
                outline-none
              "
            ></textarea>
          </div>

          <button
            type="submit"
            className="
              bg-indigo-600
              px-8
              py-4
              rounded-xl
              hover:scale-105
              transition
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;