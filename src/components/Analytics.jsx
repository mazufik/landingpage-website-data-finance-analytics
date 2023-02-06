import React from 'react';
import dataAnalytics from '../assets/laptop.png';

const Analytics = () => {
  return (
    <div
      id='analytics'
      className='w-full bg-[#d4f0fc] py-16 px-4 text-[#01303f]'
    >
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img
          className='w-[500px] mx-auto my-4'
          src={dataAnalytics}
          alt='Finance Analytics'
        />
        <div className='flex flex-col justify-center'>
          <p className='text-[#02a9f7] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
            dicta voluptatem nemo animi repellendus vero facilis saepe enim
            nulla modi voluptatibus atque maxime quas perspiciatis similique
            repudiandae minus dolorum iure!
          </p>
          <button className='text-[#02a9f7] border border-[#01303f] hover:bg-[#01303f] w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0 hover:scale-95 ease-in duration-300'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
