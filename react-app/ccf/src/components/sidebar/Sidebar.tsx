import React, { useState } from "react";
import "./Sidebar.css";

interface SidebarProps {
  links: { name: string; path: string }[]; // Accepts an array of link objects as props
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={isCollapsed ? "sidebar collapsed" : "sidebar"}>
      <div className="sidebar-header">
        <button onClick={toggleSidebar} className="toggle-btn">
          {isCollapsed ? ">>>" : "<<<"}
        </button>
      </div>
      {!isCollapsed && (
        <ul className="sidebar-menu">
          {links.map((link, index) => (
            <li key={index} className="sidebar-item">
              {link.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
