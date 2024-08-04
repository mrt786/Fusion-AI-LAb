import React, { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAnswers = [
    {
      question: 'What does Fusion AI Lab specialize in?',
      answer:
        'Fusion AI Lab is a leading IT company focused on Web 3.0 services, including AI, blockchain, and metaverse development. They also excel in Web 2.0 services, such as web and app development, along with marketing services.',
    },
    {
      question: 'How can Fusion AI Lab assist businesses in transitioning from Web 2.0 to Web 3.0?',
      answer:
        'Fusion AI Lab seamlessly guides businesses through the transition from traditional Web 2.0 to advanced Web 3.0 technologies. Their expertise ensures a smooth evolution, integrating AI, blockchain, and metaverse solutions.',
    },
    {
      question: "What sets Fusion AI Lab's AI development services apart?",
      answer:
        'Fusion AI Lab\'s AI services are tailored to enhance business operations and customer experiences. Discover how their approach to artificial intelligence can bring tangible benefits to businesses of all sizes.',
    },
    {
      question: 'Does Fusion AI Lab offer ongoing support and maintenance for the solutions they develop?',
      answer:
        'Yes, Fusion AI Lab provides comprehensive support and maintenance services to ensure the smooth functioning and optimal performance of the solutions they deliver. Whether it\'s troubleshooting issues, implementing updates, or scaling the solutions as businesses grow, Fusion AI Lab\'s dedicated support team is committed to providing timely assistance and ensuring client satisfaction.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="relative max-w-2xl mx-auto my-8 p-4">
      <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none">
        <h1 className="text-9xl  font-bold text-gray-500 transform scale-110">FAQ's</h1>
      </div>
      {questionsAnswers.map((item, index) => (
        <div
          key={index}
          className="relative border-b border-gray-300 py-4 cursor-pointer transition-all duration-300 z-10"
          onClick={() => toggleFAQ(index)}
        >
          <div className="flex justify-between items-center hover:bg-gray-100 p-3 rounded-md">
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <span className="text-2xl font-bold text-gray-600">
              {activeIndex === index ? '-' : '+'}
            </span>
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              activeIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <p className="mt-2 text-gray-600 bg-gray-50 p-3 rounded-md">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
