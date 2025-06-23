import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import StudentList from "../pages/Students/StudentList";
import TeacherList from "../pages/Teachers/TeacherList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />
      <Route
        path="/login"
        element={
          <MainLayout>
            <Login />
          </MainLayout>
        }
      />
      <Route
        path="/students"
        element={
          <MainLayout>
            <StudentList />
          </MainLayout>
        }
      />
      <Route
        path="/teachers"
        element={
          <MainLayout>
            <TeacherList />
          </MainLayout>
        }
      />
      <Route
        path="*"
        element={
          <MainLayout>
            <div className="text-center p-10 text-red-500 text-xl">
              404 - Page Not Found
            </div>
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;