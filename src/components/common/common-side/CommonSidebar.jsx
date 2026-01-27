import * as React from "react";
import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { sidebarItems } from "./sideLinks";

const CommonSideBar = ({ role = "admin" }) => {
  const { pathname } = useLocation();
  const isActive = (path) =>
    pathname === path || pathname.startsWith(`${path}/`);
  const items = sidebarItems[role] || [];

  return (
    <>
      {/* MAIN MENU */}
      {items.map((item) => (
        <ListItemButton
          key={item.path}
          component={Link}
          to={item.path}
          selected={isActive(item.path)}
        >
          <ListItemIcon>
            {React.cloneElement(item.icon, {
              color: isActive(item.path) ? "primary" : "inherit",
            })}
          </ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      ))}

      <Divider sx={{ my: 1 }} />

      {/* USER MENU */}
      <ListSubheader inset>User</ListSubheader>
      <ListItemButton component={Link} to={`/${role}/profile`}>
        <ListItemIcon>
          <AccountCircleOutlinedIcon
            color={isActive(`/${role}/profile`) ? "primary" : "inherit"}
          />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>

      <ListItemButton component={Link} to="/logout">
        <ListItemIcon>
          <ExitToAppIcon color="inherit" />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </>
  );
};

export default CommonSideBar;
