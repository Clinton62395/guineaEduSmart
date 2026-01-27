// src/components/Tables/StudentRowActions.jsx
import React, { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from "@mui/material";
import {
  MoreVert,
  Visibility,
  Edit,
  Delete,
  Person,
  Assignment,
  Payment,
  School,
} from "@mui/icons-material";

const StudentRowActions = ({
  row,
  onView,
  onEdit,
  onDelete,
  onOtherActions,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAction = (action) => {
    handleMenuClose();
    switch (action) {
      case "view":
        onView?.(row);
        break;
      case "edit":
        onEdit?.(row);
        break;
      case "delete":
        onDelete?.(row);
        break;
      default:
        onOtherActions?.(action, row);
    }
  };

  const actions = [
    {
      label: "Voir profil",
      icon: <Visibility />,
      action: "view",
      color: "primary",
    },
    { label: "Modifier", icon: <Edit />, action: "edit", color: "info" },
    {
      label: "Notes",
      icon: <Assignment />,
      action: "grades",
      color: "warning",
    },
    {
      label: "Paiements",
      icon: <Payment />,
      action: "payments",
      color: "success",
    },
    {
      label: "Transfert classe",
      icon: <School />,
      action: "transfer",
      color: "secondary",
    },
    { label: "Supprimer", icon: <Delete />, action: "delete", color: "error" },
  ];

  return (
    <>
      <IconButton
        size="small"
        onClick={handleMenuOpen}
        sx={{
          "&:hover": { bgcolor: "action.hover" },
        }}
      >
        <MoreVert fontSize="small" />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            width: 200,
            borderRadius: 2,
            mt: 1,
          },
        }}
      >
        {actions.map((item) => (
          <MenuItem
            key={item.action}
            onClick={() => handleAction(item.action)}
            sx={{
              py: 1,
              "&:hover": { bgcolor: `${item.color}.50` },
            }}
          >
            <ListItemIcon sx={{ color: `${item.color}.main` }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default StudentRowActions;
