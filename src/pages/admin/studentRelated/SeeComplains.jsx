import React, { useEffect, useState } from "react";
import { Paper, Box, Checkbox, Typography } from "@mui/material";
import TableTemplate from "../../../components/TableTemplate";

const SeeComplains = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // --- MOCK DATA ---
  const [complainsList, setComplainsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(false);

  // Simule un currentUser
  const currentUser = { _id: "user123", name: "Alice Admin" };

  // Simule fetch
  useEffect(() => {
    // MOCK DATA à la place de Redux
    const mockComplains = [
      { message: "Absence injustifiée", student: "Alice" },
      { message: "Retard", student: "Bob" },
      {
        _id: "c1",
        user: { name: "John Doe" },
        complaint: "Network issue",
        date: "2026-01-24",
      },
      {
        _id: "c2",
        user: { name: "Jane Smith" },
        complaint: "App crash",
        date: "2026-01-23",
      },
      {
        _id: "c3",
        user: { name: "Bob Johnson" },
        complaint: "Wrong grades",
        date: "2026-01-22",
      },
    ];

    setTimeout(() => {
      setComplainsList(mockComplains);
      setLoading(false);
    }, 1000);
  }, [currentUser._id]);

  if (loading) return <div>Loading...</div>;

  const complainColumns = [
    { id: "user", label: "User", minWidth: 170 },
    { id: "complaint", label: "Complaint", minWidth: 100 },
    { id: "date", label: "Date", minWidth: 170 },
  ];

  const complainRows =
    complainsList && complainsList.length > 0
      ? complainsList.map((complain) => {
          const date = new Date(complain.date);
          const dateString =
            date.toString() !== "Invalid Date"
              ? date.toISOString().substring(0, 10)
              : "Invalid Date";
          return {
            user: complain.user.name,
            complaint: complain.complaint,
            date: dateString,
            id: complain._id,
          };
        })
      : [];

  const ComplainButtonHaver = () => <Checkbox {...label} />;

  return (
    <>
      {response || complainsList.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "16px",
          }}
        >
          <Typography>No Complains Right Now</Typography>
        </Box>
      ) : (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableTemplate
            buttonHaver={ComplainButtonHaver}
            columns={complainColumns}
            rows={complainRows}
          />
        </Paper>
      )}
    </>
  );
};

export default SeeComplains;
