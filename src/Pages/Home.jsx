import React from "react";

import PythonCodeBlock from "../components/Home/codeBlock";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen font-sans text-white ">
      
      <div className=" font-sans flex py-15">
        {/* Left Half of the page */}
        <div className="w-1/2 p-10 py-15">
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4 text-gray-400">
            Here's a little snippet about me, written in Python.
          </p>
        </div>

        {/* Right Half of the page */}
        <div className="w-1/2 flex items-center justify-center p-4 ">
          <PythonCodeBlock />
        </div>
      </div>
    </div>
  );
}
