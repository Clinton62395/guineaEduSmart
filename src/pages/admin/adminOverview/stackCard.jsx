// src/components/dashboard/StatCard.jsx
import React from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Chip,
  Stack,
  LinearProgress,
  useTheme,
} from "@mui/material";
import { TrendingUp, TrendingDown } from "@mui/icons-material";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const StatCard = ({
  title,
  value,
  icon,
  color = "#1976d2",
  trend = 0,
  subtitle = "",
  loading = false,
}) => {
  const theme = useTheme();
  const isPositive = trend >= 0;

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }} style={{ height: 200 , width: 250}}>
      <Card
        sx={{
          height: "100%",
          borderRadius: 3,
          background: `linear-gradient(135deg, ${color}15, ${color}05)`,
          border: `1px solid ${color}20`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            mb={2}
          >
            <Box>
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight={500}
                gutterBottom
              >
                {title}
              </Typography>
              {loading ? (
                <LinearProgress sx={{ width: 60, mt: 1 }} />
              ) : (
                <Typography variant="h3" fontWeight={700}>
                  <CountUp end={value} duration={2.5} separator="," />
                </Typography>
              )}
            </Box>
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: 2,
                bgcolor: `${color}20`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: color,
              }}
            >
              {icon}
            </Box>
          </Stack>

          {subtitle && (
            <Typography variant="caption" color="text.secondary">
              {subtitle}
            </Typography>
          )}

          {trend !== 0 && (
            <Stack direction="row" spacing={1} alignItems="center" mt={2}>
              <Chip
                icon={isPositive ? <TrendingUp /> : <TrendingDown />}
                label={`${Math.abs(trend)}%`}
                size="small"
                sx={{
                  bgcolor: isPositive ? "#4CAF5020" : "#F4433620",
                  color: isPositive ? "#4CAF50" : "#F44336",
                  fontWeight: 600,
                }}
              />
              <Typography variant="caption" color="text.secondary">
                vs mois dernier
              </Typography>
            </Stack>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default StatCard;
