// src/components/charts/FeeCollectionChart.jsx
import React from "react";
import {
  Paper,
  Typography,
  Box,
  Stack,
  IconButton,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import {
  TrendingUp,
  MoreVert,
  Download,
  FilterList,
} from "@mui/icons-material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

// Enregistrer les composants Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const FeeCollectionChart = () => {
  const [chartType, setChartType] = React.useState("bar");
  const [timeRange, setTimeRange] = React.useState("6months");

  // Données pour le graphique
  const months = [
    "Jan",
    "Fév",
    "Mar",
    "Avr",
    "Mai",
    "Juin",
    "Juil",
    "Aoû",
    "Sep",
    "Oct",
    "Nov",
    "Déc",
  ];

  const feeData = {
    "6months": [12000, 19000, 15000, 25000, 22000, 30000],
    year: [
      12000, 19000, 15000, 25000, 22000, 30000, 28000, 32000, 31000, 35000,
      38000, 42000,
    ],
  };

  const data = {
    labels: timeRange === "6months" ? months.slice(0, 6) : months,
    datasets: [
      {
        label: "Frais collectés (FCFA)",
        data: feeData[timeRange],
        backgroundColor: "rgba(25, 118, 210, 0.6)",
        borderColor: "rgba(25, 118, 210, 1)",
        borderWidth: 2,
        borderRadius: 4,
        hoverBackgroundColor: "rgba(25, 118, 210, 0.8)",
        tension: 0.4,
      },
      {
        label: "Objectif mensuel",
        data: feeData[timeRange].map(() => 25000),
        type: "line",
        borderColor: "rgba(76, 175, 80, 0.7)",
        backgroundColor: "rgba(76, 175, 80, 0.1)",
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            family: "'Inter', sans-serif",
            size: 12,
          },
          padding: 20,
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 12,
        titleFont: {
          family: "'Inter', sans-serif",
          size: 13,
        },
        bodyFont: {
          family: "'Inter', sans-serif",
          size: 13,
        },
        callbacks: {
          label: (context) => {
            return `${context.dataset.label}: ${context.parsed.y.toLocaleString()} FCFA`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
            size: 11,
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
            size: 11,
          },
          callback: (value) => {
            return `${value.toLocaleString()} Gnf`;
          },
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    animation: {
      duration: 1000,
      easing: "easeInOutQuart",
    },
  };

  // Statistiques calculées
  const currentData = feeData[timeRange];
  const totalAmount = currentData.reduce((sum, amount) => sum + amount, 0);
  const averageAmount = Math.round(totalAmount / currentData.length);
  const lastMonthAmount = currentData[currentData.length - 1];
  const growthRate = (
    ((lastMonthAmount - averageAmount) / averageAmount) *
    100
  ).toFixed(1);

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: "100%",
        borderRadius: 3,
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* En-tête avec contrôles */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        spacing={2}
        mb={3}
      >
        <Box>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            Collecte des frais scolaires
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Suivi mensuel des recettes
          </Typography>
        </Box>

        <Stack direction="row" spacing={1} alignItems="center">
          {/* Sélecteur de période */}
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <Select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              sx={{
                fontSize: "0.875rem",
                borderRadius: 2,
              }}
            >
              <MenuItem value="6months">6 derniers mois</MenuItem>
              <MenuItem value="year">12 derniers mois</MenuItem>
            </Select>
          </FormControl>

          {/* Bouton télécharger */}
          <IconButton
            size="small"
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
            }}
          >
            <Download fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>

      {/* Statistiques résumées */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        mb={4}
        sx={{ bgcolor: "grey.50", p: 2, borderRadius: 2 }}
      >
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            Total collecté
          </Typography>
          <Typography variant="h5" fontWeight={700} color="primary.main">
            {totalAmount.toLocaleString()} FCFA
          </Typography>
        </Box>
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            Moyenne mensuelle
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            {averageAmount.toLocaleString()} FCFA
          </Typography>
        </Box>
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            Croissance
          </Typography>
          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            justifyContent="center"
          >
            <TrendingUp
              sx={{
                color: growthRate >= 0 ? "#4CAF50" : "#F44336",
                fontSize: 20,
              }}
            />
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{ color: growthRate >= 0 ? "#4CAF50" : "#F44336" }}
            >
              {growthRate}%
            </Typography>
          </Stack>
        </Box>
      </Stack>

      {/* Graphique */}
      <Box sx={{ flex: 1, minHeight: 300, position: "relative" }}>
        {chartType === "bar" ? (
          <Bar data={data} options={options} />
        ) : (
          <Line data={data} options={options} />
        )}
      </Box>

      {/* Légende et informations */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mt={3}
        pt={2}
        sx={{ borderTop: "1px solid", borderColor: "divider" }}
      >
        <Typography variant="caption" color="text.secondary">
          * Données mises à jour en temps réel
        </Typography>
        <Stack direction="row" spacing={2}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                bgcolor: "#1976d2",
                borderRadius: "50%",
              }}
            />
            <Typography variant="caption">Frais collectés</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Box
              sx={{
                width: 12,
                height: 2,
                bgcolor: "#4CAF50",
                border: "1px dashed #4CAF50",
              }}
            />
            <Typography variant="caption">Objectif mensuel</Typography>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default FeeCollectionChart;
