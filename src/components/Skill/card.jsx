


import { FaCode, FaGithub, FaPython, FaGitAlt, FaReact } from "react-icons/fa6";
import { FiDatabase } from "react-icons/fi";
import { HiOutlineChip } from "react-icons/hi";
import { BsFiletypeHtml, BsFiletypeCss, BsFiletypeJs } from "react-icons/bs";
import { RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { TbBrandMysql, TbCloudDataConnection } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { SiJupyter, SiFastapi, SiRender, SiTensorflow, SiNumpy, SiPandas, SiScikitlearn, SiStreamlit } from "react-icons/si";
import { BiLogoFlask } from "react-icons/bi";
import { LuBrainCircuit } from "react-icons/lu";
import { MdOutlineDataThresholding } from "react-icons/md";
import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Frontend Development",
    icon: <FaCode className="text-cyan-400" />,
    skills: [
      { icon: <BsFiletypeHtml className="text-red-500" />, label: "HTML5" },
      { icon: <BsFiletypeCss className="text-blue-500" />, label: "CSS3" },
      { icon: <RiTailwindCssFill className="text-sky-400" />, label: "Tailwind CSS" },
      { icon: <BsFiletypeJs className="text-yellow-400" />, label: "JavaScript" },
      { icon: <FaReact className="text-blue-400" />, label: "React" }
    ]
  },
  {
    title: "Backend Development",
    icon: <FiDatabase className="text-green-400" />,
    skills: [
      { icon: <FaPython className="text-blue-400" />, label: "Python" },
      { icon: <SiFastapi className="text-green-400" />, label: "FastAPI" },
      { icon: <BiLogoFlask className="text-black-600" />, label: "Flask" },
      { icon: <TbBrandMysql className="text-blue-400" />, label: "MySQL" },
      { icon: <TbCloudDataConnection className="text-red-400" />, label: "Rest API" }
    ]
  },
  {
    title: "MLOps & AI",
    icon: <LuBrainCircuit className="text-purple-400" />,
    skills: [
      { icon: <SiNumpy className="text-blue-400" />, label: "NumPy" },
      { icon: <SiPandas className="text-orange-400" />, label: "Pandas" },
      { icon: <SiScikitlearn className="text-orange-500" />, label: "Scikit-learn" },
      { icon: <SiTensorflow className="text-orange-400" />, label: "TensorFlow" },
      { icon: <MdOutlineDataThresholding className="text-green-400" />, label: "Data Visualization" },
      { icon: <SiStreamlit className="text-red-500" />, label: "Streamlit" }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: <HiOutlineChip className="text-pink-400" />,
    skills: [
      { icon: <VscVscode className="text-blue-400" />, label: "VS Code" },
      { icon: <SiJupyter className="text-red-400" />, label: "Jupyter" },
      { icon: <RiVercelFill className="text-black-500" />, label: "Vercel" },
      { icon: <SiRender className="text-gray-400" />, label: "Render" },
      { icon: <FaGitAlt className="text-orange-400" />, label: "Git" },
      { icon: <FaGithub className="text-gray-400" />, label: "GitHub" }
    ]
  },
];


// --- Reusable Skill Tag ---
const SkillTag = ({ skill }) => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 3 }}
    whileTap={{ scale: 0.95, rotate: -5 }}
    onClick={() => console.log(`Clicked on ${skill.label}`)}
    className="relative flex items-center gap-2 bg-gray-700/40 text-gray-300 text-sm font-medium px-3 py-1.5 rounded-full transition-colors hover:bg-cyan-500/20 hover:text-cyan-300 border border-transparent hover:border-cyan-400/40 cursor-pointer overflow-visible"
  >
    {/* 🔥 Outer Light Burst */}
    <motion.span
      className="absolute -inset-4 rounded-full bg-cyan-400/30 blur-xl"
      initial={{ scale: 0, opacity: 0 }}
      whileTap={{ scale: 1.6, opacity: 0.8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    />

    {/* Inner Content */}
    {skill.icon}
    <span className="relative">{skill.label}</span>
  </motion.div>
);

// // Animation for cards
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

// Skill Card
const SkillCard = ({ title, icon, skills }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(34,211,238,0.3)" }}
    className="bg-[#1a1a2e] border border-gray-700/50 rounded-2xl p-8 flex flex-col h-full transition-all duration-300 hover:border-cyan-400/50"
  >
    <div className="flex items-center gap-4 mb-6">
      <motion.div
        whileHover={{ rotate: 15, scale: 1.2 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="text-4xl"
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-semibold text-gray-100">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-3 mt-auto pt-4">
      {skills.map((skill, index) => (
        <SkillTag key={index} skill={skill} />
      ))}
    </div>
  </motion.div>
);

// Grid container with staggered animation
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 }
  }
};

// Skills Grid
const SkillsGrid = () => (
  <motion.div
    variants={gridContainerVariants}
    initial="hidden"
    animate="visible"
    className="grid grid-cols-1 md:grid-cols-2 gap-8"
  >
    {skillsData.map((category, index) => (
      <SkillCard
        key={index}
        title={category.title}
        icon={category.icon}
        skills={category.skills}
      />
    ))}
  </motion.div>
);

export default SkillsGrid;
