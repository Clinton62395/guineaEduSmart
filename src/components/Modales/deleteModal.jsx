// src/components/dialogs/DeleteConfirmationDialog.jsx
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Alert,
  Box,
} from "@mui/material";
import { Warning, Delete, Cancel } from "@mui/icons-material";

const DeleteConfirmationDialog = ({
  open,
  onClose,
  onConfirm,
  title = "Confirmer la suppression",
  message = "Êtes-vous sûr de vouloir supprimer cet élément ?",
  confirmText = "Supprimer",
  cancelText = "Annuler",
  severity = "error",
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Warning color={severity} />
          <Typography variant="h6">{title}</Typography>
        </Box>
      </DialogTitle>

      <DialogContent>
        <Alert severity={severity} sx={{ mb: 2 }} icon={<Warning />}>
          {message}
        </Alert>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          ⚠️ Cette action est irréversible. Les données seront définitivement
          supprimées.
        </Typography>
      </DialogContent>

      <DialogActions sx={{ p: 3, pt: 0 }}>
        <Button onClick={onClose} startIcon={<Cancel />} variant="outlined">
          {cancelText}
        </Button>
        <Button
          onClick={onConfirm}
          startIcon={<Delete />}
          variant="contained"
          color="error"
          sx={{
            bgcolor: "error.main",
            "&:hover": { bgcolor: "error.dark" },
          }}
        >
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;
