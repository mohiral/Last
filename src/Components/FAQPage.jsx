import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: 'What documents do I need to rent a car?',
      answer:
        'To rent a car, you need a valid driver’s license, a credit card for the deposit, and a form of ID such as a passport or national ID card.',
    },
    {
      question: 'What is the minimum age to rent a car?',
      answer:
        'The minimum age requirement is usually 21 years old, but this may vary depending on the type of vehicle and local regulations. Some cars may require you to be 25 or older.',
    },
    {
      question: 'Can I rent a car without a credit card?',
      answer:
        'In most cases, a credit card is required for the security deposit. However, some rental companies may accept debit cards or cash deposits under special conditions.',
    },
    {
      question: 'Is insurance included in the rental price?',
      answer:
        'Basic insurance is usually included in the rental price, but you may opt for additional coverage such as collision damage waiver (CDW) or theft protection for more comprehensive protection.',
    },
    {
      question: 'Can I rent a car for someone else?',
      answer:
        'Yes, you can rent a car for someone else as long as the driver meets the rental company’s requirements, and you include them as an additional driver in the rental agreement.',
    },
    {
      question: 'What happens if I return the car late?',
      answer:
        'If you return the car late, you may be charged for an extra day or an additional fee depending on the rental companys policy. Be sure to review the terms and conditions for late returns.',
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" bg-gradient-to-r from-indigo-600 to-purple-500 min-h-screen p-6 w-full max-w-lg mx-auto ">
      <div className="bg-indigo-700 text-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold">Frequently Asked Questions</h1>
        <p className="mt-2">Your questions about renting a car, answered.</p>
      </div>

      <div className="mt-6 max-w-2xl mx-auto">
        {questions.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md mb-4">
            <button
              className="w-full p-4 flex justify-between items-center text-left focus:outline-none"
              onClick={() => toggleAnswer(index)}
            >
              <span className="text-lg font-medium">{item.question}</span>
              {activeIndex === index ? (
                <FaChevronUp className="text-indigo-700" />
              ) : (
                <FaChevronDown className="text-indigo-700" />
              )}
            </button>

            {activeIndex === index && (
              <div className="p-4 bg-gray-50 border-t text-gray-700">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
