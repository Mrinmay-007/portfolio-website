





// import React from "react";
// import { FiGithub } from "react-icons/fi";
// import { HiOutlineGlobeAlt } from "react-icons/hi";
// import { motion } from "framer-motion";



// const CertificateGrid = ({ image, title, company, duration, description }) => (
//     <div className="relative bg-cyan-900/10 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 w-full max-w-sm transform hover:-translate-y-2 transition-transform duration-300">
//         {/* Corner bracket decorations */}
//         <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-md"></div>
//         <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-md"></div>
//         <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-md"></div>
//         <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400/50 rounded-br-md"></div>
        
//         <div className="flex items-start gap-4">
//             <div>

//             <img src={image} alt="" />
//             </div>
//             {/* <div className="text-cyan-400">{image}</div> */}
//             <div>
//                 <h3 className="text-xl font-bold text-cyan-400">{title}</h3>
//                 <div className="flex justify-between items-center mt-1">
//                     <p className="text-gray-400 text-sm">{company}</p>
//                     <span className="bg-gray-700/50 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">{duration}</span>
//                 </div>
//                 <p className="text-gray-300 mt-4 text-sm leading-relaxed">{description}</p>
//             </div>
//         </div>
//     </div>
// );

// export default CertificateGrid;

import React from "react";
import { HiOutlineDocumentText } from "react-icons/hi"; // certificate icon
import { motion } from "framer-motion";

const CertificateGrid = ({ image, title, company, duration, description, certLink }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="relative bg-cyan-900/10 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 w-full max-w-sm transform hover:-translate-y-2 transition-transform duration-300 shadow-lg"
  >
    {/* Corner decorations */}
    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400/40 rounded-tl-md"></div>
    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400/40 rounded-tr-md"></div>
    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400/40 rounded-bl-md"></div>
    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400/40 rounded-br-md"></div>

    {/* Image */}
    <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg bg-black/30 mb-4">
      <img
        src={image}
        alt={title}
        className="object-contain max-h-full"
      />
    </div>

    {/* Text content */}
    <div>
      <h3 className="text-lg font-bold text-[#3caec2]">{title}</h3>
      <div className="flex justify-between items-center mt-1">
        <p className="text-gray-400 text-sm">{company}</p>
        <span className="bg-gray-700/50 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">
          {duration}
        </span>
      </div>
      <p className="text-gray-300 mt-3 text-sm leading-relaxed">{description}</p>
    </div>

    {/* Show certificate button */}
    <div className="mt-4 flex justify-center">
      <a
        href={certLink || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#116270] hover:bg-cyan-600 text-white text-sm font-medium transition"
      >
        <HiOutlineDocumentText className="w-5 h-5" />
        View Certificate
      </a>
    </div>
  </motion.div>
);

export default CertificateGrid;
