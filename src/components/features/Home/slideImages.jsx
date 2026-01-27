import React from "react";
import {
  School,
  TrendingUp,
  People,
  Cloud,
  Smartphone,
  Security,
  Assessment,
  SupportAgent,
  Language,
  AutoGraph,
} from "@mui/icons-material";

export const slides = [
  {
    id: 1,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1663050883988-30c224c62dd8?w=1920&fit=crop",
    title: "Révolutionnez la Gestion Scolaire",
    subtitle: "Une plateforme intelligente pour les écoles guinéennes",
    description: "Centralisez et modernisez tous les processus scolaires",
    ctaText: "Découvrir les fonctionnalités",
    color: "#1976d2",
    overlayOpacity: 0.5,
    icon: <School sx={{ fontSize: 60 }} />,
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&fit=crop",
    title: "Analytique Avancée",
    subtitle: "Décisions basées sur les données",
    description:
      "Suivi des performances, statistiques et rapports en temps réel",
    ctaText: "Voir les rapports",
    color: "#FFA726",
    overlayOpacity: 0.6,
    icon: <TrendingUp sx={{ fontSize: 60 }} />,
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&fit=crop",
    title: "Communauté Connectée",
    subtitle: "Parents, enseignants et élèves réunis",
    description: "Une communication fluide et centralisée",
    ctaText: "Rejoindre la communauté",
    color: "#4CAF50",
    overlayOpacity: 0.55,
    icon: <People sx={{ fontSize: 60 }} />,
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&fit=crop",
    title: "Cloud Sécurisé",
    subtitle: "Données protégées et accessibles",
    description: "Infrastructure fiable adaptée aux réalités locales",
    ctaText: "En savoir plus",
    color: "#9C27B0",
    overlayOpacity: 0.6,
    icon: <Cloud sx={{ fontSize: 60 }} />,
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&fit=crop",
    title: "Mobile & Flexible",
    subtitle: "Gérez votre école partout",
    description: "Optimisé pour smartphones et connexions limitées",
    ctaText: "Voir l'application",
    color: "#2196F3",
    overlayOpacity: 0.5,
    icon: <Smartphone sx={{ fontSize: 60 }} />,
  },
  {
    id: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?w=1920&fit=crop",
    title: "Sécurité Renforcée",
    subtitle: "Vos données sont une priorité",
    description: "Contrôle d’accès, sauvegardes et chiffrement",
    ctaText: "Découvrir la sécurité",
    color: "#D32F2F",
    overlayOpacity: 0.55,
    icon: <Security sx={{ fontSize: 60 }} />,
  },
  {
    id: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920&fit=crop",
    title: "Suivi Académique",
    subtitle: "Évaluez et améliorez les performances",
    description: "Notes, bulletins et statistiques centralisés",
    ctaText: "Voir le suivi",
    color: "#00897B",
    overlayOpacity: 0.55,
    icon: <Assessment sx={{ fontSize: 60 }} />,
  },
  {
    id: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&fit=crop",
    title: "Support Dédié",
    subtitle: "Une équipe à vos côtés",
    description: "Accompagnement et assistance pour les écoles",
    ctaText: "Contacter le support",
    color: "#5D4037",
    overlayOpacity: 0.6,
    icon: <SupportAgent sx={{ fontSize: 60 }} />,
  },
  {
    id: 9,
    imageUrl:
      "https://images.unsplash.com/photo-1498079022511-d15614cb1c02?w=1920&fit=crop",
    title: "Multilingue",
    subtitle: "Accessible à tous",
    description: "Interface pensée pour la diversité linguistique",
    ctaText: "Voir les langues",
    color: "#7B1FA2",
    overlayOpacity: 0.55,
    icon: <Language sx={{ fontSize: 60 }} />,
  },
  {
    id: 10,
    imageUrl:
      "https://media.istockphoto.com/id/2183953089/photo/portrait-of-a-smiling-woman-in-front-of-a-library.webp?a=1&b=1&s=612x612&w=0&k=20&c=79vFf_DT2Irh_Mh0HvTwt61G-LSUzGef9ljjFQ39hBU=",
    title: "Vision & Croissance",
    subtitle: "Construisons l’avenir de l’éducation",
    description: "Une plateforme évolutive pour le système éducatif guinéen",
    ctaText: "Commencer maintenant",
    color: "#2E7D32",
    overlayOpacity: 0.6,
    icon: <AutoGraph sx={{ fontSize: 60 }} />,
  },
  {
    id: 11,
    imageUrl:
      "https://media.istockphoto.com/id/1312139041/photo/learning-on-the-job.webp?a=1&b=1&s=612x612&w=0&k=20&c=QedI4W1AwyUDcNzuHAjT_rBNE6c69a1F6_4W3t6OtE0=",
    title: "Cloud Sécurisé",
    subtitle: "Données protégées et accessibles",
    description: "Infrastructure fiable adaptée aux réalités locales",
    ctaText: "En savoir plus",
    color: "#9C27B0",
    overlayOpacity: 0.6,
    icon: <Cloud sx={{ fontSize: 60 }} />,
  },
  // developpeur mobile app avec react native
  {
    id: 12,
    imageUrl:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vYmlsZSUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Mobile & Flexible",
    subtitle: "Gérez votre école partout",
    description: "Optimisé pour smartphones et connexions limitées",
    ctaText: "Voir l'application",
    color: "#2196F3",
    overlayOpacity: 0.5,
    icon: <Smartphone sx={{ fontSize: 60 }} />,
  },
];

// testiymonials images

export const testimonials = [
  {
    id: 1,
    name: "Dr. Fatoumata Diallo",
    role: "Directrice, Lycée Moderne de Conakry",
    avatar: "FD",
    rating: 5,
    content:
      "GuineaEduSmart a transformé la gestion de notre établissement. L'automatisation des tâches administratives nous a fait gagner 40% de temps, que nous consacrons maintenant à l'amélioration pédagogique.",
    image:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&h=400&fit=crop",
    category: "Éducation",
    verified: true,
    date: "15 Mars 2024",
  },
  {
    id: 2,
    name: "Mamadou Camara",
    role: "Enseignant de Mathématiques",
    avatar: "MC",
    rating: 5,
    content:
      "La plateforme intuitive me permet de suivre facilement les progrès de mes 200 élèves. Les outils d'évaluation sont exceptionnels et les parents sont beaucoup plus impliqués.",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    category: "Enseignement",
    verified: true,
    date: "10 Février 2024",
  },
  {
    id: 3,
    name: "Aissatou Bah",
    role: "Mère de deux élèves",
    avatar: "AB",
    rating: 4,
    content:
      "En tant que parent, je peux maintenant suivre en temps réel les résultats de mes enfants. Les notifications me tiennent informée et le système de paiement est très pratique.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w-400&h=400&fit=crop",
    category: "Parent",
    verified: true,
    date: "28 Janvier 2024",
  },
  {
    id: 4,
    name: "Sekou Touré",
    role: "Directeur Académique Régional",
    avatar: "ST",
    rating: 5,
    content:
      "La vision data-driven de GuineaEduSmart nous permet de prendre des décisions éclairées pour améliorer le système éducatif à l'échelle régionale. Une révolution numérique attendue depuis longtemps.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    category: "Administration",
    verified: true,
    date: "5 Mars 2024",
  },
  {
    id: 5,
    name: "Kadiatou Sow",
    role: "Étudiante, Université Gamal",
    avatar: "KS",
    rating: 5,
    content:
      "L'application mobile est géniale ! Je peux accéder à mes cours, soumettre mes devoirs et communiquer avec mes professeurs même avec une connexion limitée.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
    category: "Étudiant",
    verified: true,
    date: "20 Février 2024",
  },
  {
    id: 6,
    name: "Mohamed Keita",
    role: "Fondateur, École Privée Excellence",
    avatar: "MK",
    rating: 4,
    content:
      "L'intégration financière a simplifié notre comptabilité. Les rapports automatiques nous font gagner des heures de travail chaque semaine. Un investissement qui paie rapidement.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    category: "Direction",
    verified: true,
    date: "8 Mars 2024",
  },
];
