import React from "react";
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
import useJsonData from "../../hooks/useJsonData";
import DataStatus from "../DataStatus";

// Maps the icon "key" strings stored in public/data/skills.json to the
// actual icon components. To use a new icon: add it here, then reference
// its key from the JSON file.
const categoryIconMap = {
  code: <FaCode className="text-cyan-400" />,
  database: <FiDatabase className="text-green-400" />,
  brain: <LuBrainCircuit className="text-purple-400" />,
  chip: <HiOutlineChip className="text-pink-400" />,
};

const skillIconMap = {
  html5: <BsFiletypeHtml className="text-red-500" />,
  css3: <BsFiletypeCss className="text-blue-500" />,
  tailwind: <RiTailwindCssFill className="text-sky-400" />,
  javascript: <BsFiletypeJs className="text-yellow-400" />,
  react: <FaReact className="text-blue-400" />,
  python: <FaPython className="text-blue-400" />,
  fastapi: <SiFastapi className="text-green-400" />,
  flask: <BiLogoFlask className="text-black-600" />,
  mysql: <TbBrandMysql className="text-blue-400" />,
  restapi: <TbCloudDataConnection className="text-red-400" />,
  numpy: <SiNumpy className="text-blue-400" />,
  pandas: <SiPandas className="text-orange-400" />,
  scikitlearn: <SiScikitlearn className="text-orange-500" />,
  tensorflow: <SiTensorflow className="text-orange-400" />,
  dataviz: <MdOutlineDataThresholding className="text-green-400" />,
  streamlit: <SiStreamlit className="text-red-500" />,
  vscode: <VscVscode className="text-blue-400" />,
  jupyter: <SiJupyter className="text-red-400" />,
  vercel: <RiVercelFill className="text-black-500" />,
  render: <SiRender className="text-gray-400" />,
  git: <FaGitAlt className="text-orange-400" />,
  github: <FaGithub className="text-gray-400" />,
};

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
    {skillIconMap[skill.icon]}
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
        {categoryIconMap[icon]}
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
const SkillsGrid = () => {
  const { data: skillsData, loading, error } = useJsonData("/data/skills.json");

  return (
    <>
      <DataStatus loading={loading} error={error} label="skills" />
      {skillsData && (
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
      )}
    </>
  );
};

export default SkillsGrid;
