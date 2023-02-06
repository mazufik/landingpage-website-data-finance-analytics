import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-[#d4f0fc] px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='lg:col-span-2 my-4'
        >
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want tips & tricks optimize your
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='my-4'
        >
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-[#01303f]'
              type='email'
              placeholder='Enter Email'
            />
            <button className='border border-[#d4f0fc] rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 hover:bg-[#d4f0fc] hover:scale-90 hover:text-[#01303f] transition-all'>
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{' '}
            <span className='text-[#02a9f7]'>Privacy Policy.</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Newsletter;
