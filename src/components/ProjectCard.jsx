import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({
  image,
  title,
  tech,
  description,
  github,
  demo,
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="
        glass
        rounded-3xl
        overflow-hidden
        h-full
      "
    >
      <div className="overflow-hidden bg-slate-900 h-56 flex items-center justify-center">
  <img
    src={image}
    alt={title}
    className="
      w-auto
      h-auto
      max-w-full
      max-h-full
      object-contain
      transition-all
      duration-500
      hover:scale-105
    "
  />
</div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">
          {title}
        </h3>

        <p className="text-cyan-400 text-sm mb-3">
          {tech}
        </p>

        <p className="text-gray-400 leading-7 text-sm">
          {description}
        </p>

        <div className="flex gap-4 mt-6">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="
              bg-slate-800
              hover:bg-slate-700
              px-4
              py-2
              rounded-xl
              flex
              items-center
              gap-2
            "
          >
            <FaGithub />
            Code
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="
              bg-indigo-600
              hover:bg-indigo-700
              px-4
              py-2
              rounded-xl
              flex
              items-center
              gap-2
            "
          >
            <FaExternalLinkAlt />
            Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;