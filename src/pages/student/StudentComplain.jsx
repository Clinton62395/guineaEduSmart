import { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Popup from "../../components/Popup";
import { BlueButton } from "../../components/buttonStyles";

const StudentComplainMock = () => {
  const [complaint, setComplaint] = useState("");
  const [date, setDate] = useState("");

  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // MOCK DATA à la place de Redux
  const currentUser = { name: "Alice", _id: "stu1" };
  const mockUser = {
    _id: "student_123",
    school: { _id: "school_456" },
  };

  const fields = {
    user: mockUser._id,
    school: mockUser.school._id,
    date,
    complaint,
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setLoader(true);

    // 🔹 Simulation API
    setTimeout(() => {
      if (!complaint || !date) {
        setMessage("Please fill all fields");
        setShowPopup(true);
        setLoader(false);
        return;
      }

      console.log("Mock complain submitted:", fields);

      setMessage("Done Successfully");
      setShowPopup(true);
      setLoader(false);

      // reset form
      setComplaint("");
      setDate("");
    }, 1200);
  };

  return (
    <>
      <Box
        sx={{
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <Stack spacing={1} sx={{ mb: 3 }}>
            <Typography variant="h4">Complain</Typography>
          </Stack>

          <form onSubmit={submitHandler}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="Select Date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                fullWidth
                label="Write your complain"
                variant="outlined"
                value={complaint}
                onChange={(e) => setComplaint(e.target.value)}
                required
                multiline
                maxRows={4}
              />
            </Stack>

            <BlueButton
              fullWidth
              size="large"
              sx={{ mt: 3 }}
              variant="contained"
              type="submit"
              disabled={loader}
            >
              {loader ? <CircularProgress size={24} color="inherit" /> : "Add"}
            </BlueButton>
          </form>
        </Box>
      </Box>

      <Popup
        message={message}
        setShowPopup={setShowPopup}
        showPopup={showPopup}
      />
    </>
  );
};

export default StudentComplainMock;
