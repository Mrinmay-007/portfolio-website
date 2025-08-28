import { motion } from "framer-motion";

// --- Animation Variants ---
const headingVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const subHeadingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8, ease: "easeOut" } },
};

const MySkillsHeading = () => (
  <div className="text-center mb-16">
    {/* Main Heading */}
    <motion.h2
      variants={headingVariants}
      initial="hidden"
      animate="visible"
      className="text-5xl md:text-6xl font-extrabold tracking-wide 
                 text-gray-100 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]"
      style={{
        fontFamily: "'Orbitron', sans-serif", // futuristic Google font
      }}
    >
      My <span className="text-cyan-400">Skills</span>
    </motion.h2>

    {/* Decorative underline */}
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-4 rounded-full"
    />

    {/* Subheading */}
    <motion.p
      variants={subHeadingVariants}
      initial="hidden"
      animate="visible"
      className="mt-5 text-lg md:text-xl text-gray-400"
      style={{
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      A blend of <span className="text-cyan-400">design</span>,{" "}
      <span className="text-purple-400">logic</span>, and{" "}
      <span className="text-pink-400">innovation</span>.
    </motion.p>
  </div>
);

export default MySkillsHeading;
