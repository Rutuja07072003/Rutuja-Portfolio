import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Bootstrap", level: 90 },
    { name: "React", level: 85 },
    { name: "C#", level: 85 },
    { name: "ASP.NET Core", level: 80 },
    { name: "SQL Server", level: 80 },
    { name: "Git & GitHub", level: 85 },
  ];

  return (
    <section id="skills" className="section">

      <h2 className="text-5xl font-bold text-center mb-12">
        Skills
      </h2>

      <div className="max-w-4xl mx-auto">

        {skills.map((skill) => (
          <div key={skill.name} className="mb-8">

            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="bg-slate-800 rounded-full h-4">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${skill.level}%`,
                }}
                transition={{ duration: 1 }}
                className="
                  h-4
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-400
                  to-indigo-500
                "
              />

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;