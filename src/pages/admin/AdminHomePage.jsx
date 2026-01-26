// src/pages/admin/AdminHomePage.jsx
import React, { useState, useEffect } from "react";
import { Container, Grid, Box } from "@mui/material";
import { People, Class, Person, AttachMoney } from "@mui/icons-material";

import SeeNotice from "../../components/SeeNotice";
import QuickActions from "./adminOverview/quickAction";
import RecentActivity from "./adminOverview/recentActivities";
import FeeCollectionChart from "./adminOverview/feesChart";
import StatCard from "./adminOverview/stackCard";
import DashboardHeader from "./adminOverview/header";

const AdminHomePage = () => {
  const [stats, setStats] = useState({
    students: { total: 0, trend: 0 },
    classes: { total: 0, trend: 0 },
    teachers: { total: 0, trend: 0 },
    fees: { total: 0, trend: 0 },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStats({
        students: { total: 248, trend: 12 },
        classes: { total: 15, trend: 5 },
        teachers: { total: 28, trend: 8 },
        fees: { total: 125400, trend: 15 },
      });
      setLoading(false);
    }, 1000);
  }, []);

  const handleActionClick = (path) => {
    console.log("Navigation vers:", path);
  };

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #f5f7fa 0%, #c3cfe2 100%)",
        py: { xs: 2, md: 6 },
        px: { xs: 0, md: 2 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          background: "rgba(255,255,255,0.98)",
          borderRadius: 5,
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)",
          px: { xs: 1, sm: 4, md: 6 },
          py: { xs: 2, sm: 4, md: 6 },
          mt: 2,
          mb: 4,
          width: "100%",
          maxWidth: 1400,
        }}
      >
        {/* ===== Header ===== */}
        <DashboardHeader
          onRefresh={handleRefresh}
          subtitle="Données mises à jour il y a 5 minutes"
        />

        {/* ===== Statistiques (KPI) ===== */}
        <Grid
          container
          spacing={3}
          component="main"
          sx={{
            flexGrow: 1,
            mb: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Élèves"
              value={stats.students.total}
              icon={<People />}
              color="#1976d2"
              trend={stats.students.trend}
              subtitle="+24 ce mois"
              loading={loading}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Classes"
              value={stats.classes.total}
              icon={<Class />}
              color="#FF9800"
              trend={stats.classes.trend}
              loading={loading}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Enseignants"
              value={stats.teachers.total}
              icon={<Person />}
              color="#4CAF50"
              trend={stats.teachers.trend}
              loading={loading}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Frais collectés"
              value={stats.fees.total}
              icon={<AttachMoney />}
              color="#9C27B0"
              trend={stats.fees.trend}
              subtitle="FCFA"
              loading={loading}
            />
          </Grid>
        </Grid>

        {/* ===== Overview : Activités + Graphique ===== */}
        <Grid
          container
          spacing={3}
          component="main"
          sx={{
            mb: 4,
            flexGrow: 1,
            justifyContent: "space-evenly",
            marginTop: sm => sm ? 5 : 10,
          }}
        >
          <Grid item xs={12} md={4}>
            <RecentActivity />
          </Grid>

          <Grid item xs={12} md={8}>
            <Box>
              <FeeCollectionChart />
            </Box>
          </Grid>
        </Grid>

        {/* ===== Actions Rapides ===== */}
        <Grid
          container
          spacing={12}
          sx={{ mb: 4, mt: 4, justifyContent: "center", alignItems: "center" }}
        >
          <Grid item xs={12}>
            <QuickActions onActionClick={handleActionClick} />
          </Grid>
        </Grid>

        {/* ===== Notices ===== */}
        {/* <Grid container spacing={3}>
          <Grid item xs={12}>
            <SeeNotice />
          </Grid>
        </Grid> */}
      </Container>
    </Box>
  );
};

export default AdminHomePage;
