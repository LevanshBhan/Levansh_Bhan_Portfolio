import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div
      className={`fixed inset-0 bg-[rgba(255,255,255,0.95)] backdrop-blur-md z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-[#4b3f2f] text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>
      <nav className="flex flex-col items-center space-y-8">
        {["home", "about", "projects", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold text-[#4b3f2f] transition"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>
    </div>
  );
};
