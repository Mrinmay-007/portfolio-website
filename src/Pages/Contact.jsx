import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import useJsonData from "../hooks/useJsonData";
import DataStatus from "../components/DataStatus";

// Converts a normal Google Form "viewform" link into the embeddable version.
function toEmbedUrl(url) {
  if (!url) return url;
  return url.includes("?") ? `${url}&embedded=true` : `${url}?embedded=true`;
}

export default function Contact() {
  const { data: contact, loading, error } = useJsonData("/data/contact.json");

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 sm:px-6 py-12 pt-24 md:pt-32">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Section */}
        <div className="text-white flex flex-col justify-center">
          {loading || error ? (
            <DataStatus loading={loading} error={error} label="contact info" />
          ) : (
            <>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">
                {contact.heading}
              </h2>
              <p className="text-gray-400 mb-8 text-sm md:text-base">
                {contact.subheading}
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-700/20 rounded-xl">
                    <MdEmail className="text-purple-400 text-xl md:text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold">Email</h4>
                    <p className="text-gray-400 text-sm md:text-base">
                      {contact.email}
                    </p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-700/20 rounded-xl">
                    <FaLinkedinIn className="text-[#5aa2ea] text-xl md:text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold">LinkedIn</h4>
                    <a
                      href={contact.linkedin.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:underline text-sm md:text-base"
                    >
                      {contact.linkedin.displayText}
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Section (Google Form) */}
        <div className="bg-[#1e293b] p-2 sm:p-3 rounded-2xl shadow-lg overflow-hidden">
          {contact?.googleFormUrl ? (
            <iframe
              title="Contact form"
              src={toEmbedUrl(contact.googleFormUrl)}
              className="w-full h-[600px] rounded-xl bg-white"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          ) : (
            <DataStatus loading={loading} error={error} label="contact form" />
          )}
        </div>
      </div>
    </div>
  );
}
