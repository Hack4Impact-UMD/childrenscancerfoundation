import "./post-grant-report.css";
import { Calendar } from "react-calendar";
import { useEffect, useState } from "react";
import { writePostGrantReport } from "./post-grant-report-submit";

function PostGrantReport(): JSX.Element {

    // type ValuePiece = Date | null;
    // type Value = ValuePiece | [ValuePiece, ValuePiece];
    // const [attestationDate, onDateChange] = useState<Value>(new Date());

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
                    <div className="PostGrantReport-section">
                        <div className="PostGrantReport-section-header">
                            <div className="header-title">
                                <h2>Post-Grant Report</h2>
                            </div>
                        </div>
                        <div className="PostGrantReport-subsection">
                            <div className="header-title">
                                <h3>In the Post-Grant Report, please submit a 2-3 page Word or PDF file which includes:</h3>
                            </div>
                            <ol>
                                <li>Research Title</li>
                                <li>Principal Investigator</li>
                                <li>Institution</li>
                                <li>Grant Start and End Dates</li>
                                <li>Initial Research Goal</li>
                                <li>Results/Findings - Including relevant graphs, charts, or images</li>
                                <li>Ongoing/Additional Plans - Such as intent for future research using said findings and intent to submit abstracts on funded research to any research publications (crediting funding from CCF)</li>
                            </ol>
                        </div>
                        <div className="PostGrantReport-subsection">
                            <div className="header-title">
                                <h3>Upload File (PDF Format)</h3>
                            </div>
                            {/* Click to Upload Button with X option */}
                        </div>

                        <div className="PostGrantReport-subsection">
                            <div className="attestation">
                                <div className="attestation-label">Awardee/Principal Investigator:</div>
                                {/* Free text input (Legal Name) */}
                            </div>
                            <div className="attestation">
                                <div className="attestation-label">Institution:</div>
                                {/* Free text input (Institution Name) */}
                            </div>
                            <div className="attestation">
                                <div className="attestation-label">Date:</div>
                                {/* Date Input (YYYY-MM-DD) */}
                                {/* <Calendar onChange={onDateChange} value={attestationDate} /> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="submit">
                    {/* button to save and submit */}
                </div>
            </div>
        </div>
    )
};

export default PostGrantReport;