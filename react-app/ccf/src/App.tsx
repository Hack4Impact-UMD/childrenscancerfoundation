import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import './App.css';
import AccountPageApplicants from './pages/create-acc-applicants/CreateAccApplicant';
import AccountPageReviewers from './pages/create-acc-reviewer/CreateAccReviewer';
import ApplicantUsersDashboard from './pages/applicant-dashboard/ApplicantDashboard';
import Sidebar from "./components/sidebar/Sidebar";
import AdminProtectedRoute from './components/Routing/AdminProtectedRoute';
import ApplicantProtectedRoute from './components/Routing/ApplicantProtectedRoute';
import ReviewerProtectedRoute from './components/Routing/ReviewerProtectedRoute';
import CreateAccMenu from './pages/create-acc-menu/CreateAccMenu';

function App(): JSX.Element {
  return (
    <BrowserRouter>
    <Routes>
        <Route
          path="/"
          element={
              <Login></Login>
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
          element={
            <ApplicantProtectedRoute element={<ApplicantUsersDashboard />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;