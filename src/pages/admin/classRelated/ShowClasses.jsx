// src/pages/admin/classes/ShowClasses.jsx
import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Box,
  Stack,
  Typography,
  Button,
  Chip,
  Avatar,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  IconButton,
  alpha,
  useTheme,
} from "@mui/material";
import {
  School,
  Add,
  FilterList,
  Download,
  People,
  Subject,
  Assessment,
  Edit,
  Delete,
  Refresh,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import DataTable from "../../../components/Tables/DataTable";
import DeleteConfirmationDialog from "../../../components/Modales/deleteModal";
import StatsCard from "../../../components/Tables/stackCard";
import ExportDialog from "../../../components/Tables/exportDialogue";

const ShowClasses = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [classes, setClasses] = useState([]);
  const [stats, setStats] = useState({});
  const [exportDialogOpen, setExportDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  // Données mockées améliorées
  const mockClasses = [
    {
      id: "class1",
      name: "Terminale S",
      code: "TS-2024",
      grade: "12ème",
      teacher: "M. Diallo",
      studentCount: 28,
      capacity: 30,
      subjectCount: 8,
      status: "active",
      schedule: "Lun-Ven 8h-16h",
      createdAt: "2023-09-01",
    },
    {
      id: "class2",
      name: "1ère L",
      code: "1L-2024",
      grade: "11ème",
      teacher: "Mme Bah",
      studentCount: 25,
      capacity: 30,
      subjectCount: 7,
      status: "active",
      schedule: "Lun-Ven 8h-15h",
      createdAt: "2023-09-01",
    },
    {
      id: "class3",
      name: "2nde Générale",
      code: "2ND-2024",
      grade: "10ème",
      teacher: "M. Camara",
      studentCount: 30,
      capacity: 30,
      subjectCount: 9,
      status: "full",
      schedule: "Lun-Ven 8h-14h",
      createdAt: "2023-09-01",
    },
    {
      id: "class4",
      name: "Terminale L",
      code: "TL-2024",
      grade: "12ème",
      teacher: "Mme Sow",
      studentCount: 22,
      capacity: 25,
      subjectCount: 6,
      status: "active",
      schedule: "Lun-Ven 8h-16h",
      createdAt: "2023-09-01",
    },
  ];

  useEffect(() => {
    // Simuler API call
    setTimeout(() => {
      setClasses(mockClasses);
      calculateStats();
      setLoading(false);
    }, 1200);
  }, []);

  const calculateStats = () => {
    const totalStudents = mockClasses.reduce(
      (sum, c) => sum + c.studentCount,
      0,
    );
    const totalCapacity = mockClasses.reduce((sum, c) => sum + c.capacity, 0);
    const averageFill = Math.round((totalStudents / totalCapacity) * 100);

    setStats({
      totalClasses: mockClasses.length,
      totalStudents,
      averageFill,
      activeClasses: mockClasses.filter((c) => c.status === "active").length,
    });
  };

  const columns = [
    {
      id: "name",
      label: "Classe",
      minWidth: 200,
      render: (row) => (
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar
            sx={{
              bgcolor: "primary.main",
              width: 40,
              height: 40,
              fontWeight: 600,
            }}
          >
            {row.name.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="body2" fontWeight={600}>
              {row.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Code: {row.code} • {row.grade}
            </Typography>
          </Box>
        </Stack>
      ),
    },
    {
      id: "teacher",
      label: "Professeur principal",
      minWidth: 150,
      sortable: true,
    },
    {
      id: "studentCount",
      label: "Élèves",
      align: "center",
      render: (row) => (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" fontWeight={600}>
            {row.studentCount}/{row.capacity}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={(row.studentCount / row.capacity) * 100}
            color={row.studentCount === row.capacity ? "success" : "primary"}
            sx={{
              height: 6,
              borderRadius: 3,
              mt: 0.5,
              width: 80,
              mx: "auto",
            }}
          />
        </Box>
      ),
    },
    {
      id: "subjectCount",
      label: "Matières",
      align: "center",
      render: (row) => (
        <Chip
          label={row.subjectCount}
          size="small"
          variant="outlined"
          icon={<Subject fontSize="small" />}
        />
      ),
    },
    {
      id: "status",
      label: "Statut",
      align: "center",
      render: (row) => {
        const statusConfig = {
          active: { label: "Actif", color: "success" },
          full: { label: "Complet", color: "warning" },
          inactive: { label: "Inactif", color: "error" },
        };
        const config = statusConfig[row.status] || statusConfig.active;

        return (
          <Chip
            label={config.label}
            size="small"
            color={config.color}
            variant="outlined"
          />
        );
      },
    },
    {
      id: "schedule",
      label: "Horaires",
      minWidth: 150,
    },
  ];

  const tableActions = [
    {
      icon: <People fontSize="small" />,
      tooltip: "Voir élèves",
      onClick: (row) => navigate(`/admin/classes/${row.id}/students`),
      color: "primary",
    },
    {
      icon: <Subject fontSize="small" />,
      tooltip: "Gérer matières",
      onClick: (row) => navigate(`/admin/classes/${row.id}/subjects`),
      color: "info",
    },
    {
      icon: <Assessment fontSize="small" />,
      tooltip: "Rapports",
      onClick: (row) => navigate(`/admin/classes/${row.id}/reports`),
      color: "warning",
    },
    {
      icon: <Edit fontSize="small" />,
      tooltip: "Modifier",
      onClick: (row) => navigate(`/admin/classes/${row.id}/edit`),
      color: "success",
    },
  ];

  const handleDeleteClass = (classId) => {
    setSelectedClass(classId);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (selectedClass === "all") {
      // Supprimer toutes les classes
      setClasses([]);
    } else {
      // Supprimer une classe spécifique
      setClasses((prev) => prev.filter((c) => c.id !== selectedClass));
    }
    setDeleteDialogOpen(false);
    setSelectedClass(null);
  };

  const handleRowClick = (classItem) => {
    navigate(`/admin/classes/${classItem.id}`);
  };

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* En-tête avec statistiques */}
      <Stack spacing={3} mb={4}>
        <Box>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            spacing={2}
            mb={3}
          >
            <Box>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                <School sx={{ verticalAlign: "middle", mr: 1 }} />
                Gestion des Classes
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Gérez les classes, les élèves et les emplois du temps
              </Typography>
            </Box>

            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                startIcon={<Refresh />}
                onClick={handleRefresh}
              >
                Actualiser
              </Button>
              <Button
                variant="contained"
                startIcon={<Add />}
                onClick={() => navigate("/admin/classes/add")}
                sx={{
                  bgcolor: "primary.main",
                  "&:hover": { bgcolor: "primary.dark" },
                }}
              >
                Nouvelle classe
              </Button>
            </Stack>
          </Stack>

          {/* Cartes de statistiques */}
          <Grid container spacing={3} mb={4}>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Classes actives"
                value={stats.activeClasses || 0}
                total={stats.totalClasses || 0}
                icon={<School />}
                color="#1976d2"
                trend={12}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Élèves inscrits"
                value={stats.totalStudents || 0}
                total={mockClasses.reduce((sum, c) => sum + c.capacity, 0)}
                icon={<People />}
                color="#4CAF50"
                subtitle="capacité totale"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Taux de remplissage"
                value={`${stats.averageFill || 0}%`}
                icon={<Assessment />}
                color="#FF9800"
                trend={5}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Actions rapides"
                value="4"
                icon={<FilterList />}
                color="#9C27B0"
                subtitle="disponibles"
              />
            </Grid>
          </Grid>
        </Box>
      </Stack>

      {/* Table des classes */}
      <DataTable
        columns={columns}
        rows={classes}
        loading={loading}
        title="Liste des classes"
        onRowClick={handleRowClick}
        actions={tableActions}
        searchable={true}
        downloadable={true}
        pageSizeOptions={[5, 10, 25]}
        emptyMessage="Aucune classe trouvée. Créez votre première classe !"
      />

      {/* Bouton d'export global */}
      {classes.length > 0 && (
        <Box sx={{ mt: 3, textAlign: "right" }}>
          <Button
            variant="outlined"
            startIcon={<Download />}
            onClick={() => setExportDialogOpen(true)}
            sx={{ mr: 2 }}
          >
            Exporter toutes les classes
          </Button>
          <Button
            variant="outlined"
            color="error"
            startIcon={<Delete />}
            onClick={() => handleDeleteClass("all")}
          >
            Supprimer toutes
          </Button>
        </Box>
      )}

      {/* Dialogs */}
      <ExportDialog
        open={exportDialogOpen}
        onClose={() => setExportDialogOpen(false)}
        data={classes}
        type="classes"
        columns={columns}
      />

      <DeleteConfirmationDialog
        open={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false);
          setSelectedClass(null);
        }}
        onConfirm={confirmDelete}
        title={
          selectedClass === "all"
            ? "Supprimer toutes les classes"
            : "Supprimer la classe"
        }
        message={
          selectedClass === "all"
            ? "Êtes-vous sûr de vouloir supprimer toutes les classes ? Cette action est irréversible."
            : "Êtes-vous sûr de vouloir supprimer cette classe ? Les données associées seront également supprimées."
        }
      />
    </Container>
  );
};

export default ShowClasses;
