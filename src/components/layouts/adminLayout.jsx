import { useState } from "react";
import {
  Box,
  CssBaseline,
  Toolbar,
  IconButton,
  Typography,
  Divider,
  List,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Outlet } from "react-router-dom";
import { AppBar, Drawer } from "../styles";
import SideBar from "../../pages/admin/SideBar";
import TopBar from "../navbar/TopBar";

const AdminLayout = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* <AppBar open={open} position="absolute">
        <Toolbar sx={{ pr: "24px" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{ marginRight: "36px", ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar> */}
      <TopBar onMenuClick={toggleDrawer} />

      <Drawer
        variant="permanent"
        open={open}
        sx={open ? styles.drawerStyled : styles.hideDrawer}
      >
        <Toolbar sx={styles.toolBarStyled}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <SideBar />
        </List>
      </Drawer>

      <Box component="main" sx={styles.boxStyled}>
        <Toolbar />
        {/* Toutes les pages enfants seront rendues ici */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;

const styles = {
  boxStyled: {
    backgroundColor: (theme) =>
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  toolBarStyled: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    px: [1],
  },
  drawerStyled: {
    display: "flex",
  },
  hideDrawer: {
    display: "flex",
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
};
