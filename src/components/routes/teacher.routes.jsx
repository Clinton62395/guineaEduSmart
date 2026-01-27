import { Route, Routes } from "react-router-dom";
import AdminHomePage from "../../pages/admin/AdminHomePage";
import NotFound404 from "../../pages/NotFound";
import Logout from "../../pages/Logout";
import AddTeacher from "../../pages/admin/teacherRelated/AddTeacher";
import ChooseSubject from "../../pages/admin/teacherRelated/ChooseSubject";
import ChooseClass from "../../pages/admin/teacherRelated/ChooseClass";
import TeacherDetails from "../../pages/admin/teacherRelated/TeacherDetails";
import ShowTeachers from "../../pages/admin/teacherRelated/ShowTeachers";
import StudentExamMarks from "../../pages/admin/studentRelated/StudentExamMarks";
import StudentAttendance from "../../pages/admin/studentRelated/StudentAttendance";
import ViewStudent from "../../pages/admin/studentRelated/ViewStudent";
import AddStudent from "../../pages/admin/studentRelated/AddStudent";
import ClassDetails from "../../pages/admin/classRelated/ClassDetails";
import ShowClasses from "../../pages/admin/classRelated/ShowClasses";
import AddClass from "../../pages/admin/classRelated/AddClass";
import SubjectForm from "../../pages/admin/subjectRelated/SubjectForm";
import ViewSubject from "../../pages/admin/subjectRelated/ViewSubject";
import ShowSubjects from "../../pages/admin/subjectRelated/ShowSubjects";
import ShowNotices from "../../pages/admin/noticeRelated/ShowNotices";
import AddNotice from "../../pages/admin/noticeRelated/AddNotice";
import SeeComplains from "../../pages/admin/studentRelated/SeeComplains";
import AdminProfile from "../../pages/admin/AdminProfile";
import TeacherLayout from "../../pages/admin/AdminDashboard";

const TeacherRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TeacherLayout />}>
        <Route index element={<AdminHomePage />} />
        <Route path="profile" element={<AdminProfile />} />
        <Route path="complains" element={<SeeComplains />} />

        {/* Notice */}
        <Route path="addnotice" element={<AddNotice />} />
        <Route path="notices" element={<ShowNotices />} />

        {/* Subject */}
        <Route path="subjects" element={<ShowSubjects />} />
        <Route
          path="subjects/subject/:classID/:subjectID"
          element={<ViewSubject />}
        />
        <Route
          path="subjects/chooseclass"
          element={<ChooseClass situation="Subject" />}
        />

        <Route path="addsubject/:id" element={<SubjectForm />} />
        <Route
          path="class/subject/:classID/:subjectID"
          element={<ViewSubject />}
        />

        <Route
          path="subject/student/attendance/:studentID/:subjectID"
          element={<StudentAttendance situation="Subject" />}
        />
        <Route
          path="subject/student/marks/:studentID/:subjectID"
          element={<StudentExamMarks situation="Subject" />}
        />

        {/* Class */}
        <Route path="addclass" element={<AddClass />} />
        <Route path="classes" element={<ShowClasses />} />
        <Route path="classes/class/:id" element={<ClassDetails />} />
        <Route
          path="class/addstudents/:id"
          element={<AddStudent situation="Class" />}
        />

        {/* Student */}
        <Route
          path="addstudents"
          element={<AddStudent situation="Student" />}
        />
        <Route path="students" element={<ShowStudents />} />
        <Route path="students/student/:id" element={<ViewStudent />} />
        <Route
          path="students/student/attendance/:id"
          element={<StudentAttendance situation="Student" />}
        />
        <Route
          path="students/student/marks/:id"
          element={<StudentExamMarks situation="Student" />}
        />

        {/* Teacher */}
        <Route path="teachers" element={<ShowTeachers />} />
        <Route path="teachers/teacher/:id" element={<TeacherDetails />} />
        <Route
          path="teachers/chooseclass"
          element={<ChooseClass situation="Teacher" />}
        />
        <Route
          path="teachers/choosesubject/:id"
          element={<ChooseSubject situation="Norm" />}
        />
        <Route
          path="teachers/choosesubject/:classID/:teacherID"
          element={<ChooseSubject situation="Teacher" />}
        />
        <Route path="teachers/addteacher/:id" element={<AddTeacher />} />

        <Route path="logout" element={<Logout />} />
      </Route>

      {/* routes not found */}
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};

export default TeacherRoutes;
