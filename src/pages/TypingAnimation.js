import React from 'react';
import useTypingEffect from './useTypingEffect';

const TypingAnimation = () => {
  const phrases = [
    'Software Developer.',
    'Conversational GenAI Chatbot Developer.',
  ];
  const displayedText = useTypingEffect(phrases, 150);

  return (
    <div>
      <h3>
      <p className="typing-text" style ={{ fontFamily: "times new roman" }}>I am a <b>{displayedText}</b> </p>
        <span className="cursor"></span>
      </h3>
    </div>
  );
};

export default TypingAnimation;
