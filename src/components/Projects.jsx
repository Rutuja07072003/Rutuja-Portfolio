import ProjectCard from "./ProjectCard";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

function Projects() {
  const projects = [
    {
      image: project1,
      title: "Cloud Kitchen Web Application",
      tech: "React • JavaScript • Bootstrap • HTML5 • CSS3",
      description:
        "A responsive food ordering platform featuring user authentication, cart management, food category browsing, structured navigation, and seamless redirection to Swiggy and Zomato for online ordering.",
      github: "https://github.com/Rutuja07072003/cloud-kitchen",
      demo: "https://rutuja-cloud-kitchen.vercel.app/",
    },

    {
      image: project2,
      title: "Healthy Lifestyle Web Application",
      tech: "React • JavaScript • Bootstrap • HTML5 • CSS3",
      description:
        "A health and fitness platform with dedicated sections for Weight Loss, Weight Gain, Workout, Yoga, and wellness guidance. Includes responsive design and a search feature for quick navigation across the website.",
      github: "https://github.com/Rutuja07072003/healthcare",
      demo: "https://rutuja-healthcare.vercel.app/",
    },

    {
      image: project3,
      title: "IdentityVault - User Management System",
      tech: "ASP.NET Core MVC • .NET Core • C# • Bootstrap",
      description:
        "A secure user management system with registration, login, profile creation, image upload, and personalized dashboard functionality. Includes user administration features such as view, edit, and delete operations.",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2 className="text-5xl font-bold text-center mb-4">
        Featured Projects
      </h2>

      <p className="text-center text-gray-400 mb-14 max-w-4xl mx-auto text-lg leading-8">
        A showcase of web applications built using React, ASP.NET Core MVC,
        .NET Core, C#, JavaScript, Bootstrap, HTML5, and CSS3, demonstrating
        expertise in responsive UI design, authentication systems, user
        management, and modern web development practices.
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            image={project.image}
            title={project.title}
            tech={project.tech}
            description={project.description}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;