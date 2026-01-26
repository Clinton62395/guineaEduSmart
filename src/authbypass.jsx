import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthBypass = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Stocker un utilisateur factice dans localStorage
    const mockUser = {
      name: "Admin Test",
      email: "test@example.com",
      role: "Admin",
      id: "12345",
    };

    localStorage.setItem("user", JSON.stringify(mockUser));
    localStorage.setItem("token", "mock-jwt-token-12345");

    console.log("Auth bypass activé - Utilisateur mock créé");
  }, []);

  return (
    <div>
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
        <div className="flex">
          <div className="flex-shrink-0">⚠️</div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Mode test activé :</strong> L'authentification est
              bypassée.
              <button
                onClick={() => navigate("/")}
                className="ml-2 text-blue-600 underline"
              >
                Retour à l'accueil
              </button>
            </p>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default AuthBypass;
