import React from 'react';
import { SiPython } from "react-icons/si";

const CodeLine = ({ children, indent = 0 }) => {
    const indentStyle = { paddingLeft: `${indent * 1.5}rem` };
    return (
        <div style={indentStyle}>
            {children}
        </div>
    );
};

// Renders as a fixed number of trait lines; keys/values come from data.traits
const TraitLine = ({ label, value, variable, punctuation, operator, boolean }) => (
    <>
        <span className={variable}>self</span>
        <span className={punctuation}>.</span>
        {label}
        <span className={operator}> = </span>
        <span className={boolean}>{value ? "True" : "False"}</span>
        <br />
    </>
);

export default function PythonCodeBlock({ data }) {
    // Syntax highlighting classes for different token types
    const keyword = "text-pink-400";
    const variable = "text-sky-300";
    const string = "text-amber-400";
    const number = "text-purple-300";
    const boolean = "text-purple-300";
    const functionName = "text-green-400";
    const className = "text-green-400";
    const comment = "text-gray-500";
    const punctuation = "text-gray-400";
    const operator = "text-pink-400";

    if (!data) return null;

    const { fileName, name, title, skills, traits, hireCriteria } = data;
    const traitEntries = Object.entries(traits || {});

    return (
        // Main container for the code editor look
        <div className="bg-[#282c34] rounded-xl shadow-2xl w-full max-w-2xl mx-auto my-10 border border-gray-700">
            {/* Header with window controls and file name */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                     <SiPython className="text-yellow-400" />
                    <span>{fileName}</span>
                </div>
                 {/* Empty div for balance */}
                <div className="w-16"></div>
            </div>

            {/* Code content area */}
            <div className="p-4 text-gray-300 font-mono text-sm leading-relaxed">
                <pre><code>
                    <CodeLine>
                        <span className={keyword}>class</span> <span className={className}>Profile</span><span className={punctuation}>:</span>
                    </CodeLine>
                    <CodeLine indent={1}>
                        <span className={keyword}>def</span> <span className={functionName}>__init__</span><span className={punctuation}>(</span><span className={variable}>self</span><span className={punctuation}>):</span>
                    </CodeLine>
                    <CodeLine indent={2}>
                        <span className={variable}>self</span><span className={punctuation}>.</span>name <span className={operator}>=</span> <span className={string}>"{name}"</span>
                         <br />

                        <span className={variable}>self</span><span className={punctuation}>.</span>title <span className={operator}>=</span> <span className={string}>"{title}"</span>
                        <br />

                        <span className={variable}>self</span><span className={punctuation}>.</span>skills <span className={operator}>=</span> <span className={punctuation}>[</span>
                    </CodeLine>

                    <CodeLine indent={3}>
                        {skills.map((skill, idx) => (
                            <React.Fragment key={idx}>
                                <span className={string}>'{skill}'</span>
                                {idx < skills.length - 1 && <span className={punctuation}>, </span>}
                                {(idx + 1) % 3 === 0 && <br />}
                            </React.Fragment>
                        ))}
                    </CodeLine>
                    <CodeLine indent={2}><span className={punctuation}>]</span></CodeLine>

                    <CodeLine indent={2}>
                        {traitEntries.map(([label, value]) => (
                            <TraitLine
                                key={label}
                                label={label}
                                value={value}
                                variable={variable}
                                punctuation={punctuation}
                                operator={operator}
                                boolean={boolean}
                            />
                        ))}
                    </CodeLine>

                    <CodeLine>
                        <span className={punctuation}>&nbsp;</span>
                    </CodeLine>
                    <CodeLine indent={1}>
                        <span className={keyword}>def</span> <span className={functionName}>is_hireable</span><span className={punctuation}>(</span><span className={variable}>self</span><span className={punctuation}>):</span>
                    </CodeLine>

                    <CodeLine indent={2}>
                        <span className={comment}># A candidate is hireable if they meet the criteria</span>
                        <br />
                        <span className={keyword}>return</span> <span className={punctuation}>(</span>
                    </CodeLine>
                    <CodeLine indent={3}>
                        <span className={variable}>self</span>
                        <span className={punctuation}>.</span>
                        hard_worker
                        <span className={keyword}>and</span>
                        <br />

                        <span className={variable}>self</span>
                        <span className={punctuation}>.</span>
                        problem_solver
                        <span className={keyword}>and</span>
                        <br />

                        <span className={keyword}>len</span>
                        <span className={punctuation}>(</span>
                        <span className={variable}>self</span>
                        <span className={punctuation}>.</span>
                        skills
                        <span className={punctuation}>)</span>
                        <span className={operator}>&gt;=</span>
                        <span className={number}>{hireCriteria?.minSkills ?? 5}</span>
                    </CodeLine>

                    <CodeLine indent={2}><span className={punctuation}>)</span></CodeLine>
                </code></pre>
            </div>
        </div>
    );
};
