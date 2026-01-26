import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  Rating,
  IconButton,
  Stack,
  Chip,
  Paper,
  useTheme,
  useMediaQuery,
  Fade,
  Grow,
} from "@mui/material";
import {
  FormatQuote,
  ArrowBackIos,
  ArrowForwardIos,
  School,
  Person,
  Business,
  Star,
  StarBorder,
  CheckCircle,
  PlayCircleOutline,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "./slideImages";

const categories = [
  { label: "Tous", icon: <School />, count: 6 },
  { label: "Éducation", icon: <School />, count: 2 },
  { label: "Enseignement", icon: <Person />, count: 1 },
  { label: "Parents", icon: <Person />, count: 1 },
  { label: "Administration", icon: <Business />, count: 2 },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [autoplay, setAutoplay] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

  const filteredTestimonials =
    selectedCategory === "Tous"
      ? testimonials
      : testimonials.filter((t) => t.category === selectedCategory);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length,
    );
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setActiveIndex(0);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, filteredTestimonials.length]);

  const activeTestimonial = filteredTestimonials[activeIndex];
  const itemsPerView = isMobile ? 1 : isTablet ? 2 : 3;

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(25, 118, 210, 0.05) 0%, rgba(25, 118, 210, 0) 70%)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Chip
            label="TÉMOIGNAGES"
            color="primary"
            sx={{
              mb: 2,
              px: 2,
              py: 1,
              fontSize: "0.875rem",
              fontWeight: 600,
              background: "linear-gradient(45deg, #1976d2, #42a5f5)",
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              color: "#1a237e",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            Ce que disent nos{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(45deg, #1976d2, #FFA726)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              utilisateurs
            </Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              maxWidth: 700,
              mx: "auto",
              mb: 6,
              fontWeight: 400,
            }}
          >
            Découvrez comment GuineaEduSmart transforme l'expérience éducative
            en Guinée
          </Typography>

          {/* Category Filter */}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
            sx={{ mb: 6 }}
          >
            {categories.map((category) => (
              <Chip
                key={category.label}
                icon={category.icon}
                label={`${category.label} (${category.count})`}
                onClick={() => handleCategorySelect(category.label)}
                variant={
                  selectedCategory === category.label ? "filled" : "outlined"
                }
                color="primary"
                sx={{
                  px: 2,
                  py: 2,
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  borderWidth: 2,
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: 3,
                  },
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* Main Testimonial Carousel */}
        <Box sx={{ position: "relative", mb: 8 }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} lg={10}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={
                    activeTestimonial ? activeTestimonial.id : "no-testimonial"
                  }
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card
                    sx={{
                      borderRadius: 4,
                      boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                      overflow: "visible",
                      background: "white",
                      position: "relative",
                    }}
                  >
                    {/* Quote Icon */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: -30,
                        left: 40,
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        background: "linear-gradient(45deg, #1976d2, #42a5f5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 10px 30px rgba(25, 118, 210, 0.3)",
                      }}
                    >
                      <FormatQuote sx={{ color: "white", fontSize: 32 }} />
                    </Box>

                    <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                      <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={4}>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            {activeTestimonial && (
                              <Avatar
                                src={activeTestimonial.image || undefined}
                                sx={{
                                  width: 160,
                                  height: 160,
                                  border: "4px solid white",
                                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                                  mb: 3,
                                }}
                              >
                                {activeTestimonial.avatar}
                              </Avatar>
                            )}
                            <Box sx={{ textAlign: "center" }}>
                              <Typography
                                variant="h6"
                                fontWeight={700}
                                gutterBottom
                              >
                                {activeTestimonial && activeTestimonial.name}
                                {activeTestimonial &&
                                  activeTestimonial.verified && (
                                    <CheckCircle
                                      sx={{
                                        color: "#4caf50",
                                        fontSize: 20,
                                        ml: 1,
                                        verticalAlign: "middle",
                                      }}
                                    />
                                  )}
                              </Typography>
                              <Typography color="text.secondary" gutterBottom>
                                {activeTestimonial && activeTestimonial.role}
                              </Typography>
                              <Chip
                                label={
                                  activeTestimonial &&
                                  activeTestimonial.category
                                }
                                size="small"
                                sx={{ mb: 1 }}
                              />
                              <Typography
                                variant="caption"
                                color="text.secondary"
                              >
                                {activeTestimonial && activeTestimonial.date}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                          <Box sx={{ pl: { md: 4 } }}>
                            <Rating
                              value={
                                activeTestimonial && activeTestimonial.rating
                              }
                              readOnly
                              icon={<Star sx={{ color: "#FFA726" }} />}
                              emptyIcon={
                                <StarBorder sx={{ color: "#FFA726" }} />
                              }
                              sx={{ mb: 3 }}
                            />
                            <Typography
                              variant="h5"
                              sx={{
                                fontStyle: "italic",
                                mb: 4,
                                lineHeight: 1.8,
                                color: "#37474f",
                                position: "relative",
                                "&::before": {
                                  content: '"\\201C"',
                                  fontSize: "4rem",
                                  color: "#e0e0e0",
                                  position: "absolute",
                                  left: -20,
                                  top: -20,
                                },
                              }}
                            >
                              {activeTestimonial && activeTestimonial.content}
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <Box sx={{ display: "flex", gap: 2 }}>
                                <Chip
                                  icon={<PlayCircleOutline />}
                                  label="Voir vidéo témoignage"
                                  variant="outlined"
                                  onClick={() => {
                                    /* Handle video play */
                                  }}
                                  sx={{ borderRadius: 2 }}
                                />
                              </Box>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                              >
                                Témoignage {activeIndex + 1} sur{" "}
                                {filteredTestimonials.length}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </Grid>
          </Grid>

          {/* Navigation Controls */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 6,
              gap: 4,
            }}
          >
            <IconButton
              onClick={handlePrev}
              sx={{
                width: 56,
                height: 56,
                border: "2px solid #1976d2",
                "&:hover": {
                  background: "rgba(25, 118, 210, 0.1)",
                  transform: "scale(1.1)",
                },
              }}
            >
              <ArrowBackIos sx={{ color: "#1976d2" }} />
            </IconButton>

            <Box sx={{ display: "flex", gap: 1 }}>
              {filteredTestimonials.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  sx={{
                    width: index === activeIndex ? 40 : 12,
                    height: 12,
                    borderRadius: 6,
                    background:
                      index === activeIndex
                        ? "linear-gradient(45deg, #1976d2, #42a5f5)"
                        : "#e0e0e0",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background:
                        index === activeIndex
                          ? "linear-gradient(45deg, #1976d2, #42a5f5)"
                          : "#bdbdbd",
                    },
                  }}
                />
              ))}
            </Box>

            <IconButton
              onClick={handleNext}
              sx={{
                width: 56,
                height: 56,
                border: "2px solid #1976d2",
                "&:hover": {
                  background: "rgba(25, 118, 210, 0.1)",
                  transform: "scale(1.1)",
                },
              }}
            >
              <ArrowForwardIos sx={{ color: "#1976d2" }} />
            </IconButton>
          </Box>

          {/* Autoplay Toggle */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Chip
              label={`Lecture automatique: ${autoplay ? "ON" : "OFF"}`}
              onClick={() => setAutoplay(!autoplay)}
              color={autoplay ? "primary" : "default"}
              variant="outlined"
              sx={{ cursor: "pointer" }}
            />
          </Box>
        </Box>

        {/* Testimonial Grid (Secondary) */}
        <Box sx={{ mt: 10 }}>
          <Typography
            variant="h4"
            fontWeight={700}
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Plus de témoignages
          </Typography>
          <Grid container spacing={3}>
            {filteredTestimonials
              .filter((_, index) => index !== activeIndex)
              .slice(0, itemsPerView * 2)
              .map((testimonial, index) => (
                <Grow in key={testimonial.id} timeout={(index + 1) * 200}>
                  <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Paper
                      elevation={2}
                      sx={{
                        p: 3,
                        height: "100%",
                        borderRadius: 3,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
                          borderLeft: "4px solid #1976d2",
                        },
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 3 }}
                      >
                        <Avatar
                          src={testimonial.image}
                          sx={{ width: 60, height: 60, mr: 2 }}
                        >
                          {testimonial.avatar}
                        </Avatar>
                        <Box>
                          <Typography fontWeight={600}>
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {testimonial.role}
                          </Typography>
                          <Rating
                            value={testimonial.rating}
                            size="small"
                            readOnly
                            sx={{ mt: 0.5 }}
                          />
                        </Box>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          fontStyle: "italic",
                          color: "text.secondary",
                          mb: 2,
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        "{testimonial.content}"
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mt: 2,
                        }}
                      >
                        <Chip
                          label={testimonial.category}
                          size="small"
                          variant="outlined"
                        />
                        <Typography variant="caption" color="text.secondary">
                          {testimonial.date}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                </Grow>
              ))}
          </Grid>
        </Box>

        {/* Stats Section */}
        <Paper
          elevation={0}
          sx={{
            mt: 10,
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
            color: "white",
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                Rejoignez les institutions qui nous font confiance
              </Typography>
              <Typography sx={{ opacity: 0.9, mb: 3 }}>
                GuineaEduSmart est utilisé par plus de 50 établissements à
                travers la Guinée
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Chip
                  label="95% de satisfaction"
                  sx={{ background: "rgba(255,255,255,0.2)", color: "white" }}
                />
                <Chip
                  label="+2000 utilisateurs"
                  sx={{ background: "rgba(255,255,255,0.2)", color: "white" }}
                />
                <Chip
                  label="Support 24/7"
                  sx={{ background: "rgba(255,255,255,0.2)", color: "white" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                {[
                  { value: "50+", label: "Établissements" },
                  { value: "95%", label: "Satisfaction" },
                  { value: "40%", label: "Gain de temps" },
                  { value: "24/7", label: "Support" },
                ].map((stat, index) => (
                  <Grid item xs={6} key={index}>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography variant="h3" fontWeight={800}>
                        {stat.value}
                      </Typography>
                      <Typography sx={{ opacity: 0.9 }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
