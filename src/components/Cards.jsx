import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';
import { NumericFormat } from 'react-number-format';
import { motion } from 'framer-motion';

const Cards = () => {
  return (
    <div className='w-full bg-[#d4f0fc] py-[10rem] px-4 text-[#01303f]'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img
            className='w-20 mx-auto mt-[-3rem] bg-[#d4f0fc]'
            src={Single}
            alt='Single'
          />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <NumericFormat
            className='text-center text-4xl font-bold'
            value={149}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
          />
          <div className='text-center font-medium'>
            <p className='py-2 border-b border-slate-300 mx-8 mt-8'>
              500 GB Storage
            </p>
            <p className='py-2 border-b border-slate-300 mx-8'>
              1 Granted User
            </p>
            <p className='py-2 border-b border-slate-300 mx-8'>
              Send up to 2 GB
            </p>
          </div>
          <button className='border border-[#02a9f7] hover:bg-[#02a9f7] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:text-[#01303f] hover:scale-95 ease-linear duration-300'>
            Start Trial
          </button>
        </div>
        <div className='w-full bg-[#c4e7f7] shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
          <img
            className='w-20 mx-auto mt-[-3rem] bg-transparent'
            src={Double}
            alt='Double'
          />
          <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
          <NumericFormat
            className='text-center text-4xl font-bold'
            value={265}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
          />
          <div className='text-center font-medium'>
            <p className='py-2 border-b border-slate-300 mx-8 mt-8'>
              1024 GB Storage
            </p>
            <p className='py-2 border-b border-slate-300 mx-8'>
              4 Granted User
            </p>
            <p className='py-2 border-b border-slate-300 mx-8'>
              Send up to 3 GB
            </p>
          </div>
          <button className='bg-[#02a9f7] hover:bg-[#89d6fb] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:text-[#01303f] hover:scale-95 ease-linear duration-300'>
            Start Trial
          </button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img
            className='w-20 mx-auto mt-[-3rem] bg-[#d4f0fc]'
            src={Triple}
            alt='Triple'
          />
          <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
          <NumericFormat
            className='text-center text-4xl font-bold'
            value={299}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
          />
          <div className='text-center font-medium'>
            <p className='py-2 border-b border-slate-300 mx-8 mt-8'>
              2024 GB Storage
            </p>
            <p className='py-2 border-b border-slate-300 mx-8'>
              6 Granted User
            </p>
            <p className='py-2 border-b border-slate-300 mx-8'>
              Send up to 4 GB
            </p>
          </div>
          <button className='border border-[#02a9f7] hover:bg-[#02a9f7] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:text-[#01303f] hover:scale-95 ease-linear duration-300'>
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
