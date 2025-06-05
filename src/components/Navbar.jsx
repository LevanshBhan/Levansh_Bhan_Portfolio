import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f5f5dc] text-[#1a1a1a] border-b border-[#d2b48c]/50 shadow-md">
      <div className="w-full px-4 sm:px-6 relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="font-sans text-lg xs:text-xl sm:text-2xl font-bold text-[#4b3f2f]"
          >
            Levansh Bhan
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="w-8 h-8 flex items-center justify-center z-50 md:hidden text-[#4b3f2f] focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            &#9776;
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {["home", "about", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-[#4b3f2f] hover:text-[#8c7a6b] transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
