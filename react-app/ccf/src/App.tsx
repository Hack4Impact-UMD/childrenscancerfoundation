import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicantUsersDashboard from './applicant-dashboard/ApplicantDashboard';
import ReviewerDashboard from './reviewer-dashboard/ReviewerDashboard';

interface FAQItem {
  question: string;
  answer: string;
}

function App(): JSX.Element {
  const faqData: FAQItem[] = [
    {
      question: "This is a question?",
      answer: "This is the answer."
    },
    {
      question: "This is another question?",
      answer: "This is the answer."
    },
    {
      question: "This is another question?",
      answer: "This is the answer."
    }
  ];

  return (
    <BrowserRouter>
      <Routes>
        {/* Default/Login page */}
        <Route
          path="/"
          element={
            <></>
          }
        />
        <Route
          path="/login"
          element={
            <></>
          }
        />
        {/* 404 page */}
        <Route
          path="*"
          element={
            <></>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <></>
          }
        />
        <Route
          path="/create-account"
          element={
            <></>
          }
        />
        <Route
          path="/applicant-dashboard" 
          element={<ApplicantUsersDashboard faqData={faqData} email="email@email.com" phone="000-000-0000" hours="Mon - Fri, 9:00AM - 4PM EST"/>}
        />
        {/* Reviewer dashboard */}
        <Route path="/reviewer-dashboard"  
          element={<ReviewerDashboard faqData={faqData} email="email@email.com" phone="000-000-0000" hours="Mon - Fri, 9:00AM - 4PM EST" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;