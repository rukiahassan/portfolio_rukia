import React, { useState } from 'react';
import { Home, Code, User, Send, GitHub, Linkedin } from 'lucide-react';

const RukiaHassanPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with React frontend and Node.js backend",
      technologies: ["React", "Node.js", "MongoDB", "python"],
      githubLink: "#"
    },
    {
      title: "Machine Learning Sentiment Analyzer",
      description: "AI-powered tool to analyze sentiment in social media posts",
      technologies: ["Python", "TensorFlow", "scikit-learn"],
      githubLink: "#"
    },
    {
      title: "Real-Time Chat Application",
      description: "WebSocket-based messaging platform with end-to-end encryption",
      technologies: ["React", "Socket.io", "TypeScript"],
      githubLink: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="flex justify-around py-3">
          {[
            { icon: <Home />, section: 'home' },
            { icon: <User />, section: 'about' },
            { icon: <Code />, section: 'projects' },
            { icon: <Send />, section: 'contact' }
          ].map(({ icon, section }) => (
            <button 
              key={section}
              onClick={() => setActiveSection(section)}
              className={`p-2 rounded-full ${activeSection === section ? 'bg-blue-500 text-white' : 'text-gray-500'}`}
            >
              {icon}
            </button>
          ))}
        </div>
      </nav>

      {/* Home Section */}
      {activeSection === 'home' && (
        <section className="min-h-screen flex items-center justify-center text-center">
          <div>
            <img 
              src="/api/placeholder/200/200" 
              alt="Rukia Hassan" 
              className="rounded-full mx-auto mb-4 w-48 h-48 object-cover border-4 border-blue-500"
            />
            <h1 className="text-4xl font-bold mb-2">Rukia Hassan</h1>
            <p className="text-xl text-gray-600">Software Developer | Tech Innovator</p>
            <div className="flex justify-center mt-4 space-x-4">
              <a href="#" target="_blank" className="text-gray-700 hover:text-blue-500">
                <GitHub size={24} />
              </a>
              <a href="#" target="_blank" className="text-gray-700 hover:text-blue-500">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-4">
              Hi, I'm Rukia Hassan, a passionate software developer with a keen interest in creating innovative 
              technological solutions. My journey in tech is driven by a desire to solve real-world problems 
              through code and continuous learning.
            </p>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Python', 'Node.js', 'TypeScript', 'Machine Learning', 'Docker', 'AWS'].map(skill => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <GitHub size={16} className="mr-2" /> View on GitHub
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
          <form className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
                placeholder="Your Name" 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
                placeholder="rukiahassan1920@gmail.com" 
              /> / 
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea 
                id="message" 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
                rows="4" 
                placeholder="Your message..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>
      )}
    </div>
  );
};

export default RukiaHassanPortfolio;