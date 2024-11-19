
import "./ApplicationReview.css";
import logo from "../../assets/ccf-logo.png";
import Sidebar from "../../components/sidebar/Sidebar";

function ApplicationReview(): JSX.Element {


  const handleSubmit = async (e: any) => {
    // TODO: submit form and store in firebase
   
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
            <h2>View Application</h2>
            <div>
                <span className="ApplicationReview-category-heading">SIGNIFICANCE: </span>
                <span className="ApplicationReview-category-content">How significant is the childhood cancer problem addressed by this proposal? How will the proposed study add to or enhance the currently available methods to prevent, treat or manage childhood cancer?</span>
            </div>
            <textarea className="ApplicationReview-feedback-box" placeholder="Enter feedback."></textarea>
            <div>
                <span className="ApplicationReview-category-heading">APPROACH: </span>
                <span className="ApplicationReview-category-content">Is the study hypothesis-driven? Is this a novel hypothesis or research question? How well do existing data support the current hypothesis? Are the aims and objectives appropriate for the hypothesis being tested? Are the methodology and evaluation component adequate to provide a convincing test of the hypothesis? Have the applicants adequately accounted for potential confounders? Are there any methodological weaknesses? If there are methodological weaknesses, how may they be corrected? Is the statistical analysis adequate?</span>
            </div>            
            <textarea className="ApplicationReview-feedback-box" placeholder="Enter feedback."></textarea>
            <div>
                <span className="ApplicationReview-category-heading">FEASIBILITY: </span>
                <span className="ApplicationReview-category-content">Comment on how well the research team is to carry out the study. Is it feasible to carry out the project in the proposed location(s)? Can the project be accomplished within the proposed time period?</span>
            </div>    
            <textarea className="ApplicationReview-feedback-box" placeholder="Enter feedback."></textarea>
            <div>
                <span className="ApplicationReview-category-heading">INVESTIGATOR: </span>
                <span className="ApplicationReview-category-content">What has the productivity of the PI been over the past 3 years? If successful, does the track record of the PI indicate that future peer-reviewed funding will allow the project to continue? Are there adequate collaborations for work outside the PI’s expertise?</span>
            </div>
            <textarea className="ApplicationReview-feedback-box" placeholder="Enter feedback."></textarea>
            <div>
                <span className="ApplicationReview-category-heading">SUMMARY: </span>
                <span className="ApplicationReview-category-content">Please provide any additional comments that would be helpful to the applicant, such as readability, grantspersonship, etc., especially if the application does not score well.</span>
            </div>
            <textarea className="ApplicationReview-feedback-box" placeholder="Enter feedback."></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationReview;