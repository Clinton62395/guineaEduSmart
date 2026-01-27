// src/components/dashboard/StatsCard.jsx
import React from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Stack,
  LinearProgress,
  useTheme,
} from "@mui/material";
import { TrendingUp, TrendingDown } from "@mui/icons-material";

const StatsCard = ({
  title,
  value,
  total,
  icon,
  color = "#1976d2",
  trend = 0,
  subtitle = "",
  loading = false,
}) => {
  const theme = useTheme();
  const isPositive = trend >= 0;
  const percentage = total ? Math.round((value / total) * 100) : 0;

  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 3,
        background: `linear-gradient(135deg, ${color}15, ${color}05)`,
        border: `1px solid ${color}20`,
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: `0 8px 25px ${color}20`,
        },
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
            <Typography variant="h3" fontWeight={700} sx={{ color: color }}>
              {value}
            </Typography>
            {total && (
              <Typography variant="caption" color="text.secondary">
                sur {total} total
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              width: 48,
              height: 48,
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

        {total && (
          <Box sx={{ mt: 2 }}>
            <LinearProgress
              variant="determinate"
              value={percentage}
              sx={{
                height: 6,
                borderRadius: 3,
                bgcolor: `${color}20`,
                "& .MuiLinearProgress-bar": {
                  bgcolor: color,
                  borderRadius: 3,
                },
              }}
            />
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ mt: 0.5 }}
            >
              {percentage}% de remplissage
            </Typography>
          </Box>
        )}

        {trend !== 0 && (
          <Stack direction="row" spacing={1} alignItems="center" mt={2}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: isPositive ? "#4CAF50" : "#F44336",
              }}
            >
              {isPositive ? (
                <TrendingUp fontSize="small" />
              ) : (
                <TrendingDown fontSize="small" />
              )}
              <Typography variant="caption" fontWeight={600} sx={{ ml: 0.5 }}>
                {Math.abs(trend)}%
              </Typography>
            </Box>
            <Typography variant="caption" color="text.secondary">
              vs période précédente
            </Typography>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;
