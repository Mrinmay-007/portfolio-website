

// const ExperienceCard = ({ icon, title, company, duration, description }) => (
//     <div className="relative bg-cyan-900/10 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 w-full max-w-sm transform hover:-translate-y-2 transition-transform duration-300">
//         {/* Corner bracket decorations */}
//         <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-md"></div>
//         <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-md"></div>
//         <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-md"></div>
//         <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400/50 rounded-br-md"></div>
        
//         <div className="flex items-start gap-4">
//             <div className="text-cyan-400">{icon}</div>
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


// export default ExperienceCard;

import { ExternalLink } from "lucide-react"; // install lucide-react if not already

const ExperienceCard = ({ icon, title, company, duration, description, certLink }) => (
  <div className="relative bg-cyan-900/10 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 w-full max-w-sm transform hover:-translate-y-2 transition-transform duration-300">
    {/* Corner bracket decorations */}
    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-md"></div>
    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-md"></div>
    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-md"></div>
    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400/50 rounded-br-md"></div>
    
    <div className="flex items-start gap-4">
      <div className="text-cyan-400">{icon}</div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-cyan-400">{title}</h3>
        <div className="flex justify-between items-center mt-1">
          <p className="text-gray-400 text-sm">{company}</p>
          <span className="bg-gray-700/50 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">{duration}</span>
        </div>
        <p className="text-gray-300 mt-4 text-sm leading-relaxed">{description}</p>
        
        {/* Certificate Link */}
        {certLink && (
          <a
            href={certLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-[#297785] hover:text-[#2797ab] text-sm font-medium transition-colors"
          >
            <ExternalLink size={16} /> View Certificate
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ExperienceCard;
