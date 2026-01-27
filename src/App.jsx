import React, { useEffect } from "react";
// AOS animation library
import AOS from "aos";
import "aos/dist/aos.css";
// React Router DOM
import { Routes, Route, Navigate } from "react-router-dom";

// Pages and Components
import Homepage from "./pages/Homepage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import LoginPage from "./pages/LoginPage";
import AdminRegisterPage from "./pages/admin/AdminRegisterPage";
import ChooseUser from "./pages/ChooseUser";
import NotFound404 from "./pages/NotFound";
import NavLayout from "./components/layouts/navbarLayout";
import TestimonyPage from "./pages/TestimonyPage";
import AboutPage from "./pages/About";
import ContactFormComponent from "./components/features/forms/ContactUs";
import AdminRegistrationForm from "./pages/admin/AdminRegisterPage";
import AdminRoutes from "./components/routes/admin.routes";
import { CssBaseline } from "@mui/material";
import MyThemeProvider from "./components/helpers/ThemeProvider";
import TeacherRoutes from "./components/routes/teacher.routes";

const App = () => {
  // AOS initialization
  useEffect(() => {
    AOS.init({
      duration: 800, // durée des animations en ms
      easing: "ease-in-out", // courbe d’animation
      once: true, // joue l’animation une seule fois
      mirror: false, // false = animation pas inversée au scroll up
    });
    AOS.refresh();
  }, []);

  return (
    <MyThemeProvider>
      <Routes>
        {/* Pages publiques */}

        <Route path="/" element={<NavLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/testimonials" element={<TestimonyPage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/choose" element={<ChooseUser visitor="normal" />} />
          <Route
            path="/chooseasguest"
            element={<ChooseUser visitor="guest" />}
          />

          <Route path="/adminregister" element={<AdminRegistrationForm />} />
          <Route path="/adminlogin" element={<LoginPage role="Admin" />} />
          <Route path="/studentlogin" element={<LoginPage role="Student" />} />
          <Route path="/teacherlogin" element={<LoginPage role="Teacher" />} />

          <Route path="/Adminregister" element={<AdminRegisterPage />} />

          {/* constact us  */}
          <Route path="/contact-us" element={<ContactFormComponent />} />
        </Route>

        {/* ADMIN */}
        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* STUDENT */}
        <Route path="/students/*" element={<StudentDashboard />} />

        {/* TEACHER */}
        <Route path="/teachers/*" element={<TeacherRoutes />} />

        {/* 404 */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </MyThemeProvider>
  );
};

export default App;
