import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import './App.css';
// import ApplicantUsersDashboard from './applicant-dashboard/ApplicantDashboard';
import ReviewerDashboard from './reviewer-dashboard/ReviewerDashboard';
import CreateAccMenu from "./pages/create-acc-menu/CreateAccMenu";
import AccountPageApplicants from "./pages/create-acc-applicants/CreateAccApplicant";

interface FAQItem {
  question: string;
  answer: string;
}

function ApplicantUsersDashboard(props: { hours: string, phone: string, faqData: FAQItem[], email: string }) {
    return null;
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
        <Route
          path="/"
          element={
              <></>
          }
        />
        <Route
          path="/Login"
          element={
            <Login />
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
          path="/create-account-menu"
          element={
            <CreateAccMenu/>
          }
        />

        {/* Need to change path to create-account after authentication */}
        <Route
          path="/create-account-applicants"
          element={
            <AccountPageApplicants />
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