import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import ReportIcon from "@mui/icons-material/Report";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PaymentIcon from "@mui/icons-material/Payment";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EventIcon from "@mui/icons-material/Event";
import EditIcon from "@mui/icons-material/Edit";

export const sidebarItems = {
  // admin sidebar items
  admin: [
    { text: "Dashboard", icon: <HomeIcon />, path: "/admin/dashboard" },
    {
      text: "Users",
      icon: <SupervisorAccountOutlinedIcon />,
      path: "/admin/users",
      subItems: [
        {
          text: "Students",
          icon: <PersonOutlineIcon />,
          path: "/admin/users/students",
        },
        {
          text: "Teachers",
          icon: <PersonOutlineIcon />,
          path: "/admin/users/teachers",
        },
        {
          text: "Parents",
          icon: <PersonOutlineIcon />,
          path: "/admin/users/parents",
        },
      ],
    },
    { text: "Classes", icon: <ClassOutlinedIcon />, path: "/admin/classes" },
    { text: "Subjects", icon: <AssignmentIcon />, path: "/admin/subjects" },
    {
      text: "Finance",
      icon: <AttachMoneyIcon />,
      path: "/admin/finance",
      subItems: [
        {
          text: "Payments",
          icon: <PaymentIcon />,
          path: "/admin/finance/payments",
        },
        {
          text: "Invoices",
          icon: <ReceiptIcon />,
          path: "/admin/finance/invoices",
        },
        {
          text: "Reports",
          icon: <AssessmentIcon />,
          path: "/admin/finance/reports",
        },
      ],
    },
    {
      text: "Notices",
      icon: <AnnouncementOutlinedIcon />,
      path: "/admin/notices",
    },
    { text: "Complains", icon: <ReportIcon />, path: "/admin/complains" },
    { text: "Settings", icon: <SettingsIcon />, path: "/admin/settings" },
  ],

  teacher: [
    { text: "Dashboard", icon: <HomeIcon />, path: "/teacher/dashboard" },
    {
      text: "My Classes",
      icon: <ClassOutlinedIcon />,
      path: "/teacher/classes",
    },
    { text: "Grades", icon: <AssignmentIcon />, path: "/teacher/grades" },
    {
      text: "Attendance",
      icon: <CheckCircleOutlineIcon />,
      path: "/teacher/attendance",
    },
    {
      text: "Notices",
      icon: <AnnouncementOutlinedIcon />,
      path: "/teacher/notices",
    },
    { text: "Complains", icon: <ReportIcon />, path: "/teacher/complains" },
    { text: "Resources", icon: <MenuBookIcon />, path: "/teacher/resources" },
  ],

  // parents sidebar items
  parent: [
    { text: "Dashboard", icon: <HomeIcon />, path: "/parent/dashboard" },
    {
      text: "Children",
      icon: <PersonOutlineIcon />,
      path: "/parent/children",
      subItems: [
        {
          text: "Grades",
          icon: <AssignmentIcon />,
          path: "/parent/children/grades",
        },
        {
          text: "Attendance",
          icon: <CheckCircleOutlineIcon />,
          path: "/parent/children/attendance",
        },
        {
          text: "Resources",
          icon: <MenuBookIcon />,
          path: "/parent/children/resources",
        },
      ],
    },
    {
      text: "Notices",
      icon: <AnnouncementOutlinedIcon />,
      path: "/parent/notices",
    },
    { text: "Payments", icon: <AttachMoneyIcon />, path: "/parent/payments" },
    { text: "Appointments", icon: <EventIcon />, path: "/parent/appointments" },
  ],

  // students sidebar items
  student: [
    { text: "Dashboard", icon: <HomeIcon />, path: "/student/dashboard" },
    {
      text: "My Classes",
      icon: <ClassOutlinedIcon />,
      path: "/student/classes",
    },
    { text: "Grades", icon: <AssignmentIcon />, path: "/student/grades" },
    {
      text: "Attendance",
      icon: <CheckCircleOutlineIcon />,
      path: "/student/attendance",
    },
    {
      text: "Notices",
      icon: <AnnouncementOutlinedIcon />,
      path: "/student/notices",
    },
    { text: "Assignments", icon: <EditIcon />, path: "/student/assignments" },
    { text: "Resources", icon: <MenuBookIcon />, path: "/student/resources" },
  ],
};
