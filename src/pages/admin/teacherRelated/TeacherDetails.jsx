import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";

const TeacherDetails = () => {
  const navigate = useNavigate();
  const params = useParams();

  // 🔹 MOCK loading
  const loading = false;

  // 🔹 MOCK teacherDetails
  const teacherDetails = {
    _id: params.id,
    name: "Jane Smith",
    teachSclass: {
      _id: "class123",
      sclassName: "Grade 10",
    },
    teachSubject: {
      subName: "Mathematics",
      sessions: 24,
    },
    // 👉 supprime teachSubject pour tester le bouton "Add Subject"
  };

  const isSubjectNamePresent = teacherDetails?.teachSubject?.subName;

  const handleAddSubject = () => {
    navigate(
      `/Admin/teachers/choosesubject/${teacherDetails.teachSclass._id}/${teacherDetails._id}`,
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Teacher Details
      </Typography>

      <Typography variant="h6" gutterBottom>
        Teacher Name: {teacherDetails.name}
      </Typography>

      <Typography variant="h6" gutterBottom>
        Class Name: {teacherDetails.teachSclass.sclassName}
      </Typography>

      {isSubjectNamePresent ? (
        <>
          <Typography variant="h6" gutterBottom>
            Subject Name: {teacherDetails.teachSubject.subName}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Subject Sessions: {teacherDetails.teachSubject.sessions}
          </Typography>
        </>
      ) : (
        <Button variant="contained" onClick={handleAddSubject}>
          Add Subject
        </Button>
      )}
    </Container>
  );
};

export default TeacherDetails;
