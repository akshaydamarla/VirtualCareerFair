import React from "react";

const BoothCard = ({ booth, isActive, onSelect }) => {
  return (
    <div
      className="card"
      style={{
        padding: "1rem",
        borderColor: isActive
          ? "rgba(56, 189, 248, 0.7)"
          : "var(--card-border)",
        cursor: "pointer",
      }}
      onClick={onSelect}
    >
      <div className="card-header">
        <div>
          <div className="card-title">{booth.companyName}</div>
          <div className="card-subtitle">{booth.headline}</div>
        </div>
        <span className="badge badge-accent">
          {booth.roles.length} open roles
        </span>
      </div>
      <p className="text-muted" style={{ fontSize: "0.85rem" }}>
        {booth.about}
      </p>
      <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
        {booth.roles.map((role) => (
          <span key={role} className="badge">
            {role}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BoothCard;
