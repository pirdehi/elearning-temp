import React from 'react';
import Reacttut from './../assets/react01.png'
import Nexttut from './../assets/next01.png'
import JS01 from './../assets/js01.png'
import { TiArrowLeftThick } from 'react-icons/ti';


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-slate-900 drop-shadow-2xl'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

    <div className='w-full shadow-2xl flex flex-col  bg-slate-800 hover:bg-slate-800 duration-300 rounded-lg  '>
        <div className='self-center max-w-[270px] mb-2'>
            <img src={Reacttut} alt='/' className='shadow-lg w-[280px] mt-[-40px] rounded-lg hover:scale-105 duration-300'  />
        </div>
        <div>
            <p className='text-[25px] font-extrabold text-right m-3 text-slate-400'> React آموزش </p>
        </div>
        <div>
            <p className='text-right m-3 text-slate-400'> دوره جامع ری اکت  به شما کمک میکند تا به این کتابخانه از زبان جاوا اسکریپت به صورت کامل مسلط شوید و از آن برای توسعه استفاده کنید</p>
        </div>
        <div className='border border-slate-700 opacity-30'></div> 
        
        <div className='flex items-center  text-slate-400 w-[200px] rounded-md font-medium mx-auto px-6 py-3 mb-2 p-7'>
            <TiArrowLeftThick size={20} className='  m-2' />  
            <p className='p-2 ' >بررسی دوره</p> 
        </div>
    </div>

    <div className='w-full shadow-2xl flex flex-col  bg-slate-800 hover:bg-slate-800 duration-300 rounded-lg  '>
        <div className='self-center max-w-[392px] mb-2'>
            <img src={JS01} alt='/' className='shadow-lg rounded-lg hover:scale-105 duration-300'  />
        </div>
        <div>
            <p className='text-[25px] font-extrabold text-right m-3 text-slate-400'> React آموزش </p>
        </div>
        <div>
            <p className='text-right m-3 text-slate-400'> دوره جامع ری اکت  به شما کمک میکند تا به این کتابخانه از زبان جاوا اسکریپت به صورت کامل مسلط شوید و از آن برای توسعه استفاده کنید</p>
        </div>
        <div className='border border-slate-700 opacity-30'></div> 
        
        <div className='flex items-center  text-slate-400 w-[200px] rounded-md font-medium mx-auto px-6 py-3 mb-2 p-7'>
            <TiArrowLeftThick size={20} className='  m-2' />  
            <p className='p-2 ' >بررسی دوره</p> 
        </div>
    </div>

    <div className='w-full shadow-2xl flex flex-col  bg-slate-800 hover:bg-slate-800 duration-300 rounded-lg border border-slate-600 '>
        <div className='self-center max-w-[360px] mb-2 mt-[20px]'>
            <img src={JS01} alt='/' className='shadow-lg rounded-lg hover:scale-105 duration-300'  />
        </div>
        <div>
            <p className='text-[25px] font-extrabold text-right mt-[30px] m-3 text-slate-400'> React آموزش </p>
        </div>
        <div className='self-center max-w-[360px]'>
            <p className='text-right m-3 text-slate-400'> دوره جامع ری اکت  به شما کمک میکند تا به این کتابخانه از زبان جاوا اسکریپت به صورت کامل مسلط شوید و از آن برای توسعه استفاده کنید</p>
        </div>
        <div className='border border-slate-700 opacity-30'></div> 
        
        <div className='flex items-center  text-slate-400 w-[200px] rounded-md font-medium mx-auto px-6 py-3 mb-2 p-7'>
            <TiArrowLeftThick size={20} className='  m-2' />  
            <p className='p-2 ' >بررسی دوره</p> 
        </div>
    </div>





      </div>
    </div>
  );
};

export default Cards;
