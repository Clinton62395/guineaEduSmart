import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Tab,
  Container,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import {
  BlueButton,
  GreenButton,
  PurpleButton,
} from "../../../components/buttonStyles";
import TableTemplate from "../../../components/TableTemplate";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import InsertChartIcon from "@mui/icons-material/InsertChart";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import TableChartIcon from "@mui/icons-material/TableChart";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";

const ViewSubject = () => {
  const navigate = useNavigate();
  const { classID, subjectID } = useParams();

  /* ---------------- MOCK STATE ---------------- */
  const subloading = false;
  const getresponse = false;

  const subjectDetails = {
    _id: subjectID,
    subName: "Mathematics",
    subCode: "MATH101",
    sessions: 30,
    sclassName: { sclassName: "Class A" },
    teacher: { name: "John Doe" },
  };

  const sclassStudents = [
    { rollNum: 1, name: "Alice", _id: "stu1" },
    { rollNum: 2, name: "Bob", _id: "stu2" },
    { rollNum: 3, name: "Charlie", _id: "stu3" },
  ];

  /* ---------------- UI STATE ---------------- */
  const [tabValue, setTabValue] = useState("1");
  const [selectedSection, setSelectedSection] = useState("attendance");

  const handleTabChange = (_, newValue) => setTabValue(newValue);
  const handleSectionChange = (_, newSection) => setSelectedSection(newSection);

  /* ---------------- TABLE ---------------- */
  const studentColumns = [
    { id: "rollNum", label: "Roll No.", minWidth: 100 },
    { id: "name", label: "Name", minWidth: 170 },
  ];

  const studentRows = sclassStudents.map((s) => ({
    rollNum: s.rollNum,
    name: s.name,
    id: s._id,
  }));

  const AttendanceButtons = ({ row }) => (
    <>
      <BlueButton onClick={() => navigate(`/Admin/students/student/${row.id}`)}>
        View
      </BlueButton>
      <PurpleButton
        onClick={() =>
          navigate(`/Admin/subject/student/attendance/${row.id}/${subjectID}`)
        }
      >
        Take Attendance
      </PurpleButton>
    </>
  );

  const MarksButtons = ({ row }) => (
    <>
      <BlueButton onClick={() => navigate(`/Admin/students/student/${row.id}`)}>
        View
      </BlueButton>
      <PurpleButton
        onClick={() =>
          navigate(`/Admin/subject/student/marks/${row.id}/${subjectID}`)
        }
      >
        Provide Marks
      </PurpleButton>
    </>
  );

  /* ---------------- SECTIONS ---------------- */
  const SubjectDetailsSection = () => (
    <>
      <Typography variant="h4" gutterBottom>
        Subject Details
      </Typography>
      <Typography>Subject Name: {subjectDetails.subName}</Typography>
      <Typography>Subject Code: {subjectDetails.subCode}</Typography>
      <Typography>Sessions: {subjectDetails.sessions}</Typography>
      <Typography>Class: {subjectDetails.sclassName.sclassName}</Typography>
      <Typography>Teacher: {subjectDetails.teacher.name}</Typography>
    </>
  );

  const SubjectStudentsSection = () => (
    <>
      <Typography variant="h5" gutterBottom>
        Students List
      </Typography>

      <TableTemplate
        buttonHaver={
          selectedSection === "attendance" ? AttendanceButtons : MarksButtons
        }
        columns={studentColumns}
        rows={studentRows}
      />

      <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
        <BottomNavigation
          value={selectedSection}
          onChange={handleSectionChange}
          showLabels
        >
          <BottomNavigationAction
            label="Attendance"
            value="attendance"
            icon={
              selectedSection === "attendance" ? (
                <TableChartIcon />
              ) : (
                <TableChartOutlinedIcon />
              )
            }
          />
          <BottomNavigationAction
            label="Marks"
            value="marks"
            icon={
              selectedSection === "marks" ? (
                <InsertChartIcon />
              ) : (
                <InsertChartOutlinedIcon />
              )
            }
          />
        </BottomNavigation>
      </Paper>
    </>
  );

  if (subloading) return <div>Loading...</div>;

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={tabValue}>
        <TabList onChange={handleTabChange}>
          <Tab label="Details" value="1" />
          <Tab label="Students" value="2" />
        </TabList>

        <Container sx={{ mt: 4, mb: 6 }}>
          <TabPanel value="1">
            <SubjectDetailsSection />
          </TabPanel>
          <TabPanel value="2">
            <SubjectStudentsSection />
          </TabPanel>
        </Container>
      </TabContext>
    </Box>
  );
};

export default ViewSubject;
