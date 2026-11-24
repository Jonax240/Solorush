import { useState } from "react";
import type { SubmitEvent } from "react";

type ProfileType = "entreprise" | "ecole" | "client";

type ProfileOption = {
  id: ProfileType;
  label: string;
};

const profileOptions: ProfileOption[] = [
  { id: "entreprise", label: "Entreprise / Recruteur" },
  { id: "ecole", label: "École / Formation" },
  { id: "client", label: "Client / Autre" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [profileType, setProfileType] = useState<ProfileType>("entreprise");

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full">
            Restons en contact
          </span>
          <h2 className="text-3xl font-bold tracking-tight mt-3 mb-4">
            Me Contacter
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Une opportunité d'alternance, un projet ou une question ?
            Écrivez-moi directement via ce formulaire.
          </p>
        </div>

        {submitted ? (
          <div className="max-w-2xl mx-auto p-8 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center text-emerald-600 dark:text-emerald-400 shadow-sm animate-fade-in">
            <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl shadow-md">
              <i className="fa-solid fa-check"></i>
            </div>
            <h3 className="text-lg font-bold mb-1">
              Message envoyé avec succès !
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Merci pour votre message. Je vous répondrai dans les plus brefs
              délais.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div>
              <label className="block text-sm font-medium mb-2">
                Vous êtes :
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {profileOptions.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setProfileType(item.id)}
                    className={`py-3 px-3 text-xs sm:text-sm font-medium rounded-xl border transition text-center ${
                      profileType === item.id
                        ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400 shadow-sm"
                        : "border-gray-300 dark:border-gray-700 hover:border-gray-400 text-gray-600 dark:text-gray-400 bg-transparent"
                    }`}>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nom</label>
                <input
                  type="text"
                  required
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-emerald-600 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  placeholder="votre.email@exemple.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-emerald-600 focus:outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={5}
                required
                placeholder="Votre message ici..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-emerald-600 focus:outline-none transition"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-600/70 text-white font-semibold shadow-lg shadow-emerald-600/20 transition flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed">
              {isLoading ? (
                <>
                  <i className="fa-solid fa-spinner animate-spin text-lg"></i>
                  Envoi en cours...
                </>
              ) : (
                "Envoyer le message"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
