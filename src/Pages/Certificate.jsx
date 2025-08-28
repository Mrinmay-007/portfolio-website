
import React from "react";
import certificate1 from "../assets/certificate/certificate1.png";
import certificate2 from "../assets/certificate/certificate2.png";
import certificate3 from "../assets/certificate/certificate3.png";
import certificate4 from "../assets/certificate/certificate4.jpg";

import CertificateGrid from "../components/Certificate/certificateGrid.jsx";

export default function Certificate() {
  const experienceData = [
    {
      image: certificate1,
      title: "Introduction to Data Science",
      company: "IBM",
      duration: "Jan - Mar 2023",
      description:
        "Introduction of Data Science concepts , techniques and use cases on various domains.",

      certLink: "https://drive.google.com/file/d/1x7mIZVCK4f0kZPFlCtNRl_bqSlbPYBHl/view?usp=drive_link",
    },
    {
      image: certificate2,
      title: "Frontend Development",
      company: "IBM",
      duration: "Feb - Apr 2024",
      description:
        "Learned the fundamentals of frontend development, including HTML, CSS, and JavaScript.",
      certLink: "https://drive.google.com/file/d/1pnP6ZwXpgCfqoDWR9UxtGmYl2UsqyesG/view?usp=drive_link",
    },
    {
      image: certificate3,
      title: "Data Science with Python",
      company: "IBM",
      duration: "Feb - Apr 2024",
      description:
        "Gained hands-on experience in data analysis, visualization, and machine learning using Python.",
      certLink: "https://drive.google.com/file/d/12mTgvCPwn0iSE9NcKlaIVzaS-z2MESE-/view?usp=drive_link",
    },
     {
      image: certificate4,
      title: "Internship as Frontend Developer",
      company: "IBM SkillsBuild",
      duration: "Jun - Aug 2024",
      description:
        "Build a responsive web application 'Edu-For-You' ; using HTML, CSS, and JavaScript.",
      certLink: "https://drive.google.com/file/d/1TNX2pl9xUQd22IHGpSiDcPqLBBfdL3I4/view?usp=drive_link",
    },
  ];

  return (
    <div
      className="bg-[#0A192F] min-h-screen w-full flex flex-col items-center pt-28 px-6 md:px-10 font-sans"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10,25,47,0.95), rgba(10,25,47,0.95)), radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "100%, 22px 22px",
      }}
    >
      {/* Hero Section */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-gray-200">
          <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
            Certificates & Achievements
          </span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          A collection of my professional certifications and recognitions,
          highlighting my continuous learning and dedication to excellence.
        </p>

        {/* Subtle divider */}
        <div className="mt-6 h-[2px] w-20 mx-auto bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 rounded-full opacity-70"></div>
      </div>

      {/* Certificate Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full max-w-7xl">
        {experienceData.map((exp, index) => (
          <CertificateGrid key={index} {...exp} />
        ))}
      </div>
      <br />
    </div>
  );
}
