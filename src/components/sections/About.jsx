import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React.js",
    "Redux",
    "TypeScript",
    "HTML5",
    "CSS3",
    "MUI",
    "Bootstrap",
    "Tailwind CSS",
    "Vite",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "ASP.NET Core",
    "REST APIs",
    "Python",
    "Java",
  ];

  const databaseSkills = ["MongoDB", "PostgreSQL", "MS SQL Server", "Redis"];

  const devOpsSkills = [
    "Git",
    "Docker",
    "GitHub Actions",
    "CI/CD",
    "AWS",
    "Postman",
  ];

  const coreStrengths = [
    "Agile Development",
    "Performance Optimization",
    "Problem-Solving",
    "Team Collaboration",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative bg-[#fdf6ed] overflow-hidden py-16"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#8ecae6] to-[#d2b48c] bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="section-accent"></div>
          <p className="text-[#232323] text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            I’ve worked on real-world fullstack projects during internships at{" "}
            <span className="font-semibold text-[#d2b48c]">PwC</span> and{" "}
            <span className="font-semibold text-[#d2b48c]">Amicus Infotech</span>
            — from building internal platforms to deploying live e-commerce systems.
            <br />
            <br />
            Currently pursuing Master's in Computer Science at{" "}
            <span className="font-semibold text-[#d2b48c]">Technische Universität Darmstadt</span>, I’m
            looking for a working student role where I can contribute to scalable
            products, clean code, and great user experience.
          </p>

          {/* Skills Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend Skills */}
            <div className="p-6 rounded-xl bg-[#fdf6ed] text-[#1a1a1a] border border-[#e3f2fd] hover:bg-[#e3f2fd] hover:text-[#1a1a1a] transition-all duration-200 shadow-lg hover:shadow-2xl">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#d2b48c] border border-[#e3f2fd] text-[#1a1a1a] py-1 px-3 rounded-full text-sm hover:bg-[#f5f5dc] hover:text-[#1a1a1a] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="p-6 rounded-xl bg-[#fdf6ed] text-[#1a1a1a] border border-[#e3f2fd] hover:bg-[#e3f2fd] hover:text-[#1a1a1a] transition-all duration-200 shadow-lg hover:shadow-2xl">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#d2b48c] border border-[#e3f2fd] text-[#1a1a1a] py-1 px-3 rounded-full text-sm hover:bg-[#f5f5dc] hover:text-[#1a1a1a] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Database Skills */}
            <div className="p-6 rounded-xl bg-[#fdf6ed] text-[#1a1a1a] border border-[#e3f2fd] hover:bg-[#e3f2fd] hover:text-[#1a1a1a] transition-all duration-200 shadow-lg hover:shadow-2xl">
              <h3 className="text-xl font-bold mb-4">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {databaseSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#d2b48c] border border-[#e3f2fd] text-[#1a1a1a] py-1 px-3 rounded-full text-sm hover:bg-[#f5f5dc] hover:text-[#1a1a1a] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps Skills */}
            <div className="p-6 rounded-xl bg-[#fdf6ed] text-[#1a1a1a] border border-[#e3f2fd] hover:bg-[#e3f2fd] hover:text-[#1a1a1a] transition-all duration-200 shadow-lg hover:shadow-2xl">
              <h3 className="text-xl font-bold mb-4">DevOps & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {devOpsSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#d2b48c] border border-[#e3f2fd] text-[#1a1a1a] py-1 px-3 rounded-full text-sm hover:bg-[#f5f5dc] hover:text-[#1a1a1a] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Strengths */}
            <div className="p-6 rounded-xl bg-[#fdf6ed] text-[#1a1a1a] border border-[#e3f2fd] hover:bg-[#e3f2fd] hover:text-[#1a1a1a] transition-all duration-200 shadow-lg hover:shadow-2xl">
              <h3 className="text-xl font-bold mb-4">Core Strengths</h3>
              <div className="flex flex-wrap gap-2">
                {coreStrengths.map((strength, key) => (
                  <span
                    key={key}
                    className="bg-[#d2b48c] border border-[#e3f2fd] text-[#1a1a1a] py-1 px-3 rounded-full text-sm hover:bg-[#f5f5dc] hover:text-[#1a1a1a] transition"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl bg-[#fdf6ed] text-[#1a1a1a] border border-[#e3f2fd] hover:bg-[#e3f2fd] hover:text-[#1a1a1a] transition-all duration-200 shadow-lg hover:shadow-2xl">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-[#1a1a1a] space-y-2">
                <li>
                  <strong>M.Sc. Computer Science</strong> - TU Darmstadt
                  <br />
                  Oct 2024 – Present | Darmstadt, DE
                  <br />
                  Focus: AI and Data Science
                </li>
                <li>
                  <strong>B.E. Computer Science</strong> - Savitribai Phule Pune Univ.
                  <br />
                  Aug 2019 – Jul 2023 | Pune, IN
                  <br />
                  Final Grade: 1.7 (German scale), First Class with Distinction
                  <br />
                  Core: OS, Data Structures, ML, Algorithms
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};