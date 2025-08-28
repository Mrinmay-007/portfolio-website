
import ProjectGrid from "../components/Project/projectGrid";
import project8 from "../assets/project/attendance_manager.png";
import project7 from "../assets/project/football_analysis.png";
import project6 from "../assets/project/sentiment-analysis.jpg";
import project5 from "../assets/project/sms_spam.png";
import project4 from "../assets/project/olympic.png";
import project3 from "../assets/project/ipl.png";
import project2 from "../assets/project/jarvis.png";
import project1 from "../assets/project/edu-for-you.png";
// Define the unique styles for your cards here
// =============================================

const cardStyle1 = {
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
};

const cardStyle2 = {
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
};

// =============================================

function Roadmap() {
  const rows = [
    //  Enter your project details
    // ====================================
    {
      left: {
        image: project8,
        title: "AttendX",
        description:
          "A web application to manage college attendance system , built with React ,FastAPI and MySQL.",
        codeLink: "https://github.com/Mrinmay-007/Attendance_Manage.git",
        liveLink: "https://attendance-manage-rdyu.vercel.app",
        cardStyle: cardStyle1, // <-- Assign style object here
      },
      right: {
        image: project7,
        title: "Football Analysis",
        description:
          "Football analysis using OpenCV and Python to track player movements and analyze game strategies." ,
        codeLink: "https://github.com/Mrinmay-007/Football_Analysis.git",
        liveLink: "",
        cardStyle: cardStyle2, // <-- Assign style object here
      },
    },
    // ====================================
   {
      left: {
        image: project6, // Replace with your image
        title: "Sentiment Analysis",
        description: 
        "A web application that analyzes the sentiment of user-input text using machine learning techniques.",
        codeLink: "https://github.com/Mrinmay-007/sentiment_analysis.git",
        liveLink: "",
        cardStyle: cardStyle2, // <-- You can reuse or create new styles
      },
      right: {
        image: project5, // Replace with your image
        title: "SMS Spam Detection",
        description:
          "A web application that classifies SMS messages as spam or ham using machine learning algorithms.",
        codeLink: "https://github.com/Mrinmay-007/email_spam.git",
        liveLink: "https://email-spam-classifier-a9kz.onrender.com/",
        cardStyle: cardStyle1, // <-- Mix and match styles
      },
    },

  // ====================================
    {
      left: {
        image: project4, // Replace with your image
        title: "Summer Olympic Analysis",
        description: "A web application that analyzes the performance of athletes in the Summer Olympics.",
        codeLink: "https://github.com/Mrinmay-007/Summer_Olympics.git",
        liveLink: "https://summerolympiscsproject.streamlit.app/",
        cardStyle: cardStyle1, // <-- You can reuse or create new styles
      },
      right: {
        image: project3, // Replace with your image
        title: "IPL Analysis",
        description:
          "A web application that provides insights and analysis of IPL cricket matches using historical data.",
        codeLink: "https://github.com/Mrinmay-007/IPL.git",
        liveLink: "https://iplanalysisproject.streamlit.app/",
        cardStyle: cardStyle2, // <-- Mix and match styles
      },
    },
  // ====================================
       {
      left: {
        image: project2, // Replace with your image
        title: "JARVIS",
        description: "A voice-activated personal assistant that can perform various tasks using Python and speech recognition.",
        codeLink: "https://github.com/Mrinmay-007/jarvis.git",
        liveLink: "",
        cardStyle: cardStyle2, // <-- You can reuse or create new styles
      },
      right: {
        image: project1, // Replace with your image
        title: "Edu-For-You",
        description:
          "A web application that connects students with tutors for personalized learning experiences.",
        codeLink: "https://github.com/Mrinmay-007/EduForYou.git",
        liveLink: "https://edu-for-you-37ju.vercel.app/",
        cardStyle: cardStyle1, // <-- Mix and match styles
      },

    },
    // Add more rows as needed
  ];

  return (
    <div className="bg-[#0B1120] min-h-screen w-full flex flex-col items-center px-6 pt-10 font-sans">
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
        My Projects
      </h1>
      <p className="text-gray-400 mt-3 text-center">
        A showcase of my recent work and creations.
      </p>

      <div className="relative w-full max-w-7xl mt-16 flex flex-col gap-24 pb-20">
        {rows.map((row, i) => (
          <ProjectGrid key={i} left={row.left} right={row.right} />
        ))}
      </div>
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