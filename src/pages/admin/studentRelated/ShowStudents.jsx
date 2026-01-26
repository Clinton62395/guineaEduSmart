import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, Box, IconButton } from "@mui/material";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import {
  BlackButton,
  BlueButton,
  GreenButton,
} from "../../../components/buttonStyles";
import TableTemplate from "../../../components/TableTemplate";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import SpeedDialTemplate from "../../../components/SpeedDialTemplate";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Popup from "../../../components/Popup";

const ShowStudents = () => {
  const navigate = useNavigate();

  // Mock state
  const [studentsList, setStudentsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  // Simuler récupération des étudiants
  useEffect(() => {
    setTimeout(() => {
      setStudentsList([
        {
          _id: "1",
          name: "John Doe",
          rollNum: "101",
          sclassName: { sclassName: "Class 1" },
        },
        {
          _id: "2",
          name: "Jane Smith",
          rollNum: "102",
          sclassName: { sclassName: "Class 1" },
        },
        {
          _id: "3",
          name: "Alice Johnson",
          rollNum: "103",
          sclassName: { sclassName: "Class 2" },
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const deleteHandler = (deleteID, address) => {
    console.log(deleteID, address);
    setMessage("Sorry, the delete function has been disabled for now.");
    setShowPopup(true);
  };

  const studentColumns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "rollNum", label: "Roll Number", minWidth: 100 },
    { id: "sclassName", label: "Class", minWidth: 170 },
  ];

  const studentRows = studentsList.map((student) => ({
    name: student.name,
    rollNum: student.rollNum,
    sclassName: student.sclassName.sclassName,
    id: student._id,
  }));

  const StudentButtonHaver = ({ row }) => {
    const options = ["Take Attendance", "Provide Marks"];
    const [open, setOpen] = useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = () => {
      if (selectedIndex === 0)
        navigate("/Admin/students/student/attendance/" + row.id);
      else navigate("/Admin/students/student/marks/" + row.id);
    };

    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setOpen(false);
    };
    const handleToggle = () => setOpen((prev) => !prev);
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) return;
      setOpen(false);
    };

    return (
      <>
        <IconButton onClick={() => deleteHandler(row.id, "Student")}>
          <PersonRemoveIcon color="error" />
        </IconButton>
        <BlueButton
          variant="contained"
          onClick={() => navigate("/Admin/students/student/" + row.id)}
        >
          View
        </BlueButton>
        <ButtonGroup variant="contained" ref={anchorRef}>
          <Button onClick={handleClick}>{options[selectedIndex]}</Button>
          <BlackButton
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </BlackButton>
        </ButtonGroup>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu" autoFocusItem>
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </>
    );
  };

  const actions = [
    {
      icon: <PersonAddAlt1Icon color="primary" />,
      name: "Add New Student",
      action: () => navigate("/Admin/addstudents"),
    },
    {
      icon: <PersonRemoveIcon color="error" />,
      name: "Delete All Students",
      action: () => deleteHandler("all", "Students"),
    },
  ];

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          {Array.isArray(studentsList) && studentsList.length > 0 && (
            <TableTemplate
              buttonHaver={StudentButtonHaver}
              columns={studentColumns}
              rows={studentRows}
            />
          )}
          <SpeedDialTemplate actions={actions} />
        </Paper>
      )}
      <Popup
        message={message}
        setShowPopup={setShowPopup}
        showPopup={showPopup}
      />
    </>
  );
};

export default ShowStudents;
