import React, { useState } from "react";
import { fairs, boothsByFair } from "../data/mockData.js";

const AdminDashboard = ({ role }) => {
  const [selectedFairId, setSelectedFairId] = useState(fairs[0]?.id ?? "");

  const selectedFair = fairs.find((f) => f.id === selectedFairId);
  const booths = boothsByFair[selectedFairId] || [];

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <h1 className="section-title">Admin Dashboard</h1>
          <p className="section-subtitle">
            Organize career fair schedules, manage company booths, and preview how
            students experience your virtual fair.
          </p>
        </div>
        <span className="badge">
          Current role: {role === "admin" ? "Admin" : "Student (read-only preview)"}
        </span>
      </div>

      <div className="grid grid-2" style={{ marginTop: "0.75rem" }}>
        <div>
          <h2 style={{ fontSize: "1rem", marginBottom: "0.4rem" }}>
            Fairs overview
          </h2>
          {fairs.map((fair) => (
            <div
              key={fair.id}
              className="card"
              style={{
                padding: "0.9rem",
                marginBottom: "0.5rem",
                borderColor:
                  fair.id === selectedFairId
                    ? "rgba(56,189,248,0.7)"
                    : "var(--card-border)",
                cursor: "pointer",
              }}
              onClick={() => setSelectedFairId(fair.id)}
            >
              <div className="card-header">
                <div>
                  <div className="card-title" style={{ fontSize: "0.95rem" }}>
                    {fair.name}
                  </div>
                  <div className="card-subtitle">{fair.date}</div>
                </div>
                <span className="badge">
                  {boothsByFair[fair.id]?.length ?? 0} booths
                </span>
              </div>
            </div>
          ))}

          <div
            className="card"
            style={{
              marginTop: "0.5rem",
              borderStyle: "dashed",
              opacity: role === "admin" ? 1 : 0.6,
            }}
          >
            <div className="card-title" style={{ marginBottom: "0.25rem" }}>
              Create new fair
            </div>
            <p className="text-muted" style={{ fontSize: "0.8rem" }}>
              In a real application, this form would create a new fair in the
              backend. Here, it’s just a design component for your project.
            </p>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: "1rem", marginBottom: "0.4rem" }}>
            Company booths in selected fair
          </h2>
          {selectedFair ? (
            <>
              <p className="text-muted" style={{ marginBottom: "0.4rem" }}>
                {selectedFair.name} — {booths.length} configured booths.
              </p>
              <div className="scroll-panel">
                {booths.map((booth) => (
                  <div
                    key={booth.id}
                    className="card"
                    style={{ padding: "0.9rem", marginBottom: "0.5rem" }}
                  >
                    <div className="card-header">
                      <div>
                        <div className="card-title" style={{ fontSize: "0.95rem" }}>
                          {booth.companyName}
                        </div>
                        <div className="card-subtitle">{booth.headline}</div>
                      </div>
                      <span className="badge">{booth.roles.length} roles</span>
                    </div>
                    <p className="text-muted" style={{ fontSize: "0.8rem" }}>
                      {booth.about}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="card"
                style={{
                  marginTop: "0.75rem",
                  borderStyle: "dashed",
                  opacity: role === "admin" ? 1 : 0.6,
                }}
              >
                <div className="card-title" style={{ marginBottom: "0.25rem" }}>
                  Add new booth
                </div>
                <p className="text-muted" style={{ fontSize: "0.8rem" }}>
                  Admins could configure company details, roles, and time slots
                  here. For your frontend project, you can leave this as a UI‑only
                  component or extend it with local state.
                </p>
              </div>
            </>
          ) : (
            <p className="text-muted">Select a fair from the list.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
