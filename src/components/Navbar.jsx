import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#d4f0fc]'>
      <h1 className='w-full text-3xl font-bold text-[#02a9f7]'>
        <a href='/'>React.</a>
      </h1>
      <ul className='hidden md:flex'>
        <li className='p-4 hover:text-[#89d6fb] hover:scale-95 transition-all'>
          <a className='animasi-middle' href='/'>
            Home
          </a>
        </li>
        <li className='p-4 hover:text-[#89d6fb] hover:scale-95 transition-all'>
          <a className='animasi-middle' href='/'>
            Company
          </a>
        </li>
        <li className='p-4 hover:text-[#89d6fb] hover:scale-95 transition-all'>
          <a className='animasi-middle' href='/'>
            Resources
          </a>
        </li>
        <li className='p-4 hover:text-[#89d6fb] hover:scale-95 transition-all'>
          <a className='animasi-middle' href='/'>
            About
          </a>
        </li>
        <li className='p-4 hover:text-[#89d6fb] hover:scale-95 transition-all'>
          <a className='animasi-middle' href='/'>
            Contact
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? (
          <AiOutlineClose
            className='hover:text-[#89d6fb] cursor-pointer'
            size={20}
          />
        ) : (
          <AiOutlineMenu
            className='hover:text-[#89d6fb] cursor-pointer'
            size={20}
          />
        )}
      </div>
      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full bg-[#02577a] ease-in-out duration-500'
            : 'fixed left-[-100%] top-0 w-[60%] h-full bg-[#02577a] ease-in-out duration-500'
        }
      >
        <h1 className='w-full text-3xl font-bold text-[#02a9f7] m-4'>
          <a href='/'>React.</a>
        </h1>
        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-gray-400 hover:text-[#89d6fb] hover:scale-95 transition-all'>
            <a href='/'>Home</a>
          </li>
          <li className='p-4 border-b border-gray-400 hover:text-[#89d6fb] hover:scale-95 transition-all'>
            <a href='/'>Company</a>
          </li>
          <li className='p-4 border-b border-gray-400 hover:text-[#89d6fb] hover:scale-95 transition-all'>
            <a href='/'>Resources</a>
          </li>
          <li className='p-4 border-b border-gray-400 hover:text-[#89d6fb] hover:scale-95 transition-all'>
            <a href='/'>About</a>
          </li>
          <li className='p-4 border-b border-gray-400 hover:text-[#89d6fb] hover:scale-95 transition-all'>
            <a href='/'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
