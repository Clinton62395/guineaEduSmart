// src/components/topbar/TopBarNotifications.jsx
import React, { useState } from "react";
import {
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Typography,
  Box,
} from "@mui/material";
import { Notifications } from "@mui/icons-material";

const TopBarNotifications = ({ notifications = [], onClickItem }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <>
      <IconButton
        onClick={(e) => setAnchorEl(e.currentTarget)}
        className="hover:bg-white/10 transition"
      >
        <Badge badgeContent={unreadCount} color="error">
          <Notifications className="text-white" />
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          sx: {
            width: 340,
            borderRadius: 2,
            mt: 1,
          },
        }}
      >
        <Box px={2} py={1}>
          <Typography fontWeight={600}>Notifications</Typography>
          <Typography variant="caption" color="text.secondary">
            {unreadCount} non lues
          </Typography>
        </Box>

        {notifications.length === 0 && (
          <MenuItem disabled>Aucune notification</MenuItem>
        )}

        {notifications.map((n) => (
          <MenuItem
            key={n.id}
            onClick={() => {
              onClickItem?.(n);
              setAnchorEl(null);
            }}
            sx={{
              bgcolor: n.read ? "transparent" : "action.hover",
              alignItems: "flex-start",
            }}
          >
            <Box>
              <Typography fontWeight={600} variant="body2">
                {n.title}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {n.message}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default TopBarNotifications;
