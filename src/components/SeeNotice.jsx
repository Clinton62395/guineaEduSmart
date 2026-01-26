import React, { useEffect } from "react";
import { Paper } from "@mui/material";
import TableViewTemplate from "./TableViewTemplate";

const SeeNotice = () => {
 

  const currentUser = {
    _id: "admin123",
    school: { _id: "school123" },
    name: "Admin Test",
  };
  const currentRole = "Admin";

  // Mock notices
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
  const loading = false;
  const response = false;
  const error = null;

  const noticeColumns = [
    { id: "title", label: "Title", minWidth: 170 },
    { id: "details", label: "Details", minWidth: 100 },
    { id: "date", label: "Date", minWidth: 170 },
  ];

  const noticeRows = noticesList.map((notice) => ({
    title: notice.title,
    details: notice.details,
    date: notice.date,
    id: notice._id,
  }));
  return (
    <div style={{ marginTop: "50px", marginRight: "20px" }}>
      {loading ? (
        <div style={{ fontSize: "20px" }}>Loading...</div>
      ) : response ? (
        <div style={{ fontSize: "20px" }}>No Notices to Show Right Now</div>
      ) : (
        <>
          <h3 style={{ fontSize: "30px", marginBottom: "40px" }}>Notices</h3>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            {/* {Array.isArray(noticesList) && noticesList.length > 0 &&
                            <TableViewTemplate columns={noticeColumns} rows={noticeRows} />
                        } */}
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    {noticeColumns.map((col) => (
                      <th
                        key={col.id}
                        style={{ border: "1px solid gray", padding: "8px" }}
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {noticeRows.map((row) => (
                    <tr key={row.id}>
                      <td style={{ border: "1px solid gray", padding: "8px" }}>
                        {row.title}
                      </td>
                      <td style={{ border: "1px solid gray", padding: "8px" }}>
                        {row.details}
                      </td>
                      <td style={{ border: "1px solid gray", padding: "8px" }}>
                        {row.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Paper>
          </Paper>
        </>
      )}
    </div>
  );
};

export default SeeNotice;
