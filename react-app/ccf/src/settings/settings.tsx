import { Link, useNavigate } from "react-router-dom";
import "./CreateAccApplicant.css";
import logo from '../../assets/ccf-logo.png';
import { useEffect, useState } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import {
  getAuth,
  createUserWithEmailAndPassword,
  deleteUser,
} from "firebase/auth";
import { getFirestore, doc, setDoc, deleteDoc } from "firebase/firestore";
import { checkPasswordRequirements } from "../users/userpasswords";

function AccountSettingsPage(): JSX.Element {
    //form inputs
    const [currentPassword, setCurrentPassword] = useState("");
    const [pwd, setPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
  
    //password reqs
    const [specialChar, setSpecialChar] = useState(false);
    const [capitalLetter, setCapitalLetter] = useState(false);
    const [number, setNumber] = useState(false);
    const [showReqs, setShowReqs] = useState(false);
    const [pwdUnmatched, setPwdUnmatched] = useState(false);

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
        let user = null;

    };
    
    return(
        <div>

        </div>
    );
}  
