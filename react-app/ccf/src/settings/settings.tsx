import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import {
  getAuth,
  updatePassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc, deleteDoc } from "firebase/firestore";
import { checkPasswordRequirements } from "../users/userpasswords";
import "./Settings.css";
import logo from '../assets/ccf-logo.png';
import Sidebar from "../sidebar/Sidebar";

function AccountSettingsPage(): JSX.Element {
    //form inputs
    const [pwd, setPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
  
    //password reqs
    const [specialChar, setSpecialChar] = useState(false);
    const [capitalLetter, setCapitalLetter] = useState(false);
    const [number, setNumber] = useState(false);
    const [showReqs, setShowReqs] = useState(false);
    const [pwdUnmatched, setPwdUnmatched] = useState(false);


    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Smith");
    const [title, setTitle] = useState("M.D.");
    const [institution, setInstitution] = useState("Institution Name");


    const checkConfirmPwd = () => {
        if (confirmPwd !== "") {
          confirmPwd === pwd ? setPwdUnmatched(false) : setPwdUnmatched(true);
        }
    };

    const handleSubmit = async (e: any) => {
        // don't let user submit if pwd reqs aren't met
        e.preventDefault();
        const functions = getFunctions();
        console.log(specialChar, capitalLetter, number, showReqs, pwdUnmatched);
        if (!specialChar || !capitalLetter || !number || pwdUnmatched) {
          console.log("Failed to submit. One requirement was not met.");
          e.preventDefault();
          return;
        }

        const auth = getAuth();
        const db = getFirestore();
        const user = auth.currentUser;

        if (user) {
            try {
                await updatePassword(user, pwd);
                console.log("Password updated successfully.");
            } catch (error) {
                console.error("Error updating password:", error);
            }
        } else {
            console.log("No user is logged in.");
        }

    };
    
    return (
        <div className="AccountSettings-page">
            <Sidebar links={[
                { name: "Home", path: "/" },
                { name: "Settings", path: "/settings" },
                { name: "Applications", path: "/applicant-dashboard" }
            ]} />
            <div className="AccountSettings">
                <div className="AccountSettings-header-container">
                    <img src={logo} className="AccountSettings-logo" alt="logo" />
                    <h1 className="AccountSettings-header">
                        Account Settings
                    </h1>
                </div>

                <div className="AccountSettings-sections-content">
                    <div className="AccountSettings-section">
                        <div className="header-title">
                            <h2>Personal Information</h2>
                        </div>
                    
                        <div className="AccountSetting-personal-info">
                            <div className="info-row">
                                <label>First Name</label>
                                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                <span className="edit-icon">✎</span>
                            </div>
                            <div className="info-row">
                                <label>Last Name</label>
                                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                <span className="edit-icon">✎</span>
                            </div>
                            <div className="info-row">
                                <label>Title</label>
                                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                                <span className="edit-icon">✎</span>
                            </div>
                            <div className="info-row">
                                <label>Institution</label>
                                <input type="text" value={institution} onChange={(e) => setInstitution(e.target.value)} />
                                <span className="edit-icon">✎</span>
                            </div>
                        </div>      
                    </div>



                    <div className="AccountSettings-section">
                        <div className="header-title">
                             <h2>Account Settings</h2>
                         </div>
                        <div className="info-row">
                            <label>Username</label>
                        </div>
                        <div className="info-row">
                            <label>Password</label>
                        </div>

    
                    </div>

                </div>
            </div>
        </div>
    );
}  
export default AccountSettingsPage;
