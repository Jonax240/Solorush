import { useState } from "react";

export default function Hero() {
  const [showPreview, setShowPreview] = useState<boolean>(false);

  return (
    <header className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex-1 text-center md:text-left">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full mb-4">
          En route vers le développement IA
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          Développeur Web &{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            Passionné Tech
          </span>
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
          Curieux, résilient et rigoureux. Actuellement en formation intensive à
          la Wild Code School, je conçois des applications web modernes et
          explore l'écosystème du numérique avec ambition.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 relative">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow-lg shadow-emerald-600/20 transition">
            Voir mes projets
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-emerald-600 font-medium transition">
            Me contacter
          </a>

          {/* Bouton CV */}
          <div className="relative inline-block">
            <a
              href="/cv.pdf"
              download
              onMouseEnter={() => setShowPreview(true)}
              onMouseLeave={() => setShowPreview(false)}
              className="px-6 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium flex items-center gap-2 transition">
              <i className="fa-solid fa-file-pdf text-emerald-600"></i>
              Télécharger mon CV
            </a>

            {/* Aperçu du CV */}
            {showPreview && (
              <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-48 p-2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 pointer-events-none transition-all duration-200">
                <img
                  src="/cv-preview.png"
                  alt="Aperçu du CV"
                  className="w-full h-auto rounded-lg shadow-inner"
                />
                <p className="text-center text-[10px] text-gray-500 mt-1">
                  Aperçu du CV
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Illustration */}
      <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-linear-to-tr from-emerald-600 to-emerald-400 p-1 shadow-xl flex items-center justify-center shrink-0">
        <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-5xl text-emerald-600">
          <i className="fa-solid fa-code"></i>
        </div>
      </div>
    </header>
  );
}
