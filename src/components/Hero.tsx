import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-indigo-100 rounded-full filter blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-50 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm <span className="text-indigo-600">Rajnish Chaube</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                Software Developer
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
              I specialize in web development, machine learning, and cryptography with a strong foundation in C++ and data structures & algorithms. Building secure, efficient, and innovative solutions is my passion.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                Contact Me
              </a>
              <a 
                href="#" 
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                Download CV <Download size={18} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Profile image with border */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Rajnish Chaube" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-100 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <a 
            href="#about" 
            className="flex flex-col items-center text-gray-500 hover:text-indigo-600 transition-colors"
          >
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;