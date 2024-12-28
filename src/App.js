import React from 'react';
import backgroundImage from './common/images/background.png';
import Cycle from '../src/common/images/cycleimg.png';
import Header from './components/Header';
import CycleTwo from '../src/common/images/cycle2.png';
import random from '../src/common/images/randomimg.png';
import randomtwo from '../src/common/images/randomtwoimg.png';
import randomthree from './common/images/randomthreeimg.png';

const App = () => {
  return (
    <div>
      {/* Top section here */}
      <div
        className='w-full h-[700px] bg-cover bg-center relative'
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Header />
        {/* Centered absolute section */}
        <div className='absolute inset-0 flex flex-col items-center justify-center'>
          <h1 className='font-normal text-7xl text-white leading-10 text-center'>
            Ride Green
          </h1>
          <div className='flex gap-3 mt-5'>
            <button className='px-4 py-2 bg-green-500 text-white rounded'>
              Our Cities
            </button>
            <button className='px-4 py-2 bg-blue-500 text-white rounded'>
              Download the app
            </button>
          </div>
        </div>
      </div>
      {/* vehicles section */}
      <div className='py-10'>
        <div>
          <h1 className='text-[#00B200] font-normal text-xl text-center leading-4'>
            Our Vehicles
          </h1>
          <h1 className='text-4xl font-normal text-[#000000] text-center pt-3'>
            Discover the Gen4
          </h1>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-5 mt-14'>
          <div className='bg-[#EEEEEE] min-w-[413px] max-w-full h-[423px] flex flex-col gap-5 max-md:flex-row items-center justify-center rounded-2xl'>
            <img src={Cycle} alt='vehicle_image'></img>
            <h1>E-Scooter</h1>
          </div>
          <div className='bg-[#EEEEEE] min-w-[413px] max-w-full h-[423px] flex flex-col gap-5 max-md:flex-row items-center justify-center rounded-2xl'>
            <img src={CycleTwo} alt='vehicle' />
            <h1>E-Bike</h1>
          </div>
        </div>
      </div>
      {/* carousel start */}
      <div className='px-20'>
        <div>
          <h1 className='text-[#00B200] text-xl text-center'>The App</h1>
          <h1 className='font-normal text-4xl text-center'>How to Lime</h1>
        </div>
        <div className='flex gap-5 items-center justify-center mt-6 flex-wrap'>
          <div className='min-w-[400px] h-[400px] max-w-[100%]  bg-gray-50 rounded-lg overflow-hidden'>
            <img src={random} alt='box_img_one' />
            <div className='flex justify-between  px-5 py-6 max-md:px-2 max-md:py-2'>
              <h1 className='text-[#00B200] text-xl  font-normal'>Locate</h1>{' '}
              <p className='px-2'>Download the Lime app to find a vehicle.</p>
            </div>
          </div>
          <div className='w-[400px] h-[400px] bg-gray-50 rounded-lg overflow-hidden'>
            <img src={randomtwo} alt='random_two_img' />
            <div className='flex justify-between align-center px-5 py-5'>
              <h1 className='text-[#00B200] text-xl  font-normal'>Scan</h1>{' '}
              <p className='px-2'>
                Scan the QR code on the vehicle to unlock. Learn how to ride
                safely in the app.
              </p>
            </div>
          </div>

          <div className='w-[400px] h-[400px] bg-gray-50 rounded-lg overflow-hidden'>
            <img src={randomthree} alt='random_two_img' />
            <div className='flex justify-between  px-5 py-6'>
              <h1 className='text-[#00B200] text-xl  font-normal'>Ride</h1>{' '}
              <p className='px-2'>
                Follow all traffic rules, stick to the streets and bike lanes
                where legally permitted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
