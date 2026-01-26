import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import Popup from "../../../components/Popup";

const AddNotice = () => {
  const navigate = useNavigate();

  // Champs du formulaire
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");

  const [loader, setLoader] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  // Simule l'utilisateur admin (mock)
  const currentUser = { _id: "admin-123" };
  const adminID = currentUser._id;

  const submitHandler = (event) => {
    event.preventDefault();
    if (!title || !details || !date) {
      setMessage("All fields are required!");
      setShowPopup(true);
      return;
    }

    setLoader(true);

    // Simule un appel backend
    setTimeout(() => {
      setLoader(false);
      setMessage("Notice added successfully!");
      setShowPopup(true);

      // Redirige vers la page "Admin notices"
      navigate("/admin-test/notices");
    }, 1000);
  };

  return (
    <>
      <div className="register">
        <form className="registerForm" onSubmit={submitHandler}>
          <span className="registerTitle">Add Notice</span>

          <label>Title</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter notice title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label>Details</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter notice details..."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          />

          <label>Date</label>
          <input
            className="registerInput"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <button className="registerButton" type="submit" disabled={loader}>
            {loader ? <CircularProgress size={24} color="inherit" /> : "Add"}
          </button>
        </form>
      </div>

      <Popup
        message={message}
        setShowPopup={setShowPopup}
        showPopup={showPopup}
      />
    </>
  );
};

export default AddNotice;
