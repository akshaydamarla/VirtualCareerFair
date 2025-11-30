import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  const roleLabel = user?.role === "admin" ? "Admin" : "Student";

  return (
    <header>
      <nav className="navbar">
        <div className="nav-brand">
          <div className="nav-logo" />
          <div>
            <div className="nav-title">VirtuHire</div>
            <div className="text-muted" style={{ fontSize: "0.7rem" }}>
              Virtual Career Fairs & Networking
            </div>
          </div>
        </div>

        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/fairs"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
          >
            Fairs
          </NavLink>

          {user?.role === "admin" && (
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link-active" : "")
              }
            >
              Admin
            </NavLink>
          )}

          <span className="badge badge-accent" style={{ marginLeft: "0.75rem" }}>
            Role: {roleLabel}
          </span>

          {user && (
            <>
              <span
                style={{
                  marginLeft: "0.75rem",
                  color: "var(--accent)",
                  fontWeight: 500,
                }}
              >
                Welcome, {user.name}
              </span>
              <button
                className="btn btn-ghost"
                style={{ marginLeft: "0.5rem" }}
                onClick={onLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
