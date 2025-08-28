import React from "react";
import { ArrowRightIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import PythonCodeBlock from "../components/Home/codeBlock";
import dp from "../assets/dp.png";
import "../index.css";

export default function Home() {
  const roles = [
    "Full Stack Developer",
    "Data Science Enthusiast",
    "Python Developer",
  ];

  return (
    <main className="bg-[#100c1c] font-inter text-gray-300 overflow-x-hidden relative min-h-screen">
      {/* Background Aurora Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/20 rounded-full blur-3xl animate-spin-slow -top-20 -left-20"></div>
        <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-spin-slow-slow -bottom-20 -right-20"></div>
      </div>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 w-full"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Intro Text */}
              <div className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-400">
                  Hello, I am
                </h2>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#35bd9d] to-[#2baecb] animate-text-shimmer">
                  Mrinmay Das
                </h1>

                {/* Animated Roles */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 md:gap-4 text-lg md:text-xl font-mono">
                  <span className="text-white/80">I am a</span>
                  <div className="h-8 sm:h-10 w-full max-w-xs overflow-hidden">
                    <div className="animate-infinite-scroll">
                      {roles.map((role, index) => (
                        <p
                          key={index}
                          className="h-8 sm:h-10 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-400"
                        >
                          {role}
                        </p>
                      ))}
                      {/* Loop first role for smooth infinite scroll */}
                      <p className="h-8 sm:h-10 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-400">
                        {roles[0]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-4">
                  <a
                    href="https://github.com/Mrinmay-007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aurora-button w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    Learn More <ArrowRightIcon className="w-5 h-5" />
                  </a>

                  <a href="https://drive.google.com/file/d/1pS9lI-v-QlOkT4UuSDXh55vLR3ByHbse/view?usp=drive_link"
                  target="_blank"
                    rel="noopener noreferrer"
                   className="aurora-button-secondary w-full sm:w-auto flex items-center justify-center gap-2">
                    Get Resume <ArrowDownTrayIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Code Block */}
              <div className="hidden lg:flex items-center justify-center">
                <PythonCodeBlock />
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center py-16 lg:py-24 px-4 sm:px-6 w-full"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Profile Image */}
              <div className="relative flex justify-center items-center group">
                <div className="absolute w-[240px] h-[320px] sm:w-[280px] sm:h-[380px] md:w-[350px] md:h-[450px] bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-500 rounded-[50%] blur-2xl opacity-40 animate-blob transition-all duration-500 group-hover:opacity-60"></div>
                <div className="relative w-[220px] h-[300px] sm:w-[260px] sm:h-[360px] md:w-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-105 aurora-border">
                  <img
                    src={dp}
                    alt="Profile pic of Mrinmay Das"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* About Text */}
              <div className="space-y-6 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  About{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3bd6b2] to-[#2ebbdb]">
                    Me
                  </span>
                </h2>
                <div className="space-y-3 text-gray-300 text-base md:text-lg">
                  <p>
                    Hi! 👋 {"  "}  My name is{" "}
                    <span className="font-semibold text-[#4f96de]">
                      Mrinmay Das
                    </span>
                    . I’m a passionate technology enthusiast and a B.Tech student of Academy Of Technology, with a strong interest in Data Science, Machine Learning, and Full-Stack Development. I love building innovative projects that combine programming, AI, and real-world applications.  
                  </p>
                  <br />
                  <p className="font-light ">
                    Over time, I’ve developed hands-on experience with Python, SQL, React.js, Flask, and FastAPI, and I enjoy exploring both backend and frontend development. I’ve worked on projects ranging from AI-powered applications, predictive models, and web apps to automation tools.
                  </p>
                  <br />
              
                  <p>
                    <span className="font-semibold text-white">
                      My Objective:
                    </span>{" "}
                    To challenge myself in a new environment to learn, develop,
                    and improve my skills through different projects, and try new things.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
