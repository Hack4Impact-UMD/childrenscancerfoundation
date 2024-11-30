import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login/login';
import './App.css';
import AccountPageApplicants from './create-acc-pages/create-acc-applicants/CreateAccApplicant';
import AccountPageReviewers from './create-acc-pages/create-acc-reviewer/CreateAccReviewer';
import ApplicantUsersDashboard from './applicant-dashboard/ApplicantDashboard';

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
        {/* Need to change path to create-account after authentication */}
        <Route
          path="/create-account-applicants" 
          element={
            <AccountPageApplicants />
          } 
        />        
        <Route
          path="/applicant-dashboard" 
          element={
            <ApplicantUsersDashboard />
          } 
        />    
        {/* Admin dashboard */}   
        <Route
          path="/admin" 
          element={
            <></>
          } 
        />
        {/* Need to change path to create-account after authentication */}
        <Route
          path="/create-account-reviewers" 
          element={
            <AccountPageReviewers />
          } 
        />
        <Route
          path="/post-grant-report" 
          element={
            <></>
          }
        />         
      </Routes>
    </BrowserRouter>
  );
}

export default App;