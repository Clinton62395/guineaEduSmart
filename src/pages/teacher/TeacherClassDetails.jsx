import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  Box,
  Typography,
  ButtonGroup,
  Button,
  Popper,
  Grow,
  ClickAwayListener,
  MenuList,
  MenuItem,
} from "@mui/material";
import { BlackButton, BlueButton } from "../../components/buttonStyles";
import TableTemplate from "../../components/TableTemplate";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const TeacherClassDetails = () => {
  const navigate = useNavigate();

  // --- MOCK DATA ---
  const [sclassStudents, setSclassStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [getresponse, setGetResponse] = useState(false);

  // Simule le currentUser
  const currentUser = {
    teachSclass: { _id: "class123", sclassName: "Class A" },
    teachSubject: { _id: "subject123", subName: "Math" },
  };

  const classID = currentUser.teachSclass?._id;
  const subjectID = currentUser.teachSubject?._id;

  // --- SIMULATE FETCH ---
  useEffect(() => {
    // Simule un fetch de données
    const mockStudents = [
      { _id: "stu1", name: "Alice Johnson", rollNum: "1" },
      { _id: "stu2", name: "Bob Smith", rollNum: "2" },
      { _id: "stu3", name: "Charlie Brown", rollNum: "3" },
    ];

    setTimeout(() => {
      setSclassStudents(mockStudents);
      setLoading(false);
    }, 1000); // simule 1s de chargement
  }, [classID]);

  const studentColumns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "rollNum", label: "Roll Number", minWidth: 100 },
  ];

  const studentRows = sclassStudents.map((student) => ({
    name: student.name,
    rollNum: student.rollNum,
    id: student._id,
  }));

  const StudentsButtonHaver = ({ row }) => {
    const options = ["Take Attendance", "Provide Marks"];

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = () => {
      if (selectedIndex === 0) {
        navigate(`/Teacher/class/student/attendance/${row.id}/${subjectID}`);
      } else if (selectedIndex === 1) {
        navigate(`/Teacher/class/student/marks/${row.id}/${subjectID}`);
      }
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
        <BlueButton
          variant="contained"
          onClick={() => navigate(`/Teacher/class/student/${row.id}`)}
        >
          View
        </BlueButton>
        <React.Fragment>
          <ButtonGroup
            variant="contained"
            ref={anchorRef}
            aria-label="split button"
          >
            <Button onClick={handleClick}>{options[selectedIndex]}</Button>
            <BlackButton
              size="small"
              aria-controls={open ? "split-button-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-label="select action"
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
            sx={{ zIndex: 1 }}
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
        </React.Fragment>
      </>
    );
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Typography variant="h4" align="center" gutterBottom>
            Class Details - {currentUser.teachSclass.sclassName}
          </Typography>
          {getresponse ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "16px",
              }}
            >
              No Students Found
            </Box>
          ) : (
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <Typography variant="h5" gutterBottom>
                Students List:
              </Typography>
              {sclassStudents.length > 0 && (
                <TableTemplate
                  buttonHaver={StudentsButtonHaver}
                  columns={studentColumns}
                  rows={studentRows}
                />
              )}
            </Paper>
          )}
        </>
      )}
    </>
  );
};

export default TeacherClassDetails;
