import "./ApplicantDashboard.css";
import { useEffect, useState } from "react";
import {FaArrowDown, FaArrowUp, FaFileAlt, FaArrowRight} from "react-icons/fa";
import logo from "../assets/ccf-logo.png";
import Banner from "../deadline-banner/DeadlineBanner";

function ApplicantUsersDashboard(): JSX.Element {

    const [isApplicationCollapsed, setApplicationCollapsed] = useState(false);
    const [isFAQCollapsed, setFAQCollapsed] = useState(true);
    const [isContactCollapsed, setContactCollapsed] = useState(true);

    const toggleApplication = () => setApplicationCollapsed(!isApplicationCollapsed);
    const toggleFAQ = () => setFAQCollapsed(!isFAQCollapsed);
    const toggleContact = () => setContactCollapsed(!isContactCollapsed);

    const [completedApplications, setCompletedApplications] = useState<any>([]);
    const [inProgressApplications, setInProgressApplications] = useState<any>([]);
    const [deadline, setDeadline] = useState<Date | null>(null);

    useEffect(() => {
        // Fetch data from the backend
        //setCompletedApplications(data);
        //setinProgressApplications(data);
        //setDeadline(data);

        setCompletedApplications([{ "applicationType": "NextGen", "status": "FUNDED" }, { "applicationType": "Research Grant", "status": "NOT FUNDED" }]);
        setInProgressApplications([{ "applicationType": "Research Grant", "status": "SUBMITTED: MAY 5, 2024" }]);
        setDeadline(new Date('2024-12-31T23:59:59'));
    });

    return (
        <div className="ApplicantDashboard">
            <div className="ApplicantDashboard-header-container">
                <img src={logo} className="ApplicantDashboard-logo" alt="logo" />
                <h1 className="ApplicantDashboard-header">
                    Applicant Dashboard
                </h1>
            </div>
            {deadline && <Banner deadline={deadline} />}
            <div className="ApplicantDashboard-sections-content">
                <div className="ApplicantDashboard-section">
                    <div className="ApplicantDashboard-section-header">
                        <div className="header-title">
                            <FaFileAlt className="section-icon" />
                            <h2>Applications</h2>
                        </div>
                        
                        <button onClick={toggleApplication} className="expand-collapse-btn">
                            {isApplicationCollapsed ? <FaArrowDown /> : <FaArrowUp />}
                        </button>
                    </div>
                    
                    
                    {!isApplicationCollapsed && (
                        <div className="ApplicantDashboard-application-box">
                            {inProgressApplications && Object.keys(inProgressApplications).length > 0 && (
                                <>
                                    <h3>IN PROGRESS APPLICATIONS:</h3>
                                    {inProgressApplications.map((application: any, index: number) => (
                                        <div key={index} className="ApplicantDashboard-single-application-box">
                                            <div className="application-info">
                                                <FaFileAlt className="application-icon" />
                                                <p>{application.applicationType}</p>
                                            </div>
                                            <div className="ApplicantDashboard-application-status">
                                                <p>{application.status}</p>
                                                <FaArrowRight className="application-status-icon"/>
                                            </div>
                                        </div>
                                    ))}
                                    <hr className="red-line" />
                                </>
                            )}

                            {completedApplications && Object.keys(completedApplications).length > 0 &&(
                                <>
                                    <h3>COMPLETED APPLICATIONS:</h3>
                                    {completedApplications.map((application: any, index: number) => (
                                        <div key={index} className="ApplicantDashboard-single-application-box">
                                            <div className="application-info">
                                                <FaFileAlt className="application-icon" />
                                                <p>{application.applicationType}</p>
                                            </div>
                                            <div className="ApplicantDashboard-application-status">
                                                <p>{application.status}</p>
                                                <FaArrowRight className="application-status-icon"/>
                                            </div>
                                        </div>
                                    ))}
                                    <hr className="red-line" />
                                </>
                            )}
        
                            <h3>START YOUR APPLICATION:</h3>
                            <div className="ApplicantDashboard-buttons">
                                <button className="application-btn">NextGen</button>
                                <button className="application-btn">Research Grant</button>
                                <button className="application-btn">Non-Research Grant</button>
                            </div>
                        </div >
                    )}
                </div>

                <div className="ApplicantDashboard-section">
                    <div className="ApplicantDashboard-section-header">
                        <div className="header-title">
                            <FaFileAlt className="section-icon" />
                            <h2>Frequently Asked Questions</h2>
                        </div>
                        <button onClick={toggleFAQ} className="expand-collapse-btn">
                            {isFAQCollapsed ? <FaArrowDown /> : <FaArrowUp />}
                        </button>
                    </div>
                    {!isFAQCollapsed && (
                        <ul>
                            <li>Question 1</li>
                            <li>Question 2</li>
                            <li>Question 3</li>
                        </ul>
                    )}
                    
                </div>

                <div className="ApplicantDashboard-section">
                    <div className="ApplicantDashboard-section-header">
                        <div className="header-title">
                            <FaFileAlt className="section-icon" />
                            <h2>Contact Us</h2>
                        </div>
                        <button onClick={toggleContact} className="expand-collapse-btn">
                            {isContactCollapsed ? <FaArrowDown /> : <FaArrowUp />}
                        </button>
                    </div>
                    {!isContactCollapsed && (
                        <ul>
                            <li>Email</li>
                            <li>Phone Number</li>
                            <li>Mailing Address</li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )

};

export default ApplicantUsersDashboard;