import { Routes, Route, Navigate } from "react-router-dom";

import AdminHomePage from "../../pages/admin/AdminHomePage";
import AdminLayout from "../layouts/adminLayout";
import ShowStudents from "../../pages/admin/studentRelated/ShowStudents";
import AdminProfile from "../../pages/admin/AdminProfile";
import StudentExamMarks from "../../pages/admin/studentRelated/StudentExamMarks";
import StudentAttendance from "../../pages/admin/studentRelated/StudentAttendance";
import AddStudent from "../../pages/admin/studentRelated/AddStudent";
import TeacherDetails from "../../pages/admin/teacherRelated/TeacherDetails";
import ShowTeachers from "../../pages/admin/teacherRelated/ShowTeachers";
import NotFound404 from "../../pages/NotFound";

// ... autres imports

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminHomePage />} />
        {/* <Route path="dashboard" element={<AdminHomePage />} /> */}
        <Route path="profile" element={<AdminProfile />} />

        {/* Étudiants */}
        <Route path="students" element={<ShowStudents />} />
        <Route
          path="addstudents"
          element={<AddStudent situation="Student" />}
        />
        <Route
          path="students/student/:id"
          element={<StudentAttendance situation="Student" />}
        />
        <Route
          path="students/student/marks/:id"
          element={<StudentExamMarks situation="Student" />}
        />

        {/* Enseignants */}
        <Route path="teachers" element={<ShowTeachers />} />
        <Route path="teachers/teacher/:id" element={<TeacherDetails />} />

        {/* Subjects, Class, Notice etc */}
        {/* Tu peux continuer à imbriquer toutes les routes ici */}

        {/* Catch-all */}
        <Route path="*" element={<NotFound404 />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
