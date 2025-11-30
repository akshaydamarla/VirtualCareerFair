import React, { useState } from "react";

const ResumeUpload = ({ booth, role }) => {
  const [fileName, setFileName] = useState("");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setSubmitted(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fileName) return;
    setSubmitted(true);
  };

  return (
    <div className="card" style={{ marginTop: "1rem" }}>
      <div className="card-header">
        <div>
          <div className="card-title">
            {role === "admin" ? "Resume submissions (preview)" : "Submit your resume"}
          </div>
          <div className="card-subtitle">
            {booth
              ? `Apply directly to ${booth.companyName}.`
              : "Select a company booth first."}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "0.75rem" }}>
          <label
            style={{ fontSize: "0.8rem", display: "block", marginBottom: "0.25rem" }}
          >
            Upload resume (PDF)
          </label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            disabled={!booth}
            style={{
              fontSize: "0.8rem",
              color: "var(--text-muted)",
            }}
          />
          {fileName && (
            <div
              className="badge"
              style={{ marginTop: "0.4rem", borderStyle: "dashed" }}
            >
              Selected: {fileName}
            </div>
          )}
        </div>

        <div style={{ marginBottom: "0.75rem" }}>
          <label
            style={{ fontSize: "0.8rem", display: "block", marginBottom: "0.25rem" }}
          >
            Short note (optional)
          </label>
          <textarea
            className="textarea"
            rows={2}
            placeholder="E.g., I'm a final-year CS student interested in backend roles."
            value={note}
            disabled={!booth}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary"
          type="submit"
          disabled={!booth || !fileName}
        >
          {role === "admin" ? "Simulate submission" : "Submit resume"}
        </button>

        {submitted && (
          <div
            style={{
              marginTop: "0.6rem",
              fontSize: "0.8rem",
              color: "var(--success)",
            }}
          >
            ✅ Resume recorded locally (frontend demo). In a real app, this would
            be sent to the server.
          </div>
        )}
      </form>
    </div>
  );
};

export default ResumeUpload;
