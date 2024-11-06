import React, { useState } from "react";
import "./Table.css";

type Proposal = {
  id: number;
  name: string;
  university: string;
  author: string;
  type: string;
  reviewed: number;
  pending: number;
  status: "Incomplete" | "Accepted" | "Rejected";
};

// dummy data
const proposals: Proposal[] = [
  {
    id: 1,
    name: "Proposal 1",
    university: "University A",
    author: "Author A",
    type: "Research",
    reviewed: 3,
    pending: 2,
    status: "Incomplete",
  },
  {
    id: 2,
    name: "Proposal 2",
    university: "University B",
    author: "Author B",
    type: "Development",
    reviewed: 4,
    pending: 1,
    status: "Accepted",
  },
  {
    id: 3,
    name: "Proposal 3",
    university: "University C",
    author: "Author C",
    type: "Research",
    reviewed: 2,
    pending: 3,
    status: "Rejected",
  },
  {
    id: 4,
    name: "Proposal 4",
    university: "University D",
    author: "Author D",
    type: "Research",
    reviewed: 5,
    pending: 0,
    status: "Accepted",
  },
  {
    id: 5,
    name: "Proposal 5",
    university: "University E",
    author: "Author E",
    type: "Development",
    reviewed: 1,
    pending: 4,
    status: "Incomplete",
  },
  {
    id: 6,
    name: "Proposal 6",
    university: "University F",
    author: "Author F",
    type: "Research",
    reviewed: 2,
    pending: 2,
    status: "Rejected",
  },
  {
    id: 7,
    name: "Proposal 7",
    university: "University G",
    author: "Author G",
    type: "Development",
    reviewed: 3,
    pending: 1,
    status: "Incomplete",
  },
  {
    id: 8,
    name: "Proposal 8",
    university: "University H",
    author: "Author H",
    type: "Research",
    reviewed: 1,
    pending: 3,
    status: "Accepted",
  },
  {
    id: 9,
    name: "Proposal 9",
    university: "University I",
    author: "Author I",
    type: "Development",
    reviewed: 5,
    pending: 0,
    status: "Rejected",
  },
  {
    id: 10,
    name: "Proposal 10",
    university: "University J",
    author: "Author J",
    type: "Research",
    reviewed: 2,
    pending: 3,
    status: "Incomplete",
  },
];

const Table: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [view, setView] = useState<"Active" | "Archive">("Active");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="table-container">
      <aside className={`sidebar ${isSidebarOpen ? "open" : "collapsed"}`}>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isSidebarOpen ? "<<<" : ">>>"}
        </button>
        <div className="menu">
          <button className="menu-item">Home</button>
          <button className="menu-item">Proposals</button>
          <button className="menu-item">Reviewers</button>
          <button className="menu-item">All Accounts</button>
          <button className="menu-item">Email Blast</button>
        </div>
      </aside>
      <main className="content">
        <header className="header">
          <div className="logo">Logo</div>
          <h1>Admin Dashboard</h1>
        </header>
        <div className="table-all">
          <div className="table-controls">
            <div className="slider">
              <button
                className={`slider-option ${view === "Active" ? "active" : ""}`}
                onClick={() => setView("Active")}
              >
                Active
              </button>
              <button
                className={`slider-option ${
                  view === "Archive" ? "active" : ""
                }`}
                onClick={() => setView("Archive")}
              >
                Archive
              </button>
            </div>
            <div className="search-sort">
              <div className="search-bar">
                <input type="text" placeholder="Search" className="search-input"/>
                <span className="search-icon">
                <img src={`${process.env.PUBLIC_URL}/searchIcon.png`} alt="img"/>
                </span>
              </div>
              
              <button className="sort-button">Sort by &#8964;</button>
            </div>
          </div>
          <div className="table-content">
            {proposals.map((proposal) => (
              <div key={proposal.id} className="table-row">
                <img src={`${process.env.PUBLIC_URL}/leadingElement.png`} className="leading-element" alt="img"/>
                <div className="proposal-info">
                  <div className="proposal-name">{proposal.name}</div>
                  <div className="proposal-details">
                    {proposal.university}/{proposal.author}
                  </div>
                  <div className="proposal-details">{proposal.type}</div>
                </div>
                <div className="status-info">
                  <div className="reviewed">
                    Reviewed 
                  </div>
                  <div className="reviewed-number">{proposal.reviewed}</div>
                  <div className="pending">Pending</div>
                  <div className="pending-number">{proposal.pending}</div>
                  <div className="status">
                    {proposal.status}
                  </div>
                </div>
                <button className="arrow-button">→</button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Table;
