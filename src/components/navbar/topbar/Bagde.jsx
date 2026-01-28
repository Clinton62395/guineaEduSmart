import { Chip } from "@mui/material";

const roleMap = {
  ADMIN: { label: "Administrateur", color: "primary" },
  TEACHER: { label: "Enseignant", color: "warning" },
  PARENT: { label: "Parent", color: "success" },
  STUDENT: { label: "Élève", color: "secondary" },
};

const TopBarRoleBadge = ({ role }) => {
  const config = roleMap[role] || roleMap.ADMIN;

  return (
    <Chip
      label={config.label}
      color={config.color}
      size="small"
      variant="outlined"
    />
  );
};

export default TopBarRoleBadge;
