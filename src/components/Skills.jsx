import { useState } from "react";

// Import skills data
import skillsData from "../data/skills.json";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "Tools",
    "Integration",
    "Language",
    "Styling",
    "Deployment",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="min-h-screen p-6 md:p-12 bg-white">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-2">
            Skills & Expertise
          </h1>
          <p className="text-xl md:text-2xl text-gray-700">
            Technologies I've mastered through real-world projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8 border-b-2 border-black pb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold text-lg transition-all ${
                activeCategory === category
                  ? "bg-black text-white shadow-lg"
                  : "bg-white text-black border-2 border-black hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skills Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {filteredSkills.map((skill) => (
                <button
                  key={skill.id}
                  onMouseEnter={() => setHoveredSkill(skill.id)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  onClick={() => setSelectedSkill(skill)}
                  className={` relative group p-6 rounded-2xl border-2 border-black transition-all duration-300 ${
                    selectedSkill?.id === skill.id
                      ? "bg-black text-white shadow-2xl scale-105"
                      : hoveredSkill === skill.id
                      ? "bg-gray-100 shadow-lg scale-105"
                      : "bg-white hover:shadow-lg hover:scale-105"
                  }`}
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center size-24 mx-auto mb-2">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Skill Name */}
                  <h3
                    className={`text-lg font-bold mb-2 ${
                      selectedSkill?.id === skill.id
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {skill.name}
                  </h3>

                  {/* Category Badge */}
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      selectedSkill?.id === skill.id
                        ? "bg-white text-black"
                        : "bg-black text-white"
                    }`}
                  >
                    {skill.category}
                  </span>

                  {/* Proficiency Bar */}
                  <div className="mt-4">
                    <div
                      className={`h-2 rounded-full overflow-hidden ${
                        selectedSkill?.id === skill.id
                          ? "bg-gray-700"
                          : "bg-gray-200"
                      }`}
                    >
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                        style={{
                          width:
                            hoveredSkill === skill.id
                              ? `${skill.proficiency}%`
                              : "0%",
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  {hoveredSkill === skill.id && (
                    <div className="absolute -top-2 -right-2 bg-black text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                      Click for details
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              {selectedSkill ? (
                <div className="bg-black text-white p-8 rounded-2xl border-2 border-black shadow-2xl animate-fadeIn">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      {/* <span className="text-6xl">{selectedSkill.icon}</span> */}
                      <div className="flex items-center justify-center size-24 mx-auto mb-2">
                        <img
                          src={selectedSkill.icon}
                          alt={selectedSkill.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold">
                          {selectedSkill.name}
                        </h2>
                        <p className="text-gray-300 text-sm">
                          {selectedSkill.category}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Experience & Proficiency */}
                  <div className="flex gap-4 mb-6">
                    <div className="flex-1 bg-white text-black p-4 rounded-xl">
                      <p className="text-xs font-semibold text-gray-600 mb-1">
                        EXPERIENCE
                      </p>
                      <p className="text-xl font-bold">
                        {selectedSkill.experience}
                      </p>
                    </div>
                    <div className="flex-1 bg-white text-black p-4 rounded-xl">
                      <p className="text-xs font-semibold text-gray-600 mb-1">
                        PROFICIENCY
                      </p>
                      <p className="text-xl font-bold">
                        {selectedSkill.proficiency}%
                      </p>
                    </div>
                  </div>

                  {/* Used For */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      Used For
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedSkill.usedFor}
                    </p>
                  </div>

                  {/* Projects */}
                  <div>
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      Featured In
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedSkill.projects.map((project, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-white text-black rounded-lg text-sm font-semibold"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Proficiency Bar */}
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Proficiency Level</span>
                      <span className="font-bold">
                        {selectedSkill.proficiency}%
                      </span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${selectedSkill.color} transition-all duration-1000`}
                        style={{ width: `${selectedSkill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 p-8 rounded-2xl border-2 border-black text-center">
                  <div className="text-6xl mb-4">👆</div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Select a Skill
                  </h3>
                  <p className="text-gray-600">
                    Click on any skill to view detailed information about my
                    experience and how I've used it in projects.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-black text-white p-6 rounded-2xl text-center">
            <p className="text-4xl font-bold mb-2">{skillsData.length}+</p>
            <p className="text-gray-300">Technologies</p>
          </div>
          <div className="bg-black text-white p-6 rounded-2xl text-center">
            <p className="text-4xl font-bold mb-2">3+</p>
            <p className="text-gray-300">Years Coding</p>
          </div>
          <div className="bg-black text-white p-6 rounded-2xl text-center">
            <p className="text-4xl font-bold mb-2">10+</p>
            <p className="text-gray-300">Projects Built</p>
          </div>
          <div className="bg-black text-white p-6 rounded-2xl text-center">
            <p className="text-4xl font-bold mb-2">5+</p>
            <p className="text-gray-300">Deployed</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Skills;
