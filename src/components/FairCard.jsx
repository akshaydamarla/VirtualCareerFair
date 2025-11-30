import React from "react";
import { Link } from "react-router-dom";

const FairCard = ({ fair }) => {
  return (
    <div className="card" style={{ padding: "1.25rem" }}>
      <div className="card-header">
        <div>
          <div className="card-title">{fair.name}</div>
          <div className="card-subtitle">{fair.date}</div>
        </div>
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          {fair.tags?.map((tag) => (
            <span key={tag} className="badge">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <p className="text-muted" style={{ marginBottom: "0.8rem" }}>
        {fair.description}
      </p>
      <div
        className="text-muted"
        style={{ fontSize: "0.8rem", marginBottom: "0.75rem" }}
      >
        Companies: {fair.companies.join(" • ")}
      </div>
      <Link to={`/fairs/${fair.id}`}>
        <button className="btn btn-primary">Enter Fair</button>
      </Link>
    </div>
  );
};

export default FairCard;
