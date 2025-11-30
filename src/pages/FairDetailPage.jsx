import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fairs, boothsByFair } from "../data/mockData.js";
import BoothCard from "../components/BoothCard.jsx";
import ChatPanel from "../components/ChatPanel.jsx";
import ResumeUpload from "../components/ResumeUpload.jsx";

const FairDetailPage = ({ role }) => {
  const { fairId } = useParams();
  const fair = useMemo(
    () => fairs.find((f) => f.id === fairId),
    [fairId]
  );
  const booths = boothsByFair[fairId] || [];
  const [activeBoothId, setActiveBoothId] = useState(
    booths[0]?.id ?? null
  );

  const activeBooth = booths.find((b) => b.id === activeBoothId) || null;

  if (!fair) {
    return (
      <div className="card">
        <h1 className="section-title">Fair not found</h1>
        <p className="section-subtitle">
          The fair you’re looking for doesn’t exist or has been removed.
        </p>
        <Link to="/fairs">
          <button className="btn btn-ghost">Back to fairs</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="card" style={{ marginBottom: "1rem" }}>
        <div className="card-header">
          <div>
            <h1 className="section-title">{fair.name}</h1>
            <p className="section-subtitle">{fair.date}</p>
          </div>
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {fair.tags.map((tag) => (
              <span key={tag} className="badge">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="text-muted">{fair.description}</p>
      </div>

      <div className="grid grid-2">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <h2 style={{ fontSize: "1.05rem", marginBottom: "0.2rem" }}>
            Company booths
          </h2>
          {booths.length === 0 && (
            <p className="text-muted">No booths configured for this fair yet.</p>
          )}
          {booths.map((booth) => (
            <BoothCard
              key={booth.id}
              booth={booth}
              isActive={booth.id === activeBoothId}
              onSelect={() => setActiveBoothId(booth.id)}
            />
          ))}
        </div>

        <div>
          <ChatPanel booth={activeBooth} role={role} />
          <ResumeUpload booth={activeBooth} role={role} />
        </div>
      </div>
    </div>
  );
};

export default FairDetailPage;
