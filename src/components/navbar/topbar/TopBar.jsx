// src/components/layout/TopBar.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Badge,
  Chip,
  Divider,
  ListItemIcon,
  ListItemText,
  Tooltip,
  useTheme,
  useMediaQuery,
  alpha,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Notifications,
  AccountCircle,
  Settings,
  Lock,
  Logout,
  Person,
  School,
  Dashboard,
  ArrowDropDown,
  Brightness4,
  Brightness7,
  Mail,
  Warning,
  Assignment,
  CheckCircle,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "@emotion/styled";

// Types d'utilisateurs
const USER_ROLES = {
  ADMIN: {
    label: "Administrateur",
    icon: <Settings />,
    color: "#1976d2",
    shortLabel: "Admin",
  },
  TEACHER: {
    label: "Enseignant",
    icon: <School />,
    color: "#FFA726",
    shortLabel: "Enseignant",
  },
  PARENT: {
    label: "Parent",
    icon: <Person />,
    color: "#4CAF50",
    shortLabel: "Parent",
  },
  STUDENT: {
    label: "Élève",
    icon: <AccountCircle />,
    color: "#9C27B0",
    shortLabel: "Élève",
  },
};

// Type de notification
const NOTIFICATION_TYPES = {
  INFO: { icon: <Mail />, color: "#2196F3" },
  WARNING: { icon: <Warning />, color: "#FF9800" },
  SUCCESS: { icon: <CheckCircle />, color: "#4CAF50" },
  ASSIGNMENT: { icon: <Assignment />, color: "#9C27B0" },
};

// Composant Styled
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
  borderBottom: `1px solid ${theme.palette.divider}`,
  backdropFilter: "blur(10px)",
  zIndex: theme.zIndex.drawer + 1,
  transition: "all 0.3s ease",
  height: 70,
  display: "flex",
  justifyContent: "center",
}));

const UserAvatar = styled(Avatar)(({ rolecolor }) => ({
  width: 40,
  height: 40,
  backgroundColor: rolecolor ? `${rolecolor}20` : "#e0e0e0",
  color: rolecolor || "#757575",
  border: `2px solid ${rolecolor}40`,
  fontWeight: 600,
  fontSize: "1rem",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: `0 0 0 3px ${rolecolor}20`,
  },
}));

const RoleBadge = styled(Chip)(({ rolecolor }) => ({
  backgroundColor: `${rolecolor}15`,
  color: rolecolor,
  border: `1px solid ${rolecolor}30`,
  fontWeight: 600,
  fontSize: "0.75rem",
  height: 28,
  "& .MuiChip-icon": {
    color: rolecolor,
    fontSize: "1rem",
  },
}));

const TopBar = ({
  user = null,
  onMenuClick,
  
  onLogout,
  onThemeToggle,
  notifications = [],
  schoolInfo = {},
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

  // États pour les menus déroulants
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNotifications, setAnchorElNotifications] = useState(null);

  // Utilisateur par défaut pour le développement
  const defaultUser = {
    id: "1",
    name: "John Doe",
    email: "john.doe@ecole.gn",
    role: "ADMIN",
    avatar: null,
    school: "Lycée Morifindjan Diabate de Kankan",
  };

  const currentUser = user || defaultUser;
  const userRole = USER_ROLES[currentUser.role] || USER_ROLES.ADMIN;
  const unreadNotifications = notifications.filter((n) => !n.read).length;

  // Gestion des menus
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenNotifications = (event) => {
    setAnchorElNotifications(event.currentTarget);
  };

  const handleCloseNotifications = () => {
    setAnchorElNotifications(null);
  };

  // Navigation
  const handleLogoClick = () => {
    // Redirige vers le dashboard principal du rôle
    switch (currentUser.role) {
      case "ADMIN":
        navigate("/admin/dashboard");
        break;
      case "TEACHER":
        navigate("/teacher/dashboard");
        break;
      case "PARENT":
        navigate("/parent/dashboard");
        break;
      case "STUDENT":
        navigate("/student/dashboard");
        break;
      default:
        navigate("/admin/dashboard");
    }
  };

  const handleProfileClick = () => {
    navigate(`/${currentUser.role.toLowerCase()}/profile`);
    handleCloseUserMenu();
  };

  const handleSettingsClick = () => {
    navigate(`/${currentUser.role.toLowerCase()}/settings`);
    handleCloseUserMenu();
  };

  const handlePasswordChange = () => {
    navigate("/change-password");
    handleCloseUserMenu();
  };

  const handleLogout = () => {
    handleCloseUserMenu();
    if (onLogout) {
      onLogout();
    } else {
      // Logique de déconnexion par défaut
      console.log("Déconnexion...");
      navigate("/login");
    }
  };

  const handleNotificationClick = (notification) => {
    console.log("Notification cliquée:", notification);
    // Naviguer vers la page concernée
    if (notification.link) {
      navigate(notification.link);
    }
    handleCloseNotifications();
  };

  // Formatage du nom pour l'avatar
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // Notifications par défaut pour le développement
  const defaultNotifications = [
    {
      id: 1,
      title: "Nouvelle inscription",
      message: "2 nouveaux élèves se sont inscrits",
      type: "INFO",
      time: "Il y a 5 min",
      read: false,
      link: "/admin/students",
    },
    {
      id: 2,
      title: "Devoir à corriger",
      message: "Mathématiques - Terminale S",
      type: "ASSIGNMENT",
      time: "Il y a 30 min",
      read: false,
      link: "/teacher/assignments",
    },
    {
      id: 3,
      title: "Paiement confirmé",
      message: "Frais scolaires - Famille Diallo",
      type: "SUCCESS",
      time: "Il y a 2 heures",
      read: true,
      link: "/admin/finances",
    },
  ];

  const currentNotifications =
    notifications.length > 0 ? notifications : defaultNotifications;

  return (
    <StyledAppBar position="fixed">
      <Toolbar sx={{ px: { xs: 2, md: 3 }, justifyContent: "space-between" }}>
        {/* Section gauche - Logo et Bouton Menu */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Bouton Menu */}
          <IconButton
            onClick={onMenuClick}
            sx={{
              color: "text.primary",
              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
              },
            }}
            aria-label="Ouvrir le menu"
          >
            <MenuIcon />
          </IconButton>

          {/* Logo / Nom de l'école */}
          <Box
            onClick={handleLogoClick}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              cursor: "pointer",
              "&:hover": {
                "& .school-name": {
                  color: theme.palette.primary.main,
                },
              },
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 2,
                bgcolor: theme.palette.primary.main,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 700,
                fontSize: "1.2rem",
              }}
            >
              {schoolInfo?.initials || "GM"}
            </Box>

            <AnimatePresence>
              {!isMobile && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <Typography
                    variant="h6"
                    className="school-name"
                    sx={{
                      fontWeight: 700,
                      color: "text.primary",
                      transition: "color 0.3s ease",
                      fontSize: { md: "1.1rem", lg: "1.25rem" },
                    }}
                  >
                    {schoolInfo?.name || currentUser.school}
                  </Typography>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </Box>

        {/* Section centrale - Indicateur de rôle (sur desktop) */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <RoleBadge
              icon={userRole.icon}
              label={userRole.label}
              rolecolor={userRole.color}
              size="small"
            />
            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                fontWeight: 500,
              }}
            >
              Connecté
            </Typography>
          </Box>
        )}

        {/* Section droite - Notifications et Profil */}
        <Box
          sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 2 } }}
        >
          {/* Bouton Thème */}
          {onThemeToggle && (
            <Tooltip title="Changer le thème">
              <IconButton
                onClick={onThemeToggle}
                sx={{
                  color: "text.primary",
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  },
                }}
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness7 />
                ) : (
                  <Brightness4 />
                )}
              </IconButton>
            </Tooltip>
          )}

          {/* Notifications */}
          <Tooltip title="Notifications">
            <IconButton
              onClick={handleOpenNotifications}
              sx={{
                color: "text.primary",
                position: "relative",
                "&:hover": {
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                },
              }}
            >
              <Badge
                badgeContent={unreadNotifications}
                color="error"
                max={9}
                sx={{
                  "& .MuiBadge-badge": {
                    fontSize: "0.7rem",
                    height: 20,
                    minWidth: 20,
                  },
                }}
              >
                <Notifications />
              </Badge>
            </IconButton>
          </Tooltip>

          {/* Menu Notifications */}
          <Menu
            anchorEl={anchorElNotifications}
            open={Boolean(anchorElNotifications)}
            onClose={handleCloseNotifications}
            PaperProps={{
              sx: {
                width: 350,
                maxHeight: 400,
                mt: 1.5,
                borderRadius: 2,
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
              <Typography variant="h6" fontWeight={600}>
                Notifications
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {unreadNotifications} non lues
              </Typography>
            </Box>

            <Box sx={{ maxHeight: 300, overflow: "auto" }}>
              {currentNotifications.length > 0 ? (
                currentNotifications.map((notification) => (
                  <MenuItem
                    key={notification.id}
                    onClick={() => handleNotificationClick(notification)}
                    sx={{
                      py: 2,
                      px: 2,
                      borderLeft: `3px solid ${
                        NOTIFICATION_TYPES[notification.type]?.color ||
                        "#2196F3"
                      }`,
                      bgcolor: notification.read
                        ? "transparent"
                        : "action.hover",
                      "&:hover": {
                        bgcolor: "action.selected",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      {NOTIFICATION_TYPES[notification.type]?.icon || <Mail />}
                    </ListItemIcon>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body2" fontWeight={600}>
                        {notification.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        noWrap
                      >
                        {notification.message}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                      >
                        {notification.time}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))
              ) : (
                <Box sx={{ p: 4, textAlign: "center" }}>
                  <Notifications
                    sx={{ fontSize: 48, color: "text.disabled", mb: 2 }}
                  />
                  <Typography color="text.secondary">
                    Aucune notification
                  </Typography>
                </Box>
              )}
            </Box>

            {currentNotifications.length > 0 && (
              <Box sx={{ p: 2, borderTop: 1, borderColor: "divider" }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "primary.main",
                    cursor: "pointer",
                    fontWeight: 600,
                    textAlign: "center",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                  onClick={() => navigate("/notifications")}
                >
                  Voir toutes les notifications
                </Typography>
              </Box>
            )}
          </Menu>

          {/* Profil utilisateur */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              p: 1,
              borderRadius: 2,
              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
              },
            }}
            onClick={handleOpenUserMenu}
          >
            {/* Avatar */}
            <UserAvatar rolecolor={userRole.color}>
              {currentUser.avatar ? (
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                getInitials(currentUser.name)
              )}
            </UserAvatar>

            {/* Informations utilisateur (caché sur mobile) */}
            {!isMobile && (
              <Box sx={{ display: "flex", flexDirection: "column", mr: 1 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    lineHeight: 1.2,
                    maxWidth: 150,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {currentUser.name}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.2,
                  }}
                >
                  {userRole.label}
                </Typography>
              </Box>
            )}

            {/* Flèche dropdown */}
            <ArrowDropDown
              sx={{
                color: "text.secondary",
                fontSize: "1.2rem",
                transition: "transform 0.3s ease",
                transform: anchorElUser ? "rotate(180deg)" : "rotate(0)",
              }}
            />
          </Box>

          {/* Menu utilisateur */}
          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            PaperProps={{
              sx: {
                width: 280,
                mt: 1.5,
                borderRadius: 2,
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            {/* En-tête du menu */}
            <Box sx={{ p: 3, borderBottom: 1, borderColor: "divider" }}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}
              >
                <UserAvatar
                  rolecolor={userRole.color}
                  sx={{ width: 60, height: 60 }}
                >
                  {currentUser.avatar ? (
                    <img
                      src={currentUser.avatar}
                      alt={currentUser.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    getInitials(currentUser.name)
                  )}
                </UserAvatar>
                <Box>
                  <Typography variant="body1" fontWeight={700}>
                    {currentUser.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {currentUser.email}
                  </Typography>
                </Box>
              </Box>
              <RoleBadge
                icon={userRole.icon}
                label={userRole.label}
                rolecolor={userRole.color}
                sx={{ mt: 1 }}
              />
            </Box>

            {/* Options du menu */}
            <MenuItem onClick={handleProfileClick}>
              <ListItemIcon>
                <Person fontSize="small" />
              </ListItemIcon>
              <ListItemText>Mon profil</ListItemText>
            </MenuItem>

            <MenuItem onClick={handleSettingsClick}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paramètres</ListItemText>
            </MenuItem>

            <MenuItem onClick={handlePasswordChange}>
              <ListItemIcon>
                <Lock fontSize="small" />
              </ListItemIcon>
              <ListItemText>Changer mot de passe</ListItemText>
            </MenuItem>

            <Divider sx={{ my: 1 }} />

            <MenuItem onClick={handleLogout} sx={{ color: "error.main" }}>
              <ListItemIcon>
                <Logout fontSize="small" color="error" />
              </ListItemIcon>
              <ListItemText>Déconnexion</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

// Props par défaut
TopBar.defaultProps = {
  user: null,
  onMenuClick: () => console.log("Menu clicked"),
  onLogout: null,
  onThemeToggle: null,
  notifications: [],
  schoolInfo: {},
};

export default TopBar;
