import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-slate-950/70
        backdrop-blur-xl
        border-b
        border-slate-800
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <a
          href="#home"
          className="text-3xl font-bold text-cyan-400"
        >
          RutujaDevX
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">

          <a href="#home" className="hover:text-cyan-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#services" className="hover:text-cyan-400 transition">
            Services
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            md:hidden
            bg-slate-950
            border-t
            border-slate-800
            flex
            flex-col
            text-center
            py-4
            gap-4
          "
        >
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;