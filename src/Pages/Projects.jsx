import ProjectGrid from "../components/Project/projectGrid";
import useJsonData from "../hooks/useJsonData";
import DataStatus from "../components/DataStatus";

// Visual card styles, keyed by name. Projects reference a style by key
// (see public/data/projects.json -> "cardStyle": "style1" | "style2").
// Add more style objects here if you want new looks, then reference the
// new key from the JSON file.
const cardStyles = {
  style1: {
    container: "bg-gray-900/50",
    borderColor: "border-cyan-700/50",
    hoverShadow: "hover:shadow-cyan-500/20",
    imageContainer: "bg-black",
    imageHover: "group-hover:scale-110",
    contentBackground: "",
    titleColor: "text-white",
    titleHoverColor: "group-hover:text-[#77e0db]",
    underlineGradient: "bg-gradient-to-r from-cyan-400 to-teal-400",
    descriptionColor: "text-gray-300",
    buttonTextColor: "text-white",
    buttonHoverColor: "hover:text-cyan-400",
  },
  style2: {
    container: "bg-slate-800/60",
    borderColor: "border-purple-600/50",
    hoverShadow: "hover:shadow-purple-500/20",
    imageContainer: "bg-gray-900",
    imageHover: "group-hover:scale-105 group-hover:rotate-1",
    contentBackground: "backdrop-blur-sm",
    titleColor: "text-gray-100",
    titleHoverColor: "group-hover:text-purple-300",
    underlineGradient: "bg-gradient-to-r from-purple-400 to-pink-500",
    descriptionColor: "text-gray-400",
    buttonTextColor: "text-gray-200",
    buttonHoverColor: "hover:text-purple-400",
  },
};

// Resolve the "cardStyle" string key from JSON into an actual style object.
function withResolvedStyle(item) {
  if (!item) return item;
  return { ...item, cardStyle: cardStyles[item.cardStyle] || cardStyles.style1 };
}

function Roadmap() {
  const { data: rows, loading, error } = useJsonData("/data/projects.json");

  return (
    <div className="bg-[#0B1120] min-h-screen w-full flex flex-col items-center px-6 pt-10 font-sans">
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
        My Projects
      </h1>
      <p className="text-gray-400 mt-3 text-center">
        A showcase of my recent work and creations.
      </p>

      <DataStatus loading={loading} error={error} label="projects" />

      {rows && (
        <div className="relative w-full max-w-7xl mt-16 flex flex-col gap-24 pb-20">
          {rows.map((row, i) => (
            <ProjectGrid
              key={i}
              left={withResolvedStyle(row.left)}
              right={withResolvedStyle(row.right)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <div className="bg-[#0B1120] min-h-screen w-full flex flex-col items-center px-6 pt-20 font-sans">
      <Roadmap />
    </div>
  );
}
