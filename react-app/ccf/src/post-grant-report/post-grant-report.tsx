import "./post-grant-report.css";
import { useEffect, useState } from "react";
import { writePostGrantReport } from "./post-grant-report-submit";

function PostGrantReport(): JSX.Element {

    type ValuePiece = Date | null;
    type Value = ValuePiece | [ValuePiece, ValuePiece];
    const [calendarVisible, setCalendarVisible] = useState(false);
    const [dateValue, onDateChange] = useState<Value>(new Date());

    const validFreeText = async (
        freeText: String
    ) => {
        return false;
    };

    useEffect(() => {
    });

    return (
        <div className="PostGrantReport">

            <div className="PostGrantReport-header-container">
                <h1 className="PostGrantReport-header">
                    Post Grant Results
                </h1>
            </div>

            <div className="PostGrantReport-sections-content">
                <div className="PostGrantReport-section-box">
                    <h2 className="PostGrantReport-section-title">
                        Post-Grant Report
                    </h2>
                    <div className="PostGrantReport-subsection">
                        <h3 className="header-title">In the Post-Grant Report, please submit a 2-3 page Word or PDF file which includes:</h3>
                        <ol>
                            <li>Research Title</li>
                            <li>Principal Investigator</li>
                            <li>Institution</li>
                            <li>Grant Start and End Dates</li>
                            <li>Initial Research Goal</li>
                            <li>Results/Findings, such as relevant graphs, charts, or images</li>
                            <li>Ongoing/Additional Plans, such as intent for future research using said findings and intent to submit abstracts on funded research to any research publications (crediting funding from CCF)</li>
                        </ol>
                    </div>
                    <div className="PostGrantReport-subsection">
                        <h3 className="header-title">Upload File (PDF Format)</h3>
                        {/* Click to Upload Button with X option */}
                    </div>
                    <div className="PostGrantReport-subsection">
                        <div className="attestation">
                            <div><label className="attestation-label">Awardee/Principal Investigator:</label></div>
                            <input
                                type="text"
                                placeholder="Full Legal Name"
                                id="InvestigatorName"
                                className="attestation-input"
                                required
                            />
                        </div>
                        <div className="attestation">
                            <div><label className="attestation-label">Institution:</label></div>
                            <input
                                type="text"
                                placeholder="Institution Name"
                                id="InstitutionName"
                                className="attestation-input"
                                required
                            />
                        </div>
                        <div className="attestation">
                            <div><label className="attestation-label">Date:</label></div>
                            <input
                                type="date"
                                id="attestationDate"
                                className="attestation-input"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="PostGrantReport-submit">
                    <button className="application-btn">Save Progress</button>
                    <button className="application-btn">Save and Submit</button>
                </div>
            </div>
        </div>
    )
};

export default PostGrantReport;