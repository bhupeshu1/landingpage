import React from 'react';
import backgroundImage from './common/images/background.png';
import Header from './components/Header';

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
        <div className='flex items-center justify-center'>
          
          <div className='bg-[#EEEEEE]'>
          asdjkasj
          asdjkad
          asdnaskj
          asdaj
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default App;
