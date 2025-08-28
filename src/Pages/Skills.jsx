// src/pages/Skill.js

import React from "react";
// Link is not used, can be removed if you don't need it.
// import { Link } from "react-router-dom";
import SkillsGrid from "../components/Skill/card";
import MySkillsHeading from "../components/Skill/MySkillsHeading";
export default function Skill() {
    return (
        <>
            {/* ✅ CHANGED: Adjusted padding, especially on Y-axis (py-24) */}
            <div className="bg-[#0f0f1a] min-h-screen font-sans text-white w-full px-4 sm:px-8 md:px-12 py-24">
                <MySkillsHeading />
                {/* ✅ CHANGED: Made the content centered and constrained its width for better readability on large screens */}
                <div className="max-w-5xl mx-auto">
                
               
                    <SkillsGrid />
                </div>
            </div>
        </>
    );
}