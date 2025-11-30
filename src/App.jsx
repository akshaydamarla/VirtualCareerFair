import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import FairsPage from "./pages/FairsPage.jsx";
import FairDetailPage from "./pages/FairDetailPage.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";

function App() {
  const [user, setUser] = useState(null);

  // Load logged-in user from localStorage on first render
  useEffect(() => {
    try {
      const stored = localStorage.getItem("loggedInUser");
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch (err) {
      console.error("Failed to parse stored user", err);
      localStorage.removeItem("loggedInUser");
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  const role = user?.role || "student";

  return (
    <div className="app-shell">
      {user && <Navbar user={user} onLogout={handleLogout} />}

      <main className="app-main">
        <Routes>
          {!user ? (
            <>
              <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
              <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          ) : (
            <>
              <Route path="/" element={<HomePage role={role} />} />
              <Route path="/fairs" element={<FairsPage role={role} />} />
              <Route
                path="/fairs/:fairId"
                element={<FairDetailPage role={role} />}
              />
              <Route
                path="/admin"
                element={
                  user.role === "admin" ? (
                    <AdminDashboard role={role} />
                  ) : (
                    <div className="card">
                      <h1 className="section-title">Access denied</h1>
                      <p className="section-subtitle">
                        You must be an admin to view this page.
                      </p>
                    </div>
                  )
                }
              />
              <Route path="*" element={<Navigate to="/fairs" replace />} />
            </>
          )}
        </Routes>
      </main>
    </div>
  );
}

export default App;
