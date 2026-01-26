import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Table,
  TableHead,
  TableBody,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import CustomBarChart from "../../components/CustomBarChart";
import TableChartIcon from "@mui/icons-material/TableChart";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import { StyledTableCell, StyledTableRow } from "../../components/styles";

const StudentSubjects = () => {
  // Loader mock
  const [loading, setLoading] = useState(true);

  // Section navigation (table / chart)
  const [selectedSection, setSelectedSection] = useState("table");

  // Mock data
  const currentUser = {
    _id: "stu1",
    sclassName: { _id: "class1", sclassName: "10th Grade" },
  };
  const userDetails = {
    examResult: [
      { subName: { subName: "Mathematics" }, marksObtained: 85 },
      { subName: { subName: "English" }, marksObtained: 90 },
      { subName: { subName: "Physics" }, marksObtained: 78 },
    ],
  };
  const sclassDetails = { sclassName: "10th Grade" };
  const subjectsList = [
    { subName: "Mathematics", subCode: "MATH101" },
    { subName: "English", subCode: "ENG101" },
    { subName: "Physics", subCode: "PHY101" },
  ];

  const [subjectMarks, setSubjectMarks] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setSubjectMarks(userDetails.examResult);
      setLoading(false);
    }, 500);
  }, []);

  const handleSectionChange = (event, newSection) => {
    setSelectedSection(newSection);
  };

  const renderTableSection = () => (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Subject Marks
      </Typography>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Subject</StyledTableCell>
            <StyledTableCell>Marks</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {subjectMarks.map((result, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{result.subName.subName}</StyledTableCell>
              <StyledTableCell>{result.marksObtained}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );

  const renderChartSection = () => (
    <CustomBarChart chartData={subjectMarks} dataKey="marksObtained" />
  );

  const renderClassDetailsSection = () => (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Class Details
      </Typography>
      <Typography variant="h5" gutterBottom>
        You are currently in Class {sclassDetails.sclassName}
      </Typography>
      <Typography variant="h6" gutterBottom>
        And these are the subjects:
      </Typography>
      {subjectsList.map((subject, index) => (
        <div key={index}>
          <Typography variant="subtitle1">
            {subject.subName} ({subject.subCode})
          </Typography>
        </div>
      ))}
    </Container>
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {subjectMarks.length > 0 ? (
        <>
          {selectedSection === "table" && renderTableSection()}
          {selectedSection === "chart" && renderChartSection()}

          <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            elevation={3}
          >
            <BottomNavigation
              value={selectedSection}
              onChange={handleSectionChange}
              showLabels
            >
              <BottomNavigationAction
                label="Table"
                value="table"
                icon={
                  selectedSection === "table" ? (
                    <TableChartIcon />
                  ) : (
                    <TableChartOutlinedIcon />
                  )
                }
              />
              <BottomNavigationAction
                label="Chart"
                value="chart"
                icon={
                  selectedSection === "chart" ? (
                    <InsertChartIcon />
                  ) : (
                    <InsertChartOutlinedIcon />
                  )
                }
              />
            </BottomNavigation>
          </Paper>
        </>
      ) : (
        renderClassDetailsSection()
      )}
    </div>
  );
};

export default StudentSubjects;
