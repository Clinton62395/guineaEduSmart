// App.jsx
import React from "react";
import {
  Users,
  BarChart3,
  ShieldCheck,
  Cloud,
  Bell,
  Smartphone,
  CheckCircle,
  MessageSquare,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const HomeSection = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-yellow-50 to-red-50 opacity-70"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Révolutionnez la{" "}
                <span className="text-green-600">Gestion Scolaire</span> en
                Guinée
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                GuineaEduHub est la première plateforme de gestion scolaire
                intégrée conçue spécifiquement pour les établiss1ements
                d'enseignement guinéens. Simplifiez l'administration, connectez
                les enseignants, les élèves et les parents.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center">
                  <span>Découvrir les Fonctionnalités</span>
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </button>
                <button className="px-8 py-3 bg-white border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-all duration-300">
                  Voir la Démo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-6">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-600 rounded-full opacity-20"></div>

                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 mb-6">
                  <div className="flex space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="text-green-400 text-xs font-semibold mb-1">
                        Élèves Actifs
                      </div>
                      <div className="text-white text-xl font-bold">2,847</div>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="text-yellow-400 text-xs font-semibold mb-1">
                        Classes
                      </div>
                      <div className="text-white text-xl font-bold">84</div>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="text-red-400 text-xs font-semibold mb-1">
                        Taux Présence
                      </div>
                      <div className="text-white text-xl font-bold">94%</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-green-800 font-bold mb-1">
                      Réseau Connecté
                    </div>
                    <div className="text-gray-700 text-sm">
                      12 Écoles Connectées
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="text-yellow-800 font-bold mb-1">
                      Notifications
                    </div>
                    <div className="text-gray-700 text-sm">
                      24 Nouveaux Messages
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-r from-red-100 to-yellow-100 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fonctionnalités Principales
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Une plateforme complète conçue pour répondre aux besoins
              spécifiques du système éducatif guinéen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BarChart3 className="text-green-600" size={32} />}
              title="Tableaux de Bord Intelligents"
              description="Visualisez les données clés de votre établissement avec des rapports personnalisables et des analyses prédictives."
              color="green"
            />

            <FeatureCard
              icon={<Users className="text-yellow-600" size={32} />}
              title="Gestion des Utilisateurs"
              description="Administrez facilement les élèves, enseignants, parents et personnel administratif avec des profils détaillés."
              color="yellow"
            />

            <FeatureCard
              icon={<ShieldCheck className="text-red-600" size={32} />}
              title="Sécurité Renforcée"
              description="Protection des données sensibles avec chiffrement de bout en bout et authentification multi-facteurs."
              color="red"
            />

            <FeatureCard
              icon={<Cloud className="text-green-600" size={32} />}
              title="Cloud Local"
              description="Hébergement sur des serveurs locaux en Guinée pour une latence minimale et conformité aux régulations."
              color="green"
            />

            <FeatureCard
              icon={<Bell className="text-yellow-600" size={32} />}
              title="Communication Intégrée"
              description="Notifications en temps réel, messagerie sécurisée et alertes SMS pour toute la communauté scolaire."
              color="yellow"
            />

            <FeatureCard
              icon={<Smartphone className="text-red-600" size={32} />}
              title="Application Mobile"
              description="Accédez à toutes les fonctionnalités depuis votre smartphone, même avec une connexion limitée."
              color="red"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à révolutionner votre établissement?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Rejoignez les 50+ écoles qui ont déjà adopté GuineaEduHub et faites
            partie de la transformation numérique de l'éducation en Guinée.
          </p>
          <Link
            to="/choose"
            className="px-10 py-4 bg-white text-green-700 font-bold text-lg rounded-lg hover:bg-gray-100 shadow-xl transition-all duration-300"
          >
            Commencer l'Essai Gratuit
          </Link>
          <p className="mt-4 opacity-80">
            30 jours d'essai gratuit • Aucune carte de crédit requise
          </p>
        </div>
      </section>
    </div>
  );
};

// Component for Feature Cards
const FeatureCard = ({ icon, title, description, color }) => {
  const colorClasses = {
    green: "border-green-200 hover:border-green-400",
    yellow: "border-yellow-200 hover:border-yellow-400",
    red: "border-red-200 hover:border-red-400",
  };

  return (
    <div
      className={`bg-white p-6 rounded-xl border-2 ${colorClasses[color]} shadow-sm hover:shadow-md transition-all duration-300`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

// Component for Benefit Cards
const BenefitCard = ({ title, items, gradient }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className={`bg-gradient-to-r ${gradient} text-white p-6`}>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="p-6">
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Component for Testimonial Cards
const TestimonialCard = ({ name, role, content, color }) => {
  const colorClasses = {
    green: "bg-green-50 border-green-100",
    yellow: "bg-yellow-50 border-yellow-100",
    red: "bg-red-50 border-red-100",
  };

  const dotColors = {
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    red: "bg-red-500",
  };

  return (
    <div className={`p-6 rounded-xl border ${colorClasses[color]} shadow-sm`}>
      <div className="flex items-center mb-6">
        <div
          className={`w-12 h-12 ${dotColors[color]} rounded-full flex items-center justify-center text-white font-bold text-lg`}
        >
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{content}"</p>
      <div className="flex mt-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
    </div>
  );
};

export default HomeSection;
