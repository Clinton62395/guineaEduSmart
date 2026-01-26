import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Container, Typography, Tab, IconButton } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  BlueButton,
  GreenButton,
  PurpleButton,
} from "../../../components/buttonStyles";
import TableTemplate from "../../../components/TableTemplate";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import SpeedDialTemplate from "../../../components/SpeedDialTemplate";
import Popup from "../../../components/Popup";

const ClassDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  // Mock loader
  const [loading, setLoading] = useState(true);

  // Tabs
  const [value, setValue] = useState("1");

  // Popup
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  // Mock data
  const classID = params.id || "class-123";
  const sclassDetails = { sclassName: "10th Grade" };
  const subjectsList = [
    { _id: "sub1", subName: "Mathematics", subCode: "MATH101" },
    { _id: "sub2", subName: "English", subCode: "ENG101" },
  ];
  const sclassStudents = [
    { _id: "stu1", name: "Alice", rollNum: "1" },
    { _id: "stu2", name: "Bob", rollNum: "2" },
  ];

  useEffect(() => {
    // Simule un appel backend
    setTimeout(() => setLoading(false), 800);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const deleteHandler = (deleteID, address) => {
    setMessage(`Delete disabled for mock (${address})`);
    setShowPopup(true);
  };

  // ---------- Subjects ----------
  const subjectColumns = [
    { id: "name", label: "Subject Name", minWidth: 170 },
    { id: "code", label: "Subject Code", minWidth: 100 },
  ];

  const subjectRows = subjectsList.map((subject) => ({
    name: subject.subName,
    code: subject.subCode,
    id: subject._id,
  }));

  const SubjectsButtonHaver = ({ row }) => (
    <>
      <IconButton onClick={() => deleteHandler(row.id, "Subject")}>
        <DeleteIcon color="error" />
      </IconButton>
      <BlueButton
        variant="contained"
        onClick={() => navigate(`/Admin/class/subject/${classID}/${row.id}`)}
      >
        View
      </BlueButton>
    </>
  );

  const subjectActions = [
    {
      icon: <PostAddIcon color="primary" />,
      name: "Add New Subject",
      action: () => navigate("/Admin/addsubject/" + classID),
    },
    {
      icon: <DeleteIcon color="error" />,
      name: "Delete All Subjects",
      action: () => deleteHandler(classID, "SubjectsClass"),
    },
  ];

  const ClassSubjectsSection = () => (
    <>
      <Typography variant="h5" gutterBottom>
        Subjects List:
      </Typography>
      <TableTemplate
        buttonHaver={SubjectsButtonHaver}
        columns={subjectColumns}
        rows={subjectRows}
      />
      <SpeedDialTemplate actions={subjectActions} />
    </>
  );

  // ---------- Students ----------
  const studentColumns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "rollNum", label: "Roll Number", minWidth: 100 },
  ];

  const studentRows = sclassStudents.map((student) => ({
    name: student.name,
    rollNum: student.rollNum,
    id: student._id,
  }));

  const StudentsButtonHaver = ({ row }) => (
    <>
      <IconButton onClick={() => deleteHandler(row.id, "Student")}>
        <PersonRemoveIcon color="error" />
      </IconButton>
      <BlueButton
        variant="contained"
        onClick={() => navigate("/Admin/students/student/" + row.id)}
      >
        View
      </BlueButton>
      <PurpleButton
        variant="contained"
        onClick={() => navigate("/Admin/students/student/attendance/" + row.id)}
      >
        Attendance
      </PurpleButton>
    </>
  );

  const studentActions = [
    {
      icon: <PersonAddAlt1Icon color="primary" />,
      name: "Add New Student",
      action: () => navigate("/Admin/class/addstudents/" + classID),
    },
    {
      icon: <PersonRemoveIcon color="error" />,
      name: "Delete All Students",
      action: () => deleteHandler(classID, "StudentsClass"),
    },
  ];

  const ClassStudentsSection = () => (
    <>
      <Typography variant="h5" gutterBottom>
        Students List:
      </Typography>
      <TableTemplate
        buttonHaver={StudentsButtonHaver}
        columns={studentColumns}
        rows={studentRows}
      />
      <SpeedDialTemplate actions={studentActions} />
    </>
  );

  const ClassTeachersSection = () => (
    <Typography variant="h5">Teachers (mock)</Typography>
  );

  const ClassDetailsSection = () => {
    return (
      <>
        <Typography variant="h4" align="center" gutterBottom>
          Class Details
        </Typography>
        <Typography variant="h5" gutterBottom>
          This is Class {sclassDetails.sclassName}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Number of Subjects: {subjectsList.length}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Number of Students: {sclassStudents.length}
        </Typography>
      </>
    );
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              sx={{
                position: "fixed",
                width: "100%",
                bgcolor: "background.paper",
                zIndex: 1,
              }}
            >
              <Tab label="Details" value="1" />
              <Tab label="Subjects" value="2" />
              <Tab label="Students" value="3" />
              <Tab label="Teachers" value="4" />
            </TabList>
          </Box>
          <Container sx={{ marginTop: "3rem", marginBottom: "4rem" }}>
            <TabPanel value="1">
              <ClassDetailsSection />
            </TabPanel>
            <TabPanel value="2">
              <ClassSubjectsSection />
            </TabPanel>
            <TabPanel value="3">
              <ClassStudentsSection />
            </TabPanel>
            <TabPanel value="4">
              <ClassTeachersSection />
            </TabPanel>
          </Container>
        </TabContext>
      </Box>
      <Popup
        message={message}
        setShowPopup={setShowPopup}
        showPopup={showPopup}
      />
    </>
  );
};

export default ClassDetails;
