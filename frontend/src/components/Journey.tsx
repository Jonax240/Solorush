export default function Journey() {
  return (
    <section
      id="journey"
      className="py-20 bg-white dark:bg-gray-800/50 border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Mon Parcours
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Une trajectoire guidée par la curiosité et l'apprentissage continu.
          </p>
        </div>

        <div className="relative border-l-2 border-emerald-500/30 ml-4 md:ml-32 space-y-12">
          {/* Étape 1 */}
          <div className="relative pl-8">
            <div className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-white dark:ring-gray-900"></div>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              2023
            </span>
            <h3 className="text-xl font-bold mt-1">
              Baccalauréat STI2D option SIN
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Systèmes d'Information et Numérique
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Réalisation de projets concrets comme le potager "Grow Up" et un
              projet de ballon stratosphérique. Premiers pas techniques avec le
              langage C sur Arduino et une légère introduction à l'HTML.
            </p>
          </div>

          {/* Étape 2 */}
          <div className="relative pl-8">
            <div className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-white dark:ring-gray-900"></div>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Première année de BUT Informatique
            </span>
            <h3 className="text-xl font-bold mt-1">
              IUT de Villetaneuse (Paris XIII)
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              Immersion dans l'informatique fondamentale : découverte de Linux
              et du terminal, introduction à Git/GitHub, bases de données SQL,
              Python, Java et approfondissement des langages web (HTML/CSS/JS).
            </p>
          </div>

          {/* Étape 3 */}
          <div className="relative pl-8">
            <div className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-white dark:ring-gray-900"></div>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              2024 - 2025
            </span>
            <h3 className="text-xl font-bold mt-1">
              Service Civique (8 mois) & Recherches actives
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              Engagement citoyen de 8 mois à compter de mars 2025. Malgré une
              recherche active d'alternance pour reprendre les études, les
              opportunités n'ont pas abouti immédiatement, ce qui a renforcé ma
              détermination à rebondir.
            </p>
          </div>

          {/* Étape 4 */}
          <div className="relative pl-8">
            <div className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-white dark:ring-gray-900"></div>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Mars 2026 (6 mois)
            </span>
            <h3 className="text-xl font-bold mt-1">
              Formation "Level Up" — Simplon.co
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              Intégration d'un parcours de découverte et professionnalisation
              numérique riche en projets collectifs :
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
              <li>
                <strong>Game Jam / Hackathon</strong> avec le lycée Le Rebours
                (création d'un jeu en 5 jours).
              </li>
              <li>
                <strong>Hackathon solidaire</strong> avec l'association Aurore
                (aide aux personnes isolées) : création d'un site vitrine avec
                intégration d'un formulaire via Supabase.
              </li>
              <li>
                <strong>Game Jam longue (1 mois) :</strong> Création et
                publication du jeu "Dans la rue" sur itch.io.
              </li>
            </ul>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Obtention des certifications CIF et Agilité. Choix de laisser de
              côté la certif CMS pour me tourner vers un cursus intensif.
            </p>
          </div>

          {/* Étape 5 */}
          <div className="relative pl-8">
            <div className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-white dark:ring-gray-900"></div>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Septembre 2026 (Actuel)
            </span>
            <h3 className="text-xl font-bold mt-1">
              Formation DWWM — Wild Code School
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              5 mois en intensif — Équivalent RNCP Niveau 5
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Découverte d'un large catalogue de métiers et technologies qui
              consolide mon projet professionnel : me spécialiser à terme dans
              le <strong>développement IA</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
