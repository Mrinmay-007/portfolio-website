import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 sm:px-6 py-12 pt-24 md:pt-32">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-12">
        
        {/* Left Section */}
        <div className="text-white flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">
            Get in Touch
          </h2>

          <p className="text-gray-400 mb-8 text-sm md:text-base">
            Have a question or find any issues ? Drop us a message!
          </p>

          <div className="space-y-6">
            
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-700/20 rounded-xl">
                <MdEmail className="text-purple-400 text-xl md:text-2xl" />
              </div>

              <div>
                <h4 className="text-base md:text-lg font-semibold">
                  Email
                </h4>

                <p className="text-gray-400 text-sm md:text-base">
                  mrinmay.ofc@gmail.com
                </p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-700/20 rounded-xl">
                <FaLinkedinIn className="text-[#5aa2ea] text-xl md:text-2xl" />
              </div>

              <div>
                <h4 className="text-base md:text-lg font-semibold">
                  LinkedIn
                </h4>

                <a
                  href="https://www.linkedin.com/in/mrinmay-das-868793280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:underline text-sm md:text-base"
                >
                  mrinmay-das
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-[#1e293b] p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center">
          
          <div className="bg-purple-700/20 p-5 rounded-2xl mb-6">
            <MdEmail className="text-purple-400 text-5xl" />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Contact Form
          </h3>

          <p className="text-gray-400 text-sm md:text-base mb-8 max-w-md">
            Click the button below to open the Google Form and send your message.
          </p>

          <a
            href="YOUR_GOOGLE_FORM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center text-sm md:text-base"
          >
            Open Google Form 📩
          </a>
        </div>
      </div>
    </div>
  );
}
