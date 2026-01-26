import React from "react";
import { Home, ArrowLeft, BookOpen, GraduationCap } from "lucide-react";

export default function NotFound404() {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.sin(Date.now() / 1000) * 20,
        y: Math.cos(Date.now() / 800) * 15,
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated emoji */}
        <div
          className="text-9xl mb-8 inline-block transition-transform duration-100"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        >
          📚
        </div>

        {/* 404 Number */}
        <div className="relative mb-6">
          <h1 className="text-9xl font-bold text-indigo-600 opacity-10">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <GraduationCap className="w-24 h-24 text-indigo-600" />
          </div>
        </div>

        {/* Message */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Page introuvable
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Oups ! On dirait que cette page a séché les cours. Elle n'est pas dans
          notre système scolaire.
        </p>

        {/* Decorative icons */}
        <div className="flex justify-center gap-4 mb-8 text-indigo-400">
          <BookOpen
            className="w-8 h-8 animate-pulse"
            style={{ animationDelay: "0ms" }}
          />
          <BookOpen
            className="w-8 h-8 animate-pulse"
            style={{ animationDelay: "200ms" }}
          />
          <BookOpen
            className="w-8 h-8 animate-pulse"
            style={{ animationDelay: "400ms" }}
          />
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Home className="w-5 h-5" />
            Accueil
          </button>
        </div>

        {/* Additional suggestions */}
        <div className="mt-12 p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Suggestions :
          </h3>
          <ul className="text-left text-gray-600 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">•</span>
              <span>Vérifiez l'URL saisie</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">•</span>
              <span>Retournez à la page d'accueil</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">•</span>
              <span>Consultez le tableau de bord de gestion scolaire</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
