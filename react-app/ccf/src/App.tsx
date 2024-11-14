import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import './App.css';
import AccountPageApplicants from './create-acc-pages/create-acc-applicants/CreateAccApplicant';
import AccountPageReviewers from './create-acc-pages/create-acc-reviewer/CreateAccReviewer';
import ApplicantUsersDashboard from './applicant-dashboard/ApplicantDashboard';

import ApplicationForm from './application-form/ApplicationForm';
import NRApplicationForm from './application-form/NRApplicationForm';


import AccountPageApplicants from './pages/create-acc-applicants/CreateAccApplicant';
import AccountPageReviewers from './pages/create-acc-reviewer/CreateAccReviewer';
import ApplicantUsersDashboard from './pages/applicant-dashboard/ApplicantDashboard';


import Sidebar from "./components/sidebar/Sidebar";
import AdminProtectedRoute from './components/Routing/AdminProtectedRoute';
import ApplicantProtectedRoute from './components/Routing/ApplicantProtectedRoute';
import ReviewerProtectedRoute from './components/Routing/ReviewerProtectedRoute';

function App(): JSX.Element {
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
        Need to change path to create-account after authentication
        <Route
          path="/create-account-applicants" 
          element={
            <AccountPageApplicants />
          } 
        />        
        <Route
          path="/applicant-dashboard" 
          element={
            <ApplicantProtectedRoute element={<ApplicantUsersDashboard />} />
          } 
        /> 
        <Route 
  path="/application-form/research"
  element={<ApplicationForm type="Research" />}
/>
<Route 
  path="/application-form/nextgen"
  element={<ApplicationForm type="NextGen" />}
/>
<Route path = "/application-form/nonresearch" element = {<NRApplicationForm/>} />

        {/* Admin dashboard */}
        <Route
          path="/admin" 
          element={
            <></>
          } 
        />
        Need to change path to create-account after authentication
        <Route
          path="/create-account-reviewers" 
          element={
            <AccountPageReviewers />
          } 
        />            
      </Routes>
    </BrowserRouter>
  );
}

export default App;