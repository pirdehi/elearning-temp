import React from 'react';
import Developer from '../assets/developer.png';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4 drop-shadow-2xl'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        
        <div className='flex flex-col justify-center items-center'>
          <p className='text-[#2da8d8ff] font-bold '> ...وقتی که منتورها کنار تو هستن </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>مسیر یادگیری مشخص و هدفمند</h1>
          <p className='text-right'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-black  text-[#2da8d8ff] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'> دریافت مشاوره</button>
        </div>
        <img className='w-[500px] mx-auto my-4' src={Developer} alt='/' />
      </div>
    </div>
  );
};

export default Analytics;
