import React, { useState, useEffect } from 'react';
import { MdOutlineArrowCircleUp } from 'react-icons/md';
import './backToTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll behavior
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Set up the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="back-to-top">
          <MdOutlineArrowCircleUp size={40} />
        </button>
      )}
    </>
  );
};

export default BackToTop;
