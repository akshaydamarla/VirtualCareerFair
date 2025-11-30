import React, { useState } from "react";
import { initialChatMessages } from "../data/mockData.js";

let nextId = 100;

const ChatPanel = ({ booth, role }) => {
  const [messages, setMessages] = useState(initialChatMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const newMessage = {
      id: nextId++,
      sender: role === "admin" ? "Recruiter" : "You",
      text: trimmed,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  return (
    <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div className="card-header">
        <div>
          <div className="card-title">
            Live chat - {booth?.companyName || "Select a booth"}
          </div>
          <div className="card-subtitle">
            {booth
              ? "Ask about roles, application process, and team culture."
              : "Pick a company booth to start chatting."}
          </div>
        </div>
      </div>

      <div className="scroll-panel" style={{ flex: 1, marginBottom: "0.75rem" }}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              marginBottom: "0.5rem",
              display: "flex",
              justifyContent:
                msg.sender === "You" ? "flex-end" : "flex-start",
            }}
          >
            <div
              style={{
                maxWidth: "78%",
                background:
                  msg.sender === "You" ? "var(--accent-soft)" : "rgba(15,23,42,0.9)",
                borderRadius: "1rem",
                padding: "0.45rem 0.7rem",
                border:
                  msg.sender === "You"
                    ? "1px solid rgba(56,189,248,0.6)"
                    : "1px solid rgba(148,163,184,0.4)",
                fontSize: "0.85rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                  marginBottom: "0.1rem",
                }}
              >
                {msg.sender} • {msg.timestamp}
              </div>
              <div>{msg.text}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        <input
          className="input"
          placeholder={
            booth ? "Type a message..." : "Select a booth to enable chat"
          }
          disabled={!booth}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <button
          className="btn btn-primary"
          onClick={handleSend}
          disabled={!booth || !input.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPanel;
