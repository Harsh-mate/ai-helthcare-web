/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Importing components and pages
import Navbar from './components/Navbar';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import DoctorDashboard from './components/Dashboard/DoctorDashboard';
import PatientDashboard from './components/Dashboard/PatientDashboard';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import MedicalRecords from './pages/MedicalRecords';
import Profile from './pages/Profile';
import Analytics from './pages/Analytics';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

// Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// Protected Route Component
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const { role, isAuthenticated } = useSelector((state) => state.auth); // Using Redux to manage auth and roles

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                {role === 'admin' ? (
                  <AdminLayout>
                    <AdminDashboard />
                  </AdminLayout>
                ) : role === 'doctor' ? (
                  <MainLayout>
                    <DoctorDashboard />
                  </MainLayout>
                ) : (
                  <MainLayout>
                    <PatientDashboard />
                  </MainLayout>
                )}
              </ProtectedRoute>
            }
          />

          {/* Other Protected Pages */}
          <Route
            path="/appointments"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Appointment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/medical-records"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <MedicalRecords />
              </ProtectedRoute>
            }
          />
          <Route
            path="/analytics"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated && role === 'admin'}>
                <Analytics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
