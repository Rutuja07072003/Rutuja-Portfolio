import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

import Avatar from "./Avatar";

function Hero3D() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-cyan-400 text-xl mb-4"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="
                text-6xl
                md:text-8xl
                font-black
                leading-none
              "
            >
              RUTUJA
            </motion.h1>

            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
              className="
                text-6xl
                md:text-8xl
                font-black
                text-indigo-400
                leading-none
              "
            >
              BORCHATE
            </motion.h1>

            <div className="mt-6">

              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "React Developer",
                  2000,
                  "ASP.NET Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                repeat={Infinity}
                className="
                  text-3xl
                  md:text-4xl
                  text-cyan-400
                  font-semibold
                "
              />

            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="
                text-gray-400
                mt-8
                text-lg
                leading-8
                max-w-xl
              "
            >
              Passionate Full Stack Developer specializing in
              React, ASP.NET Core MVC, C#, SQL Server and
              modern web technologies. I build responsive,
              scalable and user-friendly digital experiences.
            </motion.p>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="../assets/resume.pdf"
                download
                className="
                  bg-indigo-600
                  hover:bg-indigo-700
                  px-8
                  py-4
                  rounded-xl
                  flex
                  items-center
                  gap-2
                  transition
                "
              >
                <FaDownload />
                Resume
              </a>

              <a
                href="#projects"
                className="
                  border
                  border-cyan-400
                  hover:bg-cyan-400
                  hover:text-black
                  px-8
                  py-4
                  rounded-xl
                  flex
                  items-center
                  gap-2
                  transition
                "
              >
                <FaArrowRight />
                Projects
              </a>

            </div>

            {/* SOCIALS */}

            <div className="flex gap-4 mt-8">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="
                  glass
                  p-4
                  rounded-xl
                  text-2xl
                  hover:text-cyan-400
                  transition
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="
                  glass
                  p-4
                  rounded-xl
                  text-2xl
                  hover:text-cyan-400
                  transition
                "
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex justify-center">
            <Avatar />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero3D;