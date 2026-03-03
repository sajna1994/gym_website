import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = ({ question, answer }) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  return (
    <article 
      className='faq' 
      onClick={() => setIsAnswerShowing(prev => !prev)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsAnswerShowing(prev => !prev);
        }
      }}
    >
      <div>
        <h4>{question}</h4>
        <button className='faq__icon' aria-label={isAnswerShowing ? "Collapse answer" : "Expand answer"}>
          {isAnswerShowing ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {isAnswerShowing && <p>{answer}</p>}
    </article>
  );
};

export default FAQ;