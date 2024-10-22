import { useState } from "react";
import './SubForm.css';

function ApplicationQuestions(): JSX.Element {
    return (
        <div className="form-container">
            <div className="left-container">
                <p>I have included in this Grant Application any paper that I have published on this Grant topic while receiving CCF funding.</p>
                <div className="radio-opts">
                    <input type="radio">
                        Yes
                    </input>
                    <input type="radio">
                        No
                    </input>
                    <input type="radio">
                        N/A
                    </input>
                </div>

                <p>I am in the process of writing a paper on this Grant topic. I agree to give credit to CCF as a funder and will provide a copy of this paper when published.</p>
                <div className="radio-opts">
                    <input type="radio">
                        Yes
                    </input>
                    <input type="radio">
                        No
                    </input>
                    <input type="radio">
                        N/A
                    </input>
                </div>

                <p>I have applied for a Patent for discoveries in my prior years on this Grant topic, funded by CCF.</p>
                <div className="radio-opts">
                    <input type="radio">
                        Yes
                    </input>
                    <input type="radio">
                        No
                    </input>
                    <input type="radio">
                        N/A
                    </input>
                </div>

                <p>I have included information in my Biosketch on current sources of funding, and applications pending for sources of funding for same or similar grants as this Grant Proposal.</p>
                <div className="radio-opts">
                    <input type="radio">
                        Yes
                    </input>
                    <input type="radio">
                        No
                    </input>
                    <input type="radio">
                        N/A
                    </input>
                </div>
            </div>
            <div className="right-container">
                <p className="text-label">Amount Requested*</p>
                <input type="text" placeholder="Enter amount requested" required className="text-input" />

                <p className="text-label">Dates of Grant Project*</p>
                <input type="text" placeholder="Enter amount requested" required className="text-input" />

                <div className="cont-current-funds">
                    <p className="text-label">Continuation of Current Funding: *</p>
                    <input type="radio">
                        Yes
                    </input>
                    <input type="radio">
                        No
                    </input>
                </div>
                <input type="text" placeholder="Enter amount requested" required className="text-input" />

            </div>
        </div>
    )
}

export default ApplicationQuestions;