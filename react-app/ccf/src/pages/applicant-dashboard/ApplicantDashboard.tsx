import "./ApplicantDashboard.css";
import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp, FaFileAlt, FaArrowRight } from "react-icons/fa";
import logo from "../assets/ccf-logo.png";
import Email from "../assets/mail.png";
import Phone from "../assets/call.png";

interface FAQ {
    question: string;
    answer: string;
}

interface ApplicantDashboardProps {
    faqData: FAQ[];
    email: string;
    phone: string;
    hours: string;
}

function ApplicantDashboard({ faqData, email, phone, hours }: ApplicantDashboardProps): JSX.Element {
    const [isApplicationCollapsed, setApplicationCollapsed] = useState(false);
    const [isFAQCollapsed, setFAQCollapsed] = useState(true);
    const [isContactCollapsed, setContactCollapsed] = useState(true);
    const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

    const toggleApplication = () => setApplicationCollapsed(!isApplicationCollapsed);
    const toggleFAQ = () => setFAQCollapsed(!isFAQCollapsed);
    const toggleContact = () => setContactCollapsed(!isContactCollapsed);

    const handleQuestionClick = (index: number) => {
        setOpenFAQIndex(openFAQIndex === index ? null : index);
    };

    const [completedApplications, setCompletedApplications] = useState<any[]>([]);
    const [inProgressApplications, setInProgressApplications] = useState<any[]>([]);

    useEffect(() => {
        setCompletedApplications([{ "applicationType": "NextGen", "status": "FUNDED" }, { "applicationType": "Research Grant", "status": "NOT FUNDED" }]);
        setInProgressApplications([{ "applicationType": "Research Grant", "status": "SUBMITTED: MAY 5, 2024" }]);
    }, []);

    return (
        <div className="ApplicantDashboard">
            <div className="ApplicantDashboard-header-container">
                <img src={logo} className="ApplicantDashboard-logo" alt="logo" />
                <h1 className="ApplicantDashboard-header">
                    Applicant Dashboard
                </h1>
            </div>

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
                                                <FaArrowRight className="application-status-icon" />
                                            </div>
                                        </div>
                                    ))}
                                    <hr className="red-line" />
                                </>
                            )}

                            {completedApplications && Object.keys(completedApplications).length > 0 && (
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
                                                <FaArrowRight className="application-status-icon" />
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
                        </div>
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
                        <div className="faq-content-wrapper">
                            {faqData.map((faq, index) => (
                                <div key={index} className="faq-item">
                                    <button
                                        className={`faq-question ${openFAQIndex === index ? "open" : ""}`}
                                        onClick={() => handleQuestionClick(index)}
                                    >
                                        <div className="question-content">
                                            <FaFileAlt className="question-icon" />
                                            <span className="question-text">{faq.question}</span>
                                        </div>
                                    </button>
                                    {openFAQIndex === index && (
                                        <div className="faq-answer">
                                            <p>{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
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
                        <div className="contact-box">
                            <div className="contact-method">
                                <div className="contact-method-header">
                                    <img src={Email} alt="Email Icon" className="contact-icon" />
                                    <h2 className="contact-method-title">Email Support</h2>
                                </div>
                                <p className="contact-text">Email us and we'll get back to you as soon as possible.</p>
                                <a href={`mailto:${email}`} className="contact-link">
                                    {email}
                                </a>
                            </div>

                            <div className="contact-method">
                                <div className="contact-method-header">
                                    <img src={Phone} alt="Phone Icon" className="contact-icon" />
                                    <h2 className="contact-method-title">Call Support</h2>
                                </div>
                                <p className="contact-text">Call us and we'll get back to you as soon as possible.</p>
                                <a href={`tel:${phone}`} className="contact-link">
                                    {phone}
                                </a>
                                <p className="contact-hours">{hours}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ApplicantDashboard;