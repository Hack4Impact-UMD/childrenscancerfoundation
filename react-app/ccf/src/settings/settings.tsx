import { useEffect, useState } from "react";
import { auth } from "../index";
import { checkPasswordRequirements } from "../users/userpasswords";
import "./Settings.css";
import logo from "../assets/ccf-logo.png";
import Sidebar from "../sidebar/Sidebar";
import { getApplicantUser, editApplicantUser } from "../users/usermanager";
import { changePassword } from "../users/userpasswords";
import { loginUser } from "../users/auth_login";
function AccountSettingsPage(): JSX.Element {
  // authentication information
  const [username, setUsername] = useState<string | null>(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  // password requirements
  const [specialChar, setSpecialChar] = useState(false);
  const [capitalLetter, setCapitalLetter] = useState(false);
  const [number, setNumber] = useState(false);
  const [showReqs, setShowReqs] = useState(false);
  const [pwdUnmatched, setPwdUnmatched] = useState(false);
  const [currentPasswordMatched, setCurrentPasswordMatched] = useState(true);

  // personal information
  const [firstName, setFirstName] = useState("first name not found");
  const [lastName, setLastName] = useState("last name not found");
  const [title, setTitle] = useState("title not found");
  const [institution, setInstitution] = useState("institution not found");

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser?.uid) {
        try {
          const user = await getApplicantUser(auth.currentUser.uid);
          setTitle(user?.title || "title not found");
          setFirstName(user?.name.split(" ")[0] || "first name not found");
          setLastName(user?.name.split(" ")[1] || "last name not found");
          setInstitution(
            user?.institutionalAffiliation || "institution not found"
          );
        } catch (error) {
          console.error("Error fetching user data:", error);
          setTitle("title not found");
          setFirstName("first name not found");
          setLastName("last name not found");
          setInstitution("institution not found");
        }
      }
    };
    fetchUserData();
  }, [auth.currentUser]);

  const checkConfirmPwd = () => {
    if (confirmPwd !== "") {
      confirmPwd === pwd ? setPwdUnmatched(false) : setPwdUnmatched(true);
    }
  };

  const handleSubmit = async (e: any) => {
    // don't let user submit if pwd reqs aren't met or current password not confirmed
    e.preventDefault();
    console.log(
      specialChar,
      capitalLetter,
      number,
      showReqs,
      pwdUnmatched,
      currentPasswordMatched
    );
    if (
      !specialChar ||
      !capitalLetter ||
      !number ||
      pwdUnmatched ||
      !currentPasswordMatched
    ) {
      console.log("Failed to submit. One requirement was not met.");
      e.preventDefault();
      return;
    }
    changePassword(pwd);
  };

  return (
    <div className="AccountSettings-page">
      <Sidebar
        links={[
          { name: "Home", path: "/" },
          { name: "Settings", path: "/settings" },
          { name: "Applications", path: "/applicant-dashboard" },
        ]}
      />
      <div className="AccountSettings">
        <div className="AccountSettings-header-container">
          <img src={logo} className="AccountSettings-logo" alt="logo" />
          <h1 className="AccountSettings-header">Account Settings</h1>
        </div>

        <div className="AccountSettings-sections-content">
          <div className="AccountSettings-section">
            <div className="header-title">
              <h2>Personal Information</h2>
            </div>

            <div className="AccountSetting-personal-info">
              <div className="AccountSetting-personal-info-field">
                <label>First Name</label>
                <div className="info-row">
                  <input
                    type="text"
                    className="personal-input-text"
                    value={firstName}
                    onChange={(e) =>
                      editApplicantUser(auth.currentUser?.uid || "", {
                        name: e.target.value + " " + lastName,
                      })
                    }
                  />
                  <span className="edit-icon">✎</span>
                </div>
              </div>
              <div className="AccountSetting-personal-info-field">
                <label>Last Name</label>
                <div className="info-row">
                  <input
                    type="text"
                    className="personal-input-text"
                    value={lastName}
                    onChange={(e) =>
                      editApplicantUser(auth.currentUser?.uid || "", {
                        name: firstName + " " + e.target.value,
                      })
                    }
                  />
                  <span className="edit-icon">✎</span>
                </div>
              </div>
              <div className="AccountSetting-personal-info-field">
                <label>Title</label>
                <div className="info-row">
                  <input
                    type="text"
                    className="personal-input-text"
                    value={title}
                    onChange={(e) =>
                      editApplicantUser(auth.currentUser?.uid || "", {
                        title: e.target.value,
                      })
                    }
                  />
                  <span className="edit-icon">✎</span>
                </div>
              </div>
              <div className="AccountSetting-personal-info-field">
                <label>Institution</label>
                <div className="info-row">
                  <input
                    type="text"
                    className="personal-input-text"
                    value={institution}
                    onChange={(e) =>
                      editApplicantUser(auth.currentUser?.uid || "", {
                        institutionalAffiliation: e.target.value,
                      })
                    }
                  />
                  <span className="edit-icon">✎</span>
                </div>
              </div>
            </div>
          </div>

          <div className="AccountSettings-section">
            <div className="header-title">
              <h2>Account Settings</h2>
            </div>
            <div className="info-row-settings">
              <label>Username</label>
              <span className="username-text">
                {username ? username : "No username available"}
              </span>
            </div>
            <div className="info-row-settings">
              <label>Current Password</label>
              <input
                type="current-password"
                placeholder="Enter current password"
                required
                value={currentPassword}
                onChange={async (e) => {
                  setCurrentPassword(e.target.value);
                  const { error: loginError } = await loginUser(
                    auth.currentUser?.email || "",
                    currentPassword
                  );
                  if (!loginError) setCurrentPasswordMatched(true);
                }}
                onFocus={() => setShowReqs(true)} // Show on focus
                onBlur={() => setShowReqs(false)}
                onKeyUp={checkConfirmPwd}
                className="account-input-text"
              />
              {currentPasswordMatched ? (
                <div className="info-row-settings">
                  <label>New Password</label>
                  <div className="info-row">
                    <input
                      type="password"
                      placeholder="Password1!"
                      required
                      value={pwd}
                      onChange={(e) => {
                        setPwd(e.target.value);
                        const newRequirements = checkPasswordRequirements(
                          e.target.value
                        );
                        setSpecialChar(newRequirements.specialChar);
                        setCapitalLetter(newRequirements.capitalLetter);
                        setNumber(newRequirements.number);
                      }}
                      onFocus={() => setShowReqs(true)} // Show on focus
                      onBlur={() => setShowReqs(false)}
                      onKeyUp={checkConfirmPwd}
                      className="account-input-text"
                    />
                  </div>
                  {showReqs && (
                    <div className="pwd-reqs">
                      <p>Password requires:</p>
                      <label id="checkbox">
                        <input
                          type="checkbox"
                          name="options"
                          value="Yes"
                          checked={specialChar}
                          readOnly
                        />
                        One special character
                      </label>
                      <label id="checkbox">
                        <input
                          type="checkbox"
                          name="options"
                          value="Yes"
                          checked={capitalLetter}
                          readOnly
                        />
                        One capital letter
                      </label>
                      <label id="checkbox">
                        <input
                          type="checkbox"
                          name="options"
                          value="Yes"
                          checked={number}
                          readOnly
                        />
                        One number
                      </label>
                    </div>
                  )}

                  {(!specialChar || !number || !capitalLetter) &&
                    pwd &&
                    !showReqs && (
                      <p className="validation">
                        At least one password requirement was not met
                      </p>
                    )}

                  <label>Confirm Password</label>
                  <div
                    className={
                      !pwdUnmatched
                        ? "confirm-pwd-container"
                        : "confirm-pwd-container-exclaim"
                    }
                  >
                    <input
                      type="password"
                      placeholder="Confirm New Password"
                      required
                      value={confirmPwd}
                      onChange={(e) => setConfirmPwd(e.target.value)}
                      onKeyUp={checkConfirmPwd}
                      className="account-input-text"
                    />
                    {pwdUnmatched && <p id="exclaim">!</p>}
                  </div>

                  {pwdUnmatched && (
                    <p className="validation">Passwords do not match</p>
                  )}
                  <button
                    type="submit"
                    className={
                      !pwd ||
                      (pwd && !confirmPwd) ||
                      !specialChar ||
                      !capitalLetter ||
                      !number ||
                      pwdUnmatched
                        ? "disable-submit"
                        : "signup-btn2"
                    }
                    onClick={handleSubmit}
                    disabled={
                      !firstName ||
                      !lastName ||
                      !pwd ||
                      (pwd && !confirmPwd) ||
                      !specialChar ||
                      !capitalLetter ||
                      !number ||
                      pwdUnmatched
                    }
                  >
                    Change Password
                  </button>
                </div>
              ) : (
                <p className="validation">Current password is incorrect</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AccountSettingsPage;
