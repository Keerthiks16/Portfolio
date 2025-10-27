import { useState, useEffect } from "react";
import {
  MapPin,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Github,
  Linkedin,
  FileText,
  CodeXml,
} from "lucide-react";

// Import your data
import profileData from "../data/profile.json";
import experienceData from "../data/experience.json";
import projectsData from "../data/projects.json";
import BlurText from "../../ReactBits/BlurText/BlurText";
import TextType from "../../ReactBits/TextType/TextType";

// Helper function to calculate job duration
const calculateJobDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate === "Present" ? new Date() : new Date(endDate);
  let totalMonths = (end.getFullYear() - start.getFullYear()) * 12;
  totalMonths -= start.getMonth();
  totalMonths += end.getMonth();

  if (totalMonths <= 0) return "Less than a month";

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years > 0 && months > 0) return `${years} yr ${months} mos`;
  if (years > 0) return `${years} yr${years > 1 ? "s" : ""}`;
  return `${months} mo${months > 1 ? "s" : ""}`;
};

const Header = () => {
  const [projectOfTheDay, setProjectOfTheDay] = useState(null);

  useEffect(() => {
    const webProjects = projectsData.filter(
      (p) => p.category === "Web Application" || p.category === "Website"
    );
    if (webProjects.length > 0) {
      const dayOfMonth = new Date().getDate();
      const projectIndex = dayOfMonth % webProjects.length;
      setProjectOfTheDay(webProjects[projectIndex]);
    }
  }, []);

  const latestWork = experienceData.work[0];
  const latestEducation =
    experienceData.education.find((e) => e.current) ||
    experienceData.education[0];
  const workDuration = calculateJobDuration(
    latestWork.startDate,
    latestWork.endDate
  );

  return (
    <header id="home" className="h-screen p-6 md:p-8 bg-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 w-full h-full">
        {/* Intro Card */}
        <div className="md:col-span-2 md:row-span-2 bg-white border-2 border-black p-8 rounded-2xl flex flex-col justify-between shadow-lg">
          <div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-black leading-tight mb-6">
              <BlurText
                text={profileData.name}
                delay={150}
                animateBy="words"
                direction="top"
                className="text-6xl md:text-7xl lg:text-8xl"
              />
            </h1>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
              <TextType
                text={profileData.headline}
                typingSpeed={20}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </h2>

            <p className="mt-8 text-xl md:text-2xl text-gray-700 leading-relaxed">
              {profileData.shortIntro}
            </p>
          </div>

          {/* <div className="flex items-center gap-3 mt-8 text-gray-600 text-lg">
            <MapPin size={22} />
            <span>{profileData.location}</span>
          </div> */}
        </div>

        {/* Project Spotlight Card */}
        {projectOfTheDay && (
          <div className="md:col-start-3 md:col-span-2 md:row-span-1 bg-black border-2 border-black rounded-2xl overflow-hidden group relative shadow-lg">
            <img
              src={projectOfTheDay.image}
              alt={projectOfTheDay.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
            />
            <a
              href={projectOfTheDay.githubLink}
              // href="project"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8 transition-all duration-300 hover:bg-opacity-30"
            >
              <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                <p className="text-base font-semibold text-white opacity-80">
                  Project Spotlight
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-white mt-2">
                  {projectOfTheDay.title}
                </h3>
                <div className="flex items-center text-white text-lg mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Project</span>
                  <ArrowRight size={20} className="ml-2" />
                </div>
              </div>
            </a>
          </div>
        )}

        {/* Vertical Skills Marquee */}
        <div className="group md:col-start-4 md:row-start-2 md:row-span-2 bg-white border-2 border-black rounded-2xl flex flex-col justify-center  overflow-hidden shadow-lg">
          <div className="flex items-center justify-center [mask-image:_linear-gradient(to_bottom,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex flex-col animate-marquee-y group-hover:[animation-play-state:paused]">
              {[...profileData.skills, ...profileData.skills].map(
                (skill, index) => (
                  <div
                    key={index}
                    className=" flex items-center content-center justify-center align-middle my-4 py-3 px-6 whitespace-nowrap"
                  >
                    <p className=" text-center mx-auto text-3xl md:text-2xl font-semibold text-black">
                      {skill}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Experience Card */}
        <div className="md:col-start-1 md:row-start-3 bg-white border-2 border-black p-7 rounded-2xl flex items-start gap-5 shadow-lg">
          <div className="bg-black p-4 rounded-xl mt-1">
            <Briefcase className="text-white" size={26} />
          </div>
          <div>
            <p className="text-base text-gray-600 mb-1">Latest Role</p>
            <p className="font-bold text-xl text-black leading-tight">
              {latestWork.position}
            </p>
            <p className="text-base text-gray-700 mt-1">
              {latestWork.company} · {workDuration}
            </p>
          </div>
        </div>

        {/* Education Card */}
        <div className="md:col-start-2 md:row-start-3 bg-white border-2 border-black p-7 rounded-2xl flex items-start gap-5 shadow-lg">
          <div className="bg-black p-4 rounded-xl mt-1">
            <GraduationCap className="text-white" size={26} />
          </div>
          <div>
            <p className="text-base text-gray-600 mb-1">Education</p>
            <p className="font-bold text-xl text-black leading-tight">
              {latestEducation.degree}
            </p>
            <p className="text-base text-gray-700 mt-1">
              {latestEducation.institution}
            </p>
          </div>
        </div>

        {/* Links Card */}
        <div className="md:col-start-3 md:row-start-2 bg-white border-2 border-black p-7 rounded-2xl flex flex-col justify-center shadow-lg">
          <p className="text-base text-center font-semibold text-gray-600 mb-6">
            Let's Connect
          </p>
          <div className="flex justify-around">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-black rounded-full hover:bg-gray-800 transition-colors"
            >
              <Github className="text-white" size={28} />
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-black rounded-full hover:bg-gray-800 transition-colors"
            >
              <Linkedin className="text-white" size={28} />
            </a>
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-black rounded-full hover:bg-gray-800 transition-colors"
            >
              <FileText className="text-white" size={28} />
            </a>
          </div>
        </div>

        {/* Dev Stats Card */}
        <div className="md:col-start-3 md:row-start-3 bg-white border-2 border-black p-7 rounded-2xl flex flex-col justify-center gap-5 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="bg-black p-3 rounded-lg">
              <Github className="text-white" size={22} />
            </div>
            <div>
              <p className="font-bold text-xl text-black">
                {profileData.githubStats.repositories}
              </p>
              <p className="text-sm text-gray-600">Repositories</p>
            </div>
            <div className="ml-auto">
              <p className="font-bold text-xl text-black">
                {profileData.githubStats.contributions}
              </p>
              <p className="text-sm text-gray-600">Contributions</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-black p-3 rounded-lg">
              <CodeXml className="text-white" size={22} />
            </div>
            <div>
              <p className="font-bold text-xl text-black">
                {profileData.codingStats.questionsSolved}
              </p>
              <p className="text-sm text-gray-600">
                {profileData.codingStats.platform} Solved
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-y {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        .animate-marquee-y {
          animation: marquee-y 20s linear infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;
