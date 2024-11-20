import "./ApplicationReview.css";
import logo from "../../assets/ccf-logo.png";
import Sidebar from "../../components/sidebar/Sidebar";
import { useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../..";

function ApplicationReview(): JSX.Element {

    const score = useRef<HTMLInputElement>(null);
    const significanceFeedback = useRef<HTMLInputElement>(null);
    const approachFeedback = useRef<HTMLInputElement>(null);
    const feasibilityFeedback = useRef<HTMLInputElement>(null);
    const investigatorFeedback = useRef<HTMLInputElement>(null);
    const summaryFeedback = useRef<HTMLInputElement>(null);
    const internalFeedback = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
          const reviewData = {
            score: score.current?.value || "",
            significanceFeedback: significanceFeedback.current?.value || "",
            approachFeedback: approachFeedback.current?.value || "",
            feasibilityFeedback: feasibilityFeedback.current?.value || "",
            investigatorFeedback: investigatorFeedback.current?.value || "",
            summaryFeedback: summaryFeedback.current?.value || "",
            internalFeedback: internalFeedback.current?.value || "",
          };

          await addDoc(collection(db, "reviews"), reviewData);
    
        } catch (error) {
          console.error("Error adding document: ", error);
        }
      };
    
  const handleSaveProgress = () => {
    const progressData = {
      score: score.current?.value || "",
      significanceFeedback: significanceFeedback.current?.value || "",
      approachFeedback: approachFeedback.current?.value || "",
      feasibilityFeedback: feasibilityFeedback.current?.value || "",
      investigatorFeedback: investigatorFeedback.current?.value || "",
      summaryFeedback: summaryFeedback.current?.value || "",
      internalFeedback: internalFeedback.current?.value || "",
    };
  };


  return (
    <div className="ApplicationReview-page">
      <Sidebar
        links={[
          { name: "Home", path: "/" },
          { name: "Account Settings", path: "/settings" },
          // TODO: add appropriate path names
          { name: "Assigned Applications", path: "/" },
          { name: "All Applications", path: "/" },

        ]}
      />
      <div className="ApplicationReview">
        <div className="ApplicationReview-header-container">
          <img src={logo} className="ApplicationReview-logo" alt="logo" />
          <h1 className="ApplicationReview-header">Application Review</h1>
        </div>

        <div className="ApplicationReview-sections-content">
          <div className="ApplicationReview-section">
            <div className="ApplicationReview-top-bottom-container">
                <a href="#" className="ApplicationReview-view-application-link">VIEW APPLICATION</a>
                <div>
                    <text className="ApplicationReview-label">Overall score: </text>
                    <text className="ApplicationReview-label-unbold">(1 exceptional - 5 poor quality, unrepairable)</text>
                    <input className="ApplicationReview-enter-score-box" placeholder="Enter score." ref={score}></input>
                </div>
                <text className="ApplicationReview-label">Feedback: </text>
                <text className="ApplicationReview-announcement-text">ALL information inputted (unless otherwise noted) WILL be sent to applicant.</text>
            </div>
            <div>
                <span className="ApplicationReview-category-heading">SIGNIFICANCE: </span>
                <span className="ApplicationReview-category-content">How significant is the childhood cancer problem addressed by this proposal? How will the proposed study add to or enhance the currently available methods to prevent, treat or manage childhood cancer?</span>
            </div>
            <input className="ApplicationReview-feedback-box" placeholder="Enter feedback." ref={significanceFeedback}></input>
            <div>
                <span className="ApplicationReview-category-heading">APPROACH: </span>
                <span className="ApplicationReview-category-content">Is the study hypothesis-driven? Is this a novel hypothesis or research question? How well do existing data support the current hypothesis? Are the aims and objectives appropriate for the hypothesis being tested? Are the methodology and evaluation component adequate to provide a convincing test of the hypothesis? Have the applicants adequately accounted for potential confounders? Are there any methodological weaknesses? If there are methodological weaknesses, how may they be corrected? Is the statistical analysis adequate?</span>
            </div>            
            <input className="ApplicationReview-feedback-box" placeholder="Enter feedback." ref={approachFeedback}></input>
            <div>
                <span className="ApplicationReview-category-heading">FEASIBILITY: </span>
                <span className="ApplicationReview-category-content">Comment on how well the research team is to carry out the study. Is it feasible to carry out the project in the proposed location(s)? Can the project be accomplished within the proposed time period?</span>
            </div>    
            <input className="ApplicationReview-feedback-box" placeholder="Enter feedback." ref={feasibilityFeedback}></input>
            <div>
                <span className="ApplicationReview-category-heading">INVESTIGATOR: </span>
                <span className="ApplicationReview-category-content">What has the productivity of the PI been over the past 3 years? If successful, does the track record of the PI indicate that future peer-reviewed funding will allow the project to continue? Are there adequate collaborations for work outside the PI’s expertise?</span>
            </div>
            <input className="ApplicationReview-feedback-box" placeholder="Enter feedback." ref={investigatorFeedback}></input>
            <div>
                <span className="ApplicationReview-category-heading">SUMMARY: </span>
                <span className="ApplicationReview-category-content">Please provide any additional comments that would be helpful to the applicant, such as readability, grantspersonship, etc., especially if the application does not score well.</span>
            </div>
            <input className="ApplicationReview-feedback-box" placeholder="Enter feedback." ref={summaryFeedback}></input>
            <div className="ApplicationReview-top-bottom-container">
                <text className="ApplicationReview-label">Internal Comments: </text>
                <text className="ApplicationReview-announcement-text">This info will not be viewable by the applicant. This information is for the review team ONLY.</text>
                <input className="ApplicationReview-feedback-box" placeholder="Enter Internal Comments." ref={internalFeedback}></input>
            </div>
          </div>
        </div>
        <div className="ApplicationReview-button-row">
            <button className="ApplicationReview-button" onClick={handleSaveProgress}>Save Progress</button>
            <button className="ApplicationReview-button" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ApplicationReview;