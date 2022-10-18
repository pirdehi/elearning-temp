import React from 'react';
import {
  FaLinkedinIn,
  FaGithubSquare,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 drop-shadow-2xl'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#2da8d8ff] m-4'>DevOmid</h1>
          <div className='flex'>
            <div className='w-[100px] h-[100px] bg-slate-400 mx-4'></div>
            <div className='w-[100px] h-[100px] bg-slate-400'></div>
          </div>
        <div className='flex  md:w-[75%] my-6 px-4 mx-4'>
            <FaTwitterSquare size={30} className='mx-4' />
            <FaGithubSquare size={30} className='mx-4'/>
            <FaLinkedinIn size={30} className='mx-4' />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <ul className='text-center'>
            <li className='py-2 text-sm'>اطاعات اقتصادی</li>
            <li className='py-2 text-sm'>سیاست ها</li>
            <li className='py-2 text-sm'>قوانین</li>
        </ul>
    </div>
    <div>
        <ul className='text-center'>
            <li className='py-2 text-sm'>اطاعات اقتصادی</li>
            <li className='py-2 text-sm'>سیاست ها</li>
            <li className='py-2 text-sm'>قوانین</li>
        </ul>
    </div>
    <div>
        <ul className='text-center'>
            <li className='py-2 text-sm'>اطاعات اقتصادی</li>
            <li className='py-2 text-sm'>سیاست ها</li>
            <li className='py-2 text-sm'>قوانین</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
