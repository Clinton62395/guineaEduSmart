// src/layouts/MainLayout.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Footer from "../Footer";

const NavLayout = () => {
  const location = useLocation();
  const shouldShowFooter = () => {
    const hiddenPaths = [
      "/admin",
      "/student",
      "/teacher",
      "/choose",
      "/chooseasguest",
      "/Adminlogin",
      "/Studentlogin",
      "/Teacherlogin",
      "/Adminregister",
      "/ChooseUser",
      "/Authbypass",
      "/NotFound",
    ];
    return !hiddenPaths.includes(location.pathname);
  };

  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
        {shouldShowFooter() && <Footer />}
      </main>
    </div>
  );
};

export default NavLayout;
