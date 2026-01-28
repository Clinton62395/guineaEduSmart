// src/components/topbar/TopBarUserMenu.jsx
import React, { useState } from "react";
import {
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import {
  Logout,
  Settings,
  Person,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";

const TopBarUserMenu = ({
  user,
  role,
  onLogout,
  onProfile,
  onSettings,
  onThemeToggle,
  themeMode = "light",
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const initials = user?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      <div
        className="flex items-center gap-2 cursor-pointer hover:bg-white/10 px-2 py-1 rounded-lg"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <Avatar sx={{ width: 36, height: 36 }}>{initials || "U"}</Avatar>

        <div className="hidden md:flex flex-col leading-tight">
          <span className="text-sm text-white font-semibold">{user?.name}</span>
          <span className="text-xs text-white/70">{role}</span>
        </div>
      </div>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          sx: {
            width: 260,
            borderRadius: 2,
            mt: 1,
          },
        }}
      >
        <MenuItem onClick={onProfile}>
          <Person fontSize="small" />
          <Typography ml={1}>Mon profil</Typography>
        </MenuItem>

        <MenuItem onClick={onSettings}>
          <Settings fontSize="small" />
          <Typography ml={1}>Paramètres</Typography>
        </MenuItem>

        {onThemeToggle && (
          <MenuItem onClick={onThemeToggle}>
            {themeMode === "dark" ? (
              <Brightness7 fontSize="small" />
            ) : (
              <Brightness4 fontSize="small" />
            )}
            <Typography ml={1}>Changer thème</Typography>
          </MenuItem>
        )}

        <Divider />

        <MenuItem onClick={onLogout} sx={{ color: "error.main" }}>
          <Logout fontSize="small" />
          <Typography ml={1}>Déconnexion</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default TopBarUserMenu;
