import { useState } from 'react';
import './ApplicationForm.css';
import Breadcrumb from './Components/Breadcrumbs';
import { useNavigate } from 'react-router-dom';
import Information from './subquestions/Information';
import ApplicationQuestions from './subquestions/ApplicationQuestions';
import Review from './subquestions/Review';
import GrantProposal from './subquestions/GrantProposal';

function ApplicationForm(): JSX.Element {
    const [currentPage, setCurrentPage] = useState(1);
    const pages = ["My Information", "Application Questions", "Grant Proposal", "Review"];
    const totalPages = pages.length;
    const navigate = useNavigate();

    // data we have to send to be displayed in the review page
    const [formData, setFormData] = useState({
      projectTitle: '',
      investigator: '',
      cancers: '',
      institution: '',
      institutionAddress: '',
      institutionPhone: '',
      institutionEmail: '',
      adminName: '',
      adminAddress: '',
      adminPhone: '',
      adminEmail: '',
      published: '',
      paperWIP: '',
      appliedPatent: '',
      includedInfo: '',
      amountRequested: '',
      grantProjDates: '',
      contCurrentFunds: '',
      contCurrentFundsDates: '', // display dates next to "Continuation of Current Funding"?
      file: null
  });

    const goBack = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else {
            navigate('/applicant-dashboard');
        }
    };

    const handleContinue = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handleSubmit = () => {
        console.log('Form submitted!');
    };

      const renderPage = () => {
        switch (currentPage) {
          case 1:
            return <Information formData={formData} setFormData={setFormData} />
          case 2:
            return <ApplicationQuestions formData={formData} setFormData={setFormData}/>
          case 3:
            return <GrantProposal />
          case 4:
            return <Review formData={formData}/>
          default:
            return
        }
      };
    
      return (
        <div className="main-container">
            <h1 className="main-header">
                Research/NextGen Grant
            </h1>
          <Breadcrumb currentPage={currentPage} pages={pages} />

        <h1 className="form-header">
            {pages[currentPage - 1]}
        </h1>
          {renderPage()}
    
          <div className="btn-container">
            <button onClick={goBack} className="back-btn">Go Back</button>
    
            {currentPage < totalPages ? (
              <button onClick={handleContinue} className="save-btn">Save and Continue</button>
            ) : (
              <button onClick={handleSubmit} className="save-btn">Save and Submit</button>
            )}
          </div>
        </div>
      );
    };

export default ApplicationForm;