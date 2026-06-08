import { motion } from "framer-motion";
import profile from "../assets/profile.png";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";

import { SiDotnet, SiJavascript } from "react-icons/si";

function Avatar() {
  return (
    <div className="relative flex justify-center items-center">

      {/* Glow */}
      <div className="absolute w-[450px] h-[450px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      {/* Avatar */}
      <motion.img
        src={profile}
        alt="avatar"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="w-[320px] h-[320px] rounded-full border-4 border-cyan-400 shadow-2xl z-10"
      />

      {/* Floating Icons */}

      <motion.div className="absolute top-10 left-10 text-cyan-400 text-4xl" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
        <FaReact />
      </motion.div>

      <motion.div className="absolute bottom-10 left-14 text-orange-500 text-4xl" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}>
        <FaHtml5 />
      </motion.div>

      <motion.div className="absolute top-14 right-10 text-blue-500 text-4xl" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3.2 }}>
        <FaCss3Alt />
      </motion.div>

      <motion.div className="absolute bottom-14 right-12 text-purple-500 text-4xl" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2.8 }}>
        <SiDotnet />
      </motion.div>

      <motion.div className="absolute top-1/2 right-0 text-yellow-400 text-4xl" animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
        <SiJavascript />
      </motion.div>

    </div>
  );
}

export default Avatar;