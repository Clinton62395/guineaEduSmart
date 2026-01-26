import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Grid,
  Stack,
  Alert,
  CircularProgress,
  Divider,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Avatar,
  FormControl,
  FormHelperText,
  Fade,
  Zoom,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  School,
  Person,
  Email,
  Lock,
  LocationOn,
  Phone,
  Upload,
  ArrowForward,
  CheckCircle,
  Error,
  Info,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Schéma de validation avec yup
const validationSchema = yup.object({
  fullName: yup
    .string()
    .required("Le nom complet est requis")
    .min(3, "Minimum 3 caractères")
    .max(100, "Maximum 100 caractères"),
  email: yup
    .string()
    .email("Email invalide")
    .required("L'email est requis")
    .matches(
      /@(?:.*\.)?(edu\.gn|school\.gn|ac\.gn)$/,
      "Veuillez utiliser un email professionnel (.edu.gn, .school.gn, .ac.gn,  .gouv.gn)",
    ),
  password: yup
    .string()
    .required("Le mot de passe est requis")
    .min(8, "Minimum 8 caractères")
    .matches(/[A-Z]/, "Doit contenir au moins une majuscule")
    .matches(/[a-z]/, "Doit contenir au moins une minuscule")
    .matches(/[0-9]/, "Doit contenir au moins un chiffre")
    .matches(/[^A-Za-z0-9]/, "Doit contenir au moins un caractère spécial"),
  confirmPassword: yup
    .string()
    .required("Veuillez confirmer votre mot de passe")
    .oneOf([yup.ref("password")], "Les mots de passe ne correspondent pas"),
  schoolName: yup
    .string()
    .required("Le nom de l'école est requis")
    .min(3, "Minimum 3 caractères")
    .max(200, "Maximum 200 caractères"),
  acceptTerms: yup
    .boolean()
    .oneOf([true], "Vous devez accepter les conditions d'utilisation"),
});

const AdminRegistrationForm = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [activeStep, setActiveStep] = useState(0);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      schoolName: "",
      acceptTerms: false,
    },
    mode: "onChange",
  });

  // Watch password for real-time validation feedback
  const passwordValue = watch("password");

  const steps = [
    { label: "Informations Personnelles", icon: <Person /> },
    { label: "Informations École", icon: <School /> },
    { label: "Sécurité", icon: <Lock /> },
  ];

  const handleNext = async () => {
    let isValid = false;

    switch (activeStep) {
      case 0:
        isValid = await trigger(["fullName", "email"]);
        break;
      case 1:
        isValid = await trigger(["schoolName"]);
        break;
      case 2:
        isValid = await trigger(["password", "confirmPassword", "acceptTerms"]);
        break;
    }

    if (isValid) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Simulation d'appel API
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Données d'inscription:", {
        ...data,
        password: "***", // Ne pas logger le mot de passe réel
        registrationDate: new Date().toISOString(),
        status: "pending_verification",
      });

      // Notification de succès
      setNotification({
        open: true,
        message: "Inscription réussie ! Redirection vers le dashboard...",
        severity: "success",
      });

      // Redirection après 2 secondes
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 2000);
    } catch (error) {
      setNotification({
        open: true,
        message: "Une erreur est survenue. Veuillez réessayer.",
        severity: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPasswordStrength = (password) => {
    if (!password) return { score: 0, label: "Faible", color: "#f44336" };

    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const levels = [
      { label: "Très faible", color: "#f44336" },
      { label: "Faible", color: "#ff9800" },
      { label: "Moyen", color: "#ffeb3b" },
      { label: "Bon", color: "#4caf50" },
      { label: "Très bon", color: "#2e7d32" },
      { label: "Excellent", color: "#1b5e20" },
    ];

    return levels[Math.min(score, levels.length - 1)];
  };

  const passwordStrength = getPasswordStrength(passwordValue);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        py: { xs: 4, md: 8 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={6}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              background: "white",
            }}
          >
            {/* Header */}
            <Box
              sx={{
                py: 4,
                px: { xs: 3, md: 6 },
                background: "linear-gradient(90deg, #1976d2, #42a5f5)",
                color: "white",
                textAlign: "center",
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
                mb={2}
              >
                <School sx={{ fontSize: 40 }} />
                <Typography variant="h3" fontWeight={800}>
                  GuineaEduSmart
                </Typography>
              </Stack>
              <Typography variant="h5" fontWeight={600}>
                Inscription Administrateur d'École
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9, mt: 1 }}>
                Créez votre compte et commencez à gérer votre établissement en
                quelques minutes
              </Typography>
            </Box>

            {/* Stepper */}
            <Box sx={{ px: { xs: 3, md: 6 }, pt: 4 }}>
              <Stepper activeStep={activeStep} alternativeLabel={isMobile}>
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel
                      StepIconComponent={() => (
                        <Avatar
                          sx={{
                            bgcolor:
                              index <= activeStep ? "#1976d2" : "#e0e0e0",
                            color: "white",
                            width: 40,
                            height: 40,
                          }}
                        >
                          {step.icon}
                        </Avatar>
                      )}
                    >
                      <Typography variant="body2" fontWeight={600}>
                        {step.label}
                      </Typography>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* Form Content */}
            <Box sx={{ p: { xs: 3, md: 6 } }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <AnimatePresence mode="wait">
                  {activeStep === 0 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight={700}
                        gutterBottom
                        color="#1976d2"
                      >
                        Informations Personnelles
                      </Typography>

                      <Grid container spacing={3} sx={{ mt: 1 }}>
                        <Grid item xs={12}>
                          <Controller
                            name="fullName"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                fullWidth
                                label="Nom Complet"
                                variant="outlined"
                                error={!!errors.fullName}
                                helperText={errors.fullName?.message}
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
                                  },
                                }}
                              />
                            )}
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                fullWidth
                                label="Email Professionnel"
                                type="email"
                                variant="outlined"
                                error={!!errors.email}
                                helperText={
                                  errors.email?.message ||
                                  "Utilisez un email .edu.gn, .school.gn ou .ac.gn"
                                }
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
                      </Grid>
                    </motion.div>
                  )}

                  {activeStep === 1 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight={700}
                        gutterBottom
                        color="#1976d2"
                      >
                        Informations de l'École
                      </Typography>

                      <Grid container spacing={3} sx={{ mt: 1 }}>
                        <Grid item xs={12}>
                          <Controller
                            name="schoolName"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                fullWidth
                                label="Nom de l'École"
                                variant="outlined"
                                error={!!errors.schoolName}
                                helperText={errors.schoolName?.message}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <School color="action" />
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

                        {/* Info supplémentaire pour le dashboard */}
                        <Grid item xs={12}>
                          <Alert
                            severity="info"
                            icon={<Info />}
                            sx={{
                              borderRadius: 2,
                              background: "rgba(33, 150, 243, 0.1)",
                            }}
                          >
                            <Typography variant="body2">
                              <strong>Note :</strong> Vous pourrez compléter ces
                              informations plus tard dans votre dashboard :
                            </Typography>
                            <Stack spacing={0.5} sx={{ mt: 1, ml: 2 }}>
                              <Typography
                                variant="body2"
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 1,
                                }}
                              >
                                <LocationOn fontSize="small" /> Adresse complète
                                de l'école
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 1,
                                }}
                              >
                                <Phone fontSize="small" /> Numéro de contact
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 1,
                                }}
                              >
                                <Upload fontSize="small" /> Logo ou image de
                                l'école
                              </Typography>
                            </Stack>
                          </Alert>
                        </Grid>
                      </Grid>
                    </motion.div>
                  )}

                  {activeStep === 2 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight={700}
                        gutterBottom
                        color="#1976d2"
                      >
                        Sécurité du Compte
                      </Typography>

                      <Grid container spacing={3} sx={{ mt: 1 }}>
                        <Grid item xs={12} md={6}>
                          <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                fullWidth
                                label="Mot de passe"
                                type={showPassword ? "text" : "password"}
                                variant="outlined"
                                error={!!errors.password}
                                helperText={errors.password?.message}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <Lock color="action" />
                                    </InputAdornment>
                                  ),
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        onClick={handleShowPassword}
                                        edge="end"
                                      >
                                        {showPassword ? (
                                          <VisibilityOff />
                                        ) : (
                                          <Visibility />
                                        )}
                                      </IconButton>
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

                          {/* Indicateur de force du mot de passe */}
                          {passwordValue && (
                            <Fade in={!!passwordValue}>
                              <Box sx={{ mt: 1, ml: 1 }}>
                                <Typography
                                  variant="caption"
                                  sx={{ color: passwordStrength.color }}
                                >
                                  Force : {passwordStrength.label}
                                </Typography>
                                <Box
                                  sx={{ display: "flex", gap: 0.5, mt: 0.5 }}
                                >
                                  {[1, 2, 3, 4, 5].map((level) => (
                                    <Box
                                      key={level}
                                      sx={{
                                        height: 4,
                                        flex: 1,
                                        bgcolor:
                                          level <= passwordStrength.score
                                            ? passwordStrength.color
                                            : "#e0e0e0",
                                        borderRadius: 2,
                                      }}
                                    />
                                  ))}
                                </Box>
                              </Box>
                            </Fade>
                          )}
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <Controller
                            name="confirmPassword"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                fullWidth
                                label="Confirmer le mot de passe"
                                type={showConfirmPassword ? "text" : "password"}
                                variant="outlined"
                                error={!!errors.confirmPassword}
                                helperText={errors.confirmPassword?.message}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <Lock color="action" />
                                    </InputAdornment>
                                  ),
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        onClick={handleShowConfirmPassword}
                                        edge="end"
                                      >
                                        {showConfirmPassword ? (
                                          <VisibilityOff />
                                        ) : (
                                          <Visibility />
                                        )}
                                      </IconButton>
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

                        <Grid item xs={12}>
                          <Controller
                            name="acceptTerms"
                            control={control}
                            render={({ field }) => (
                              <FormControl error={!!errors.acceptTerms}>
                                <FormHelperText sx={{ ml: 0 }}>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 1,
                                    }}
                                  >
                                    <input
                                      type="checkbox"
                                      checked={field.value}
                                      onChange={(e) =>
                                        field.onChange(e.target.checked)
                                      }
                                      style={{
                                        width: 18,
                                        height: 18,
                                        accentColor: "#1976d2",
                                      }}
                                    />
                                    <Typography variant="body2">
                                      J'accepte les{" "}
                                      <Box
                                        component="span"
                                        sx={{
                                          color: "#1976d2",
                                          cursor: "pointer",
                                          fontWeight: 600,
                                        }}
                                        onClick={() =>
                                          window.open("/terms", "_blank")
                                        }
                                      >
                                        conditions d'utilisation
                                      </Box>{" "}
                                      et la{" "}
                                      <Box
                                        component="span"
                                        sx={{
                                          color: "#1976d2",
                                          cursor: "pointer",
                                          fontWeight: 600,
                                        }}
                                        onClick={() =>
                                          window.open("/privacy", "_blank")
                                        }
                                      >
                                        politique de confidentialité
                                      </Box>
                                    </Typography>
                                  </Box>
                                </FormHelperText>
                                {errors.acceptTerms && (
                                  <FormHelperText
                                    sx={{ ml: 0, color: "#f44336" }}
                                  >
                                    {errors.acceptTerms.message}
                                  </FormHelperText>
                                )}
                              </FormControl>
                            )}
                          />
                        </Grid>
                      </Grid>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                  sx={{ mt: 6 }}
                >
                  <Button
                    variant="outlined"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    sx={{
                      borderRadius: 2,
                      px: 4,
                      py: 1.5,
                    }}
                  >
                    Retour
                  </Button>

                  {activeStep < steps.length - 1 ? (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{
                        borderRadius: 2,
                        px: 6,
                        py: 1.5,
                        fontWeight: 600,
                        background: "linear-gradient(90deg, #1976d2, #42a5f5)",
                      }}
                      endIcon={<ArrowForward />}
                    >
                      Suivant
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
                      sx={{
                        borderRadius: 2,
                        px: 6,
                        py: 1.5,
                        fontWeight: 600,
                        background: "linear-gradient(90deg, #4CAF50, #2E7D32)",
                        "&:hover": {
                          background:
                            "linear-gradient(90deg, #388E3C, #1B5E20)",
                        },
                      }}
                      startIcon={
                        isSubmitting ? (
                          <CircularProgress size={20} color="inherit" />
                        ) : (
                          <CheckCircle />
                        )
                      }
                    >
                      {isSubmitting
                        ? "Inscription en cours..."
                        : "Finaliser l'inscription"}
                    </Button>
                  )}
                </Stack>
              </form>

              {/* Informations dashboard futur */}
              <Zoom in={activeStep === steps.length - 1}>
                <Alert
                  severity="info"
                  sx={{
                    mt: 4,
                    borderRadius: 2,
                    background: "rgba(25, 118, 210, 0.05)",
                    border: "1px solid rgba(25, 118, 210, 0.2)",
                  }}
                >
                  <Typography variant="body2" fontWeight={600} gutterBottom>
                    🎯 Prochaines étapes après l'inscription :
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Une fois connecté, vous pourrez compléter votre profil et
                    configurer votre établissement dans le dashboard. Un
                    indicateur de progression vous guidera pour ajouter les
                    informations manquantes.
                  </Typography>
                </Alert>
              </Zoom>
            </Box>
          </Paper>
        </motion.div>

        {/* Notification */}
        {notification.open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              position: "fixed",
              bottom: 20,
              right: 20,
              zIndex: 9999,
            }}
          >
            <Alert
              severity={notification.severity}
              onClose={() => setNotification({ ...notification, open: false })}
              icon={
                notification.severity === "success" ? (
                  <CheckCircle />
                ) : (
                  <Error />
                )
              }
              sx={{
                minWidth: 300,
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              {notification.message}
            </Alert>
          </motion.div>
        )}

        {/* Footer */}
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 4 }}
        >
          © {new Date().getFullYear()} GuineaEduSmart. Tous droits réservés.
          <Box component="span" sx={{ mx: 2 }}>
            •
          </Box>
          <Box
            component="span"
            sx={{ color: "#1976d2", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Déjà un compte ? Se connecter
          </Box>
        </Typography>
      </Container>
    </Box>
  );
};

// Composant pour gérer les animations d'entrée/sortie
const AnimatePresence = ({ children, mode }) => (
  <Box sx={{ position: "relative", minHeight: 300 }}>{children}</Box>
);

export default AdminRegistrationForm;
