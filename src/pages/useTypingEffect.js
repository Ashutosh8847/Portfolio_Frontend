import { useState, useEffect } from 'react';

const useTypingEffect = (phrases, speed) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      console.log("----------current Phrase------------",currentPhrase)

        // Determine the updated text based on whether we are deleting or typing
      const updatedText = isDeleting
        ? currentPhrase.substring(0, charIndex - 1)
        : currentPhrase.substring(0, charIndex + 1);

      console.log("--------updated text------",updatedText)

      setDisplayedText(updatedText);
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);
      
       // Check if the current phrase has been fully typed out
      if (!isDeleting && updatedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setCharIndex(0);
      }
    };

    const typingSpeed = isDeleting ? speed / 2 : speed;
    console.log("---------typing Speed----------",typingSpeed)
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phrases, speed, currentPhraseIndex]);

  return displayedText;
};

export default useTypingEffect;
