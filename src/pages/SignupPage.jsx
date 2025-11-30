import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.confirm) {
      setError("Please fill all fields");
      return;
    }
    if (formData.password !== formData.confirm) {
      setError("Passwords do not match");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = existingUsers.find(
      (u) => u.email === formData.email
    );
    if (userExists) {
      setError("User with this email already exists");
      return;
    }

    // Save as student user
    existingUsers.push({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: "student",
    });
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Account created successfully! Please log in.");
    navigate("/login");
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
      <div className="card" style={{ width: "400px" }}>
        <h1 className="section-title" style={{ textAlign: "center" }}>
          Create Account
        </h1>
        <p className="section-subtitle" style={{ textAlign: "center" }}>
          Join VirtuHire and start exploring virtual career fairs.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "0.75rem" }}>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginBottom: "0.75rem" }}>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginBottom: "0.75rem" }}>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginBottom: "0.75rem" }}>
            <input
              type="password"
              name="confirm"
              className="input"
              placeholder="Confirm password"
              value={formData.confirm}
              onChange={handleChange}
            />
          </div>

          {error && (
            <p style={{ color: "var(--danger)", fontSize: "0.9rem" }}>{error}</p>
          )}

          <button className="btn btn-primary" style={{ width: "100%" }}>
            Sign Up
          </button>
        </form>

        <p
          className="text-muted"
          style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.85rem" }}
        >
          Already have an account?{" "}
          <Link to="/login" style={{ color: "var(--accent)" }}>
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
