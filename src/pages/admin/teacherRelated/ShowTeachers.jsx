import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Paper, Table, TableBody, TableContainer,
    TableHead, TablePagination, Button, Box, IconButton,
} from '@mui/material';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { StyledTableCell, StyledTableRow } from '../../../components/styles';
import { BlueButton, GreenButton } from '../../../components/buttonStyles';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import SpeedDialTemplate from '../../../components/SpeedDialTemplate';
import Popup from '../../../components/Popup';

const ShowTeachers = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const[loading, setLoading] = useState(false);
    const[response, setResponse] = useState(false);
    const[error, setError] = useState(false);
    const navigate = useNavigate();
  

    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");


    // mock data
    const teachersList = [
        {
            _id: "5f8d9d1d2d4f1b5d0e1e2e3e",
            name: "Teacher 1",
            teachSubject: {
                _id: "5f8d9d1d2d4f1b5d0e1e2e3e",
                subName: "Mathematics",
            },
            teachSclass: {
                _id: "5f8d9d1d2d4f1b5d0e1e2e3e",
                sclassName: "Class 1",
            },
        },
        {
            _id: "5f8d9d1d2d4f1b5d0e1e2e3e",
            name: "Teacher 2",
            teachSubject: {
                _id: "5f8d9d1d2d4f1b5d0e1e2e3e",
                subName: "Mathematics",
            },
            teachSclass: {
                _id: "5f8d9d1d2d4f1b5d0e1e2e3e",
                sclassName: "Class 1",
            },
        },
        {
            _id: "5f8d9d1d2d4f1b5d0e1e2e3e",
            name: "Teacher 3",
            teachSubject: {
                _id: "5f8d9d1d2d4f1b5d0e1e2e3e",
                subName: "Mathematics",
            },
            teachSclass: {
                _id: "5f8d9d1d2d4f1b5d0e1e2e3e",
                sclassName: "Class 1",
            },
        },
        {
            _id: "5f8d9d1d2d4f1b5d0e1e2e3e",
            name: "Teacher 4",
            teachSubject: {
                _id: "5f8d9d1d2d4f1b5d0e1e2e3e",
                subName: "Mathematics",
            },
            teachSclass: {
                _id: "5f8d9d1d2d4f1b5d0e1e2e3e",
                sclassName: "Class 1",
            },
        },
    ];
    if (loading) {
        return <div>Loading...</div>;
    } else if (response) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                <GreenButton variant="contained" onClick={() => navigate("/Admin/teachers/chooseclass")}>
                    Add Teacher
                </GreenButton>
            </Box>
        );
    } else if (error) {
        console.log(error);
    }

    const deleteHandler = (deleteID, address) => {
        console.log(deleteID);
        console.log(address);
        setMessage("Sorry the delete function has been disabled for now.")
        setShowPopup(true)

        // dispatch(deleteUser(deleteID, address)).then(() => {
        //     dispatch(getAllTeachers(currentUser._id));
        // });
    };

    const columns = [
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'teachSubject', label: 'Subject', minWidth: 100 },
        { id: 'teachSclass', label: 'Class', minWidth: 170 },
    ];

    const rows = teachersList.map((teacher) => {
        return {
            name: teacher.name,
            teachSubject: teacher.teachSubject?.subName || null,
            teachSclass: teacher.teachSclass.sclassName,
            teachSclassID: teacher.teachSclass._id,
            id: teacher._id,
        };
    });

    const actions = [
        {
            icon: <PersonAddAlt1Icon color="primary" />, name: 'Add New Teacher',
            action: () => navigate("/Admin/teachers/chooseclass")
        },
        {
            icon: <PersonRemoveIcon color="error" />, name: 'Delete All Teachers',
            action: () => deleteHandler(teachersList, "Teachers")
        },
    ];

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <StyledTableRow>
                            {columns.map((column) => (
                                <StyledTableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </StyledTableCell>
                            ))}
                            <StyledTableCell align="center">
                                Actions
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            if (column.id === 'teachSubject') {
                                                return (
                                                    <StyledTableCell key={column.id} align={column.align}>
                                                        {value ? (
                                                            value
                                                        ) : (
                                                            <Button variant="contained"
                                                                onClick={() => {
                                                                    navigate(`/Admin/teachers/choosesubject/${row.teachSclassID}/${row.id}`)
                                                                }}>
                                                                Add Subject
                                                            </Button>
                                                        )}
                                                    </StyledTableCell>
                                                );
                                            }
                                            return (
                                                <StyledTableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                </StyledTableCell>
                                            );
                                        })}
                                        <StyledTableCell align="center">
                                            <IconButton onClick={() => deleteHandler(row.id, "Teacher")}>
                                                <PersonRemoveIcon color="error" />
                                            </IconButton>
                                            <BlueButton variant="contained"
                                                onClick={() => navigate("/Admin/teachers/teacher/" + row.id)}>
                                                View
                                            </BlueButton>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={(event, newPage) => setPage(newPage)}
                onRowsPerPageChange={(event) => {
                    setRowsPerPage(parseInt(event.target.value, 5));
                    setPage(0);
                }}
            />

            <SpeedDialTemplate actions={actions} />
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
        </Paper >
    );
};

export default ShowTeachers