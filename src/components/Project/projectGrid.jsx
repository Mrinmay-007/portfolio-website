

import React from "react";
import { FiGithub } from "react-icons/fi";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { motion } from "framer-motion";

const ProjectGrid = ({ left, right }) => {
  const renderCard = (item, cardStyle) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`relative group ${cardStyle.container} rounded-3xl shadow-xl 
        w-full overflow-hidden flex flex-col md:flex-row 
        border ${cardStyle.borderColor} 
        hover:-translate-y-3 transition-transform duration-500 hover:shadow-lg ${cardStyle.hoverShadow}`}
    >
      {/* Left Side - Image */}
      <div
        className={`w-full md:w-2/3 ${cardStyle.imageContainer} overflow-hidden`}
      >
        <img
          src={item.image}
          alt={item.title}
          className={`object-cover w-full h-56 md:h-full transform ${cardStyle.imageHover} transition duration-700`}
        />
      </div>

      {/* Right Side - Content */}
      <div
        className={`w-full md:w-1/2 flex flex-col justify-between p-6 md:p-8 relative z-10 ${cardStyle.contentBackground}`}
      >
        <div className="flex-1">
          <h2
            className={`relative inline-block text-xl md:text-2xl font-extrabold ${cardStyle.titleColor} flex items-center gap-2 transition ${cardStyle.titleHoverColor}`}
          >
            {item.title}
            {/* Underline effect */}
            <span
              className={`absolute left-0 -bottom-1 w-0 h-[2px] ${cardStyle.underlineGradient} group-hover:w-full transition-all duration-500`}
            ></span>
          </h2>

          <p
            className={`${cardStyle.descriptionColor} mt-3 md:mt-4 leading-relaxed text-sm md:text-base`}
          >
            {item.description}
          </p>
        </div>

        {/* Buttons */}
        {(item.codeLink || item.liveLink) && (
          <div
            className={`flex gap-6 mt-4 md:mt-6 border-t ${cardStyle.borderColor} pt-4 md:pt-6`}
          >
            {item.codeLink && (
              <a
                href={item.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${cardStyle.buttonTextColor} ${cardStyle.buttonHoverColor} transition`}
              >
                <FiGithub className="w-5 h-5" /> Code
              </a>
            )}
            {item.liveLink && (
              <a
                href={item.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${cardStyle.buttonTextColor} ${cardStyle.buttonHoverColor} transition`}
              >
                <HiOutlineGlobeAlt className="w-5 h-5" /> Live
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="relative flex flex-col md:flex-row w-full gap-8 md:gap-16 justify-center">
      {/* Left card */}
      {left && (
        <div className="flex justify-center md:justify-end w-full">
          {renderCard(left, left.cardStyle)}
        </div>
      )}

      {/* Right card */}
      {right && (
        <div className="flex justify-center md:justify-start w-full">
          {renderCard(right, right.cardStyle)}
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;

