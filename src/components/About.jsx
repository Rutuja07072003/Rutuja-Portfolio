import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="section">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-5xl font-bold text-center mb-12"
      >
        About Me
      </motion.h2>

      <div className="glass p-10 rounded-3xl max-w-5xl mx-auto">

        <p className="text-lg text-gray-300 leading-8 mb-8">
          I am a Full Stack Developer passionate about building
          responsive websites and scalable web applications using
          React, ASP.NET Core MVC, C#, SQL Server and Bootstrap.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div>
            <h3 className="text-cyan-400 font-semibold mb-2">
              Education
            </h3>

            <p>
              B.E. Computer Engineering
            </p>
          </div>

          <div>
            <h3 className="text-cyan-400 font-semibold mb-2">
              Location
            </h3>

            <p>
              Mumbai, India
            </p>
          </div>

          <div>
            <h3 className="text-cyan-400 font-semibold mb-2">
              Technologies
            </h3>

            <p>
              React, ASP.NET Core, C#, SQL Server
            </p>
          </div>

          <div>
            <h3 className="text-cyan-400 font-semibold mb-2">
              Goal
            </h3>

            <p>
              Creating modern, scalable and user-friendly web applications.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;