import React from "react";
import useJsonData from "../hooks/useJsonData";
import DataStatus from "../components/DataStatus";
import CertificateGrid from "../components/Certificate/certificateGrid.jsx";

export default function Certificate() {
  const { data: certificates, loading, error } = useJsonData("/data/certificates.json");

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

      <DataStatus loading={loading} error={error} label="certificates" />

      {/* Certificate Grid */}
      {certificates && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full max-w-7xl">
          {certificates.map((exp, index) => (
            <CertificateGrid key={index} {...exp} />
          ))}
        </div>
      )}
      <br />
    </div>
  );
}
