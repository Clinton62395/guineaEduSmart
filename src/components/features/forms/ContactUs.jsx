import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Stack,
  Alert,
  Snackbar,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Checkbox,
  FormControlLabel,
  CircularProgress,
  Divider,
  useTheme,
  useMediaQuery,
  Chip,
} from "@mui/material";
import {
  Send,
  Phone,
  Email,
  LocationOn,
  AccessTime,
  Person,
  Business,
  School,
  Message,
  Close,
  CheckCircle,
  Error,
  WhatsApp,
  LinkedIn,
  Facebook,
  Twitter,
  Instagram,
  ContactMail,
  ContactPhone,
  ContactSupport,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Validation Schema
const contactSchema = yup.object({
  firstName: yup.string().required("Le prénom est requis"),
  lastName: yup.string().required("Le nom est requis"),
  email: yup.string().email("Email invalide").required("L'email est requis"),
  phone: yup
    .string()
    .matches(/^\+?[0-9\s\-\(\)]{10,}$/, "Numéro de téléphone invalide"),
  institution: yup.string().required("L'institution est requise"),
  role: yup.string().required("Votre rôle est requis"),
  subject: yup.string().required("Le sujet est requis"),
  message: yup
    .string()
    .required("Le message est requis")
    .min(20, "Minimum 20 caractères"),
  consent: yup
    .boolean()
    .oneOf([true], "Vous devez accepter la politique de confidentialité"),
});

const ContactFormComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      institution: "",
      role: "",
      subject: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form data:", data);

      setSnackbar({
        open: true,
        message:
          "Message envoyé avec succès ! Nous vous répondrons dans les 24h.",
        severity: "success",
      });

      reset();
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Une erreur est survenue. Veuillez réessayer.",
        severity: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Contact Info
  const contactInfo = [
    {
      icon: <Phone sx={{ fontSize: 40 }} />,
      title: "Téléphone",
      details: ["+224 123 456 789", "+224 987 654 321"],
      color: "#1976d2",
    },
    {
      icon: <Email sx={{ fontSize: 40 }} />,
      title: "Email",
      details: ["contact@guineaedusmart.gn", "support@guineaedusmart.gn"],
      color: "#FFA726",
    },
    {
      icon: <LocationOn sx={{ fontSize: 40 }} />,
      title: "Adresse",
      details: ["Rue KA 001, Kaloum", "Conakry, République de Guinée"],
      color: "#4caf50",
    },
    {
      icon: <AccessTime sx={{ fontSize: 40 }} />,
      title: "Horaires",
      details: ["Lundi - Vendredi: 8h - 18h", "Samedi: 9h - 13h"],
      color: "#9c27b0",
    },
  ];

  // Subjects
  const subjects = [
    "Demande de démonstration",
    "Support technique",
    "Informations sur les tarifs",
    "Partenariat",
    "Presse & Médias",
    "Carrières",
    "Suggestions",
    "Autre",
  ];

  // Roles
  const roles = [
    "Directeur d'établissement",
    "Enseignant",
    "Administrateur scolaire",
    "Parent d'élève",
    "Étudiant",
    "Représentant gouvernemental",
    "Partenaire potentiel",
    "Autre",
  ];

  return (
    <Box sx={{ bgcolor: "background.default", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Chip
              icon={<ContactMail />}
              label="NOUS CONTACTER"
              sx={{
                mb: 3,
                px: 3,
                py: 1.5,
                fontSize: "0.875rem",
                fontWeight: 700,
                background: "linear-gradient(45deg, #1976d2, #42a5f5)",
                color: "white",
                "& .MuiChip-icon": { color: "white" },
              }}
            />
            <Typography
              variant="h2"
              fontWeight={800}
              gutterBottom
              sx={{ color: "#1a237e" }}
            >
              Parlons de votre{" "}
              <Box component="span" sx={{ color: "#FFA726" }}>
                projet éducatif
              </Box>
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: "auto", mb: 4 }}
            >
              Notre équipe est là pour vous accompagner dans la transformation
              numérique de votre établissement. Remplissez le formulaire et nous
              vous répondrons dans les plus brefs délais.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 4,
                  background:
                    "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
                  color: "white",
                  position: "sticky",
                  top: 100,
                }}
              >
                <Typography variant="h4" fontWeight={700} gutterBottom>
                  Informations de contact
                </Typography>
                <Typography sx={{ opacity: 0.9, mb: 4 }}>
                  Notre équipe dédiée est disponible pour répondre à toutes vos
                  questions et vous accompagner dans votre démarche.
                </Typography>

                <Stack spacing={4} sx={{ mb: 6 }}>
                  {contactInfo.map((info, index) => (
                    <Box
                      key={index}
                      sx={{ display: "flex", alignItems: "flex-start" }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: 3,
                          background: `${info.color}20`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mr: 3,
                          flexShrink: 0,
                        }}
                      >
                        <Box sx={{ color: info.color }}>{info.icon}</Box>
                      </Box>
                      <Box>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                          {info.title}
                        </Typography>
                        {info.details.map((detail, idx) => (
                          <Typography key={idx} sx={{ opacity: 0.9 }}>
                            {detail}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  ))}
                </Stack>

                <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", my: 4 }} />

                <Box>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Suivez-nous
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    {[
                      {
                        icon: <Facebook />,
                        color: "#1877F2",
                        label: "Facebook",
                      },
                      { icon: <Twitter />, color: "#1DA1F2", label: "Twitter" },
                      {
                        icon: <LinkedIn />,
                        color: "#0077B5",
                        label: "LinkedIn",
                      },
                      {
                        icon: <Instagram />,
                        color: "#E4405F",
                        label: "Instagram",
                      },
                      {
                        icon: <WhatsApp />,
                        color: "#25D366",
                        label: "WhatsApp",
                      },
                    ].map((social, index) => (
                      <IconButton
                        key={index}
                        sx={{
                          bgcolor: "rgba(255,255,255,0.1)",
                          color: "white",
                          "&:hover": { bgcolor: social.color },
                        }}
                        aria-label={social.label}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Stack>
                </Box>

                {/* Quick Contact CTA */}
                <Box sx={{ mt: 6 }}>
                  <Button
                    variant="contained"
                    color="warning"
                    fullWidth
                    startIcon={<ContactPhone />}
                    sx={{
                      py: 1.5,
                      borderRadius: 2,
                      fontWeight: 600,
                      mb: 2,
                    }}
                    href="tel:+224123456789"
                  >
                    Appeler maintenant
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<WhatsApp />}
                    sx={{
                      py: 1.5,
                      borderRadius: 2,
                      borderColor: "white",
                      color: "white",
                      fontWeight: 600,
                      "&:hover": {
                        borderColor: "#25D366",
                        color: "#25D366",
                      },
                    }}
                    href="https://wa.me/224123456789"
                    target="_blank"
                  >
                    WhatsApp
                  </Button>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Paper
                elevation={4}
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: 4,
                  background: "white",
                }}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={3}>
                    {/* Name Fields */}
                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            label="Prénom"
                            variant="outlined"
                            error={!!errors.firstName}
                            helperText={errors.firstName?.message}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Person color="action" />
                                </InputAdornment>
                              ),
                            }}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                borderRadius: 2,
                                "&:hover": {
                                  "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#1976d2",
                                  },
                                },
                              },
                            }}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="lastName"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            label="Nom"
                            variant="outlined"
                            error={!!errors.lastName}
                            helperText={errors.lastName?.message}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                borderRadius: 2,
                              },
                            }}
                          />
                        )}
                      />
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            label="Email"
                            type="email"
                            variant="outlined"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Email color="action" />
                                </InputAdornment>
                              ),
                            }}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                borderRadius: 2,
                              },
                            }}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            label="Téléphone"
                            variant="outlined"
                            error={!!errors.phone}
                            helperText={errors.phone?.message || "Optionnel"}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Phone color="action" />
                                </InputAdornment>
                              ),
                            }}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                borderRadius: 2,
                              },
                            }}
                          />
                        )}
                      />
                    </Grid>

                    {/* Institution & Role */}
                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="institution"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            label="Établissement/Organisation"
                            variant="outlined"
                            error={!!errors.institution}
                            helperText={errors.institution?.message}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Business color="action" />
                                </InputAdornment>
                              ),
                            }}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                borderRadius: 2,
                              },
                            }}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="role"
                        control={control}
                        render={({ field }) => (
                          <FormControl fullWidth error={!!errors.role}>
                            <InputLabel>Votre rôle</InputLabel>
                            <Select
                              {...field}
                              label="Votre rôle"
                              sx={{ borderRadius: 2 }}
                              startAdornment={
                                <InputAdornment position="start" sx={{ ml: 1 }}>
                                  <School color="action" />
                                </InputAdornment>
                              }
                            >
                              {roles.map((role) => (
                                <MenuItem key={role} value={role}>
                                  {role}
                                </MenuItem>
                              ))}
                            </Select>
                            {errors.role && (
                              <FormHelperText>
                                {errors.role.message}
                              </FormHelperText>
                            )}
                          </FormControl>
                        )}
                      />
                    </Grid>

                    {/* Subject */}
                    <Grid item xs={12}>
                      <Controller
                        name="subject"
                        control={control}
                        render={({ field }) => (
                          <FormControl fullWidth error={!!errors.subject}>
                            <InputLabel>Sujet de votre message</InputLabel>
                            <Select
                              {...field}
                              label="Sujet de votre message"
                              sx={{ borderRadius: 2 }}
                              startAdornment={
                                <InputAdornment position="start" sx={{ ml: 1 }}>
                                  <Message color="action" />
                                </InputAdornment>
                              }
                            >
                              {subjects.map((subject) => (
                                <MenuItem key={subject} value={subject}>
                                  {subject}
                                </MenuItem>
                              ))}
                            </Select>
                            {errors.subject && (
                              <FormHelperText>
                                {errors.subject.message}
                              </FormHelperText>
                            )}
                          </FormControl>
                        )}
                      />
                    </Grid>

                    {/* Message */}
                    <Grid item xs={12}>
                      <Controller
                        name="message"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            label="Votre message"
                            multiline
                            rows={6}
                            variant="outlined"
                            error={!!errors.message}
                            helperText={`${field.value.length}/500 caractères ${
                              errors.message
                                ? ` - ${errors.message.message}`
                                : ""
                            }`}
                            inputProps={{ maxLength: 500 }}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                borderRadius: 2,
                                alignItems: "flex-start",
                              },
                            }}
                          />
                        )}
                      />
                    </Grid>

                    {/* Consent */}
                    <Grid item xs={12}>
                      <Controller
                        name="consent"
                        control={control}
                        render={({ field }) => (
                          <FormControl error={!!errors.consent}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  {...field}
                                  checked={field.value}
                                  sx={{
                                    color: errors.consent
                                      ? "error.main"
                                      : "#1976d2",
                                    "&.Mui-checked": {
                                      color: "#1976d2",
                                    },
                                  }}
                                />
                              }
                              label={
                                <Typography variant="body2">
                                  J'accepte que GuineaEduSmart traite mes
                                  données personnelles conformément à la{" "}
                                  <Box
                                    component="span"
                                    sx={{ color: "#1976d2", cursor: "pointer" }}
                                    onClick={() =>
                                      window.open("/privacy", "_blank")
                                    }
                                  >
                                    politique de confidentialité
                                  </Box>
                                  .
                                </Typography>
                              }
                            />
                            {errors.consent && (
                              <FormHelperText sx={{ ml: 0 }}>
                                {errors.consent.message}
                              </FormHelperText>
                            )}
                          </FormControl>
                        )}
                      />
                    </Grid>

                    {/* Submit Button */}
                    <Grid item xs={12}>
                      <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          disabled={isSubmitting}
                          startIcon={
                            isSubmitting ? (
                              <CircularProgress size={20} color="inherit" />
                            ) : (
                              <Send />
                            )
                          }
                          sx={{
                            px: 6,
                            py: 1.5,
                            borderRadius: 2,
                            fontWeight: 700,
                            fontSize: "1rem",
                            flexGrow: { xs: 1, sm: 0 },
                            background:
                              "linear-gradient(45deg, #1976d2, #42a5f5)",
                            "&:hover": {
                              background:
                                "linear-gradient(45deg, #1565c0, #1976d2)",
                              transform: "translateY(-2px)",
                              boxShadow: "0 8px 16px rgba(25, 118, 210, 0.3)",
                            },
                            transition: "all 0.3s ease",
                          }}
                        >
                          {isSubmitting
                            ? "Envoi en cours..."
                            : "Envoyer le message"}
                        </Button>
                        <Button
                          type="button"
                          variant="outlined"
                          color="inherit"
                          size="large"
                          onClick={() => reset()}
                          sx={{
                            px: 4,
                            py: 1.5,
                            borderRadius: 2,
                            fontWeight: 600,
                            flexGrow: { xs: 1, sm: 0 },
                          }}
                        >
                          Effacer le formulaire
                        </Button>
                      </Stack>
                    </Grid>

                    {/* Additional Info */}
                    <Grid item xs={12}>
                      <Alert
                        severity="info"
                        icon={<ContactSupport />}
                        sx={{
                          borderRadius: 2,
                          background: "rgba(25, 118, 210, 0.05)",
                          border: "1px solid rgba(25, 118, 210, 0.2)",
                        }}
                      >
                        <Typography variant="body2">
                          <strong>Note importante :</strong> Notre équipe
                          s'engage à vous répondre dans un délai maximum de 24
                          heures ouvrables. Pour les urgences, utilisez le
                          numéro de téléphone indiqué.
                        </Typography>
                      </Alert>
                    </Grid>
                  </Grid>
                </form>
              </Paper>

              {/* FAQ Section */}
              <Paper
                elevation={0}
                sx={{
                  mt: 4,
                  p: 4,
                  borderRadius: 4,
                  background:
                    "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight={700}
                  gutterBottom
                  sx={{ color: "#1a237e" }}
                >
                  Questions fréquentes
                </Typography>
                <Grid container spacing={3}>
                  {[
                    {
                      q: "Quel est le délai de réponse ?",
                      a: "Nous répondons à toutes les demandes dans un délai de 24 heures ouvrables.",
                    },
                    {
                      q: "Proposez-vous des démonstrations gratuites ?",
                      a: "Oui, des démonstrations personnalisées sont disponibles sur rendez-vous.",
                    },
                    {
                      q: "Quels sont les tarifs ?",
                      a: "Nos tarifs varient selon la taille de l'établissement. Contactez-nous pour un devis personnalisé.",
                    },
                    {
                      q: "Proposez-vous des formations ?",
                      a: "Oui, nous accompagnons votre équipe dans la prise en main de la plateforme.",
                    },
                  ].map((faq, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box sx={{ p: 2 }}>
                        <Typography
                          fontWeight={600}
                          gutterBottom
                          sx={{ color: "#1976d2" }}
                        >
                          {faq.q}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {faq.a}
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

      {/* Success/Error Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          icon={
            snackbar.severity === "success" ? (
              <CheckCircle fontSize="inherit" />
            ) : (
              <Error fontSize="inherit" />
            )
          }
          sx={{
            width: "100%",
            borderRadius: 2,
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactFormComponent;
