import React from "react";
import {
  Box,
  Typography,
  Breadcrumbs,
  Link,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { Home, NavigateNext, Refresh, Download } from "@mui/icons-material";

const DashboardHeader = ({
  title = "Tableau de bord",
  subtitle = "Vue d'ensemble de votre établissement",
  showRefresh = true,
  onRefresh = () => {},
}) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Breadcrumbs separator={<NavigateNext fontSize="small" />} sx={{ mb: 1 }}>
        <Link underline="hover" color="inherit" href="/admin">
          <Home sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }} />
          Admin
        </Link>
        <Typography color="text.primary">{title}</Typography>
      </Breadcrumbs>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        spacing={2}
      >
        <Box>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {subtitle}
          </Typography>
        </Box>

        <Stack direction="row" spacing={2}>
          {showRefresh && (
            <Button
              variant="outlined"
              startIcon={<Refresh />}
              onClick={onRefresh}
              size="small"
            >
              Actualiser
            </Button>
          )}

          <Button
            variant="contained"
            startIcon={<Download />}
            size="small"
            sx={{
              bgcolor: "primary.main",
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            Exporter
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default DashboardHeader;
