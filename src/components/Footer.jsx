import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10">

      <div className="text-center">

        <h2 className="text-3xl font-bold text-cyan-400">
          Rutuja Borchate
        </h2>

        <p className="text-gray-400 mt-3">
          Full Stack Developer
        </p>

        <div className="flex justify-center gap-6 mt-6 text-xl">

          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

          <a href="#">
            <FaEnvelope />
          </a>

        </div>

        <p className="text-gray-500 mt-6">
          © 2026 All Rights Reserved
        </p>

      </div>

    </footer>
  );
}

export default Footer;