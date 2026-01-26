import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Typography,
  Paper,
} from "@mui/material";
import { GreenButton, PurpleButton } from "../../../components/buttonStyles";
import { StyledTableCell, StyledTableRow } from "../../../components/styles";

const ChooseSubject = ({ situation }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [classID, setClassID] = useState("");
  const [teacherID, setTeacherID] = useState("");
  const [loader, setLoader] = useState(false);
  const [subjectsList, setSubjectsList] = useState([]);
  const [response, setResponse] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simule un fetch
  useEffect(() => {
    if (situation === "Norm") {
      setClassID(params.id);
    } else if (situation === "Teacher") {
      setClassID(params.classID);
      setTeacherID(params.teacherID);
    }

    // mock data
    const mockSubjects = [
      { _id: "s1", subName: "Mathematics", subCode: "MATH101" },
      { _id: "s2", subName: "Physics", subCode: "PHY101" },
      { _id: "s3", subName: "Chemistry", subCode: "CHEM101" },
    ];

    setTimeout(() => {
      setSubjectsList(mockSubjects);
      setLoading(false);
      // setResponse(true) // décommente si tu veux tester la page "all subjects assigned"
    }, 1000);
  }, [situation, params]);

  const updateSubjectHandler = (teacherId, teachSubject) => {
    setLoader(true);
    // ici on simule un update
    setTimeout(() => {
      alert(`Teacher ${teacherId} assigned to subject ${teachSubject}`);
      setLoader(false);
      navigate("/Admin/teachers");
    }, 500);
  };

  if (loading) {
    return <div>Loading...</div>;
  } else if (response) {
    return (
      <div>
        <h1>Sorry all subjects have teachers assigned already</h1>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "16px",
          }}
        >
          <PurpleButton
            variant="contained"
            onClick={() => navigate("/Admin/addsubject/" + classID)}
          >
            Add Subjects
          </PurpleButton>
        </Box>
      </div>
    );
  }

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Typography variant="h6" gutterBottom component="div">
        Choose a subject
      </Typography>
      <TableContainer>
        <Table aria-label="sclasses table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell align="center">Subject Name</StyledTableCell>
              <StyledTableCell align="center">Subject Code</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {subjectsList.map((subject, index) => (
              <StyledTableRow key={subject._id}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  style={{ color: "white" }}
                >
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {subject.subName}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {subject.subCode}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {situation === "Norm" ? (
                    <GreenButton
                      variant="contained"
                      onClick={() =>
                        navigate("/Admin/teachers/addteacher/" + subject._id)
                      }
                    >
                      Choose
                    </GreenButton>
                  ) : (
                    <GreenButton
                      variant="contained"
                      disabled={loader}
                      onClick={() =>
                        updateSubjectHandler(teacherID, subject._id)
                      }
                    >
                      {loader ? <div className="load"></div> : "Choose Sub"}
                    </GreenButton>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ChooseSubject;
