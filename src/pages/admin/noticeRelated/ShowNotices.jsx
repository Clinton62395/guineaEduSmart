import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, Box, IconButton } from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import TableTemplate from "../../../components/TableTemplate";
import { GreenButton } from "../../../components/buttonStyles";
import SpeedDialTemplate from "../../../components/SpeedDialTemplate";
import Popup from "../../../components/Popup";

const ShowNotices = () => {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");



  //    mock data
  const noticesList = [
    {
      _id: "n1",
      title: "Exam Schedule",
      details: "Math exam on Friday",
      date: "2026-01-25",
    },
    {
      _id: "n2",
      title: "Holiday Notice",
      details: "School closed on Monday",
      date: "2026-01-28",
    },
  ];

  const noticeColumns = [
    { id: "title", label: "Title", minWidth: 170 },
    { id: "details", label: "Details", minWidth: 100 },
    { id: "date", label: "Date", minWidth: 170 },
  ];

  const noticeRows =
    noticesList &&
    noticesList.length > 0 &&
    noticesList.map((notice) => {
      const date = new Date(notice.date);
      const dateString =
        date.toString() !== "Invalid Date"
          ? date.toISOString().substring(0, 10)
          : "Invalid Date";
      return {
        title: notice.title,
        details: notice.details,
        date: dateString,
        id: notice._id,
      };
    });



  const NoticeButtonHaver = ({ row }) => {

    const deleteHandler = (deleteID, address) => {
      console.log(deleteID);
      console.log(address);
      setMessage("Sorry the delete function has been disabled for now.");
      setShowPopup(true);
      // dispatch(deleteUser(deleteID, address))
      //     .then(() => {
      //         dispatch(getAllNotices(currentUser._id, "Notice"));
      //     })
    };
    return (
      <>
        <IconButton onClick={() => deleteHandler(row.id, "Notice")}>
          <DeleteIcon color="error" />
        </IconButton>
      </>
    );
  };

  const actions = [
    {
      icon: <NoteAddIcon color="primary" />,
      name: "Add New Notice",
      action: () => navigate("/Admin/addnotice"),
    },
    {
      icon: <DeleteIcon color="error" />,
      name: "Delete All Notices",
      action: () => deleteHandler(noticesList, "Notices"),
    },
  ];

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {response ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "16px",
              }}
            >
              <GreenButton
                variant="contained"
                onClick={() => navigate("/Admin/addnotice")}
              >
                Add Notice
              </GreenButton>
            </Box>
          ) : (
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              {Array.isArray(noticesList) && noticesList.length > 0 && (
                <TableTemplate
                  buttonHaver={NoticeButtonHaver}
                  columns={noticeColumns}
                  rows={noticeRows}
                />
              )}
              <SpeedDialTemplate actions={actions} />
            </Paper>
          )}
        </>
      )}
    </>
  );
};

export default ShowNotices;
