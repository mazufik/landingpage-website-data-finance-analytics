import React from 'react';
import Typed from 'react-typed';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='text-[#d4f0fc]'
    >
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#02a9f7] font-bold p-2'>
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with data.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible financing for
          </p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold text-[#89d6fb] md:pl-4 pl-2'
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='text-[#89d6fb] md:text-2xl text-xl font-bold'>
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className='border border-[#02a9f7] hover:bg-[#02a9f7] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:text-[#01303f] hover:scale-95 ease-linear duration-300'>
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

export default Hero;
