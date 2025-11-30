import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ role }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <h1 className="section-title">Welcome to VirtuHire</h1>
          <p className="section-subtitle">
            A virtual platform for career fairs, networking, and real‑time
            conversations between talent and companies.
          </p>
        </div>
        <span className="badge badge-accent">
          Logged in as: {role === "admin" ? "Admin / Organizer" : "Student / Job Seeker"}
        </span>
      </div>

      <div className="grid grid-2" style={{ marginTop: "0.5rem" }}>
        <div>
          <h2 style={{ fontSize: "1.05rem", marginBottom: "0.4rem" }}>
            For Students & Job Seekers
          </h2>
          <p className="text-muted" style={{ marginBottom: "0.8rem" }}>
            Browse upcoming virtual career fairs, visit interactive company
            booths, submit resumes, and chat live with recruiters — all in your
            browser.
          </p>
          <Link to="/fairs">
            <button className="btn btn-primary">
              Explore Career Fairs
            </button>
          </Link>
        </div>

        <div>
          <h2 style={{ fontSize: "1.05rem", marginBottom: "0.4rem" }}>
            For Admins & Career Services
          </h2>
          <p className="text-muted" style={{ marginBottom: "0.8rem" }}>
            Create and manage virtual fairs, configure company booths, and
            monitor registrations in a single dashboard.
          </p>
          <Link to="/admin">
            <button className="btn btn-ghost">Go to Admin Dashboard</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
