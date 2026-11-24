type Skill = {
  name: string;
  level: string;
  icon: string;
};

type SkillCategory = {
  title: string;
  icon: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Front-end & UI",
    icon: "fa-solid fa-code",
    skills: [
      { name: "React", level: "Avancé", icon: "fa-brands fa-react" },
      { name: "JavaScript (ES6+)", level: "Avancé", icon: "fa-brands fa-js" },
      // Remplacement de l'icône de marque par une icône FontAwesome standard qui fonctionne à coup sûr :
      { name: "Tailwind CSS", level: "Avancé", icon: "fa-solid fa-paintbrush" },
      { name: "HTML5 / CSS3", level: "Maîtrisé", icon: "fa-brands fa-html5" },
    ],
  },
  {
    title: "Back-end & Database",
    icon: "fa-solid fa-server",
    skills: [
      { name: "Node.js", level: "Intermédiaire", icon: "fa-brands fa-node-js" },
      {
        name: "Supabase / SQL",
        level: "Intermédiaire",
        icon: "fa-solid fa-database",
      },
      {
        name: "REST APIs",
        level: "Intermédiaire",
        icon: "fa-solid fa-network-wired",
      },
      { name: "Git / GitHub", level: "Maîtrisé", icon: "fa-brands fa-github" },
    ],
  },
  {
    title: "Intelligence Artificielle & Dev",
    icon: "fa-solid fa-brain",
    skills: [
      {
        name: "Intégration d'APIs LLM",
        level: "En apprentissage",
        icon: "fa-solid fa-robot",
      },
      {
        name: "Prompt Engineering",
        level: "Pratique régulière",
        icon: "fa-solid fa-wand-magic-sparkles",
      },
      {
        name: "Python / Scripting",
        level: "Notions / Bases",
        icon: "fa-brands fa-python",
      },
      {
        name: "Méthodes Agiles",
        level: "Pratique",
        icon: "fa-solid fa-users-gear",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50/50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full">
            Stack Technique
          </span>
          <h2 className="text-3xl font-bold tracking-tight mt-3 mb-4">
            Mes Compétences
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Un ensemble d'outils et de technologies modernes que j'utilise pour
            concevoir des applications web performantes et explorer l'écosystème
            de l'IA.
          </p>
        </div>

        {/* Grille des compétences */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition duration-300">
              {/* En-tête de catégorie */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-gray-700/50">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg">
                  <i className={category.icon}></i>
                </div>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>

              {/* Liste des technologies */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900/50">
                    <div className="flex items-center gap-3">
                      <i
                        className={`${skill.icon} text-emerald-600 dark:text-emerald-400 text-lg w-5 text-center`}></i>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
