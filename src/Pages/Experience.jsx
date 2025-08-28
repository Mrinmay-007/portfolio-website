

import React from 'react';
import ExperienceCard from '../components/Experience/experienceCard';


// --- Main App Component ---
export default function App() {
  const experienceData = [
    {
      
      title: "Internship as Salesforce Developer",
      company: "SmartBridge",
      duration: "May - July 2025",
      description: "Worked on customizing Salesforce applications, developing Apex classes, and creating Visualforce pages to enhance user experience.",
      certLink: "https://drive.google.com/file/d/1HVGbjczE0VJM6GMCrM9C48YruJj0ZQ33/view?usp=drive_link"
    },
    {
      
      title: "Internship in Data Science",
      company: "Pinnacle Labs",
      duration: "May - June 2025",
      description: "Assisted in data cleaning, exploratory data analysis, and building predictive models using Python and machine learning libraries.",
      certLink: "https://drive.google.com/file/d/1cXqVKDtkvve4QC2FjKx5nbzZfk7KAlfk/view?usp=drive_link"
    },
  ];

  return (
    <div
      className="bg-[#0A192F] min-h-screen w-full flex flex-col items-center pt-28 px-4 sm:px-6 lg:px-8 font-sans"
      style={{
        backgroundImage:
          'linear-gradient(rgba(10, 25, 47, 0.95), rgba(10, 25, 47, 0.95)), radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '100%, 20px 20px'
      }}
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-gray-200">
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
            My Experience
          </span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Transforming ideas into digital reality, one project at a time.
        </p>
        <div className="mt-6 h-[2px] w-20 mx-auto bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 rounded-full opacity-70"></div>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-wrap justify-center items-stretch gap-8 lg:gap-12">
        {experienceData.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
}
