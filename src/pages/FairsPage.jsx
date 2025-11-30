import React from "react";
import { fairs } from "../data/mockData.js";
import FairCard from "../components/FairCard.jsx";

const FairsPage = ({ role }) => {
  return (
    <div>
      <h1 className="section-title">Virtual Career Fairs</h1>
      <p className="section-subtitle">
        {role === "admin"
          ? "Preview how your fairs look to students. Use the Admin Dashboard to create or edit fairs."
          : "Browse fairs and join those that match your interests."}
      </p>
      <div className="grid grid-2">
        {fairs.map((fair) => (
          <FairCard key={fair.id} fair={fair} />
        ))}
      </div>
    </div>
  );
};

export default FairsPage;
