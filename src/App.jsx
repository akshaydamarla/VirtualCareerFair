import React, { useState } from "react";
import { Routes, Route, Link, useNavigate, useParams, Navigate } from "react-router-dom";
import "./App.css";

// ----- Database Simulation -----
const STORAGE_KEY = "virtual_career_fair_db";
const USER_KEY = "virtual_career_fair_user";

const defaultDB = {
  fairs: [
    {
      id: "fair1",
      title: "Tech Career Fair",
      date: "2025-10-15",
      booths: [
        { id: "b1", company: "Acme Corp", description: "Frontend & Backend roles", messages: [] },
        { id: "b2", company: "Globex Inc.", description: "Internships & SDE roles", messages: [] },
      ],
      registrations: [],
    },
  ],
  admins: [{ username: "admin", password: "admin123" }],
  users: [],
};

function loadDB() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : defaultDB;
}
function saveDB(db) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}
function getCurrentUser() {
  return JSON.parse(localStorage.getItem(USER_KEY));
}
function setCurrentUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}
function logoutUser() {
  localStorage.removeItem(USER_KEY);
}

// ----- Header -----
function Header({ user, onLogout }) {
  return (
    <header>
      <div className="App">
        <h1>Virtual Career Fair</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/fairs">Fairs</Link> |{" "}
          <Link to="/admin">Admin</Link>
          {user && (
            <>
              {" "}
              | <span>Hi, {user.name}</span>{" "}
              <button onClick={onLogout}>Logout</button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

// ---------- Authentication ----------
function AuthPage({ setUser }) {
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const db = loadDB();

  const handleSignup = (e) => {
    e.preventDefault();
    if (db.users.find((u) => u.email === email)) {
      alert("Email already registered, please login!");
      setMode("login");
      return;
    }
    const newUser = { name, email, password };
    db.users.push(newUser);
    saveDB(db);
    alert("Signup successful! Please log in.");
    setMode("login");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const found = db.users.find((u) => u.email === email && u.password === password);
    if (found) {
      setUser(found);
      setCurrentUser(found);
      navigate("/");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="auth-container">
      <h2>{mode === "login" ? "Login" : "Sign Up"}</h2>
      <form onSubmit={mode === "login" ? handleLogin : handleSignup}>
        {mode === "signup" && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{mode === "login" ? "Login" : "Sign Up"}</button>
      </form>
      <p>
        {mode === "login" ? "Don't have an account?" : "Already have one?"}{" "}
        <span
          className="auth-toggle"
          onClick={() => setMode(mode === "login" ? "signup" : "login")}
        >
          {mode === "login" ? "Sign Up" : "Login"}
        </span>
      </p>
    </div>
  );
}

// ----- Pages -----
function Home() {
  return (
    <div className="App">
      <h2>Welcome to the Virtual Career Fair Platform</h2>
      <p>Explore upcoming career fairs, visit company booths, and submit your resume.</p>
      <Link to="/fairs"><button>View Fairs</button></Link>
    </div>
  );
}

function Fairs() {
  const db = loadDB();
  return (
    <div className="App">
      <h2>Upcoming Career Fairs</h2>
      {db.fairs.map((fair) => (
        <div className="card" key={fair.id}>
          <h3>{fair.title}</h3>
          <p>Date: {fair.date}</p>
          <Link to={`/fair/${fair.id}`}><button>Visit Fair</button></Link>
        </div>
      ))}
    </div>
  );
}

function FairPage() {
  const { fairId } = useParams();
  const db = loadDB();
  const fair = db.fairs.find((f) => f.id === fairId);
  if (!fair) return <p>Fair not found</p>;
  return (
    <div className="App">
      <h2>{fair.title} - Booths</h2>
      <div className="fair-booths">
        {fair.booths.map((b) => (
          <div className="card" key={b.id}>
            <h3>{b.company}</h3>
            <p>{b.description}</p>
            <Link to={`/booth/${fair.id}/${b.id}`}><button>Enter Booth</button></Link>
          </div>
        ))}
      </div>
      <Link to={`/register/${fair.id}`}><button>Register for Fair</button></Link>
    </div>
  );
}

function BoothPage() {
  const { fairId, boothId } = useParams();
  const [db, setDb] = useState(loadDB());
  const [msg, setMsg] = useState("");

  const fair = db.fairs.find((f) => f.id === fairId);
  const booth = fair?.booths.find((b) => b.id === boothId);
  if (!booth) return <p>Booth not found</p>;

  const sendMessage = () => {
    if (!msg) return;
    booth.messages.push(msg);
    setDb({ ...db });
    saveDB(db);
    setMsg("");
  };

  const handleKeyPress = (e) => { if (e.key === "Enter") sendMessage(); };

  return (
    <div className="App">
      <h2>{booth.company} Booth</h2>
      <p>{booth.description}</p>

      <h3>Live Chat</h3>
      <div className="card" style={{ maxHeight: "200px", overflowY: "scroll" }}>
        {booth.messages.map((m, i) => (<p key={i}>{m}</p>))}
      </div>
      <input
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Type a message..."
        onKeyDown={handleKeyPress}
      />
      <button onClick={sendMessage}>Send</button>

      <h3>Upload Resume</h3>
      <input type="file" />
    </div>
  );
}

function Registration() {
  const { fairId } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [db, setDb] = useState(loadDB());
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name || !email) return alert("Please fill all fields");
    const fair = db.fairs.find((f) => f.id === fairId);
    fair.registrations.push({ name, email });
    setDb({ ...db });
    saveDB(db);
    alert("Registered successfully!");
    navigate(`/fair/${fairId}`);
  };

  const handleKeyPress = (e) => { if (e.key === "Enter") handleRegister(); };

  return (
    <div className="App">
      <h2>Register for Fair</h2>
      <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} onKeyDown={handleKeyPress}/>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={handleKeyPress}/>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

// ----- Admin -----
function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const db = loadDB();

  const login = () => {
    const admin = db.admins.find((a) => a.username === username && a.password === password);
    if (admin) navigate("/admin/dashboard");
    else alert("Invalid Admin ID or Password");
  };

  const handleKeyPress = (e) => { if (e.key === "Enter") login(); };

  return (
    <div className="App">
      <h2>Admin Login</h2>
      <input placeholder="Admin ID" value={username} onChange={(e) => setUsername(e.target.value)} onKeyDown={handleKeyPress}/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={handleKeyPress}/>
      <button onClick={login}>Login</button>
    </div>
  );
}

function AdminDashboard() {
  const [db, setDb] = useState(loadDB());
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const addFair = () => {
    const newFair = { id: `fair${Date.now()}`, title, date, booths: [], registrations: [] };
    db.fairs.push(newFair);
    setDb({ ...db });
    saveDB(db);
    setTitle("");
    setDate("");
  };

  return (
    <div className="App">
      <h2>Admin Dashboard</h2>
      <h3>Create New Fair</h3>
      <input placeholder="Fair Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button onClick={addFair}>Add Fair</button>

      <h3>Existing Fairs</h3>
      {db.fairs.map((f) => (
        <div className="card" key={f.id}>
          <h4>{f.title}</h4>
          <p>Date: {f.date}</p>
          <p>Registrations: {f.registrations.length}</p>
        </div>
      ))}
    </div>
  );
}

// ----- Main App -----
export default function App() {
  const [user, setUser] = useState(getCurrentUser());

  const handleLogout = () => { logoutUser(); setUser(null); };

  return (
    <div>
      <Header user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/auth" element={user ? <Navigate to="/" /> : <AuthPage setUser={setUser} />} />
        <Route path="/" element={user ? <Home /> : <Navigate to="/auth" />} />
        <Route path="/fairs" element={user ? <Fairs /> : <Navigate to="/auth" />} />
        <Route path="/fair/:fairId" element={user ? <FairPage /> : <Navigate to="/auth" />} />
        <Route path="/booth/:fairId/:boothId" element={user ? <BoothPage /> : <Navigate to="/auth" />} />
        <Route path="/register/:fairId" element={user ? <Registration /> : <Navigate to="/auth" />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}