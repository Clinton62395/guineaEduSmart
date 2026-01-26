import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Chip,
  Typography,
  Box,
} from "@mui/material";
import {
  PersonAdd,
  School,
  Assignment,
  Payment,
  CheckCircle,
  Pending,
} from "@mui/icons-material";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

/* =========================
   Mappings centralisés
========================= */

const ACTION_ICONS = {
  registration: PersonAdd,
  assignment: Assignment,
  payment: Payment,
  transfer: School,
};

const STATUS_CONFIG = {
  completed: {
    icon: <CheckCircle />,
    color: "#4CAF50",
  },
  pending: {
    icon: <Pending />,
    color: "#FF9800",
  },
};

/* =========================
   Mock data (backend-ready)
========================= */

const activities = [
  {
    id: 1,
    user: "Fatoumata Diallo",
    action: "Inscription",
    type: "registration",
    time: new Date(),
    status: "completed",
    color: "#4CAF50",
  },
  {
    id: 2,
    user: "M. Camara",
    action: "Devoir ajouté",
    type: "assignment",
    time: new Date(Date.now() - 3600000),
    status: "pending",
    color: "#FF9800",
  },
  {
    id: 3,
    user: "Famille Bah",
    action: "Paiement frais",
    type: "payment",
    time: new Date(Date.now() - 7200000),
    status: "completed",
    color: "#9C27B0",
  },
  {
    id: 4,
    user: "Saliou Diallo",
    action: "Transfert de classe",
    type: "transfer",
    time: new Date(Date.now() - 10800000),
    status: "completed",
    color: "#2196F3",
  },
];

/* =========================
   Composant Item
========================= */

const ActivityItem = ({ activity }) => {
  const Icon = ACTION_ICONS[activity.type];
  const status = STATUS_CONFIG[activity.status];

  return (
    <ListItem
      sx={{
        py: 1.5,
        px: 0,
        borderBottom: "1px solid",
        borderColor: "divider",
        "&:last-child": { borderBottom: "none" },
      }}
    >
      <ListItemIcon sx={{ minWidth: 40 }}>
        <Avatar
          sx={{
            bgcolor: `${activity.color}20`,
            color: activity.color,
            width: 36,
            height: 36,
          }}
        >
          <Icon fontSize="small" />
        </Avatar>
      </ListItemIcon>

      <ListItemText
        primary={
          <Typography variant="body2" fontWeight={600}>
            {activity.user}
          </Typography>
        }
        secondary={
          <Typography variant="caption" color="text.secondary">
            {activity.action} • {format(activity.time, "HH:mm", { locale: fr })}
          </Typography>
        }
      />

      <Box sx={{ display: "flex", alignItems: "center" }}>
        {React.cloneElement(status.icon, {
          sx: { color: status.color, fontSize: 18 },
        })}
      </Box>
    </ListItem>
  );
};

/* =========================
   Composant principal
========================= */

const RecentActivity = () => {
  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Activité récente
        </Typography>
        <Chip label="Aujourd'hui" size="small" variant="outlined" />
      </Box>

      {/* Liste */}
      <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
        {activities.length === 0 ? (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center", mt: 4 }}
          >
            Aucune activité récente
          </Typography>
        ) : (
          <List sx={{ p: 0 }}>
            {activities.slice(0, 6).map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
          </List>
        )}
      </Box>
    </Box>
  );
};

export default RecentActivity;
