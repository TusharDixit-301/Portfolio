import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  const handleScroll = () => {
    const top = componentRef.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0"
      ref={componentRef}
    >
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className} dark:text-light`}
        variants={quote}
        initial="initial"
        animate={isVisible ? 'animate' : 'initial'}
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={word + '-' + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
