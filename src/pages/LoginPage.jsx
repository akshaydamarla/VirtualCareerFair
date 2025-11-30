import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    // 1️⃣ Admin login (separate credentials)
    if (email === "admin@virtuhire.com" && password === "admin123") {
      const adminUser = { name: "Admin", email, role: "admin" };
      localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
      onLogin(adminUser);
      navigate("/admin");
      return;
    }

    // 2️⃣ Normal user (student) login
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const found = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!found) {
      setError("Invalid email or password");
      return;
    }

    const userWithRole = found.role
      ? found
      : { ...found, role: "student" }; // fallback if old data

    localStorage.setItem("loggedInUser", JSON.stringify(userWithRole));
    onLogin(userWithRole);
    navigate("/fairs");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="card" style={{ width: "380px" }}>
        <h1 className="section-title" style={{ textAlign: "center" }}>
          VirtuHire Login
        </h1>
        <p className="section-subtitle" style={{ textAlign: "center" }}>
          Use your credentials to continue.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "0.75rem" }}>
            <input
              type="email"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: "0.75rem" }}>
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p style={{ color: "var(--danger)", fontSize: "0.9rem" }}>{error}</p>
          )}

          <button className="btn btn-primary" style={{ width: "100%" }}>
            Login
          </button>
        </form>

        <p
          className="text-muted"
          style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.85rem" }}
        >
          New here?{" "}
          <Link to="/signup" style={{ color: "var(--accent)" }}>
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
