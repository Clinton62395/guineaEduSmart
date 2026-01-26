// src/components/Navbar.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
  Menu,
  MenuItem,
  Fade,
  Divider,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Home,
  TrendingUp,
  EmojiEvents,
  AttachMoney,
  FormatQuote,
  Info,
  ExpandMore,
  ExpandLess,
  School,
  Dashboard,
  People,
  Security,
  MobileFriendly,
  Cloud,
  Book,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useNavbar } from "./useNavbar";

const links = [
  {
    name: "Features",
    path: "/features",
    icon: <TrendingUp fontSize="small" />,
    submenu: [
      {
        name: "Learning Analytics",
        path: "/features/analytics",
        icon: <Dashboard fontSize="small" />,
      },
      {
        name: "Content Management",
        path: "/features/content",
        icon: <Book fontSize="small" />,
      },
      {
        name: "Collaboration Tools",
        path: "/features/collaboration",
        icon: <People fontSize="small" />,
      },
      {
        name: "Cloud Platform",
        path: "/features/cloud",
        icon: <Cloud fontSize="small" />,
      },
      {
        name: "Security",
        path: "/features/security",
        icon: <Security fontSize="small" />,
      },
      {
        name: "Mobile App",
        path: "/features/mobile",
        icon: <MobileFriendly fontSize="small" />,
      },
    ],
  },
  {
    name: "Benefits",
    path: "/benefits",
    icon: <EmojiEvents fontSize="small" />,
    submenu: [
      {
        name: "For Students",
        path: "/benefits/students",
        icon: <School fontSize="small" />,
      },
      {
        name: "For Teachers",
        path: "/benefits/teachers",
        icon: <People fontSize="small" />,
      },
      {
        name: "For Parents",
        path: "/benefits/parents",
        icon: <People fontSize="small" />,
      },
      {
        name: "For Schools",
        path: "/benefits/schools",
        icon: <Dashboard fontSize="small" />,
      },
    ],
  },
  {
    name: "Pricing",
    path: "/pricing",
    icon: <AttachMoney fontSize="small" />,
  },
  {
    name: "Testimonials",
    path: "/testimonials",
    icon: <FormatQuote fontSize="small" />,
  },
  {
    name: "About",
    path: "/about",
    icon: <Info fontSize="small" />,
  },
];

const Navbar = () => {
  const {
    mobileOpen,
    featuresMenuAnchor,
    benefitsMenuAnchor,
    openSubmenu,
    scrolled,
    handleDrawerToggle,
    handleFeaturesMenuOpen,
    handleFeaturesMenuClose,
    handleBenefitsMenuOpen,
    handleBenefitsMenuClose,
    handleSubmenuToggle,
    isActivePath,
  } = useNavbar();

  const drawer = (
    <Box sx={{ width: 280 }} onClick={handleDrawerToggle}>
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
          GuineaEduSmart
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {links.map((link) => (
          <React.Fragment key={link.name}>
            {link.submenu ? (
              <>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => handleSubmenuToggle(link.name)}
                  >
                    <ListItemIcon
                      sx={{
                        color: isActivePath(link.path) ? "#FFA726" : "#1976d2",
                      }}
                    >
                      {link.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={link.name}
                      primaryTypographyProps={{
                        fontWeight: isActivePath(link.path) ? "bold" : "normal",
                        color: isActivePath(link.path)
                          ? "#FFA726"
                          : "text.primary",
                      }}
                    />
                    {openSubmenu === link.name ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )}
                  </ListItemButton>
                </ListItem>
                <Collapse
                  in={openSubmenu === link.name}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {link.submenu.map((subItem) => (
                      <ListItem
                        key={subItem.path}
                        disablePadding
                        sx={{ pl: 4 }}
                      >
                        <ListItemButton
                          component={NavLink}
                          to={subItem.path}
                          sx={{
                            pl: 3,
                            "&.active": {
                              backgroundColor: "rgba(255, 167, 38, 0.1)",
                              borderLeft: "3px solid #FFA726",
                            },
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            {subItem.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={subItem.name}
                            primaryTypographyProps={{
                              fontSize: "0.875rem",
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={link.path}
                  sx={{
                    "&.active": {
                      backgroundColor: "rgba(255, 167, 38, 0.1)",
                      borderLeft: "3px solid #FFA726",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: isActivePath(link.path) ? "#FFA726" : "#1976d2",
                    }}
                  >
                    {link.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={link.name}
                    primaryTypographyProps={{
                      fontWeight: isActivePath(link.path) ? "bold" : "normal",
                      color: isActivePath(link.path)
                        ? "#FFA726"
                        : "text.primary",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            )}
          </React.Fragment>
        ))}
      </List>
      <Box sx={{ p: 2 }}>
        <Button
          fullWidth
          variant="contained"
          color="warning"
          sx={{
            py: 1.5,
            borderRadius: 2,
            fontWeight: "bold",
            background: "linear-gradient(45deg, #FFA726, #FF9800)",
            "&:hover": {
              background: "linear-gradient(45deg, #FF9800, #F57C00)",
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(255, 167, 38, 0.4)",
            },
            transition: "all 0.3s ease",
          }}
          component={NavLink}
          to="/choose"
        >
          Join Now
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <Slide appear={false} direction="down" in={!scrolled}>
        <AppBar
          position="sticky"
          sx={{
            background: scrolled
              ? "linear-gradient(90deg, #1976d2, #1565c0, #0d47a1)"
              : "linear-gradient(90deg, #1976d2, #1565c0)",
            boxShadow: scrolled
              ? "0 4px 20px rgba(0,0,0,0.15)"
              : "0 2px 4px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
            py: scrolled ? 0.5 : 1,
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: { xs: 2, md: 4 },
            }}
          >
            {/* Logo */}
            <Box
              component={NavLink}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                textDecoration: "none",
                "&:hover": {
                  "& .logo-icon": {
                    transform: "rotate(15deg) scale(1.1)",
                  },
                },
              }}
            >
              <Box
                className="logo-icon"
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  bgcolor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.3s ease",
                }}
              >
                {/* <School sx={{ color: "#1976d2", fontSize: 28 }} /> */}
                <img src="/logo.png" alt="logo" width="50" height="50" />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  display: { xs: "none", sm: "block" },
                }}
              >
                GuineaEdu<span style={{ color: "#FFA726" }}>Smart</span>
              </Typography>
              <Box sx={{ display: "flex", gap: 0.5, ml: 1 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 2,
                    bgcolor: "#FFA726",
                    borderRadius: 1,
                  }}
                />
                <Box
                  sx={{
                    width: 8,
                    height: 2,
                    bgcolor: "white",
                    borderRadius: 1,
                  }}
                />
                <Box
                  sx={{
                    width: 8,
                    height: 2,
                    bgcolor: "#FFA726",
                    borderRadius: 1,
                  }}
                />
              </Box>
            </Box>

            {/* Desktop Navigation Links */}
            <Stack
              direction="row"
              spacing={1}
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              {links.map((link) => {
                if (link.name === "Features") {
                  return (
                    <Box key={link.name}>
                      <Button
                        onMouseEnter={handleFeaturesMenuOpen}
                        onClick={handleFeaturesMenuOpen}
                        sx={{
                          color: isActivePath(link.path) ? "#FFA726" : "white",
                          fontWeight: isActivePath(link.path)
                            ? "bold"
                            : "normal",
                          position: "relative",
                          "&:hover": {
                            color: "#FFA726",
                            transform: "translateY(-1px)",
                            "&::after": {
                              width: "100%",
                            },
                          },
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: 4,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: isActivePath(link.path) ? "100%" : "0%",
                            height: 2,
                            bgcolor: "#FFA726",
                            borderRadius: 2,
                            transition: "width 0.3s ease",
                          },
                        }}
                        endIcon={<ExpandMore />}
                      >
                        {link.name}
                      </Button>
                      <Menu
                        anchorEl={featuresMenuAnchor}
                        open={Boolean(featuresMenuAnchor)}
                        onClose={handleFeaturesMenuClose}
                        MenuListProps={{
                          onMouseLeave: handleFeaturesMenuClose,
                        }}
                        TransitionComponent={Fade}
                        sx={{
                          "& .MuiPaper-root": {
                            mt: 1.5,
                            borderRadius: 2,
                            boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                            minWidth: 240,
                          },
                        }}
                      >
                        {link.submenu.map((subItem) => (
                          <MenuItem
                            key={subItem.path}
                            component={NavLink}
                            to={subItem.path}
                            onClick={handleFeaturesMenuClose}
                            selected={isActivePath(subItem.path)}
                            sx={{
                              py: 1.5,
                              px: 2,
                              "&.Mui-selected": {
                                bgcolor: "rgba(255, 167, 38, 0.1)",
                                "& .MuiListItemIcon-root": {
                                  color: "#FFA726",
                                },
                              },
                              "&:hover": {
                                bgcolor: "rgba(25, 118, 210, 0.08)",
                              },
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: 40 }}>
                              {subItem.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={subItem.name}
                              primaryTypographyProps={{
                                fontSize: "0.9rem",
                                fontWeight: isActivePath(subItem.path)
                                  ? "600"
                                  : "400",
                              }}
                            />
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  );
                }

                if (link.name === "Benefits") {
                  return (
                    <Box key={link.name}>
                      <Button
                        onMouseEnter={handleBenefitsMenuOpen}
                        onClick={handleBenefitsMenuOpen}
                        sx={{
                          color: isActivePath(link.path) ? "#FFA726" : "white",
                          fontWeight: isActivePath(link.path)
                            ? "bold"
                            : "normal",
                          position: "relative",
                          "&:hover": {
                            color: "#FFA726",
                            transform: "translateY(-1px)",
                            "&::after": {
                              width: "100%",
                            },
                          },
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: 4,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: isActivePath(link.path) ? "100%" : "0%",
                            height: 2,
                            bgcolor: "#FFA726",
                            borderRadius: 2,
                            transition: "width 0.3s ease",
                          },
                        }}
                        endIcon={<ExpandMore />}
                      >
                        {link.name}
                      </Button>
                      <Menu
                        anchorEl={benefitsMenuAnchor}
                        open={Boolean(benefitsMenuAnchor)}
                        onClose={handleBenefitsMenuClose}
                        MenuListProps={{
                          onMouseLeave: handleBenefitsMenuClose,
                        }}
                        TransitionComponent={Fade}
                        sx={{
                          "& .MuiPaper-root": {
                            mt: 1.5,
                            borderRadius: 2,
                            boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                            minWidth: 240,
                          },
                        }}
                      >
                        {link.submenu.map((subItem) => (
                          <MenuItem
                            key={subItem.path}
                            component={NavLink}
                            to={subItem.path}
                            onClick={handleBenefitsMenuClose}
                            selected={isActivePath(subItem.path)}
                            sx={{
                              py: 1.5,
                              px: 2,
                              "&.Mui-selected": {
                                bgcolor: "rgba(255, 167, 38, 0.1)",
                                "& .MuiListItemIcon-root": {
                                  color: "#FFA726",
                                },
                              },
                              "&:hover": {
                                bgcolor: "rgba(25, 118, 210, 0.08)",
                              },
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: 40 }}>
                              {subItem.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={subItem.name}
                              primaryTypographyProps={{
                                fontSize: "0.9rem",
                                fontWeight: isActivePath(subItem.path)
                                  ? "600"
                                  : "400",
                              }}
                            />
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  );
                }

                return (
                  <Button
                    key={link.name}
                    component={NavLink}
                    to={link.path}
                    sx={{
                      color: isActivePath(link.path) ? "#FFA726" : "white",
                      fontWeight: isActivePath(link.path) ? "bold" : "normal",
                      position: "relative",
                      "&:hover": {
                        color: "#FFA726",
                        transform: "translateY(-1px)",
                        "&::after": {
                          width: "100%",
                        },
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 4,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: isActivePath(link.path) ? "100%" : "0%",
                        height: 2,
                        bgcolor: "#FFA726",
                        borderRadius: 2,
                        transition: "width 0.3s ease",
                      },
                    }}
                  >
                    {link.name}
                  </Button>
                );
              })}

              {/* CTA Button */}
              <Button
                variant="contained"
                color="warning"
                component={NavLink}
                to="/adminregister"
                sx={{
                  ml: 2,
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  fontWeight: "bold",
                  background: "linear-gradient(45deg, #FFA726, #FF9800)",
                  boxShadow: "0 2px 8px rgba(255, 167, 38, 0.3)",
                  "&:hover": {
                    background: "linear-gradient(45deg, #FF9800, #F57C00)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(255, 167, 38, 0.4)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Join Now
              </Button>
            </Stack>

            {/* Mobile menu button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Slide>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
