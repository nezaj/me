import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ text, children, delay = 400 }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="tooltip-container">
      <div
        className="tooltip-trigger"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      <div
        className={`tooltip-content ${isVisible ? 'show' : ''}`}
        style={{ transitionDuration: `${delay}ms` }}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
