import React from "react";
import "./AdminFormPage.css";

export default function AdminDashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">Ready Dashboard</div>
        <div className="user-info">
          <img src="https://i.pravatar.cc/40" alt="avatar" className="avatar" />
          <div>
            <div className="user-name">Hizrian</div>
            <div className="user-role">Administrator</div>
          </div>
        </div>
        <nav className="nav-links">
          <div className="nav-item">Dashboard</div>
          <div className="nav-item">Components</div>
          <div className="nav-item active">Forms</div>
          <div className="nav-item">Tables</div>
          <div className="nav-item">Notifications</div>
          <div className="nav-item">Typography</div>
          <div className="nav-item">Icons</div>
        </nav>
        <button className="upgrade-btn">Update To Pro</button>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <div className="top-bar">
          <input type="text" placeholder="Search ..." className="search-bar" />
          <div className="top-icons">
            <span className="icon">📧</span>
            <span className="icon notification">
              🔔<span className="badge">3</span>
            </span>
            <img src="https://i.pravatar.cc/30" alt="avatar" className="avatar-small" />
          </div>
        </div>

        <h1 className="page-title">Forms</h1>
        <div className="form-grid">
          {/* Base Form Control */}
          <div className="form-card">
            <h2 className="form-title">Base Form Control</h2>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter Email" />
              <p className="note">We'll never share your email with anyone else.</p>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <label>Inline Input</label>
              <input type="text" placeholder="Enter Input" />
            </div>
            <div className="form-group">
              <label>Success Input</label>
              <input type="text" className="success" value="Success" />
            </div>
            <div className="form-group">
              <label>Error Input</label>
              <input type="text" className="error" value="Error" />
            </div>
          </div>

          {/* Form Control Styles */}
          <div className="form-card">
            <h2 className="form-title">Form Control Styles</h2>
            <div className="form-group">
              <label>Square Input</label>
              <input type="text" className="square" placeholder="Square Input" />
            </div>
            <div className="form-group">
              <label>Square Select</label>
              <select className="square">
                <option>1</option>
              </select>
            </div>
            <div className="form-group">
              <label>Pill Input</label>
              <input type="text" className="pill" placeholder="Pill Input" />
            </div>
            <div className="form-group">
              <label>Pill Select</label>
              <select className="pill">
                <option>1</option>
              </select>
            </div>
            <div className="form-group">
              <label>Solid Input</label>
              <input type="text" className="solid" placeholder="Solid Input" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
