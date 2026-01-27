// src/components/dialogs/ExportDialog.jsx
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import { Download, Close } from "@mui/icons-material";

const ExportDialog = ({
  open,
  onClose,
  data = [],
  type = "classes",
  columns = [],
}) => {
  const [format, setFormat] = useState("csv");
  const [selectedColumns, setSelectedColumns] = useState(
    columns.map((col) => col.id),
  );
  const [includeAll, setIncludeAll] = useState(true);

  const handleColumnToggle = (columnId) => {
    if (selectedColumns.includes(columnId)) {
      setSelectedColumns((prev) => prev.filter((id) => id !== columnId));
    } else {
      setSelectedColumns((prev) => [...prev, columnId]);
    }
  };

  const handleSelectAll = () => {
    if (includeAll) {
      setSelectedColumns([]);
    } else {
      setSelectedColumns(columns.map((col) => col.id));
    }
    setIncludeAll(!includeAll);
  };

  const handleExport = () => {
    // Simuler l'export
    console.log("Exporting:", {
      format,
      columns: selectedColumns,
      dataCount: data.length,
      type,
    });

    // Ici, vous ajouteriez la logique d'export réelle
    alert(
      `Export des ${data.length} ${type} en ${format.toUpperCase()} lancé !`,
    );
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Download />
          <Typography variant="h6">Exporter les données</Typography>
        </Stack>
      </DialogTitle>

      <DialogContent>
        <Stack spacing={3} sx={{ mt: 1 }}>
          {/* Format d'export */}
          <FormControl fullWidth>
            <InputLabel>Format d'export</InputLabel>
            <Select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              label="Format d'export"
            >
              <MenuItem value="csv">CSV (Excel)</MenuItem>
              <MenuItem value="pdf">PDF</MenuItem>
              <MenuItem value="excel">Excel (.xlsx)</MenuItem>
              <MenuItem value="json">JSON</MenuItem>
            </Select>
          </FormControl>

          {/* Colonnes à inclure */}
          {columns.length > 0 && (
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Colonnes à inclure
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox checked={includeAll} onChange={handleSelectAll} />
                }
                label="Sélectionner toutes les colonnes"
              />

              <Box
                sx={{
                  maxHeight: 200,
                  overflow: "auto",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 1,
                  p: 2,
                  mt: 1,
                }}
              >
                {columns.map((col) => (
                  <FormControlLabel
                    key={col.id}
                    control={
                      <Checkbox
                        checked={selectedColumns.includes(col.id)}
                        onChange={() => handleColumnToggle(col.id)}
                      />
                    }
                    label={col.label}
                    sx={{ display: "block", mb: 0.5 }}
                  />
                ))}
              </Box>
            </Box>
          )}

          {/* Résumé */}
          <Box
            sx={{
              bgcolor: "grey.50",
              p: 2,
              borderRadius: 1,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              <strong>Résumé de l'export :</strong>
            </Typography>
            <Typography variant="caption" color="text.secondary">
              • {data.length} {type} au total
              <br />• {selectedColumns.length} colonnes sélectionnées
              <br />• Format : {format.toUpperCase()}
            </Typography>
          </Box>
        </Stack>
      </DialogContent>

      <DialogActions sx={{ p: 3, pt: 0 }}>
        <Button onClick={onClose} startIcon={<Close />}>
          Annuler
        </Button>
        <Button
          variant="contained"
          onClick={handleExport}
          startIcon={<Download />}
          disabled={selectedColumns.length === 0}
        >
          Exporter maintenant
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExportDialog;
