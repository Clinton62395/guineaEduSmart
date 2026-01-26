import React, { useEffect, useState } from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import styled from "styled-components";
import CountUp from "react-countup";
import CustomPieChart from "../../components/CustomPieChart";
import SeeNotice from "../../components/SeeNotice";
import Subject from "../../assets/subjects.svg";
import Assignment from "../../assets/assignment.svg";
import { calculateOverallAttendancePercentage } from "../../components/attendanceCalculator";

const StudentHomePage = () => {
  // --- Mock Data (à remplacer par React Query plus tard) ---
  const currentUser = {
    name: "John Doe",
    sclassName: { _id: "class123", name: "Class 10A" },
    attendance: [
      { subject: "Math", attended: 18, total: 20 },
      { subject: "Science", attended: 15, total: 20 },
      { subject: "English", attended: 20, total: 20 },
    ],
  };

  const subjectsList = [
    { _id: "sub1", name: "Math" },
    { _id: "sub2", name: "Science" },
    { _id: "sub3", name: "English" },
  ];

  const [subjectAttendance, setSubjectAttendance] = useState([]);

  // Simuler récupération des données
  useEffect(() => {
    if (currentUser) {
      setSubjectAttendance(currentUser.attendance || []);
    }
  }, [currentUser]);

  const numberOfSubjects = subjectsList.length;
  const numberOfAssignments = 15; // mock value

  const overallAttendancePercentage =
    calculateOverallAttendancePercentage(subjectAttendance);
  const overallAbsentPercentage = 100 - overallAttendancePercentage;

  const chartData = [
    { name: "Present", value: overallAttendancePercentage },
    { name: "Absent", value: overallAbsentPercentage },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Subjects */}
        <Grid item xs={12} md={3} lg={3}>
          <StyledPaper>
            <img src={Subject} alt="Subjects" />
            <Title>Total Subjects</Title>
            <Data start={0} end={numberOfSubjects} duration={2.5} />
          </StyledPaper>
        </Grid>

        {/* Assignments */}
        <Grid item xs={12} md={3} lg={3}>
          <StyledPaper>
            <img src={Assignment} alt="Assignments" />
            <Title>Total Assignments</Title>
            <Data start={0} end={numberOfAssignments} duration={4} />
          </StyledPaper>
        </Grid>

        {/* Attendance Chart */}
        <Grid item xs={12} md={4} lg={3}>
          <ChartContainer>
            {subjectAttendance.length === 0 ? (
              <Typography variant="h6">No Attendance Found</Typography>
            ) : (
              <CustomPieChart data={chartData} />
            )}
          </ChartContainer>
        </Grid>

        {/* Notices */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <SeeNotice />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

// --- Styled Components ---
const ChartContainer = styled.div`
  padding: 2px;
  display: flex;
  flex-direction: column;
  height: 240px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledPaper = styled(Paper)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const Title = styled.p`
  font-size: 1.25rem;
`;

const Data = styled(CountUp)`
  font-size: calc(1.3rem + 0.6vw);
  color: green;
`;

export default StudentHomePage;
