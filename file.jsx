import React, { useState } from 'react';
import { Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Replace these with your actual information
  const personalInfo = {
    name: "Your Name",
    title: "Computer Science Student",
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    about: "I'm a passionate Computer Science student with interests in web development and software engineering. Currently pursuing my degree, I'm actively seeking opportunities to apply my skills in real-world projects.",
  };

  const skills = [
    { category: "Programming", items: ["Python", "JavaScript", "Java", "C++"] },
    { category: "Web Development", items: ["React", "HTML", "CSS", "Node.js"] },
    { category: "Tools", items: ["Git", "VS Code", "Docker", "AWS"] },
  ];

  const projects = [
    {
      title: "Project 1",
      description: "A web application that helps students track their study habits and improve productivity.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://project1.com",
    },
    {
      title: "Project 2",
      description: "Mobile app for campus event management and attendance tracking.",
      technologies: ["React Native", "Firebase"],
      link: "https://project2.com",
    },
  ];

  const education = {
    university: "Your University Name",
    degree: "Bachelor of Science in Computer Science",
    gradYear: "Expected 2025",
    gpa: "3.8/4.0",
    relevantCourses: ["Data Structures", "Algorithms", "Web Development", "Database Systems"],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">{personalInfo.name}</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
              <a href="#education" className="text-gray-700 hover:text-blue-600">Education</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Skills</a>
              <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Projects</a>
              <a href="#education" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Education</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{personalInfo.name}</h1>
            <p className="text-xl mb-6">{personalInfo.title}</p>
            <div className="flex justify-center space-x-4">
              <a href={personalInfo.github} className="hover:text-blue-200">GitHub</a>
              <a href={personalInfo.linkedin} className="hover:text-blue-200">LinkedIn</a>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-200">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">{personalInfo.about}</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">{education.university}</h3>
            <p className="text-gray-700 mb-2">{education.degree}</p>
            <p className="text-gray-600 mb-2">Expected Graduation: {education.gradYear}</p>
            <p className="text-gray-600 mb-4">GPA: {education.gpa}</p>
            <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
            <div className="flex flex-wrap gap-2">
              {education.relevantCourses.map((course) => (
                <span
                  key={course}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href={personalInfo.github} className="text-gray-600 hover:text-blue-600">GitHub</a>
            <a href={personalInfo.linkedin} className="text-gray-600 hover:text-blue-600">LinkedIn</a>
            <a href={`mailto:${personalInfo.email}`} className="text-gray-600 hover:text-blue-600">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-600">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </footer>


    </div>
  );
};

export default Portfolio;