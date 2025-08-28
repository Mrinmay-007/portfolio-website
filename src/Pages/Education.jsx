import RoadmapRow from "../components/Education/roadmapCard";

function Roadmap() {
  const rows = [
    {
      left: {
        title: "Secondary Education  (WBBSE)",
        institution: "Mahesh Shri Ramakrishna Ashram",
        duration: "2010-2020",
        description: "Focused on fundamentals of science and arts subjects.",
        achievements: ["Percentage: 85% "],
        subjects: [
          "Mathematics",
          "Physical Science",
          "Life Science",
          "History",
          "Geography",
          "Bengali",
          "English",
        ],
      },
      right: {
        title: "Higher Secondary Education  (WBCHSE)",
        institution: "Serampore Union Institution",
        duration: "2020-2022",
        description:
          "Focused on core science subjects with emphasis on practical laboratory work . ",
        achievements: ["Percentage: 79% ", "Subject: Science"],
        subjects: [
          "Mathematics",
          "Physics",
          "Chemistry",
          "Computer Applications",
        ],
      },
    },
    {
      left: {
        title: "Bachelor Of Technology ( B.Tech | MAKAUT )",
        institution: "Academy Of Technology",
        duration: "2022-2026",
        description:
          "Focused on Data science subjects with emphasis on practical laboratory work and projects.",
        achievements: ["GPA : 7.3", "Department : CSBS"],
      },
    },
  ];

  return (
    <div className="bg-[#0B1120] min-h-screen w-full flex flex-col items-center px-6 pt-10 font-sans">
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
        Educational Journey
      </h1>
      <p className="text-gray-400 mt-3 text-center">
        A roadmap of academic milestones
      </p>

      <div className="relative w-full max-w-6xl mt-16 flex flex-col gap-12 pb-20">
        <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-600"></div>
        {rows.map((row, i) => (
          <RoadmapRow key={i} left={row.left} right={row.right} />
        ))}
      </div>
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
