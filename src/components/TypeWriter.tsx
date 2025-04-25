
import { useEffect, useState } from 'react';

interface TypeWriterProps {
  words: string[];
  delay?: number;
}

const TypeWriter = ({ words, delay = 3000 }: TypeWriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const type = () => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        if (currentText.length === currentWord.length) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, delay);
        }
      }
    };

    const typingDelay = isDeleting ? 50 : 150;
    timeout = setTimeout(type, typingDelay);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, delay]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="ml-1 border-r-2 border-primary animate-cursor">|</span>
    </span>
  );
};

export default TypeWriter;
