import React from 'react';
import { Code, Database, Layout, Shield, Cpu, Braces } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: <Layout className="w-6 h-6" />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express", "RESTful APIs"]
    },
    {
      title: "Machine Learning",
      icon: <Database className="w-6 h-6" />,
      skills: ["TensorFlow", "PyTorch", "scikit-learn", "Neural Networks", "Computer Vision", "NLP"]
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "C++", "JavaScript", "TypeScript", "SQL", "Java"]
    },
    {
      title: "Data Structures & Algorithms",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Arrays", "Linked Lists", "Trees", "Graphs", "Dynamic Programming", "Sorting Algorithms"]
    },
    {
      title: "Cryptography & Security",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Encryption Algorithms", "Digital Signatures", "Blockchain", "Security Protocols", "Authentication"]
    },
    {
      title: "Tools & Technologies",
      icon: <Braces className="w-6 h-6" />,
      skills: ["Git", "Docker", "AWS", "Linux", "MongoDB", "PostgreSQL", "Firebase"]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've developed expertise in various technologies and domains, with a focus on web development,
            machine learning, cryptography, and data structures & algorithms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-xl text-center">
              <div className="flex justify-center mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              <ul className="mt-4 text-gray-700">
                {category.skills.map((skill, i) => (
                  <li key={i} className="mt-1">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
