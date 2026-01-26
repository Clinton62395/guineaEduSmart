import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Paper,
  Box,
  Container,
  CircularProgress,
  Backdrop,
  Typography,
  Fade,
  Grow,
  Zoom,
  Button,
  useTheme,
  useMediaQuery,
  alpha,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import {
  AccountCircle,
  School,
  Group,
  AdminPanelSettings,
  Person,
  SupervisorAccount,
  ArrowForward,
  Security,
  Dashboard,
  Assignment,
  Class,
  CheckCircle,
  Star,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Popup from "../components/Popup";

const ChooseUser = ({ visitor = "guest" }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

  const [loader, setLoader] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");
  const [currentRole, setCurrentRole] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Options des rôles avec plus de détails
  const userRoles = [
    {
      id: "admin",
      title: "Administrateur",
      icon: <AdminPanelSettings sx={{ fontSize: 60 }} />,
      description: "Gestion complète de la plateforme",
      features: [
        "Dashboard analytique",
        "Gestion des utilisateurs",
        "Configuration système",
        "Rapports avancés",
      ],
      color: "#1976d2",
      gradient: "linear-gradient(135deg, #1976d2, #42a5f5)",
      path: "/admin-test",
    },
    {
      id: "teacher",
      title: "Enseignant",
      icon: <SupervisorAccount sx={{ fontSize: 60 }} />,
      description: "Gestion pédagogique et suivi",
      features: [
        "Création de cours",
        "Évaluation des élèves",
        "Communication parents",
        "Planning des cours",
      ],
      color: "#FFA726",
      gradient: "linear-gradient(135deg, #FFA726, #FFCA28)",
      path: "/teacher-test",
    },
    {
      id: "student",
      title: "Élève",
      icon: <Person sx={{ fontSize: 60 }} />,
      description: "Apprentissage et collaboration",
      features: [
        "Cours en ligne",
        "Devoirs et examens",
        "Ressources pédagogiques",
        "Messagerie scolaire",
      ],
      color: "#4CAF50",
      gradient: "linear-gradient(135deg, #4CAF50, #8BC34A)",
      path: "/student-test",
    },
  ];

  // --- Simulation de connexion améliorée ---
  const mockLogin = (role) => {
    setLoader(true);
    // Simulation d'une requête API avec délai réaliste
    setTimeout(() => {
      setLoader(false);
      setCurrentRole(role);
      // Afficher un message de succès
      setMessage(`Connexion réussie en tant que ${role.title}`);
      setShowPopup(true);
    }, 1500);
  };

  const handleRoleSelection = (role) => {
    if (visitor === "guest") {
      mockLogin(role);
    } else {
      // Redirection directe pour les utilisateurs authentifiés
      navigate(role.path);
    }
  };

  // --- Redirection après "connexion" ---
  useEffect(() => {
    if (currentRole) {
      // Délai pour permettre à l'utilisateur de voir le message de succès
      const redirectTimer = setTimeout(() => {
        navigate(currentRole.path);
      }, 2000);

      return () => clearTimeout(redirectTimer);
    }
  }, [currentRole, navigate]);

  // Animation variants pour Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <StyledContainer>
      {/* Background avec effets */}
      <BackgroundOverlay />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* En-tête avec titre et description */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: "center", mb: 8, mt: 4 }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                mb: 3,
                color: "white",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                background: "linear-gradient(45deg, #fff, #FFA726)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Choisissez votre profil
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                maxWidth: 700,
                mx: "auto",
                mb: 4,
                fontWeight: 400,
              }}
            >
              Accédez à votre espace personnalisé selon votre rôle dans
              l'écosystème éducatif
            </Typography>

            {/* Indicateur visiteur */}
            <Chip
              label={visitor === "guest" ? "Mode Démo" : "Utilisateur Connecté"}
              sx={{
                bgcolor:
                  visitor === "guest"
                    ? "rgba(255, 167, 38, 0.2)"
                    : "rgba(76, 175, 80, 0.2)",
                color: visitor === "guest" ? "#FFA726" : "#4CAF50",
                px: 3,
                py: 1,
                borderRadius: 20,
                fontWeight: 600,
              }}
            />
          </Box>
        </motion.div>

        {/* Grille des cartes de rôle */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4} justifyContent="center">
            {userRoles.map((role, index) => (
              <Grid item xs={12} sm={6} md={4} key={role.id}>
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  onMouseEnter={() => setHoveredCard(role.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <RoleCard
                    role={role}
                    isHovered={hoveredCard === role.id}
                    onClick={() => handleRoleSelection(role)}
                    delay={index * 100}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Section info pour les visiteurs */}
        {visitor === "guest" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Paper
              elevation={0}
              sx={{
                mt: 8,
                p: 4,
                borderRadius: 4,
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                maxWidth: 800,
                mx: "auto",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Security sx={{ fontSize: 40, color: "#FFA726", mb: 2 }} />
                <Typography
                  variant="h5"
                  fontWeight={600}
                  color="white"
                  gutterBottom
                >
                  Mode Démo Sécurisé
                </Typography>
                <Typography color="rgba(255, 255, 255, 0.8)" paragraph>
                  Vous êtes en mode visiteur. Une simulation de connexion sera
                  effectuée pour vous montrer l'expérience complète sans
                  affecter les données réelles.
                </Typography>
                <Typography variant="body2" color="rgba(255, 255, 255, 0.6)">
                  Durée de la simulation : 1.5 secondes
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        )}
      </Container>

      {/* Loader overlay */}
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: "blur(8px)",
          background: "rgba(0, 0, 0, 0.7)",
        }}
        open={loader}
      >
        <Box sx={{ textAlign: "center" }}>
          <CircularProgress
            size={80}
            thickness={4}
            sx={{
              color: "#FFA726",
              mb: 3,
            }}
          />
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Connexion en cours...
          </Typography>
          <Typography color="rgba(255, 255, 255, 0.8)">
            Simulation de l'authentification
          </Typography>
          <Typography
            variant="body2"
            color="rgba(255, 255, 255, 0.6)"
            sx={{ mt: 1 }}
          >
            Vous serez redirigé automatiquement
          </Typography>
        </Box>
      </Backdrop>

      {/* Popup de confirmation */}
      <Popup
        message={message}
        setShowPopup={setShowPopup}
        showPopup={showPopup}
        type="success"
      />
    </StyledContainer>
  );
};

// Composant de carte de rôle séparé
const RoleCard = ({ role, isHovered, onClick, delay }) => {
  const theme = useTheme();

  return (
    <Card
      onClick={onClick}
      sx={{
        height: "100%",
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
        background: `linear-gradient(135deg, 
          ${alpha(role.color, 0.15)} 0%, 
          ${alpha(role.color, 0.05)} 100%)`,
        border: `1px solid ${alpha(role.color, 0.3)}`,
        "&:hover": {
          borderColor: role.color,
          boxShadow: `0 20px 40px ${alpha(role.color, 0.3)}`,
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: role.gradient,
          opacity: isHovered ? 1 : 0.7,
          transition: "opacity 0.3s ease",
        },
      }}
    >
      <CardActionArea sx={{ height: "100%", p: 4 }}>
        <CardContent>
          {/* Icone avec animation */}
          <motion.div
            animate={{ rotate: isHovered ? [0, 10, -10, 0] : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                background: role.gradient,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 3,
                color: "white",
                boxShadow: `0 10px 20px ${alpha(role.color, 0.3)}`,
              }}
            >
              {role.icon}
            </Box>
          </motion.div>

          {/* Titre */}
          <Typography
            variant="h4"
            fontWeight={800}
            gutterBottom
            sx={{
              color: "white",
              textAlign: "center",
              mb: 2,
            }}
          >
            {role.title}
          </Typography>

          {/* Description */}
          <Typography
            color="rgba(255, 255, 255, 0.9)"
            paragraph
            sx={{
              textAlign: "center",
              mb: 4,
              minHeight: 60,
            }}
          >
            {role.description}
          </Typography>

          {/* Liste des fonctionnalités */}
          <Box sx={{ mb: 4 }}>
            {role.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + index * 100 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1.5,
                    gap: 2,
                  }}
                >
                  <CheckCircle
                    sx={{
                      color: role.color,
                      fontSize: 20,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "0.9rem",
                    }}
                  >
                    {feature}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Bouton d'action */}
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                mt: 3,
                pt: 3,
                borderTop: `1px solid ${alpha("#fff", 0.1)}`,
              }}
            >
              <Typography
                sx={{
                  color: role.color,
                  fontWeight: 700,
                  fontSize: "1.1rem",
                }}
              >
                Accéder
              </Typography>
              <ArrowForward
                sx={{
                  color: role.color,
                  transition: "transform 0.3s ease",
                  transform: isHovered ? "translateX(5px)" : "translateX(0)",
                }}
              />
            </Box>
          </motion.div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

// Composants stylisés
const StyledContainer = styled.div`
  background: linear-gradient(135deg, #0c2461 0%, #1e3799 50%, #4a69bd 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(
      circle at 20% 50%,
      rgba(41, 128, 185, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(155, 89, 182, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 40% 80%,
      rgba(39, 174, 96, 0.1) 0%,
      transparent 50%
    );
  z-index: 0;
  pointer-events: none;
`;

const Chip = styled(Box)`
  display: inline-block;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.875rem;
`;

export default ChooseUser;
