import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <Journey />
      <Skills />
      <Project />
      <Contact />

      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">
        <p>
          &copy; 2026 - Portfolio créé avec React et Tailwind. Tous droits
          réservés.
        </p>
      </footer>
    </div>
  );
}

export default App;
