import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0 flex items-center h-full">
            <a href="#" className="flex items-center h-full group">
              <img
                src="/logo.png"
                alt="GAROU Jonathan"
                className="h-8 sm:h-10 w-auto object-contain transition duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Badge opportunités */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Ouvert aux opportunités (Alternance)
          </div>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#journey"
              className="text-sm font-medium hover:text-emerald-600 transition">
              Parcours
            </a>
            <a
              href="#skills"
              className="text-sm font-medium hover:text-emerald-600 transition">
              Compétences
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-emerald-600 transition">
              Projets
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-emerald-600 transition">
              Contact
            </a>

            <button
              onClick={toggleDarkMode}
              aria-label="Changer le thème"
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition">
              <i
                className={`fa-solid ${darkMode ? "fa-sun" : "fa-moon"} text-base`}></i>
            </button>
          </div>

          {/* Navigation mobile */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              aria-label="Changer le thème"
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
              <i
                className={`fa-solid ${darkMode ? "fa-sun" : "fa-moon"} text-base`}></i>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Ouvrir le menu"
              aria-expanded={isOpen}
              className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 focus:outline-none p-2">
              <i
                className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 pt-2 pb-4 space-y-3 shadow-lg">
          <div className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Ouvert aux opportunités (Alternance)
          </div>

          <a
            href="#journey"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
            Parcours
          </a>
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
            Compétences
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
            Projets
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
