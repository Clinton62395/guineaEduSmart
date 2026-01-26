import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  TextField,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  School,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  YouTube,
  WhatsApp,
  LocationOn,
  Phone,
  Email,
  Send,
  Download,
  Language,
  Security,
  PrivacyTip,
  Copyright,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const footerLinks = {
    produit: [
      { label: "Fonctionnalités", href: "/features" },
      { label: "Tarifs", href: "/pricing" },
      { label: "Documentation", href: "/docs" },
      { label: "API", href: "/api" },
      { label: "Applications mobiles", href: "/apps" },
      { label: "Intégrations", href: "/integrations" },
    ],
    entreprise: [
      { label: "À propos", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Carrières", href: "/careers" },
      { label: "Presse", href: "/press" },
      { label: "Partenaires", href: "/partners" },
      { label: "Événements", href: "/events" },
    ],
    ressources: [
      { label: "Centre d'aide", href: "/help" },
      { label: "Tutoriels", href: "/tutorials" },
      { label: "Webinaires", href: "/webinars" },
      { label: "Études de cas", href: "/case-studies" },
      { label: "Livre blanc", href: "/whitepaper" },
      { label: "FAQ", href: "/faq" },
    ],
    legal: [
      { label: "Conditions d'utilisation", href: "/terms" },
      { label: "Politique de confidentialité", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
      { label: "RGPD", href: "/gdpr" },
      { label: "Mentions légales", href: "/legal" },
      { label: "Accessibilité", href: "/accessibility" },
    ],
  };

  const socialLinks = [
    { icon: <Facebook />, label: "Facebook", href: "#", color: "#1877F2" },
    { icon: <Twitter />, label: "Twitter", href: "#", color: "#1DA1F2" },
    { icon: <LinkedIn />, label: "LinkedIn", href: "#", color: "#0077B5" },
    { icon: <Instagram />, label: "Instagram", href: "#", color: "#E4405F" },
    { icon: <YouTube />, label: "YouTube", href: "#", color: "#FF0000" },
    { icon: <WhatsApp />, label: "WhatsApp", href: "#", color: "#25D366" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "grey.900",
        color: "white",
        pt: { xs: 8, md: 10 },
        pb: { xs: 6, md: 8 },
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
          background: `radial-gradient(circle at 70% 50%, ${theme.palette.primary.dark}20 0%, transparent 70%)`,
          opacity: 0.3,
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Brand Column */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Stack spacing={3}>
                {/* Logo */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2,
                      bgcolor: "primary.main",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
                    }}
                  >
                    {/* <School sx={{ color: "white", fontSize: 32 }} /> */}
                    <img src="/logo.png" width="50" height="50" alt="logo" />
                  </Box>
                  <Typography variant="h4" fontWeight={800}>
                    Guinea<span style={{ color: "#FFA726" }}>Edu</span>Smart
                  </Typography>
                </Box>

                <Typography variant="body1" color="grey.400" paragraph>
                  La plateforme éducative intelligente qui révolutionne
                  l'apprentissage et la gestion scolaire en Guinée.
                </Typography>

                {/* Newsletter Subscription */}
                <Box>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Restez informé
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <TextField
                      placeholder="Votre email"
                      variant="outlined"
                      size="small"
                      sx={{
                        flexGrow: 1,
                        "& .MuiOutlinedInput-root": {
                          bgcolor: "grey.800",
                          borderRadius: 2,
                          "& fieldset": {
                            borderColor: "grey.700",
                          },
                          "&:hover fieldset": {
                            borderColor: "primary.main",
                          },
                        },
                        "& .MuiInputBase-input": {
                          color: "white",
                          py: 1,
                        },
                      }}
                    />
                    <Button
                      variant="contained"
                      color="warning"
                      sx={{
                        minWidth: "auto",
                        px: 2,
                        borderRadius: 2,
                        boxShadow: "0 4px 12px rgba(255, 167, 38, 0.3)",
                      }}
                    >
                      <Send />
                    </Button>
                  </Stack>
                </Box>

                {/* App Download */}
                <Box>
                  <Typography variant="body2" color="grey.400" gutterBottom>
                    Téléchargez notre application
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="outlined"
                      startIcon={<Download />}
                      sx={{
                        borderColor: "grey.700",
                        color: "white",
                        borderRadius: 2,
                        "&:hover": {
                          borderColor: "primary.main",
                          color: "primary.main",
                        },
                      }}
                    >
                      iOS
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<Download />}
                      sx={{
                        borderColor: "grey.700",
                        color: "white",
                        borderRadius: 2,
                        "&:hover": {
                          borderColor: "primary.main",
                          color: "primary.main",
                        },
                      }}
                    >
                      Android
                    </Button>
                  </Stack>
                </Box>
              </Stack>
            </motion.div>
          </Grid>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <Grid item xs={6} md={2} key={category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Typography
                  variant="h6"
                  fontWeight={700}
                  gutterBottom
                  sx={{ color: "primary.light" }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Typography>
                <Stack spacing={1.5}>
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      color="grey.400"
                      underline="hover"
                      sx={{
                        "&:hover": {
                          color: "warning.main",
                          transform: "translateX(4px)",
                          display: "inline-block",
                        },
                        transition: "all 0.2s ease",
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Social & Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Grid container spacing={4} sx={{ mt: 6 }}>
            {/* Social Media */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Typography variant="h6" fontWeight={600} sx={{ mr: 2 }}>
                  Suivez-nous :
                </Typography>
                <Stack direction="row" spacing={1}>
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      sx={{
                        bgcolor: "grey.800",
                        color: "grey.300",
                        "&:hover": {
                          bgcolor: social.color,
                          color: "white",
                          transform: "translateY(-2px)",
                          boxShadow: `0 4px 12px ${social.color}40`,
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Stack>
              </Box>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={6}>
              <Stack
                spacing={2}
                alignItems={{ xs: "flex-start", md: "flex-end" }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <LocationOn sx={{ color: "warning.main" }} />
                  <Typography variant="body2" color="grey.400">
                    Rue KA 001, Kaloum, Conakry, Guinée
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Phone sx={{ color: "warning.main" }} />
                  <Stack direction="row" spacing={2}>
                    <Typography variant="body2" color="grey.400">
                      +224 623 95 20 11
                    </Typography>
                    <Typography variant="body2" color="grey.400">
                      +224 620 43 45 10
                    </Typography>
                  </Stack>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Email sx={{ color: "warning.main" }} />
                  <Stack direction="row" spacing={2}>
                    <Typography variant="body2" color="grey.400">
                      contact@guineaedusmart.gn
                    </Typography>
                    <Typography variant="body2" color="grey.400">
                      support@guineaedusmart.gn
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </motion.div>

        {/* Divider */}
        <Divider sx={{ borderColor: "grey.800", my: 6 }} />

        {/* Bottom Section */}
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Stack direction="row" spacing={3} alignItems="center">
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Copyright fontSize="small" sx={{ color: "grey.500" }} />
                  <Typography variant="body2" color="grey.500">
                    {new Date().getFullYear()} GuineaEduSmart. Tous droits
                    réservés.
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Security fontSize="small" sx={{ color: "grey.500" }} />
                  <Link
                    href="/security"
                    color="grey.500"
                    variant="body2"
                    underline="hover"
                  >
                    Sécurité
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <PrivacyTip fontSize="small" sx={{ color: "grey.500" }} />
                  <Link
                    href="/privacy"
                    color="grey.500"
                    variant="body2"
                    underline="hover"
                  >
                    Confidentialité
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Language fontSize="small" sx={{ color: "grey.500" }} />
                  <Typography variant="body2" color="grey.500">
                    FR | EN
                  </Typography>
                </Box>
              </Stack>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Stack
                direction="row"
                spacing={3}
                justifyContent={{ xs: "flex-start", md: "flex-end" }}
                flexWrap="wrap"
                gap={2}
              >
                <Typography variant="body2" color="grey.500">
                  Certifications :
                </Typography>
                <Box
                  component="img"
                  src="/api/placeholder/80/40"
                  alt="ISO 27001"
                  sx={{ height: 20, filter: "brightness(0.8)" }}
                />
                <Box
                  component="img"
                  src="/api/placeholder/80/40"
                  alt="GDPR Compliant"
                  sx={{ height: 20, filter: "brightness(0.8)" }}
                />
                <Box
                  component="img"
                  src="/api/placeholder/80/40"
                  alt="Ministère de l'Éducation"
                  sx={{ height: 20, filter: "brightness(0.8)" }}
                />
              </Stack>
            </motion.div>
          </Grid>
        </Grid>

        {/* Back to Top Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              variant="outlined"
              size="small"
              sx={{
                borderColor: "grey.700",
                color: "grey.400",
                borderRadius: 20,
                px: 3,
                "&:hover": {
                  borderColor: "primary.main",
                  color: "primary.main",
                },
              }}
            >
              Retour en haut ↑
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
