// Utilitaire pour valider la couleur CSS
function getValidColor(color) {
  if (!color) return "#1976d2";
  // Hex, rgb, rgba, hsl, hsla, color()
  if (
    /^#([0-9a-f]{3}){1,2}$/i.test(color) ||
    /^rgb(a)?\(/i.test(color) ||
    /^hsl(a)?\(/i.test(color) ||
    /^color\(/i.test(color)
  ) {
    return color;
  }
  return "#1976d2";
}
// src/components/Tables/DataTable.jsx
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
  Paper,
  Box,
  CircularProgress,
  Typography,
  TextField,
  InputAdornment,
  Chip,
  IconButton,
  Tooltip,
  alpha,
} from "@mui/material";
import {
  Search,
  FilterList,
  Download,
  Visibility,
  Edit,
  Delete,
} from "@mui/icons-material";

const DataTable = ({
  columns = [],
  rows = [],
  loading = false,
  rowKey = "id",
  emptyMessage = "Aucune donnée disponible",
  title = "",
  onRowClick,
  actions = [],
  searchable = true,
  downloadable = false,
  pageSizeOptions = [5, 10, 25],
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSort = (columnId) => {
    const isAsc = orderBy === columnId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(columnId);
  };

  const handleSearch = (e) => setSearch(e.target.value);

  const filteredRows = rows.filter((row) =>
    columns.some((col) =>
      String(row[col.id] || "")
        .toLowerCase()
        .includes(search.toLowerCase()),
    ),
  );

  const sortedRows = filteredRows.sort((a, b) => {
    if (!orderBy) return 0;
    const aValue = a[orderBy];
    const bValue = b[orderBy];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return order === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    return order === "asc" ? aValue - bValue : bValue - aValue;
  });

  const paginatedRows = sortedRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  if (loading) {
    return (
      <Box sx={{ py: 10, textAlign: "center" }}>
        <CircularProgress />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Chargement des données...
        </Typography>
      </Box>
    );
  }

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        overflow: "hidden",
      }}
    >
      {/* En-tête avec recherche et actions */}
      <Box sx={{ p: 3, borderBottom: "1px solid", borderColor: "divider" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" fontWeight={700}>
            {title}
            <Chip
              label={`${filteredRows.length} résultats`}
              size="small"
              variant="outlined"
              sx={{ ml: 2 }}
            />
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            {downloadable && (
              <Tooltip title="Exporter">
                <IconButton size="small">
                  <Download />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title="Filtres">
              <IconButton size="small">
                <FilterList />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        {searchable && (
          <TextField
            fullWidth
            placeholder="Rechercher..."
            value={search}
            onChange={handleSearch}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search fontSize="small" />
                </InputAdornment>
              ),
              sx: { borderRadius: 2 },
            }}
          />
        )}
      </Box>

      {/* Table */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell
                  key={col.id}
                  align={col.align || "left"}
                  sortDirection={orderBy === col.id ? order : false}
                  sx={{
                    fontWeight: 700,
                    bgcolor: "background.default",
                    borderBottom: "2px solid",
                    borderColor: "divider",
                  }}
                >
                  {col.sortable ? (
                    <TableSortLabel
                      active={orderBy === col.id}
                      direction={orderBy === col.id ? order : "asc"}
                      onClick={() => handleSort(col.id)}
                    >
                      {col.label}
                    </TableSortLabel>
                  ) : (
                    col.label
                  )}
                </TableCell>
              ))}
              {actions.length > 0 && (
                <TableCell
                  align="right"
                  sx={{
                    fontWeight: 700,
                    bgcolor: "background.default",
                    borderBottom: "2px solid",
                    borderColor: "divider",
                  }}
                >
                  Actions
                </TableCell>
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedRows.map((row) => (
              <TableRow
                key={row[rowKey]}
                hover
                onClick={() => onRowClick && onRowClick(row)}
                sx={{
                  cursor: onRowClick ? "pointer" : "default",
                  "&:hover": { bgcolor: "action.hover" },
                  "&:last-child td": { borderBottom: 0 },
                }}
              >
                {columns.map((col) => (
                  <TableCell key={col.id} align={col.align || "left"}>
                    {col.render ? col.render(row) : row[col.id]}
                  </TableCell>
                ))}

                {actions.length > 0 && (
                  <TableCell align="right">
                    <Box
                      sx={{
                        display: "flex",
                        gap: 0.5,
                        justifyContent: "flex-end",
                      }}
                    >
                      {actions.map((action, index) => (
                        <Tooltip key={index} title={action.tooltip}>
                          <IconButton
                            size="small"
                            onClick={(e) => {
                              e.stopPropagation();
                              action.onClick(row);
                            }}
                            sx={{
                              "&:hover": {
                                bgcolor: alpha(
                                  getValidColor(action.color),
                                  0.1,
                                ),
                              },
                            }}
                          >
                            {action.icon}
                          </IconButton>
                        </Tooltip>
                      ))}
                    </Box>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={pageSizeOptions}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
        labelRowsPerPage="Lignes par page :"
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} sur ${count}`
        }
        sx={{ borderTop: "1px solid", borderColor: "divider" }}
      />
    </Paper>
  );
};

export default DataTable;
