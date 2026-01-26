import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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

const App = () => {
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

        <Route path="/*" element={<AdminRoutes />} />

        <Route path="/admin/students" element={<StudentDashboard />} />

        <Route path="/admin/teachers" element={<TeacherDashboard />} />

        {/* 404 */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </MyThemeProvider>
  );
};

export default App;
