import { useParams } from "react-router-dom";
import Popup from "../../../components/Popup";
import { CircularProgress } from "@mui/material";
import { useState } from "react";

const AddTeacher = ({ loader, showPopup, setShowPopup, message }) => {
  const params = useParams();

  // mock data
  const subjectDetails = {
    _id: "5f8d9d1d2d4f1b5d0e1e2e3e",
    subName: "Mathematics",
    sclassName: {
      _id: "5f8d9d1d2d4f1b5d0e1e2e3e",
      sclassName: "Class 1",
    },
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="register">
        <form className="registerForm">
          <span className="registerTitle">Add Teacher</span>
          <br />
          <label>Subject : {subjectDetails && subjectDetails.subName}</label>
          <label>
            Class :{" "}
            {subjectDetails &&
              subjectDetails.sclassName &&
              subjectDetails.sclassName.sclassName}
          </label>
          <label>Name</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter teacher's name..."
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
            required
          />

          <label>Email</label>
          <input
            className="registerInput"
            type="email"
            placeholder="Enter teacher's email..."
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
          />

          <label>Password</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Enter teacher's password..."
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="new-password"
            required
          />

          <button className="registerButton" type="submit" disabled={loader}>
            {loader ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Register"
            )}
          </button>
        </form>
      </div>
      <Popup
        message={message}
        setShowPopup={setShowPopup}
        showPopup={showPopup}
      />
    </div>
  );
};

export default AddTeacher;
