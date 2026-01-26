// useNavbar.js
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [featuresMenuAnchor, setFeaturesMenuAnchor] = useState(null);
  const [benefitsMenuAnchor, setBenefitsMenuAnchor] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // Fonctions de gestion
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleFeaturesMenuOpen = (event) => {
    setFeaturesMenuAnchor(event.currentTarget);
  };

  const handleFeaturesMenuClose = () => {
    setFeaturesMenuAnchor(null);
  };

  const handleBenefitsMenuOpen = (event) => {
    setBenefitsMenuAnchor(event.currentTarget);
  };

  const handleBenefitsMenuClose = () => {
    setBenefitsMenuAnchor(null);
  };

  const handleSubmenuToggle = (name) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActivePath = (path) => {
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  // On retourne tout ce qui est utile
  return {
    mobileOpen,
    featuresMenuAnchor,
    benefitsMenuAnchor,
    openSubmenu,
    scrolled,
    handleDrawerToggle,
    handleFeaturesMenuOpen,
    handleFeaturesMenuClose,
    handleBenefitsMenuOpen,
    handleBenefitsMenuClose,
    handleSubmenuToggle,
    isActivePath,
  };
};
