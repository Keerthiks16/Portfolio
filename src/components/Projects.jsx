import { useState } from "react";
import {
  ExternalLink,
  Code2,
  Smartphone,
  Globe,
  Monitor,
  Images,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Import your data
import projectsData from "../data/projects.json";

const ImageSliderModal = ({ images, isOpen, onClose, projectTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      id="project"
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
    >
      <div className="relative w-full max-w-5xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X size={32} />
        </button>

        {/* Image Container */}
        <div className="relative bg-white rounded-2xl overflow-hidden">
          <img
            src={images[currentIndex]}
            alt={`${projectTitle} - Image ${currentIndex + 1}`}
            className="w-full h-[70vh] object-contain bg-gray-100"
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="flex gap-2 mt-4 justify-center overflow-x-auto pb-2">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  currentIndex === index
                    ? "border-white scale-110"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [sliderModal, setSliderModal] = useState({
    isOpen: false,
    images: [],
    title: "",
  });

  const tabs = [
    { name: "All", icon: Code2 },
    { name: "Web Application", icon: Monitor },
    { name: "Website", icon: Globe },
    // { name: "Mobile App", icon: Smartphone },
  ];

  const filterProjects = (tab) => {
    if (tab === "All") return projectsData;

    return projectsData.filter((project) => {
      if (tab === "Web Application") {
        return project.category.includes("Web Application");
      }
      if (tab === "Mobile App") {
        return project.category.includes("Mobile App");
      }
      if (tab === "Website") {
        return project.category === "Website";
      }
      return true;
    });
  };

  const filteredProjects = filterProjects(activeTab);

  const openSlider = (images, title) => {
    setSliderModal({ isOpen: true, images, title });
  };

  const closeSlider = () => {
    setSliderModal({ isOpen: false, images: [], title: "" });
  };

  return (
    <section id="projects" className="min-h-screen p-6 md:p-12 bg-white">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-2">
            Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-700">
            Showcasing my work across web and mobile platforms
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-4 border-b-2 border-black pb-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-lg transition-all ${
                  activeTab === tab.name
                    ? "bg-black text-white shadow-lg"
                    : "bg-white text-black border-2 border-black hover:bg-gray-100"
                }`}
              >
                <Icon size={22} />
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border-2 border-black rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                />
                <div className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  {project.category
                    .replace("Application (", "")
                    .replace(")", "")
                    .replace("Web Application (Both)", "Web & Mobile")}
                </div>

                {/* Images Button - Only show if project has multiple images */}
                {project.images && project.images.length > 0 && (
                  <button
                    onClick={() => openSlider(project.images, project.title)}
                    className="absolute top-4 left-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                  >
                    <Images size={18} />
                    Images ({project.images.length})
                  </button>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
                  {project.title}
                </h3>
                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-black mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-700 flex items-start gap-2"
                      >
                        <span className="text-black font-bold mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {/* GitHub Button */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 flex-1 bg-black text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors"
                  >
                    <Code2 size={20} />
                    GitHub
                  </a>

                  {/* Deployed Button with Hover Tooltip */}
                  {project.deployedLink && (
                    <div className="relative flex-1 group/deploy">
                      <a
                        href={project.deployedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full bg-white border-2 border-black text-black py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </a>

                      {/* Hover Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-64 bg-black text-white p-4 rounded-xl shadow-2xl opacity-0 invisible group-hover/deploy:opacity-100 group-hover/deploy:visible transition-all duration-200 pointer-events-none z-10">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-black"></div>
                        <p className="text-xs font-semibold mb-2">
                          DEMO CREDENTIALS
                        </p>
                        <div className="space-y-1 text-sm">
                          <p>
                            <span className="font-semibold">User:</span>{" "}
                            {project.sampleCredentials?.username || "N/A"}
                          </p>
                          <p>
                            <span className="font-semibold">Pass:</span>{" "}
                            {project.sampleCredentials?.password || "N/A"}
                          </p>
                        </div>
                        <p className="text-xs mt-2 text-gray-300">
                          {project.deployedLink}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-600">
              No projects found in this category
            </p>
          </div>
        )}
      </div>

      {/* Image Slider Modal */}
      <ImageSliderModal
        images={sliderModal.images}
        isOpen={sliderModal.isOpen}
        onClose={closeSlider}
        projectTitle={sliderModal.title}
      />
    </section>
  );
};

export default Projects;
