import { useState } from 'react';
import './FAQPage.css';
import logo from "../assets/ccf-logo.png";
import faqImage from "../assets/faqimage.png";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage = ({ faqData }: { faqData: FAQItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleQuestionClick = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-container">
      {/* Sidebar Navigation */}
      <div className="faq-sidebar">
        <nav className="sidebar-nav">
          {['Home', 'Account Settings', 'Applications', 'FAQ', 'Contact'].map((item) => (
            <button
              key={item}
              className={`nav-item ${item === 'FAQ' ? 'active' : ''}`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="faq-main-content">
        <div className="faq-header">
          <div className="faq-header">
            <img src={logo} alt="CCF Logo" className="faq-logo" />
          </div>
          <h1 className="faq-title">Frequently Asked Questions</h1>
        </div>

        <div className="faq-content-wrapper">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${openIndex === index ? 'open' : ''}`}
                onClick={() => handleQuestionClick(index)}
              >
                <div className="question-content">
                  <img
                    src={faqImage}
                    alt="Question Icon"
                    className="question-icon"
                  />
                  <span className="question-text">{faq.question}</span>
                </div>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;