import React from "react";
import "./all-applications.css";

const AllApplications = () => {
  const applications = [
    { type: "Application Type", name: "Institution Name 1" },
    { type: "Application Type", name: "Institution Name 2" },
    { type: "Application Type", name: "Institution Name 3" },
    { type: "Application Type", name: "Institution Name 4" },
  ];

  return (
    <div className="all-applications-container">
      <div className="header">
        <img src="/ccflogo.png" className="logo" alt="Logo" />
        <h1 className="title">All Applications</h1>
      </div>

      <div className="content">
        <div className="cycle-container">
          <h2>ALL APPLICATIONS FOR 2024 APPLICATION CYCLE:</h2>
          <div className="search-container">
            <input type="text" placeholder="Search" className="search-input" />
          </div>
        </div>

        <div className="applications-list">
          {applications.map((app, index) => (
            <div className="application-card" key={index}>
            <div className="application-info">
              <img src="/application.png" className="application-image" alt="Application" />
              <div className="application-type">
                {app.type}
                <br />
                {app.name}
              </div>
            </div>
            <button className="view-button">→</button>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllApplications;
