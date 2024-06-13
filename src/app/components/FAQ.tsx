'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: "How do I book a ride using the app?",
    answer: "To book a ride using the app, simply open the app, enter your destination, and select your ride option."
  },
  {
    question: "Can I schedule a ride in advance?",
    answer: "Yes, you can schedule a ride in advance by selecting the 'Schedule a Ride' option in the app."
  },
  {
    question: "How do I pay for my ride?",
    answer: "You can pay for your ride using a credit card, debit card, or a digital wallet linked to your account."
  },
  {
    question: "What safety measures are in place for passengers?",
    answer: "We have implemented various safety measures including driver background checks, vehicle inspections, and the ability to share your ride details with loved ones."
  }
];

export default function Widget() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 font-onest">
      <h2 className="text-[36px] text-2xl font-bold text-center mb-6">Frequently Asked Questions (FAQs)</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-md">
            <button
              className="w-full flex justify-between items-center p-4 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className='text-[24px] font-bold'>{faq.question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}
