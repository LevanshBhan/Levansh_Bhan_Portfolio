import { useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
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
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-transparent overflow-hidden"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#f5f5dc] to-[#d2b48c] bg-clip-text text-transparent leading-tight">
            Hallo, I'm Levansh Bhan
          </h1>

          <p className="text-[#f5f5dc] text-lg mb-8 max-w-lg mx-auto">
            I’m a full-stack developer focused on building reliable, performant web
            applications with clean architecture and thoughtful design.
            <br />
            <br />
            <strong>Goal:</strong> To contribute to high-impact products by
            delivering scalable code, seamless user experiences, and consistent
            technical quality — as part of a collaborative, purpose-driven team.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="bg-[#d2b48c] text-[#1a1a1a] py-2.5 px-5 sm:py-3 sm:px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(210,180,140,0.4)] text-base sm:text-lg"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-[#8c7a6b] text-[#f5f5dc] py-2.5 px-5 sm:py-3 sm:px-6 rounded font-medium transition-all duration-200 
    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(75,63,47,0.2)] hover:bg-[#8c7a6b] hover:text-[#1a1a1a] text-base sm:text-lg"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              download
              className="bg-[#d2b48c] text-[#1a1a1a] py-2.5 px-5 sm:py-3 sm:px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(210,180,140,0.4)] text-base sm:text-lg"
            >
              Download Resume
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
