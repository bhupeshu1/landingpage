import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollButton = () => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <div>
      <button
        onClick={scrollUp}
        className='text-white bg-blue-500 rounded-full p-2'
      >
        {' '}
        <ArrowUpwardIcon fontSize='large' />
      </button>
    </div>
  );
};

export default ScrollButton;
