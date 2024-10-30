import { useState } from "react";
import "./SubForm.css";
import React from "react";

/* Still need to add useState from information*/
function Review(): JSX.Element {
  return (
    <div className="review-form-container">
      <div className="proposal-text">
        <p className="text-label">Title of Project:</p>
        <p className="text-label">Principal Investigator:</p>
        <p className="text-label">Types of Cancers Being Addressed:</p>
        <p className="text-label">Institution:</p>
        <p className="text-label">Address of Institution:</p>
        <p className="text-label">Phone Number:</p>
        <p className="text-label">Email:</p>
        <p className="text-label">Administration Official Name:</p>
        <p className="text-label">Address of Administration Official:</p>
        <p className="text-label">Phone Number:</p>
        <p className="text-label">Email:</p>
        <p className="text-label">I have included in this Grant Application any paper that I have published on this Grant topic while receiving CCF funding:</p>
        <p className="text-label">I am in the process of writing a paper on this Grant topic. I agree to give credit to CCF as a funder and will provide a copy of this paper when published:</p>
        <p className="text-label">I have applied for a Patent for discoveries in my prior years on this Grant topic, funded by CCF:</p>
        <p className="text-label">I have included information in my Biosketch on current sources of funding, and applications pending for sources of funding for same or similar grants as this Grant Proposal.</p>
        <br />
        <br />
        <p className="text-label">Amount Requested:</p>
        <p className="text-label">Dates of Grant Project:</p>
        <p className="text-label">Continuation of Current Funding:</p>
        <p className="text-label">File:</p>
      </div>
    </div>
  );
}

export default Review;
