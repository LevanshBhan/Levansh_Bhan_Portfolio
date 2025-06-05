import { useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  useEffect(() => {
    const createMeteor = () => {
      const meteor = document.createElement("div");
      meteor.className = "meteor";
      meteor.style.left = `${Math.random() * window.innerWidth}px`;
      meteor.style.animationDuration = `${Math.random() * 2 + 2}s`;
      document.body.appendChild(meteor);

      setTimeout(() => {
        meteor.remove();
      }, 4000); // Remove meteor after animation ends
    };

    const interval = setInterval(createMeteor, 500); // Create a meteor every 500ms
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center relative bg-[#1a1a1a] overflow-hidden"
    >
      {/* Starry Background */}
      <div className="absolute inset-0 bg-stars"></div>

      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#f5f5dc] to-[#d2b48c] bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* QKART Backend */}
            <div className="p-6 rounded-xl bg-[#f5f5dc] text-[#1a1a1a] hover:bg-[#d2b48c] hover:text-[#1a1a1a] transition-all duration-200 shadow-md hover:shadow-lg">
              <h3 className="text-xl font-bold mb-2">QKART Backend</h3>
              <p className="text-[#1a1a1a] mb-4">
                Designed and deployed scalable REST APIs for an e-commerce platform. Enabled secure authentication, robust cart/checkout, and CI/CD deployment. Improved reliability and test coverage with automated tests.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "JWT",
                  "Jest",
                  "Heroku",
                  "REST APIs",
                  "CI/CD",
                  "Testing",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#d2b48c] text-[#1a1a1a] py-1 px-3 rounded-full text-sm hover:bg-[#f5f5dc] hover:text-[#1a1a1a] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://qkart.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#1a1a1a] text-[#f5f5dc] py-2 px-4 rounded font-medium hover:bg-[#4b3f2f] hover:text-[#f5f5dc] transition"
              >
                View Project
              </a>
            </div>

            {/* QKART Frontend */}
            <div className="p-6 rounded-xl bg-[#f5f5dc] text-[#1a1a1a] hover:bg-[#d2b48c] hover:text-[#1a1a1a] transition-all duration-200 shadow-md hover:shadow-lg">
              <h3 className="text-xl font-bold mb-2">QKART Frontend</h3>
              <p className="text-[#1a1a1a] mb-4">
                QKart is an E-commerce application offering a variety of products
                for customers to choose from. During the course of this project:
                <ul className="list-disc pl-5">
                  <li>
                    Implemented the core logic for authentication, shopping cart,
                    and checkout.
                  </li>
                  <li>Improved UI by adding responsive design elements.</li>
                  <li>Utilized REST APIs to dynamically load and render data.</li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React.js",
                  "Material UI",
                  "React Router",
                  "Responsive Design",
                  "Debouncing",
                  "Forms",
                  "Controlled Components",
                  "REST APIs",
                  "Error Handling",
                  "Lifecycle Methods",
                  "localStorage",
                  "Netlify",
                  "Deployment",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#d2b48c] text-[#1a1a1a] py-1 px-3 rounded-full text-sm hover:bg-[#f5f5dc] hover:text-[#1a1a1a] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://qkart.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#1a1a1a] text-[#f5f5dc] py-2 px-4 rounded font-medium hover:bg-[#4b3f2f] hover:text-[#f5f5dc] transition"
              >
                View Project
              </a>
            </div>

            {/* XBOARD */}
            <div className="p-6 rounded-xl bg-[#f5f5dc] text-[#1a1a1a] hover:bg-[#d2b48c] hover:text-[#1a1a1a] transition-all duration-200 shadow-md hover:shadow-lg">
              <h3 className="text-xl font-bold mb-2">XBOARD</h3>
              <p className="text-[#1a1a1a] mb-4">
                XBoard is a News Feed website featuring the latest news for select
                topics from Flipboard. During the course of this project:
                <ul className="list-disc pl-5">
                  <li>
                    Built XBoard using HTML, CSS, Bootstrap, and JavaScript from
                    scratch.
                  </li>
                  <li>Used Accordions and Image Carousel to improve UI.</li>
                  <li>
                    Fetched news content from Flipboard's RSS feed using REST
                    APIs.
                  </li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "HTML",
                  "CSS",
                  "Bootstrap",
                  "JavaScript",
                  "REST APIs",
                  "Netlify",
                  "Bootstrap Accordion",
                  "Bootstrap Carousel",
                  "DOM Manipulation",
                  "Deployment",
                  "VS Code Live Server",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#d2b48c] text-[#1a1a1a] py-1 px-3 rounded-full text-sm hover:bg-[#f5f5dc] hover:text-[#1a1a1a] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://xboard-news-site.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#1a1a1a] text-[#f5f5dc] py-2 px-4 rounded font-medium hover:bg-[#4b3f2f] hover:text-[#f5f5dc] transition"
              >
                View Project
              </a>
            </div>

            {/* XFLIX 2022 */}
            <div className="p-6 rounded-xl bg-[#f5f5dc] text-[#1a1a1a] hover:bg-[#d2b48c] hover:text-[#1a1a1a] transition-all duration-200 shadow-md hover:shadow-lg">
              <h3 className="text-xl font-bold mb-2">XFLIX 2022</h3>
              <p className="text-[#1a1a1a] mb-4">
                Video sharing app inspired by YouTube. Built with React and Redux, featuring video filtering, likes, and uploads. Integrated a performant backend with MongoDB and optimized queries for fast data access.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React.js",
                  "Redux",
                  "MongoDB",
                  "REST APIs",
                  "Video Upload",
                  "Video Filtering",
                  "Indexed Queries",
                  "Responsive Design",
                  "Deployment",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#d2b48c] text-[#1a1a1a] py-1 px-3 rounded-full text-sm hover:bg-[#f5f5dc] hover:text-[#1a1a1a] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://xflix.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#1a1a1a] text-[#f5f5dc] py-2 px-4 rounded font-medium hover:bg-[#4b3f2f] hover:text-[#f5f5dc] transition"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
