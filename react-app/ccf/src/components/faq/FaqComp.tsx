import React, { useState } from 'react';
import './FAQComponent.css';
import {FAQComponentProps, FAQItem} from "../../types/faqTypes"; // Optional: Add CSS to match the design



const FAQComponent: React.FC<FAQComponentProps> = ({ faqs }) => {
    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question">
            <span role="img" aria-label="icon">
                {/*change icon later*/}
              🙋‍♂️
            </span>{' '}
                        {faq.question}
                    </div>
                    <div className="faq-answer">{faq.answer}</div>
                </div>
            ))}
        </div>
    );
};


export default FAQComponent;
