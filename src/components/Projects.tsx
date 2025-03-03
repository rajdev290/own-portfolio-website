import React, { useState } from 'react';
import { ExternalLink, Github, Lock, Database, Code, Cpu } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Secure Document Sharing Platform",
      description: "A web application with end-to-end encryption for secure document sharing, featuring zero-knowledge architecture and time-limited access.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      category: "cryptography",
      technologies: ["React", "Python", "AES-256", "JWT"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/rajdev290"
    },
    {
      id: 2,
      title: "ML-Powered Code Vulnerability Scanner",
      description: "A tool that uses machine learning to analyze code repositories for security vulnerabilities and code quality issues.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "ml",
      technologies: ["Python", "TensorFlow", "C++", "GitHub API"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/rajdev290"
    },
    {
      id: 3,
      title: "Blockchain-Based Credential Verification",
      description: "A platform for educational institutions to issue tamper-proof digital credentials that can be instantly verified by employers.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
      category: "cryptography",
      technologies: ["Ethereum", "Solidity", "Python", "React"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/rajdev290"
    },
    {
      id: 4,
      title: "Intelligent Network Traffic Analyzer",
      description: "A system that monitors network traffic, detects anomalies using ML, and provides real-time alerts for potential security threats.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      category: "ml",
      technologies: ["C++", "Python", "TensorFlow", "D3.js"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/rajdev290"
    },
    {
      id: 5,
      title: "Privacy-Preserving Federated Learning Platform",
      description: "A platform enabling organizations to collaboratively train ML models without sharing sensitive data, using homomorphic encryption.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
      category: "ml",
      technologies: ["Python", "TensorFlow", "Homomorphic Encryption", "React"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/rajdev290"
    },
    {
      id: 6,
      title: "Advanced Data Structures Visualization",
      description: "An interactive web application for visualizing complex data structures and algorithms, helping students understand DSA concepts.",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "dsa",
      technologies: ["C++", "JavaScript", "D3.js", "React"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/rajdev290"
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my expertise in web development, 
            machine learning, cryptography, and data structures & algorithms.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap justify-center bg-gray-100 rounded-lg p-1">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 m-1 rounded-md text-sm font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('ml')}
              className={`px-4 py-2 m-1 rounded-md text-sm font-medium transition-colors ${
                filter === 'ml' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Machine Learning
            </button>
            <button 
              onClick={() => setFilter('cryptography')}
              className={`px-4 py-2 m-1 rounded-md text-sm font-medium transition-colors ${
                filter === 'cryptography' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Cryptography
            </button>
            <button 
              onClick={() => setFilter('dsa')}
              className={`px-4 py-2 m-1 rounded-md text-sm font-medium transition-colors ${
                filter === 'dsa' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              DSA
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
                  {project.category === 'ml' && <Database size={14} className="inline mr-1" />}
                  {project.category === 'cryptography' && <Lock size={14} className="inline mr-1" />}
                  {project.category === 'dsa' && <Cpu size={14} className="inline mr-1" />}
                  {project.category === 'ml' && 'Machine Learning'}
                  {project.category === 'cryptography' && 'Cryptography'}
                  {project.category === 'dsa' && 'DSA'}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Github size={16} className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;