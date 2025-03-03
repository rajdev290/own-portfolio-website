import React from 'react';
import { Award, Briefcase, GraduationCap, Code, Database, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-2/5">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="About Me" 
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-indigo-600 rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="w-full md:w-3/5 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              I'm <span className="text-indigo-600">Rajnish Chaube</span>, a Software Developer
            </h3>
            
            <p className="text-gray-600">
              I'm a passionate software developer with expertise in web development, machine learning, and cryptography. My technical foundation in C++ and data structures & algorithms allows me to build efficient, secure, and scalable applications.
            </p>
            
            <p className="text-gray-600">
              I enjoy tackling complex problems and creating innovative solutions that leverage cutting-edge technologies. My approach combines strong theoretical knowledge with practical implementation skills, enabling me to develop robust applications across various domains.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-3">
                  <Code size={24} />
                </div>
                <h4 className="font-semibold text-gray-900">Programming</h4>
                <p className="text-gray-600 text-center">Python, C++, JavaScript</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-3">
                  <Database size={24} />
                </div>
                <h4 className="font-semibold text-gray-900">Machine Learning</h4>
                <p className="text-gray-600 text-center">TensorFlow, PyTorch, scikit-learn</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-3">
                  <Shield size={24} />
                </div>
                <h4 className="font-semibold text-gray-900">Cryptography</h4>
                <p className="text-gray-600 text-center">Security Protocols, Encryption</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;