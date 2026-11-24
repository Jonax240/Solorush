type ProjectData = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  link?: string | null;
  linkText?: string;
  titleLink?: string | null;
  siteLink?: string | null;
  siteText?: string;
  githubLink?: string | null;
};

const projectsData: ProjectData[] = [
  {
    title: '"Dans la rue"',
    category: "Game Jam (1 mois)",
    description:
      "Jeu thématisé sur l'agitation urbaine, développé en équipe durant un mois et publié sur itch.io.",
    tags: ["Godot", "GDScript", "Game Design"],
    link: "https://laurianegrcn.itch.io/dans-la-rue",
    linkText: "Jouer sur itch.io",
    titleLink: null,
    siteLink: null,
    githubLink: null,
  },
  {
    title: "Application Simplon.co pour les apprenants",
    category: "Hackathon Solidaire",
    description:
      "Application web interactive vibe-codée lors d'un hackathon solidaire pour accompagner les apprenants à la fin de leur formation Simplon, avec intégration d'un formulaire sécurisé connecté à Supabase.",
    tags: ["React / JS", "Supabase", "Tailwind CSS"],
    link: null,
    titleLink: "https://boost-avenir.vercel.app/",
    siteLink: "https://jonax240.github.io/Boost-Avenir4/",
    siteText: "Voir le site",
    githubLink: "https://github.com/jonax240/Boost-Avenir4",
  },
];

export default function Project() {
  return (
    <section
      id="projects"
      className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Mes Projets Clés
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Des réalisations concrètes issues de mes hackathons, game jams et
          formations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.title}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between transition hover:border-emerald-500/50">
            <div>
              <span className="px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full">
                {project.category}
              </span>

              {/* Le titre est cliquable uniquement s'il y a un titleLink (Hackathon) */}
              <h3 className="text-xl font-bold mt-4 mb-2">
                {project.titleLink ? (
                  <a
                    href={project.titleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 transition inline-flex items-center gap-2">
                    {project.title}{" "}
                    <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                  </a>
                ) : (
                  project.title
                )}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md text-gray-600 dark:text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Zone des liens selon le projet */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700/50">
                {project.link ? (
                  /* Affichage pour la Game Jam */
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline">
                    {project.linkText}{" "}
                    <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                  </a>
                ) : (
                  /* Affichage pour le Hackathon (Voir le site + GitHub) */
                  <>
                    {project.siteLink && (
                      <a
                        href={project.siteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline">
                        {project.siteText}{" "}
                        <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                      </a>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition">
                        <i className="fa-brands fa-github text-lg"></i> Code
                        source
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
