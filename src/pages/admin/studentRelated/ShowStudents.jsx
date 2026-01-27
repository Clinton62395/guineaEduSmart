// src/pages/admin/students/ShowStudents.jsx
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
  alpha,
} from "@mui/material";
import {
  PersonAdd,
  Download,
  FilterList,
  Group,
  Search,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import DataTable from "../../../components/Tables/DataTable";

const ShowStudents = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [exportDialogOpen, setExportDialogOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});

  // Mock data améliorée
  const mockStudents = [
    {
      id: "1",
      name: "Fatoumata Diallo",
      rollNum: "2024001",
      class: "Terminale S",
      grade: "12ème",
      status: "active",
      email: "fatou.diallo@ecole.gn",
      phone: "+224 123 456 789",
      address: "Conakry, Kaloum",
      enrollmentDate: "2023-09-01",
      lastPayment: "2024-01-15",
      feesPaid: true,
    },
    {
      id: "2",
      name: "Mamadou Camara",
      rollNum: "2024002",
      class: "1ère L",
      grade: "11ème",
      status: "active",
      email: "mamadou.camara@ecole.gn",
      phone: "+224 987 654 321",
      address: "Conakry, Dixinn",
      enrollmentDate: "2023-09-01",
      lastPayment: "2024-01-10",
      feesPaid: true,
    },
    {
      id: "3",
      name: "Aissatou Bah",
      rollNum: "2024003",
      class: "2nde",
      grade: "10ème",
      status: "pending",
      email: "aissatou.bah@ecole.gn",
      phone: "+224 555 666 777",
      address: "Conakry, Matam",
      enrollmentDate: "2024-01-15",
      lastPayment: null,
      feesPaid: false,
    },
  ];

  useEffect(() => {
    // Simuler API call
    setTimeout(() => {
      setStudents(mockStudents);
      setLoading(false);
    }, 1000);
  }, []);

  const columns = [
    {
      id: "name",
      label: "Élève",
      render: (row) => (
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar sx={{ bgcolor: "primary.main", width: 40, height: 40 }}>
            {row.name.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="body2" fontWeight={600}>
              {row.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {row.email}
            </Typography>
          </Box>
        </Stack>
      ),
    },
    {
      id: "rollNum",
      label: "Matricule",
      sortable: true,
    },
    {
      id: "class",
      label: "Classe",
      render: (row) => (
        <Chip
          label={row.class}
          size="small"
          variant="outlined"
          sx={{
            borderColor: "primary.main",
            color: "primary.main",
          }}
        />
      ),
    },
    {
      id: "grade",
      label: "Niveau",
      sortable: true,
    },
    {
      id: "status",
      label: "Statut",
      render: (row) => (
        <Chip
          label={row.status === "active" ? "Actif" : "En attente"}
          size="small"
          color={row.status === "active" ? "success" : "warning"}
          variant="outlined"
        />
      ),
    },
    {
      id: "feesPaid",
      label: "Frais",
      render: (row) => (
        <Chip
          label={row.feesPaid ? "Payés" : "En retard"}
          size="small"
          color={row.feesPaid ? "success" : "error"}
          variant="outlined"
        />
      ),
    },
  ];

  const handleRowClick = (student) => {
    navigate(`/admin/students/${student.id}`);
  };

  const handleAction = (action, student) => {
    switch (action) {
      case "view":
        navigate(`/admin/students/${student.id}`);
        break;
      case "edit":
        navigate(`/admin/students/${student.id}/edit`);
        break;
      case "delete":
        if (window.confirm(`Supprimer ${student.name} ?`)) {
          setStudents((prev) => prev.filter((s) => s.id !== student.id));
        }
        break;
      case "grades":
        navigate(`/admin/students/${student.id}/grades`);
        break;
      case "payments":
        navigate(`/admin/students/${student.id}/payments`);
        break;
    }
  };

  const tableActions = [
    {
      icon: <Search fontSize="small" />,
      tooltip: "Voir",
      onClick: (row) => handleAction("view", row),
      color: "primary",
    },
    {
      icon: <FilterList fontSize="small" />,
      tooltip: "Modifier",
      onClick: (row) => handleAction("edit", row),
      color: "info",
    },
  ];

  const handleApplyFilters = (filters) => {
    setSelectedFilters(filters);
    // Appliquer les filtres aux données
    console.log("Filtres appliqués:", filters);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* En-tête */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        spacing={2}
        mb={4}
      >
        <Box>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            <Group sx={{ verticalAlign: "middle", mr: 1 }} />
            Gestion des Élèves
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Liste complète des élèves inscrits
          </Typography>
        </Box>

        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            startIcon={<FilterList />}
            onClick={() => setFilterDialogOpen(true)}
          >
            Filtrer
          </Button>
          <Button
            variant="outlined"
            startIcon={<Download />}
            onClick={() => setExportDialogOpen(true)}
          >
            Exporter
          </Button>
          <Button
            variant="contained"
            startIcon={<PersonAdd />}
            onClick={() => navigate("/admin/students/add")}
            sx={{
              bgcolor: "primary.main",
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            Nouvel élève
          </Button>
        </Stack>
      </Stack>

      {/* Filtres actifs */}
      {Object.keys(selectedFilters).length > 0 && (
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 3,
            borderRadius: 2,
            bgcolor: "primary.50",
            border: "1px solid",
            borderColor: "primary.100",
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body2" fontWeight={600}>
              Filtres actifs:
            </Typography>
            {Object.entries(selectedFilters).map(([key, value]) => (
              <Chip
                key={key}
                label={`${key}: ${value}`}
                size="small"
                onDelete={() => {
                  const newFilters = { ...selectedFilters };
                  delete newFilters[key];
                  setSelectedFilters(newFilters);
                }}
              />
            ))}
            <Button
              size="small"
              onClick={() => setSelectedFilters({})}
              sx={{ ml: "auto" }}
            >
              Effacer tous
            </Button>
          </Stack>
        </Paper>
      )}

      {/* Table */}
      <DataTable
        columns={columns}
        rows={students}
        loading={loading}
        title="Liste des élèves"
        onRowClick={handleRowClick}
        actions={tableActions}
        searchable={true}
        downloadable={true}
        emptyMessage="Aucun élève trouvé"
      />

      {/* Dialogs */}
      <StudentFilterDialog
        open={filterDialogOpen}
        onClose={() => setFilterDialogOpen(false)}
        onApply={handleApplyFilters}
      />

      <ExportDialog
        open={exportDialogOpen}
        onClose={() => setExportDialogOpen(false)}
        data={students}
        type="students"
      />
    </Container>
  );
};

export default ShowStudents;
