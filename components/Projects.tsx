interface Project {
    title: string;
    description: string;
    link: string;
  }
  
  const projects: Project[] = [
    { title: "Project 1", description: "A cool web app", link: "#" },
    { title: "Project 2", description: "An AI-powered tool", link: "#" },
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="py-10 bg-gray-800">
        <h2 className="text-3xl text-center mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 px-6">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <a href={project.link} className="mt-4 inline-block text-blue-400 hover:underline">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  