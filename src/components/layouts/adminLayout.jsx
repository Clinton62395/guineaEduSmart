import { useState } from "react";
import {
  Box,
  CssBaseline,
  Toolbar,
  IconButton,
  Divider,
  List,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Outlet } from "react-router-dom";
import { Drawer } from "../styles";
import SideBar from "../../pages/admin/SideBar";
import CommonTopBar from "../navbar/topbar/CmmonTopbar";

const AdminLayout = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}

      {/* TopBar commun */}
      <CommonTopBar onMenuClick={toggleDrawer} />

      {/* Sidebar */}
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

      {/* Contenu principal */}
      <Box component="main" sx={styles.boxStyled}>
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
    px: 1,
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
