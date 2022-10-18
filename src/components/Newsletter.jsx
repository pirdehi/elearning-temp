import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4  drop-shadow-2xl'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 border border-slate-700 p-10 rounded-3xl'>
        <div className='my-4 '>

          <p className='text-right'>
            ما به حریم شخصی شما احترام میگذاریم و اطلاعات شما محفوظ است.
            {' '}
            <span className='text-[#2da8d8ff]'> سياست حفظ حريم خصوصی</span>
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-between w-full '>
            <button className='bg-[#2da8d8ff] text-black rounded-md font-medium w-[260px] mr-5 my-6 px-6 py-3'>
              دریافت خبرنامه
            </button>
            <input
              className='p-3 flex w-full rounded-md text-black text-right'
              type='email'
              placeholder='ایمیل خود را وارد کنید'
              
            />
          
          </div>

        </div>

        <div className='lg:col-span-2 m-8 justify-self-end'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 justify-self-end'>
          از آخرین رویدادهای ما با خبر شوید
          </h1>
          <p>با عضویت در خبرنامه از آخرین اخبار حوزه تکنولوژی و برنامه نویسی با خبر شوید</p>
        </div>

      </div>
    </div>
  );
};

export default Newsletter;
