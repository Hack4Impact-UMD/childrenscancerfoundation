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
        <div>
            {/*<div className="page-title"><h1>Post Grant Results</h1></div>*/}

            <div className="body">

                <h2 className="body-title">Post-Grant Report</h2>

                <div className="section">
                    <h3 className="section-title">In the Post-Grant Report, please submit a 2-3 page Word or PDF file which includes:</h3>
                    <div className="section-body">
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
                </div>

                <div className="section">
                    <h3 className="section-title">Upload File (PDF Format)</h3>
                    <div className="section-body">
                        {/* Click to Upload Button with X option */}
                    </div>
                </div>

                <div className="section">
                    <div className="attestation">
                        <h5 className="attestation-label">Awardee/Principal Investigator:</h5>
                        {/* Free text input (Legal Name) */}
                    </div>
                    <div className="attestation">
                        <h5 className="attestation-label">Institution:</h5>
                        {/* Free text input (Institution Name) */}
                    </div>
                    <div className="attestation">
                        <h5 className="attestation-label">Date:</h5>
                        {/* Date Input (YYYY-MM-DD) */}
                        {/* <Calendar onChange={onDateChange} value={attestationDate} /> */}
                    </div>
                </div>
            </div>

            <div className="submit">
                {/* button to save and submit */}
            </div>
        </div>
    )
};

export default PostGrantReport;