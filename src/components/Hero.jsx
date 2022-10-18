import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#2da8d8ff] font-bold p-2'>
          ورود به دنیای حرفه ای برنامه نویسی
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        ...همین امروز شروع کن
        </h1>
        <div className='flex justify-center items-center'>
        
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-thin md:pl-4 p-7'
            strings={['اصولی', 'حرفه ای', 'پروژه محور ']}
            typeSpeed={80}
            backSpeed={10}
            loop
          />
            <p className='md:text-5xl sm:text-4xl text-xl font-thin py-4'>یاد گیری برنامه نویسی </p>
            
          
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>از یادگیری اصولی مفاهیم برنامه نویسی تا ورود به بازار کار</p>
        <div className='m-4 p-4'>
        <button className='bg-[#2da8d8ff] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black mx-4'>آخرین آموزش ها</button>
        <button className='bg-[#2da8d8ff] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black mx-4'>  دریافت مشاوره</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
