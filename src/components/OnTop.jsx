import React from 'react';

const OnTop = () => {
  return (
    <div>
      <a
        id='to-top'
        href='#home'
        className='fixed z-[9999] bottom-4 right-4 p-4 h-14 w-14 bg-[#02a9f7] rounded-full justify-center items-center hover:animate-pulse'
      >
        <span className='block w-5 h-5 border-t-2 border-l-2 rotate-45 mt-2'></span>
      </a>
    </div>
  );
};

export default OnTop;
