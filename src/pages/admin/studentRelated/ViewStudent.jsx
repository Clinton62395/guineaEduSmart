import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Box, Button, Collapse, IconButton, Table, TableBody, TableHead, Typography, Tab, Paper, BottomNavigation, BottomNavigationAction, Container
} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { KeyboardArrowUp, KeyboardArrowDown, Delete as DeleteIcon } from '@mui/icons-material';
import CustomBarChart from '../../../components/CustomBarChart';
import CustomPieChart from '../../../components/CustomPieChart';
import { StyledTableCell, StyledTableRow } from '../../../components/styles';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import TableChartIcon from '@mui/icons-material/TableChart';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import Popup from '../../../components/Popup';

// fonctions mock pour l'attendance
const calculateOverallAttendancePercentage = (attendance) => {
    if (!attendance || attendance.length === 0) return 0;
    const totalSessions = attendance.reduce((acc, sub) => acc + sub.sessions, 0);
    const totalPresent = attendance.reduce((acc, sub) => acc + sub.present, 0);
    return totalSessions === 0 ? 0 : (totalPresent / totalSessions) * 100;
};

const groupAttendanceBySubject = (attendance) => {
    const grouped = {};
    attendance.forEach((sub) => {
        grouped[sub.subjectName] = {
            present: sub.present,
            sessions: sub.sessions,
            subId: sub.subId,
            allData: sub.allData
        };
    });
    return grouped;
};

const calculateSubjectAttendancePercentage = (present, sessions) => (sessions === 0 ? 0 : (present / sessions) * 100);

const ViewStudent = () => {
    const navigate = useNavigate();
    const params = useParams();
    const studentID = params.id;

    // mock state
    const [loading, setLoading] = useState(true);
    const [userDetails, setUserDetails] = useState(null);
    const [subjectAttendance, setSubjectAttendance] = useState([]);
    const [subjectMarks, setSubjectMarks] = useState([]);
    const [openStates, setOpenStates] = useState({});
    const [value, setValue] = useState('1');
    const [selectedSection, setSelectedSection] = useState('table');
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Simuler fetch userDetails
        const mockUser = {
            name: "John Doe",
            rollNum: "12A",
            sclassName: { _id: "c1", sclassName: "Class 1" },
            school: { schoolName: "Sunshine High School" },
            examResult: [
                { subName: { subName: "Math" }, marksObtained: 85 },
                { subName: { subName: "Physics" }, marksObtained: 78 },
            ],
            attendance: [
                {
                    subjectName: "Math",
                    present: 18,
                    sessions: 20,
                    subId: "sub1",
                    allData: [
                        { date: "2026-01-01", status: "Present" },
                        { date: "2026-01-02", status: "Absent" },
                    ],
                },
                {
                    subjectName: "Physics",
                    present: 15,
                    sessions: 20,
                    subId: "sub2",
                    allData: [
                        { date: "2026-01-01", status: "Absent" },
                        { date: "2026-01-02", status: "Present" },
                    ],
                },
            ],
        };

        setTimeout(() => {
            setUserDetails(mockUser);
            setSubjectAttendance(mockUser.attendance);
            setSubjectMarks(mockUser.examResult);
            setLoading(false);
        }, 1000);
    }, [studentID]);

    const handleOpen = (subId) => {
        setOpenStates(prev => ({ ...prev, [subId]: !prev[subId] }));
    };

    const handleChange = (event, newValue) => setValue(newValue);
    const handleSectionChange = (event, newSection) => setSelectedSection(newSection);

    const deleteHandler = () => {
        setMessage("Delete function is disabled in mock mode.");
        setShowPopup(true);
    };

    const removeSubAttendance = (subId) => {
        setSubjectAttendance(prev => prev.filter(sub => sub.subId !== subId));
    };

    const overallAttendancePercentage = calculateOverallAttendancePercentage(subjectAttendance);
    const overallAbsentPercentage = 100 - overallAttendancePercentage;
    const chartData = [
        { name: "Present", value: overallAttendancePercentage },
        { name: "Absent", value: overallAbsentPercentage },
    ];

    const subjectData = subjectAttendance.map(sub => ({
        subject: sub.subjectName,
        attendancePercentage: calculateSubjectAttendancePercentage(sub.present, sub.sessions),
        totalClasses: sub.sessions,
        attendedClasses: sub.present
    }));

    const StudentAttendanceSection = () => {
        const renderTableSection = () => (
            <>
                <h3>Attendance</h3>
                <Table>
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Subject</StyledTableCell>
                            <StyledTableCell>Present</StyledTableCell>
                            <StyledTableCell>Total Sessions</StyledTableCell>
                            <StyledTableCell>Attendance %</StyledTableCell>
                            <StyledTableCell>Actions</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {subjectAttendance.map(sub => (
                            <React.Fragment key={sub.subId}>
                                <StyledTableRow>
                                    <StyledTableCell>{sub.subjectName}</StyledTableCell>
                                    <StyledTableCell>{sub.present}</StyledTableCell>
                                    <StyledTableCell>{sub.sessions}</StyledTableCell>
                                    <StyledTableCell>{calculateSubjectAttendancePercentage(sub.present, sub.sessions).toFixed(2)}%</StyledTableCell>
                                    <StyledTableCell>
                                        <Button variant="contained" onClick={() => handleOpen(sub.subId)}>
                                            {openStates[sub.subId] ? <KeyboardArrowUp /> : <KeyboardArrowDown />} Details
                                        </Button>
                                        <IconButton onClick={() => removeSubAttendance(sub.subId)}>
                                            <DeleteIcon color="error" />
                                        </IconButton>
                                    </StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell colSpan={5} style={{ paddingBottom: 0, paddingTop: 0 }}>
                                        <Collapse in={openStates[sub.subId]} timeout="auto" unmountOnExit>
                                            <Box sx={{ margin: 1 }}>
                                                <Typography variant="h6">Details</Typography>
                                                <Table size="small">
                                                    <TableHead>
                                                        <StyledTableRow>
                                                            <StyledTableCell>Date</StyledTableCell>
                                                            <StyledTableCell>Status</StyledTableCell>
                                                        </StyledTableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {sub.allData.map((data, idx) => (
                                                            <StyledTableRow key={idx}>
                                                                <StyledTableCell>{data.date}</StyledTableCell>
                                                                <StyledTableCell>{data.status}</StyledTableCell>
                                                            </StyledTableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </Box>
                                        </Collapse>
                                    </StyledTableCell>
                                </StyledTableRow>
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
                <div>Overall Attendance: {overallAttendancePercentage.toFixed(2)}%</div>
            </>
        );

        const renderChartSection = () => <CustomBarChart chartData={subjectData} dataKey="attendancePercentage" />;

        return (
            <>
                {subjectAttendance.length > 0 ? (
                    <>
                        {selectedSection === 'table' && renderTableSection()}
                        {selectedSection === 'chart' && renderChartSection()}
                        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
                            <BottomNavigation value={selectedSection} onChange={handleSectionChange} showLabels>
                                <BottomNavigationAction
                                    label="Table"
                                    value="table"
                                    icon={selectedSection === 'table' ? <TableChartIcon /> : <TableChartOutlinedIcon />}
                                />
                                <BottomNavigationAction
                                    label="Chart"
                                    value="chart"
                                    icon={selectedSection === 'chart' ? <InsertChartIcon /> : <InsertChartOutlinedIcon />}
                                />
                            </BottomNavigation>
                        </Paper>
                    </>
                ) : (
                    <Button variant="contained">Add Attendance</Button>
                )}
            </>
        );
    };

    const StudentMarksSection = () => {
        const renderTableSection = () => (
            <>
                <h3>Marks</h3>
                <Table>
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Subject</StyledTableCell>
                            <StyledTableCell>Marks</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {subjectMarks.map((result, idx) => (
                            <StyledTableRow key={idx}>
                                <StyledTableCell>{result.subName.subName}</StyledTableCell>
                                <StyledTableCell>{result.marksObtained}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </>
        );

        const renderChartSection = () => <CustomBarChart chartData={subjectMarks} dataKey="marksObtained" />;

        return (
            <>
                {subjectMarks.length > 0 ? (
                    <>
                        {selectedSection === 'table' && renderTableSection()}
                        {selectedSection === 'chart' && renderChartSection()}
                        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
                            <BottomNavigation value={selectedSection} onChange={handleSectionChange} showLabels>
                                <BottomNavigationAction
                                    label="Table"
                                    value="table"
                                    icon={selectedSection === 'table' ? <TableChartIcon /> : <TableChartOutlinedIcon />}
                                />
                                <BottomNavigationAction
                                    label="Chart"
                                    value="chart"
                                    icon={selectedSection === 'chart' ? <InsertChartIcon /> : <InsertChartOutlinedIcon />}
                                />
                            </BottomNavigation>
                        </Paper>
                    </>
                ) : (
                    <Button variant="contained">Add Marks</Button>
                )}
            </>
        );
    };

    const StudentDetailsSection = () => (
        <div>
            <h2>{userDetails?.name}</h2>
            <p>Roll Number: {userDetails?.rollNum}</p>
            <p>Class: {userDetails?.sclassName?.sclassName}</p>
            <p>School: {userDetails?.school?.schoolName}</p>
            {subjectAttendance.length > 0 && <CustomPieChart data={chartData} />}
            <Button variant="contained" color="error" onClick={deleteHandler}>Delete</Button>
        </div>
    );

    return loading ? (
        <div>Loading...</div>
    ) : (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange}>
                        <Tab label="Details" value="1" />
                        <Tab label="Attendance" value="2" />
                        <Tab label="Marks" value="3" />
                    </TabList>
                </Box>
                <Container sx={{ marginTop: '3rem', marginBottom: '4rem' }}>
                    <TabPanel value="1"><StudentDetailsSection /></TabPanel>
                    <TabPanel value="2"><StudentAttendanceSection /></TabPanel>
                    <TabPanel value="3"><StudentMarksSection /></TabPanel>
                </Container>
            </TabContext>
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
        </Box>
    );
};

export default ViewStudent;
