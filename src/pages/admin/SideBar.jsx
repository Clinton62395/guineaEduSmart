import * as React from "react";
import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import ReportIcon from "@mui/icons-material/Report";
import AssignmentIcon from "@mui/icons-material/Assignment";

const SideBar = () => {
  const { pathname } = useLocation();

  const isActive = (path) =>
    pathname === path || pathname.startsWith(`${path}/`);

  return (
    <>
      {/* MAIN */}
      <ListItemButton component={Link} to="/admin">
        <ListItemIcon>
          <HomeIcon color={isActive("/admin") ? "primary" : "inherit"} />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>

      <ListItemButton component={Link} to="/admin/classes">
        <ListItemIcon>
          <ClassOutlinedIcon
            color={isActive("/admin/classes") ? "primary" : "inherit"}
          />
        </ListItemIcon>
        <ListItemText primary="Classes" />
      </ListItemButton>

      <ListItemButton component={Link} to="/admin/subjects">
        <ListItemIcon>
          <AssignmentIcon
            color={isActive("/admin/subjects") ? "primary" : "inherit"}
          />
        </ListItemIcon>
        <ListItemText primary="Subjects" />
      </ListItemButton>

      <ListItemButton component={Link} to="/admin/teachers">
        <ListItemIcon>
          <SupervisorAccountOutlinedIcon
            color={isActive("/admin/teachers") ? "primary" : "inherit"}
          />
        </ListItemIcon>
        <ListItemText primary="Teachers" />
      </ListItemButton>

      <ListItemButton component={Link} to="/admin/students">
        <ListItemIcon>
          <PersonOutlineIcon
            color={isActive("/admin/students") ? "primary" : "inherit"}
          />
        </ListItemIcon>
        <ListItemText primary="Students" />
      </ListItemButton>

      <ListItemButton component={Link} to="/admin/notices">
        <ListItemIcon>
          <AnnouncementOutlinedIcon
            color={isActive("/admin/notices") ? "primary" : "inherit"}
          />
        </ListItemIcon>
        <ListItemText primary="Notices" />
      </ListItemButton>

      <ListItemButton component={Link} to="/admin/complains">
        <ListItemIcon>
          <ReportIcon
            color={isActive("/admin/complains") ? "primary" : "inherit"}
          />
        </ListItemIcon>
        <ListItemText primary="Complains" />
      </ListItemButton>

      <Divider sx={{ my: 1 }} />

      {/* USER */}
      <ListSubheader inset>User</ListSubheader>

      <ListItemButton component={Link} to="/admin/profile">
        <ListItemIcon>
          <AccountCircleOutlinedIcon
            color={isActive("/admin/profile") ? "primary" : "inherit"}
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

export default SideBar;
