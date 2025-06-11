import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-[#fdf6ed] overflow-hidden py-16"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-[#8ecae6] to-[#d2b48c] bg-clip-text text-transparent leading-tight">
            Hallo, I'm Levansh Bhan
          </h1>
          <div className="section-accent"></div>
          <p className="text-[#232323] text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            A full-stack developer building clean, efficient, and scalable web
            applications with a strong focus on usability and performance.
            <br />
            <br />
            <span className="font-semibold text-[#8ecae6]">
              <strong>Goal:</strong>
            </span>{" "}
            To contribute to high-impact products by delivering scalable code,
            seamless user experiences, and consistent technical quality — as part
            of a collaborative, purpose-driven team.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="bg-[#d2b48c] text-[#1a1a1a] py-2.5 px-5 sm:py-3 sm:px-6 rounded font-medium border border-[#d2b48c] transition-all duration-200 shadow-lg hover:bg-[#e3f2fd] hover:text-[#1a1a1a] hover:shadow-2xl hover:scale-105 focus:ring-2 focus:ring-[#8ecae6] text-base sm:text-lg"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="bg-[#d2b48c] text-[#1a1a1a] py-2.5 px-5 sm:py-3 sm:px-6 rounded font-medium border border-[#d2b48c] transition-all duration-200 shadow-lg hover:bg-[#e3f2fd] hover:text-[#1a1a1a] hover:shadow-2xl hover:scale-105 focus:ring-2 focus:ring-[#8ecae6] text-base sm:text-lg"
            >
              Contact Me
            </a>

            <a
              href="https://drive.google.com/file/d/1QUhtfNmK5xKx9eRRV_4YC9ylrTBtvLKu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#d2b48c] text-[#1a1a1a] py-2.5 px-5 sm:py-3 sm:px-6 rounded font-medium border border-[#d2b48c] transition-all duration-200 shadow-lg hover:bg-[#e3f2fd] hover:text-[#1a1a1a] hover:shadow-2xl hover:scale-105 focus:ring-2 focus:ring-[#8ecae6] text-base sm:text-lg"
            >
              Lebenslauf
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
