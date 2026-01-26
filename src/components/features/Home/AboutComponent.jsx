import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  Chip,
  Button,
  Paper,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery,
  alpha,
} from "@mui/material";
import {
  School,
  TrendingUp,
  Group,
  Security,
  LocationOn,
  AccessTime,
  EmojiEvents,
  RocketLaunch,
  Diversity3,
  Balance,
  Handshake,
  ChevronRight,
  PlayCircle,
  CheckCircle,
  LinkedIn,
  Twitter,
  Facebook,
  Instagram,
  Download,
  CalendarMonth,
  BarChart,
  Cloud,
  MobileFriendly,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Team Members
  const team = [
    {
      name: "Dr. Amadou Bah",
      role: "CEO & Fondateur",
      bio: "Docteur en Sciences de l'Éducation avec 15 ans d'expérience dans le secteur éducatif guinéen.",
      avatar: "AB",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Fatoumata Diallo",
      role: "Directrice Technique",
      bio: "Ingénieure logiciel spécialisée dans les solutions éducatives, ancienne de l'École Polytechnique.",
      avatar: "FD",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Moussa Camara",
      role: "Responsable Pédagogique",
      bio: "Professeur agrégé de Mathématiques, expert en transformation numérique de l'éducation.",
      avatar: "MC",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Kadiatou Sow",
      role: "Cheffe de Projet",
      bio: "MBA en Gestion de Projet, 8 ans d'expérience dans l'implémentation de solutions EdTech.",
      avatar: "KS",
      linkedin: "#",
      twitter: "#",
    },

    {
      name: "Sarata Conde",
      role: "Cheffe de Projet",
      bio: "MBA en Gestion de Projet, 8 ans d'expérience dans l'implémentation de solutions EdTech.",
      avatar: "KS",
      linkedin: "#",
      twitter: "#",
    },
  ];

  // Milestones
  const milestones = [
    {
      year: "2022",
      title: "Fondation",
      description: "Création de GuineaEduSmart avec une vision claire",
    },
    {
      year: "2023",
      title: "Premier Pilote",
      description: "Déploiement dans 5 écoles guinéennes",
    },
    {
      year: "2024",
      title: "Expansion",
      description: "50+ établissements utilisateurs",
    },
    {
      year: "2025",
      title: "Vision",
      description: "Couverture nationale et innovations IA",
    },
    {
      year: "2026",
      title: "Vision",
      description: "Couverture nationale et innovations IA",
    },
  ];

  // Values
  const values = [
    {
      icon: <Diversity3 sx={{ fontSize: 40 }} />,
      title: "Inclusion",
      description:
        "Rendre l'éducation numérique accessible à tous les élèves guinéens",
    },
    {
      icon: <Balance sx={{ fontSize: 40 }} />,
      title: "Excellence",
      description:
        "Maintenir les plus hauts standards de qualité et d'innovation",
    },
    {
      icon: <Handshake sx={{ fontSize: 40 }} />,
      title: "Collaboration",
      description: "Travailler main dans la main avec les acteurs éducatifs",
    },
    {
      icon: <Security sx={{ fontSize: 40 }} />,
      title: "Intégrité",
      description: "Garantir la sécurité et la confidentialité des données",
    },
  ];

  return (
    <Box sx={{ bgcolor: "background.default" }}>
      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 8, md: 12 },
          pb: { xs: 12, md: 16 },
          background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "40%",
            height: "100%",
            background: `radial-gradient(circle at 70% 50%, ${alpha("#fff", 0.1)} 0%, transparent 70%)`,
          }}
        />

        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Chip
                  label="À PROPOS DE NOUS"
                  sx={{
                    mb: 3,
                    px: 2,
                    py: 1,
                    background: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    lineHeight: 1.2,
                  }}
                >
                  Révolutionner l'éducation en{" "}
                  <Box component="span" sx={{ color: "#FFA726" }}>
                    Guinée
                  </Box>
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 5,
                    opacity: 0.9,
                    fontWeight: 400,
                  }}
                >
                  GuineaEduSmart est la première plateforme éducative
                  intelligente conçue spécifiquement pour répondre aux besoins
                  du système éducatif guinéen.
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
                  <Button
                    variant="contained"
                    color="warning"
                    size="large"
                    endIcon={<PlayCircle />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      fontWeight: 600,
                    }}
                  >
                    Voir la vidéo
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      borderColor: "white",
                      color: "white",
                      "&:hover": {
                        borderColor: "#FFA726",
                        color: "#FFA726",
                      },
                    }}
                  >
                    Télécharger la brochure
                  </Button>
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  sx={{
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: -20,
                      left: -20,
                      right: 20,
                      bottom: 20,
                      background:
                        "linear-gradient(45deg, #FFA726, transparent)",
                      borderRadius: 4,
                      zIndex: 0,
                    },
                  }}
                >
                  <Paper
                    elevation={24}
                    sx={{
                      borderRadius: 4,
                      overflow: "hidden",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <Box
                      component="img"
                      src="https://media.istockphoto.com/id/2181456975/photo/group-of-student-boys-focus-on-laptop-collaborate-in-classroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=QhXyP9WApcdSKvIFJ2CgFn5LFINM0dFGyWvwDJpX-5U="
                      alt="Équipe GuineaEduSmart"
                      sx={{
                        width: "100%",
                        height: { xs: 300, md: 400 },
                        objectFit: "cover",
                      }}
                    />
                  </Paper>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  background: "linear-gradient(135deg, #1976d2, #1565c0)",
                  color: "white",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <CardContent sx={{ p: 5 }}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: -50,
                      right: -50,
                      width: 200,
                      height: 200,
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.1)",
                    }}
                  />
                  <RocketLaunch sx={{ fontSize: 60, mb: 3 }} />
                  <Typography variant="h3" fontWeight={700} gutterBottom>
                    Notre Mission
                  </Typography>
                  <Typography variant="h6" sx={{ opacity: 0.9, mb: 3 }}>
                    Transformer l'éducation en Guinée par la technologie
                  </Typography>
                  <Typography sx={{ opacity: 0.9 }}>
                    Nous développons des solutions numériques innovantes qui
                    améliorent l'accès à l'éducation, optimisent la gestion
                    scolaire et préparent les élèves guinéens aux défis du 21ème
                    siècle.
                  </Typography>
                  <Stack spacing={2} sx={{ mt: 4 }}>
                    {[
                      "Améliorer l'accès à l'éducation numérique",
                      "Optimiser la gestion administrative",
                      "Renforcer l'engagement des parties prenantes",
                      "Développer les compétences numériques",
                    ].map((item, index) => (
                      <Box
                        key={index}
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <CheckCircle sx={{ mr: 2, color: "#FFA726" }} />
                        <Typography>{item}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  background: "linear-gradient(135deg, #FFA726, #FB8C00)",
                  color: "white",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <CardContent sx={{ p: 5 }}>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -50,
                      left: -50,
                      width: 200,
                      height: 200,
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.1)",
                    }}
                  />
                  <EmojiEvents sx={{ fontSize: 60, mb: 3 }} />
                  <Typography variant="h3" fontWeight={700} gutterBottom>
                    Notre Vision
                  </Typography>
                  <Typography variant="h6" sx={{ opacity: 0.9, mb: 3 }}>
                    Devenir le leader EdTech en Afrique de l'Ouest
                  </Typography>
                  <Typography sx={{ opacity: 0.9 }}>
                    Nous aspirons à créer un écosystème éducatif numérique
                    complet qui connecte tous les acteurs du système éducatif
                    guinéen et sert de modèle pour l'Afrique francophone.
                  </Typography>
                  <Stack spacing={2} sx={{ mt: 4 }}>
                    {[
                      "Digitaliser 500+ établissements d'ici 2026",
                      "Former 10,000 enseignants au numérique",
                      "Atteindre 500,000 élèves utilisateurs",
                      "Expansion régionale en Afrique de l'Ouest",
                    ].map((item, index) => (
                      <Box
                        key={index}
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <CheckCircle sx={{ mr: 2, color: "#1976d2" }} />
                        <Typography>{item}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Story & Milestones */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#f8f9fa" }}>
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="h2"
                  fontWeight={800}
                  gutterBottom
                  sx={{ color: "#1a237e" }}
                >
                  Notre Histoire
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph>
                  D'une simple idée à une révolution éducative
                </Typography>
                <Typography
                  paragraph
                  sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                >
                  GuineaEduSmart est né en 2022 de la rencontre entre des
                  éducateurs passionnés et des technologues visionnaires.
                  Constatant les défis auxquels faisaient face les
                  établissements scolaires guinéens, nous avons décidé de créer
                  une solution adaptée au contexte local.
                </Typography>
                <Typography
                  paragraph
                  sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                >
                  Après des mois de recherche et de développement en
                  collaboration avec des écoles pilotes, nous avons lancé notre
                  première version qui a immédiatement transformé la façon dont
                  les écoles géraient leurs opérations quotidiennes.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<Download />}
                  sx={{ mt: 3, px: 4, py: 1.5, borderRadius: 2 }}
                >
                  Télécharger le rapport annuel
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography variant="h4" fontWeight={700} gutterBottom>
                  Notre Parcours
                </Typography>
                <Box sx={{ position: "relative", pl: 4, mt: 4 }}>
                  {/* Timeline line */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: 7,
                      top: 0,
                      bottom: 0,
                      width: 3,
                      background:
                        "linear-gradient(to bottom, #1976d2, #FFA726)",
                    }}
                  />
                  {milestones.map((milestone, index) => (
                    <Box key={index} sx={{ position: "relative", mb: 6 }}>
                      <Box
                        sx={{
                          position: "absolute",
                          left: -33,
                          top: 0,
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          background: index === 3 ? "#FFA726" : "#1976d2",
                          border: "4px solid white",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                        }}
                      />
                      <Typography
                        variant="h3"
                        fontWeight={800}
                        sx={{
                          color: index === 3 ? "#FFA726" : "#1976d2",
                          mb: 1,
                        }}
                      >
                        {milestone.year}
                      </Typography>
                      <Typography variant="h6" fontWeight={600} gutterBottom>
                        {milestone.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {milestone.description}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Chip
            label="NOTRE ÉQUIPE"
            color="primary"
            sx={{
              mb: 3,
              px: 3,
              py: 1,
              fontSize: "0.875rem",
              fontWeight: 600,
              background: "linear-gradient(45deg, #1976d2, #42a5f5)",
            }}
          />
          <Typography
            variant="h2"
            fontWeight={800}
            gutterBottom
            sx={{ color: "#1a237e" }}
          >
            Rencontrez nos leaders
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: "auto" }}
          >
            Une équipe passionnée combinant expertise éducative et excellence
            technologique
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {team.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 200,
                      background: "linear-gradient(135deg, #1976d2, #1565c0)",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 120,
                        height: 120,
                        border: "4px solid white",
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      {member.avatar}
                    </Avatar>
                  </Box>
                  <CardContent sx={{ p: 3, textAlign: "center" }}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {member.name}
                    </Typography>
                    <Typography
                      color="primary"
                      fontWeight={600}
                      gutterBottom
                      sx={{ mb: 2 }}
                    >
                      {member.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3, minHeight: 60 }}
                    >
                      {member.bio}
                    </Typography>
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <IconButton size="small" color="primary">
                        <LinkedIn fontSize="small" />
                      </IconButton>
                      <IconButton size="small" color="primary">
                        <Twitter fontSize="small" />
                      </IconButton>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Values Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#f8f9fa" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              fontWeight={800}
              gutterBottom
              sx={{ color: "#1a237e" }}
            >
              Nos Valeurs
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: "auto" }}
            >
              Les principes qui guident chaque décision et chaque innovation
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: "100%",
                      borderRadius: 4,
                      textAlign: "center",
                      border: "1px solid",
                      borderColor: "divider",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "#1976d2",
                        boxShadow: "0 10px 30px rgba(25, 118, 210, 0.1)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #1976d2, #1565c0)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 3,
                      }}
                    >
                      <Box sx={{ color: "white" }}>{value.icon}</Box>
                    </Box>
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                      {value.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {value.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats & Recognition */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h2"
                fontWeight={800}
                gutterBottom
                sx={{ color: "#1a237e" }}
              >
                Impact & Reconnaissance
              </Typography>
              <Typography variant="h6" color="text.secondary" paragraph>
                Des résultats tangibles et une reconnaissance croissante
              </Typography>
              <Stack spacing={3} sx={{ mt: 4 }}>
                {[
                  "Prix de l'Innovation Éducative 2023 - Ministère de l'Éducation",
                  "Finaliste Africa Tech Awards 2024",
                  "Certification ISO 27001 pour la sécurité des données",
                  "Partenariat avec l'UNESCO pour l'éducation numérique",
                ].map((achievement, index) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", alignItems: "flex-start" }}
                  >
                    <EmojiEvents sx={{ color: "#FFA726", mr: 2, mt: 0.5 }} />
                    <Typography>{achievement}</Typography>
                  </Box>
                ))}
              </Stack>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 5,
                  borderRadius: 4,
                  background: "linear-gradient(135deg, #1976d2, #1565c0)",
                  color: "white",
                }}
              >
                <Grid container spacing={4}>
                  {[
                    { value: "50+", label: "Établissements partenaires" },
                    { value: "95%", label: "Taux de satisfaction" },
                    { value: "2000+", label: "Utilisateurs actifs" },
                    { value: "99.9%", label: "Disponibilité plateforme" },
                    { value: "40%", label: "Réduction des coûts admin" },
                    { value: "24/7", label: "Support technique" },
                  ].map((stat, index) => (
                    <Grid item xs={6} sm={4} key={index}>
                      <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h3" fontWeight={800}>
                          {stat.value}
                        </Typography>
                        <Typography sx={{ opacity: 0.9, fontSize: "0.9rem" }}>
                          {stat.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" fontWeight={800} gutterBottom>
            Prêt à rejoindre la révolution éducative ?
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9, mb: 6 }}>
            Découvrez comment GuineaEduSmart peut transformer votre
            établissement
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            justifyContent="center"
            sx={{ mb: 6 }}
          >
            <Button
              variant="contained"
              color="warning"
              size="large"
              endIcon={<ChevronRight />}
              sx={{
                px: 6,
                py: 2,
                borderRadius: 2,
                fontSize: "1.1rem",
                fontWeight: 600,
              }}
            >
              Demander une démo
            </Button>
            <Button
              component={Link}
              to="/contact-us"
              variant="outlined"
              size="large"
              sx={{
                px: 6,
                py: 2,
                borderRadius: 2,
                borderColor: "white",
                color: "white",
                fontSize: "1.1rem",
                "&:hover": {
                  borderColor: "#FFA726",
                  color: "#FFA726",
                },
              }}
            >
              Nous contacter
            </Button>
          </Stack>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            sx={{ color: "rgba(255,255,255,0.7)" }}
          >
            <IconButton sx={{ color: "inherit" }}>
              <Facebook />
            </IconButton>
            <IconButton sx={{ color: "inherit" }}>
              <Twitter />
            </IconButton>
            <IconButton sx={{ color: "inherit" }}>
              <LinkedIn />
            </IconButton>
            <IconButton sx={{ color: "inherit" }}>
              <Instagram />
            </IconButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutComponent;
