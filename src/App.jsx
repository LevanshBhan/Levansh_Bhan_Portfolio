import { useState, useEffect } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Meteor animation logic (move from Home/Projects to here)
  useEffect(() => {
    const createMeteor = () => {
      const meteor = document.createElement("div");
      meteor.className = "meteor";
      meteor.style.left = `${Math.random() * window.innerWidth}px`;
      meteor.style.animationDuration = `${Math.random() * 2 + 2}s`;
      document.body.appendChild(meteor);

      setTimeout(() => {
        meteor.remove();
      }, 4000);
    };

    const interval = setInterval(createMeteor, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100 relative`}
      >
        {/* Global star background */}
        <div className="fixed inset-0 bg-stars pointer-events-none z-0"></div>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
