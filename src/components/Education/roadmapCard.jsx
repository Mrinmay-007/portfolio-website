

// import React from "react";
// import { motion } from "framer-motion";
// import { BookOpen, Calendar, School, Award } from "lucide-react"; // icons

// // --- Roadmap Row (with redesigned cards) ---
// const RoadmapRow = ({ left, right }) => {
//   const renderCard = (item) => (
//     <div className="bg-[#111827] border border-gray-700/50 rounded-2xl p-6 shadow-lg w-96">
//       {/* Title + Icon */}
//       <div className="flex items-center gap-3 mb-3">
//         <BookOpen className="text-cyan-400 w-6 h-6" />
//         <h3 className="text-xl font-bold text-white">{item.title}</h3>
//       </div>

//       {/* Institution + Duration */}
//       <div className="space-y-1 mb-4">
//         <div className="flex items-center gap-2 text-gray-400 text-sm">
//           <School className="w-4 h-4 text-green-400" />
//           {item.institution}
//         </div>
//         <div className="flex items-center gap-2 text-gray-400 text-sm">
//           <Calendar className="w-4 h-4 text-yellow-400" />
//           {item.duration}
//         </div>
//       </div>

//       {/* Description */}
//       <p className="text-gray-300 text-sm italic border-l-2 border-cyan-400 pl-3 mb-4">
//         {item.description}
//       </p>

//       {/* Achievements */}
//       {item.achievements && (
//         <div className="mb-4">
//           <div className="flex items-center gap-2 font-semibold text-white">
//             <Award className="w-5 h-5 text-yellow-400" />
//             Key Achievements
//           </div>
//           <div className="flex flex-wrap gap-2 mt-2">
//             {item.achievements.map((ach, idx) => (
//               <span
//                 key={idx}
//                 className="bg-[#14464e] text-[#2cd1bc] text-xs font-medium px-3 py-1 rounded-full"
//               >
//                 {ach}
//               </span>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Subjects */}
//       {item.subjects && (
//         <div className="flex flex-wrap gap-2 mt-2">
//           {item.subjects.map((subj, idx) => (
//             <span
//               key={idx}
//               className="bg-[#1b2c4c] text-[#83b1e1] text-xs px-3 py-1 rounded-md"
//             >
//               {subj}
//             </span>
//           ))}
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <div className="relative flex w-full min-h-[280px]">
//       {/* Center line */}
//       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-600 h-full"></div>

//       {/* Left card */}
//       {left && (
//         <motion.div
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="relative w-1/2 flex justify-end pr-16 -translate-y-8"
//         >
//           {/* Connector */}
//           <div className="absolute top-1/2 right-0 flex items-center">
//             <div className="w-12 h-0.5 bg-gray-500"></div>
//             <div className="w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#0B1120]"></div>
//           </div>
//           {renderCard(left)}
//         </motion.div>
//       )}

//       {/* Right card */}
//       {right && (
//         <motion.div
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="relative w-1/2 flex justify-start pl-16 translate-y-30"
//         >
//           {/* Connector */}
//           <div className="absolute top-1/2 left-0 flex items-center">
//             <div className="w-4 h-4 rounded-full bg-green-500 border-4 border-[#0B1120]"></div>
//             <div className="w-12 h-0.5 bg-gray-500"></div>
//           </div>
//           {renderCard(right)}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default RoadmapRow;


import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Calendar, School, Award } from "lucide-react"; // icons

// --- Roadmap Row (responsive) ---
const RoadmapRow = ({ left, right }) => {
  const renderCard = (item) => (
    <div className="bg-[#111827] border border-gray-700/50 rounded-2xl p-6 shadow-lg w-full md:w-96">
      {/* Title + Icon */}
      <div className="flex items-center gap-3 mb-3">
        <BookOpen className="text-cyan-400 w-6 h-6" />
        <h3 className="text-xl font-bold text-white">{item.title}</h3>
      </div>

      {/* Institution + Duration */}
      <div className="space-y-1 mb-4">
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <School className="w-4 h-4 text-green-400" />
          {item.institution}
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Calendar className="w-4 h-4 text-yellow-400" />
          {item.duration}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm italic border-l-2 border-cyan-400 pl-3 mb-4">
        {item.description}
      </p>

      {/* Achievements */}
      {item.achievements && (
        <div className="mb-4">
          <div className="flex items-center gap-2 font-semibold text-white">
            <Award className="w-5 h-5 text-yellow-400" />
            Key Achievements
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {item.achievements.map((ach, idx) => (
              <span
                key={idx}
                className="bg-[#14464e] text-[#2cd1bc] text-xs font-medium px-3 py-1 rounded-full"
              >
                {ach}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Subjects */}
      {item.subjects && (
        <div className="flex flex-wrap gap-2 mt-2">
          {item.subjects.map((subj, idx) => (
            <span
              key={idx}
              className="bg-[#1b2c4c] text-[#83b1e1] text-xs px-3 py-1 rounded-md"
            >
              {subj}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="relative flex flex-col md:flex-row w-full min-h-[280px]">
      {/* Timeline line */}
      <div className="absolute top-0 left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gray-600 h-full"></div>

      {/* Left card */}
      {left && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/2 flex md:justify-end pr-0 md:pr-16 mb-12 md:mb-0"
        >
          {/* Connector */}
          <div className="absolute top-1/2 md:right-0 left-0 md:left-auto flex items-center">
            <div className="hidden md:block w-12 h-0.5 bg-gray-500"></div>
            <div className="w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#0B1120]"></div>
            <div className="block md:hidden w-8 h-0.5 bg-gray-500 ml-4"></div>
          </div>
          {renderCard(left)}
        </motion.div>
      )}

      {/* Right card */}
      {right && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/2 flex md:justify-start pl-0 md:pl-16"
        >
          {/* Connector */}
          <div className="absolute top-1/2 md:left-0 left-0 flex items-center">
            <div className="w-4 h-4 rounded-full bg-green-500 border-4 border-[#0B1120]"></div>
            <div className="hidden md:block w-12 h-0.5 bg-gray-500"></div>
          </div>
          {renderCard(right)}
        </motion.div>
      )}
    </div>
  );
};

export default RoadmapRow;
