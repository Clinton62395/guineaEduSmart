import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import ReportIcon from "@mui/icons-material/Report";
import AssignmentIcon from "@mui/icons-material/Assignment";

export const sidebarItems = {
  admin: [
    { text: "Dashboard", icon: <HomeIcon />, path: "/admin" },
    { text: "Classes", icon: <ClassOutlinedIcon />, path: "/admin/classes" },
    { text: "Subjects", icon: <AssignmentIcon />, path: "/admin/subjects" },
    {
      text: "Teachers",
      icon: <SupervisorAccountOutlinedIcon />,
      path: "/admin/teachers",
    },
    { text: "Students", icon: <PersonOutlineIcon />, path: "/admin/students" },
    {
      text: "Notices",
      icon: <AnnouncementOutlinedIcon />,
      path: "/admin/notices",
    },
    { text: "Complains", icon: <ReportIcon />, path: "/admin/complains" },
  ],

  // teacher side bar links
  teacher: [
    { text: "Dashboard", icon: <HomeIcon />, path: "/teacher" },
    {
      text: "My Classes",
      icon: <ClassOutlinedIcon />,
      path: "/teacher/classes",
    },
    { text: "Subjects", icon: <AssignmentIcon />, path: "/teacher/subjects" },
    {
      text: "Notices",
      icon: <AnnouncementOutlinedIcon />,
      path: "/teacher/notices",
    },
    { text: "Complains", icon: <ReportIcon />, path: "/teacher/complains" },
  ],

  // parent side bar links
  parent: [
    { text: "Dashboard", icon: <HomeIcon />, path: "/parent" },
    { text: "Children", icon: <PersonOutlineIcon />, path: "/parent/children" },
    {
      text: "Notices",
      icon: <AnnouncementOutlinedIcon />,
      path: "/parent/notices",
    },
  ],

  // student side bar links
  student: [
    { text: "Dashboard", icon: <HomeIcon />, path: "/student" },
    {
      text: "My Classes",
      icon: <ClassOutlinedIcon />,
      path: "/student/classes",
    },
    { text: "Subjects", icon: <AssignmentIcon />, path: "/student/subjects" },
    {
      text: "Notices",
      icon: <AnnouncementOutlinedIcon />,
      path: "/student/notices",
    },
  ],
};
