import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import Popup from "../../../components/Popup";

const SubjectForm = () => {
  const [subjects, setSubjects] = useState([
    { subName: "", subCode: "", sessions: "" },
  ]);
  const [loader, setLoader] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Handlers pour modifier les champs
  const handleSubjectChange = (index, field) => (event) => {
    const newSubjects = [...subjects];
    newSubjects[index][field] =
      field === "sessions" ? Number(event.target.value) : event.target.value;
    setSubjects(newSubjects);
  };

  const handleAddSubject = () => {
    setSubjects([...subjects, { subName: "", subCode: "", sessions: "" }]);
  };

  const handleRemoveSubject = (index) => () => {
    const newSubjects = [...subjects];
    newSubjects.splice(index, 1);
    setSubjects(newSubjects);
  };

  // Submit mock
  const submitHandler = (event) => {
    event.preventDefault();
    setLoader(true);

    // Simuler un délai de traitement
    setTimeout(() => {
      const hasEmpty = subjects.some(
        (s) => !s.subName || !s.subCode || s.sessions === "",
      );
      if (hasEmpty) {
        setMessage("Please fill all fields");
        setShowPopup(true);
        setLoader(false);
      } else {
        setSubmitted(true);
        setLoader(false);
        setMessage("Subjects saved successfully!");
        setShowPopup(true);
      }
    }, 1000);
  };

  return (
    <form onSubmit={submitHandler}>
      <Box mb={2}>
        <Typography variant="h6">Add Subjects (Mock Mode)</Typography>
      </Box>
      <Grid container spacing={2}>
        {subjects.map((subject, index) => (
          <React.Fragment key={index}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Subject Name"
                variant="outlined"
                value={subject.subName}
                onChange={handleSubjectChange(index, "subName")}
                sx={styles.inputField}
                required
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Subject Code"
                variant="outlined"
                value={subject.subCode}
                onChange={handleSubjectChange(index, "subCode")}
                sx={styles.inputField}
                required
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Sessions"
                variant="outlined"
                type="number"
                inputProps={{ min: 0 }}
                value={subject.sessions}
                onChange={handleSubjectChange(index, "sessions")}
                sx={styles.inputField}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <Box display="flex" alignItems="flex-end">
                {index === 0 ? (
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleAddSubject}
                  >
                    Add Subject
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={handleRemoveSubject(index)}
                  >
                    Remove
                  </Button>
                )}
              </Box>
            </Grid>
          </React.Fragment>
        ))}
        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={loader}
            >
              {loader ? <CircularProgress size={24} color="inherit" /> : "Save"}
            </Button>
          </Box>
        </Grid>
        <Popup
          message={message}
          setShowPopup={setShowPopup}
          showPopup={showPopup}
        />
      </Grid>
    </form>
  );
};

export default SubjectForm;

const styles = {
  inputField: {
    "& .MuiInputLabel-root": { color: "#838080" },
    "& .MuiOutlinedInput-notchedOutline": { borderColor: "#838080" },
  },
};
