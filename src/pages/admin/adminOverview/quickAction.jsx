// src/components/dashboard/QuickActions.jsx
import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Stack,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  Add,
  People,
  Class,
  AttachMoney,
  Notifications,
  Settings,
  Download,
  CalendarToday,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const actions = [
  {
    icon: <Add />,
    label: "Nouvel élève",
    color: "#4CAF50",
    path: "/admin/students/new",
  },
  {
    icon: <Class />,
    label: "Créer classe",
    color: "#2196F3",
    path: "/admin/classes/new",
  },
  {
    icon: <People />,
    label: "Ajouter prof",
    color: "#FF9800",
    path: "/admin/teachers/new",
  },
  {
    icon: <AttachMoney />,
    label: "Collecte frais",
    color: "#9C27B0",
    path: "/admin/fees",
  },
  {
    icon: <Notifications />,
    label: "Annonce",
    color: "#F44336",
    path: "/admin/notices/new",
  },
  {
    icon: <CalendarToday />,
    label: "Planning",
    color: "#009688",
    path: "/admin/schedule",
  },
];

const QuickActions = ({ onActionClick = () => {} }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 3,
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h6" fontWeight={600}>
          Actions Rapides
        </Typography>
        <Tooltip title="Plus d'options">
          <IconButton size="small">
            <Settings />
          </IconButton>
        </Tooltip>
      </Stack>

      <Grid container spacing={2}>
        {actions.map((action, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={action.icon}
                onClick={() => onActionClick(action.path)}
                sx={{
                  height: 100,
                  flexDirection: "column",
                  borderRadius: 2,
                  borderColor: `${action.color}30`,
                  color: action.color,
                  "&:hover": {
                    borderColor: action.color,
                    bgcolor: `${action.color}10`,
                  },
                }}
              >
                <Typography variant="caption" fontWeight={500}>
                  {action.label}
                </Typography>
              </Button>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default QuickActions;
