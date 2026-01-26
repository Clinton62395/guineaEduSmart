import React, { useState } from "react";
import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Stack,
  TextField,
  CircularProgress,
  FormControl,
} from "@mui/material";
import { PurpleButton } from "../../../components/buttonStyles";
import Popup from "../../../components/Popup";

const StudentAttendance = ({ situation = "Student" }) => {
  // MOCK DATA à la place de Redux
  const studentsList = [
    { name: "Alice", _id: "stu1" },
    { name: "Bob", _id: "stu2" },
  ];
  const loading = false;

  const currentUser = {
    teachSubject: { subName: "Maths" },
  };

  const userDetails = {
    name: "John Doe",
    sclassName: { _id: "class1" },
  };

  const subjectsList = [
    { _id: "sub1", subName: "Maths" },
    { _id: "sub2", subName: "Physics" },
  ];

  // 🔹 États locaux
  const [subjectName, setSubjectName] = useState("");
  const [chosenSubName, setChosenSubName] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [loader, setLoader] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  const changeHandler = (event) => {
    const selectedSubject = subjectsList.find(
      (subject) => subject.subName === event.target.value,
    );
    setSubjectName(selectedSubject.subName);
    setChosenSubName(selectedSubject._id);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoader(true);

    // 🔹 simulation backend
    setTimeout(() => {
      setLoader(false);
      setMessage("Attendance saved successfully (mock)");
      setShowPopup(true);
    }, 1000);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ maxWidth: 550, px: 3, py: "100px", width: "100%" }}>
          <Stack spacing={1} sx={{ mb: 3 }}>
            <Typography variant="h4">
              Student Name: {userDetails.name}
            </Typography>
            {currentUser.teachSubject && (
              <Typography variant="h4">
                Subject Name: {currentUser.teachSubject.subName}
              </Typography>
            )}
          </Stack>

          <form onSubmit={submitHandler}>
            <Stack spacing={3}>
              {situation === "Student" && (
                <FormControl fullWidth>
                  <InputLabel>Select Subject</InputLabel>
                  <Select value={subjectName} onChange={changeHandler} required>
                    {subjectsList.map((s) => (
                      <MenuItem key={s._id} value={s.subName}>
                        {s.subName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}

              <FormControl fullWidth>
                <InputLabel>Attendance Status</InputLabel>
                <Select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  required
                >
                  <MenuItem value="Present">Present</MenuItem>
                  <MenuItem value="Absent">Absent</MenuItem>
                </Select>
              </FormControl>

              <TextField
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                InputLabelProps={{ shrink: true }}
              />
            </Stack>

            <PurpleButton
              fullWidth
              sx={{ mt: 3 }}
              type="submit"
              disabled={loader}
            >
              {loader ? <CircularProgress size={24} /> : "Submit"}
            </PurpleButton>
          </form>
        </Box>
      </Box>

      <Popup
        message={message}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
    </>
  );
};

export default StudentAttendance;
