import React from "react";
import { AlertTriangle, RefreshCw, Home, Bug } from "lucide-react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // Log l'erreur à un service de reporting (ex: Sentry)
    console.error("Error caught by boundary:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleHome = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            {/* Card principale */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              {/* Icône d'erreur animée */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-500 rounded-full opacity-20 animate-ping"></div>
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
                Une erreur inattendue a interrompu l'application. Nos
                développeurs ont été notifiés et travaillent sur le problème.
              </p>

              {/* Détails de l'erreur (mode développement) */}
              {import.meta.env.Mode === "development" && this.state.error && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-start gap-2 mb-2">
                    <Bug className="w-5 h-5 text-red-600 mt-0.5" />
                    <h3 className="font-semibold text-gray-800">
                      Détails de l'erreur (mode développement)
                    </h3>
                  </div>
                  <p className="text-sm text-red-600 font-mono mb-2">
                    {this.state.error.toString()}
                  </p>
                  {this.state.errorInfo && (
                    <details className="mt-2">
                      <summary className="text-sm text-gray-600 cursor-pointer hover:text-gray-800">
                        Stack trace
                      </summary>
                      <pre className="mt-2 text-xs text-gray-600 overflow-auto max-h-40 bg-white p-2 rounded">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                <button
                  onClick={this.handleReset}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <RefreshCw className="w-5 h-5" />
                  Réessayer
                </button>

                <button
                  onClick={this.handleReload}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-red-600 border-2 border-red-600 rounded-lg font-semibold hover:bg-red-50 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <RefreshCw className="w-5 h-5" />
                  Recharger la page
                </button>

                <button
                  onClick={this.handleHome}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <Home className="w-5 h-5" />
                  Accueil
                </button>
              </div>

              {/* Suggestions */}
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Que faire ensuite ?
                </h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>
                      Rafraîchissez la page pour réinitialiser l'application
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Vérifiez votre connexion internet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Contactez le support si le problème persiste</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Composant de démonstration avec un bouton pour déclencher une erreur
function DemoComponent() {
  const [count, setCount] = React.useState(0);

  if (count > 5) {
    throw new Error("Limite de clics dépassée ! Erreur de démonstration.");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Démonstration Error Boundary
        </h2>
        <p className="text-gray-600 mb-6">
          Cliquez plus de 5 fois pour déclencher une erreur
        </p>
        <div className="mb-6">
          <div className="text-5xl font-bold text-indigo-600 mb-2">{count}</div>
          <p className="text-sm text-gray-500">Clics restants : {5 - count}</p>
        </div>
        <button
          onClick={() => setCount(count + 1)}
          className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Cliquer ({count})
        </button>
      </div>
    </div>
  );
}

export default ErrorBoundary;
