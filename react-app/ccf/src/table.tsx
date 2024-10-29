import "./Table.css";

const Table = () => {
  // Dummy data for proposals
  const proposals = [
    {
      name: "Proposal 1 Name",
      university: "University/Author Name",
      type: "Type of Proposal",
      reviewed: 1,
      pending: 2,
      status: "Incomplete",
    },
    {
      name: "Proposal 2 Name",
      university: "University/Author Name",
      type: "Type of Proposal",
      reviewed: 4,
      pending: 0,
      status: "Funded",
    },
    {
      name: "Proposal 3 Name",
      university: "University/Author Name",
      type: "Type of Proposal",
      reviewed: 4,
      pending: 0,
      status: "Not Funded",
    },
  ];

  return (
    <div className="proposals-container">
      <header className="proposals-header">
        <h2>PROPOSALS</h2>
        <div className="options">
          <div className="tabs">
            <button className="tab active">ACTIVE</button>
            <button className="tab">ARCHIVE</button>
            <button className="tab">IN PROGRESS</button>
          </div>
          <div className="actions">
            <button className="assign-button">Assign Review</button>
            <input type="text" placeholder="Search" className="search-input" />
            <button className="sort-button">Sort by</button>
          </div>
        </div>
      </header>

      <div className="proposal-list">
        {proposals.map((proposal, index) => (
          <div key={index} className="proposal-item">
            <div className="proposal-info">
              <div className="icon-placeholder"></div>
              <div className="proposal-details">
                <h3>{proposal.name}</h3>
                <p>{proposal.university}</p>
                <p>{proposal.type}</p>
              </div>
            </div>
            <div className="proposal-status">
              <span className="reviewed">Reviewed {proposal.reviewed}</span>
              <span className="pending">Pending {proposal.pending}</span>
              <span
                className={`status ${proposal.status
                  .replace(" ", "-")
                  .toLowerCase()}`}
              >
                {proposal.status}
              </span>
            </div>
            <button className="details-button">→</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
