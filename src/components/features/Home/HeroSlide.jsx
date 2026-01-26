// src/components/HeroSlider.jsx
import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Stack,
  Fade,
  Slide,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  PlayArrow,
  School,
  TrendingUp,
  People,
  Cloud,
  Shield,
  Smartphone,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "./slideImages";

// Données des slides avec images éducatives d'Unsplash

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState("right");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Logique de rotation automatique des slides
  const nextSlide = useCallback(() => {
    setDirection("right");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection("left");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback(
    (index) => {
      setDirection(index > currentSlide ? "right" : "left");
      setCurrentSlide(index);
    },
    [currentSlide],
  );

  // Gestion du défilement automatique
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change de slide toutes les 5 secondes

    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  // Animation de transition pour le texte
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: isMobile ? "70vh" : "85vh",
        overflow: "hidden",
        mt: isMobile ? 7 : 8, // Compense la navbar sticky
      }}
    >
      {/* Container pour tous les slides */}
      <AnimatePresence mode="wait" initial={false}>
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                {/* Image de fond */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${slide.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    transform: "scale(1.05)", // Légère zoom pour l'effet de transition
                    transition: "transform 10s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />

                {/* Overlay de couleur avec gradient */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: `linear-gradient(
                    to right,
                    ${slide.color}${Math.round(slide.overlayOpacity * 255)
                      .toString(16)
                      .padStart(2, "0")} 0%,
                    ${slide.color}${Math.round(slide.overlayOpacity * 0.7 * 255)
                      .toString(16)
                      .padStart(2, "0")} 50%,
                    rgba(0, 0, 0, 0.7) 100%
                  )`,
                  }}
                />

                {/* Contenu du slide */}
                <Box
                  sx={{
                    position: "relative",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    px: { xs: 4, md: 8, lg: 12 },
                    py: { xs: 4, md: 6 },
                  }}
                >
                  <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ maxWidth: isMobile ? "100%" : "60%" }}
                  >
                    {/* Icone du slide */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, type: "spring" }}
                      style={{ marginBottom: theme.spacing(4) }}
                    >
                      <Box
                        sx={{
                          display: "inline-flex",
                          p: 2,
                          borderRadius: 3,
                          bgcolor: "rgba(255, 255, 255, 0.2)",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        {slide.icon}
                      </Box>
                    </motion.div>

                    {/* Titre principal */}
                    <Typography
                      variant={isMobile ? "h3" : "h1"}
                      sx={{
                        fontWeight: 900,
                        mb: 2,
                        lineHeight: 1.2,
                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                        fontSize: {
                          xs: "2.5rem",
                          md: "3.5rem",
                          lg: "4rem",
                        },
                      }}
                    >
                      {slide.title}
                    </Typography>

                    {/* Sous-titre */}
                    <Typography
                      variant={isMobile ? "h5" : "h4"}
                      sx={{
                        fontWeight: 600,
                        mb: 3,
                        color: "rgba(255, 255, 255, 0.9)",
                      }}
                    >
                      {slide.subtitle}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 5,
                        color: "rgba(255, 255, 255, 0.8)",
                        maxWidth: "90%",
                      }}
                    >
                      {slide.description}
                    </Typography>

                    {/* Call to Action */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                      >
                        <Button
                          variant="contained"
                          color="warning"
                          size="large"
                          sx={{
                            px: 5,
                            py: 1.5,
                            borderRadius: 2,
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            boxShadow: "0 8px 25px rgba(255, 167, 38, 0.4)",
                            "&:hover": {
                              transform: "translateY(-2px)",
                              boxShadow: "0 12px 30px rgba(255, 167, 38, 0.6)",
                            },
                            transition: "all 0.3s ease",
                          }}
                        >
                          {slide.ctaText}
                        </Button>
                        <Button
                          variant="outlined"
                          size="large"
                          sx={{
                            px: 5,
                            py: 1.5,
                            borderRadius: 2,
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            borderColor: "white",
                            color: "white",
                            "&:hover": {
                              borderColor: "#FFA726",
                              color: "#FFA726",
                              transform: "translateY(-2px)",
                            },
                            transition: "all 0.3s ease",
                          }}
                        >
                          Démo gratuite
                        </Button>
                      </Stack>
                    </motion.div>
                  </motion.div>
                </Box>
              </motion.div>
            ),
        )}
      </AnimatePresence>

      {/* Contrôles de navigation */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 20, md: 40 },
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          px: 4,
        }}
      >
        {/* Bouton précédent */}
        <IconButton
          onClick={prevSlide}
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.2)",
            color: "white",
            "&:hover": {
              bgcolor: "rgba(255, 255, 255, 0.3)",
              transform: "scale(1.1)",
            },
            transition: "all 0.3s ease",
            display: { xs: "none", md: "flex" },
          }}
        >
          <ChevronLeft fontSize="large" />
        </IconButton>

        {/* Indicateurs de slides */}
        <Stack direction="row" spacing={1}>
          {slides.map((_, index) => (
            <Box
              key={index}
              onClick={() => goToSlide(index)}
              sx={{
                width: index === currentSlide ? 40 : 12,
                height: 12,
                borderRadius: 6,
                bgcolor:
                  index === currentSlide
                    ? "#FFA726"
                    : "rgba(255, 255, 255, 0.5)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor:
                    index === currentSlide
                      ? "#FFA726"
                      : "rgba(255, 255, 255, 0.8)",
                },
              }}
            />
          ))}
        </Stack>

        {/* Bouton play/pause */}
        <IconButton
          onClick={togglePlay}
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.2)",
            color: "white",
            "&:hover": {
              bgcolor: "rgba(255, 255, 255, 0.3)",
              transform: "scale(1.1)",
            },
            transition: "all 0.3s ease",
          }}
        >
          {isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>

        {/* Bouton suivant */}
        <IconButton
          onClick={nextSlide}
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.2)",
            color: "white",
            "&:hover": {
              bgcolor: "rgba(255, 255, 255, 0.3)",
              transform: "scale(1.1)",
            },
            transition: "all 0.3s ease",
            display: { xs: "none", md: "flex" },
          }}
        >
          <ChevronRight fontSize="large" />
        </IconButton>
      </Box>

      {/* Indicateur de slide actuel */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 20, md: 40 },
          right: { xs: 20, md: 40 },
          bgcolor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          px: 3,
          py: 1,
          borderRadius: 20,
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography variant="body2" fontWeight={600}>
          {currentSlide + 1} / {slides.length}
        </Typography>
      </Box>

      {/* Flèches de navigation sur mobile */}
      {isMobile && (
        <>
          <IconButton
            onClick={prevSlide}
            sx={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              "&:hover": {
                bgcolor: "rgba(0, 0, 0, 0.7)",
              },
            }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            onClick={nextSlide}
            sx={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              "&:hover": {
                bgcolor: "rgba(0, 0, 0, 0.7)",
              },
            }}
          >
            <ChevronRight />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default HeroSlider;
