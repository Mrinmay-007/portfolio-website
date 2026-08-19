import RoadmapRow from "../components/Education/roadmapCard";
import useJsonData from "../hooks/useJsonData";
import DataStatus from "../components/DataStatus";

function Roadmap() {
  const { data: rows, loading, error } = useJsonData("/data/education.json");

  return (
    <div className="bg-[#0B1120] min-h-screen w-full flex flex-col items-center px-6 pt-10 font-sans">
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
        Educational Journey
      </h1>
      <p className="text-gray-400 mt-3 text-center">
        A roadmap of academic milestones
      </p>

      <DataStatus loading={loading} error={error} label="education" />

      {rows && (
        <div className="relative w-full max-w-6xl mt-16 flex flex-col gap-12 pb-20">
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-600"></div>
          {rows.map((row, i) => (
            <RoadmapRow key={i} left={row.left} right={row.right} />
          ))}
        </div>
      )}
    </div>
  );
}

// --- Main Component ---
export default function EducationRoadmap() {
  return (
    <div className="bg-[#0B1120] min-h-screen w-full flex flex-col items-center px-6 pt-20 font-sans">
      <Roadmap />
    </div>
  );
}
