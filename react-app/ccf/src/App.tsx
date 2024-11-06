import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FAQPage from './faq_page/FAQPage';
import ApplicantUsersDashboard from './applicant-dashboard/ApplicantDashboard';
import ContactUs from './contact_us_page/ContactPage';

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
        <Route path="/faq" element={<FAQPage faqData={faqData} />} />
        <Route
          path="/contact"
          element={
            <ContactUs 
                email="email@email.com" 
                phone="000-000-0000" 
                hours="Mon - Fri, 9:00AM - 4PM EST" 
              />
          }
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;