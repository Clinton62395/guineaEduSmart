import React from "react";
import { AlertTriangle, RefreshCw, Home, Bug } from "lucide-react";

const SentryFallback = ({ error, componentStack, resetError }) => {
  const handleReload = () => window.location.reload();
  const handleHome = () => (window.location.href = "/");

  const isDev = import.meta.env.MODE === "development";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Icône */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500 rounded-full opacity-20 animate-ping" />
              <div className="relative bg-red-100 rounded-full p-6">
                <AlertTriangle className="w-16 h-16 text-red-600" />
              </div>
            </div>
          </div>

          {/* Titre */}
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Oups ! Une erreur s'est produite
          </h1>

          {/* Message */}
          <p className="text-gray-600 text-center mb-8">
            Une erreur inattendue a interrompu l'application.
            <br />
            Notre équipe a été automatiquement notifiée.
          </p>

          {/* Détails DEV */}
          {isDev && error && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-red-500">
              <div className="flex items-start gap-2 mb-2">
                <Bug className="w-5 h-5 text-red-600 mt-0.5" />
                <h3 className="font-semibold text-gray-800">
                  Détails de l'erreur (dev)
                </h3>
              </div>

              <p className="text-sm text-red-600 font-mono mb-2">
                {error.toString()}
              </p>

              {componentStack && (
                <details className="mt-2">
                  <summary className="text-sm text-gray-600 cursor-pointer">
                    Stack trace
                  </summary>
                  <pre className="mt-2 text-xs text-gray-600 overflow-auto max-h-40 bg-white p-2 rounded">
                    {componentStack}
                  </pre>
                </details>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <button
              onClick={resetError}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition shadow-md"
            >
              <RefreshCw className="w-5 h-5" />
              Réessayer
            </button>

            <button
              onClick={handleReload}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-red-600 border-2 border-red-600 rounded-lg font-semibold hover:bg-red-50 transition shadow-md"
            >
              <RefreshCw className="w-5 h-5" />
              Recharger
            </button>

            <button
              onClick={handleHome}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition shadow-md"
            >
              <Home className="w-5 h-5" />
              Accueil
            </button>
          </div>

          {/* Conseils */}
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">
              Que faire ensuite ?
            </h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Rafraîchir la page</li>
              <li>• Vérifier la connexion</li>
              <li>• Contacter le support si nécessaire</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentryFallback;
