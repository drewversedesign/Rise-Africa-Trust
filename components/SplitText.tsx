import React from 'react';

interface SplitTextProps {
  children: string;
  className?: string;
  wordClassName?: string;
}

const SplitText: React.FC<SplitTextProps> = ({ children, className = '', wordClassName = '' }) => {
  const words = children.split(' ');
  
  return (
    <span className={className} aria-label={children}>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <span className={`inline-block ${wordClassName}`}>
            {word}
          </span>
          {index < words.length - 1 && <span className="whitespace-pre"> </span>}
        </React.Fragment>
      ))}
    </span>
  );
};

export default SplitText;