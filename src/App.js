import React from 'react';
import backgroundImage from './common/images/background.png';
import Cycle from '../src/common/images/cycleimg.png';
import Header from './components/Header';
import CycleTwo from '../src/common/images/cycle2.png';
import random from '../src/common/images/randomimg.png';
import randomtwo from '../src/common/images/randomtwoimg.png';
import randomthree from './common/images/randomthreeimg.png';
import limeImgaes from './common/images/limeImage01.png';
import EastIcon from '@mui/icons-material/East';
import limeImage from './common/limeImageTwo.png';
import reviseImage from './common/images/recentimage.png';
import locationImage from './common/images/locatonImage.png'

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
      {/*Locations  */}
      <div className='mt-20 text-center'>
        <p className='text-[#00B200] font-medium text-2xl'>Locations</p>
        <p className='font-medium text-3xl p-2'>Our U.S. Cities </p>
      </div>
      {/* image div */}
      <div className='w-full flex justify-center gap-6 flex-wrap mt-3'>
        <div>
          <div className='w-[400px] h-[300px] rounded-md overflow-hidden'>
            <img
              src='https://s3-alpha-sig.figma.com/img/f9f9/8f11/af3c710d12686591080a11f5140178f4?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dyoQ1RGR7NDMZVP4zKHPHBSvffZmS2teIhAjBT2Pag5NABWm2Kn0dyZC0dDwiyFqeyf~oUogJpPKbdICqmeIDrYXvIGX6Dm~qsr~63~OJ1HEZB6AbML3JbQz1dogzgV9PmM9o-M1BFTq2C44QWi7DAT4b~6Z4UuSbd-U7UCdzOlzAXVDurMVuvM~FGmcf6y3BXHQHY2wE0YtTOCGvdtGx8S2wSnqZAMIgiOHNCQCczh2sPKhfJpUe5D7bfFSW07hie0srK91rTNVV7JUDKip0N8YkWpo5GfJAVXG79fOv0XvJQnxbVel0KBnMJKZchJsCEEeSZKSeA2O2S--XaxYYw__'
              alt=''
            />
          </div>
          <p className='w-fit border-b-2 border-black pt-2'>
            New York <EastIcon fontSize='medium' />
          </p>
        </div>
        <div>
          <div className='w-[400px] h-[300px] rounded-md overflow-hidden'>
            <img
              src='https://s3-alpha-sig.figma.com/img/c5e2/0da9/92688bd1303fcab0de4e21b4c44268c8?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iN584co0RBSRp0s30vKjg-TjBlgbHBbFCZyooefwRrmTaKFgrYO~STYMK-SOd5eDi07AJhBNSZ3owO~2Xevfptg-nTsvon-IGDO4JrMmyD81e9htVX4wcEGwchT2XBoTXZ04zN7YIGOhusZN2dRuAO-jmWWOnjV7AmrCK2Rf1Ci139B00HECyu7TjO8k6m-xT1P1Qyw64NK~hFdzGPQlOKUlgwvkl5JPEVlNtl3yvudX-~Hig0JWyuid3VmGIiYeB6pC6c1keQwYBnwFl3ZUDUAFmU2tm5Wn7iPcUZw1VZkFnrFGgy1-flvDsfa~xeO7jgMpQh2tdWW7jQvrFofaNQ__'
              alt=''
            />
          </div>
          <p className='w-fit border-b-2 border-black pt-2'>
            San Francisco <EastIcon fontSize='medium' />
          </p>
        </div>
        <div>
          <div className='w-[400px] h-[300px] rounded-md overflow-hidden '>
            <img
              src='https://s3-alpha-sig.figma.com/img/f2c9/a0df/4384a6db7a4ab38f177f56a2cf12de5e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WlqYOiGszCw7HfhCStGYRCW5gIiHOrRQRLa~cQr9uQmuXdEcK-A6QwkMxrkePMJloSSBpXeVNji8OU2Asv1RjVWxw8k4X6JYRdLYnZNNtheOX3b1BYEUTF4JVttvmp2g9dP~nxFfD46Ty3wg7tld1urHkkYuOn~wMC4X0Er-8WLArZLUkMi3zthArX4aFrUAZpc911RLvSPFCcg4vSgqaKBnt88EwsZ6ckc0Sw0fWc7xPGJsdhYd4JTc0TRs1G8qF4~ABBOHKw1psLfMY14jt5rX4HbBCcWESHwvVv7xSQs61Vb3gxz9bPG-4zLZSbnWYLaCfM8wAaRBXQIjYj~IDQ__'
              alt=''
            />
          </div>

          <p className='w-fit border-b-2 border-black pt-2'>
            Washington, DC <EastIcon fontSize='medium' />
          </p>
        </div>
      </div>
      {/* Why Lime div */}
      <div className='mb-10'>
        <div className='mt-20 text-center'>
          <p className='text-[#00B200] font-medium text-2xl'>Why Lime</p>
          <p className='font-medium text-3xl p-2'>Our Core Principles </p>
        </div>
        <div className='w-full flex justify-center gap-6 flex-wrap mt-3'>
          <div>
            <div className='w-[400px] h-[300px] rounded-md overflow-hidden'>
              <img
                src='https://s3-alpha-sig.figma.com/img/7dd3/8912/13b0be14e1d4d09996c68fefc1b5af4b?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QMenXcBr-m61JDOf1TYqHeT5FfGmHvXZ727m~vkuruKFZX-KVSmmxRtHKOY6e9DGhiMUxZHvcSGRmRJMfmyBglUMHwVK3jBhRKp5Ev~h-owsLOV~ACZgkDqCoblt45-VZxLMblRZkgUY2yatxGwwB4lh~gvAB4nvIuXCNLbgmpMWHcu-T2sH9yxSSQHJJMMnC63O08fxqIMunpNtl91hwQIqZ2O3mtQB7e7P58X-ifF-Rz3EgjZoh7pPty3dyX8w3UkpYv3x7MWjpmLlIAMq4MFOkJpNDnCT2gIK2F3xQ~5FEe~jboK1VtmK3a4bEVBGKyvthLzSPtvmcR5S7wMmlQ__'
                alt=''
              />
            </div>
            <p className='w-fit border-b-2 border-black pt-2'>
              Safety <EastIcon fontSize='medium' />
            </p>
          </div>
          <div>
            <div className='w-[400px] h-[300px] rounded-md overflow-hidden'>
              <img
                src='https://s3-alpha-sig.figma.com/img/c9db/63c4/3afa9b51725318b56916fd9832fbd4f1?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mgxaHiEfAXWbolS4g8kLN8G3y2Fx6~wHkAYMVmHhcWcJrEKywcT4twTUJ8ZczZyuuPEthOFy8uZ9Z-2p~gYmg1ZHZUMLkj5qGQ-Oi4~K2xqDdzeriyXlNelKjF20EfLtAskStjif2ahNV3YpVRiHgnL54rWsduwkXWadSfkpnWnPmNlap1obQMHbqIRqtXS~Nh9gyMFFod-1HQJTs7dytiyBdm2vKx6AVgnrlb~U6lA2le6XuelGP6Uagv6cHomaRyEkPgSEisLj8BxGa7d6Jd6O5~AN3YqxTOFok4XzwjXzAnyVUgGn~VRgSTOZYfpvjFlOhDeY9HBH-QJ9zcMv4g__'
                alt=''
              />
            </div>
            <p className='w-fit border-b-2 border-black pt-2'>
              Sustainability <EastIcon fontSize='medium' />
            </p>
          </div>
          <div>
            <div className='w-[400px] h-[300px] rounded-md overflow-hidden '>
              <img
                src='https://s3-alpha-sig.figma.com/img/d983/42b4/af5b89f38e183499a191e2fc48aeed0e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SeQYRxK~xbrOnNeY7IRAbw7PWWn-oOjL0oR5CHIcOFgMxBLStg8CmRTel0IbjZfFRvpHEX2KvKR9AReJUnELDPkcm7Jpc7Agt7eayxT~hFsY8iJCkwDBTYfQtp-VtQVaVIkuTMPAgDv5RqS5D7MjGfw6z9vQ1CeP2NL~x~bjI7spmKE7Fs4TduPauNCeyG2GoQfpaSqWUj3eR3tc3draCx256CTgDqJEVdqohPVL~p5MXthjolUbpJp~AWFNf2gzC1JYfJtIHTURTzXu9VuhLWEwzc6GCIvunGMRYWvIKZEAi3-bQCaM-NiLYTEVYevn0W9xjwP2DWVS9ZwXOLjAJw__'
                alt=''
              />
            </div>

            <p className='w-fit border-b-2 border-black pt-2'>
              Community <EastIcon fontSize='medium' />
            </p>
          </div>
        </div>
      </div>
      {/* lime div */}
      <div className='bg-[#1E1E1E] w-full h-auto mt-10 pb-5'>
        <div className='text-center pt-10'>
          <p className='text-[#00B200] font-medium text-2xl'>Lime Times Blog</p>
          <p className='font-medium text-3xl p-1 text-white'>
            Our Latest News{' '}
          </p>
        </div>
        <div className='w-full flex justify-center gap-6 flex-wrap mt-3'>
          <div>
            <div className='w-[400px] h-[300px] rounded-md overflow-hidden'>
              {/* <img src={limeImgaes} alt='' /> */}
              <img src={limeImage} alt='df' />
            </div>
            <p className='w-fit border-b-2 border-black pt-2 text-[#00DD00]'>
              Sustainability
            </p>
            <p className='text-white w-[400px]'>
              With Our Industry-Leading Net-Zero Target Validated Our Hard Work
              Continues
            </p>
          </div>
          <div>
            <div className='w-[400px] h-[300px] rounded-md overflow-hidden'>
              <img src={limeImage} alt='df' />
            </div>
            <p className='w-fit border-b-2 border-black pt-2 text-white'>
              Hero of the Month: Respire
            </p>
          </div>
          <div>
            <div className='w-[400px] h-[300px] rounded-md overflow-hidden '>
              <img src={limeImage} alt='df' />
            </div>

            <p className='w-fit border-b-2 border-black pt-2 text-white'>
              Lime Recaps 2023 With Its Annual ​‘Ride Replay’
            </p>
          </div>
        </div>
        <div className='w-full flex justify-center gap-6 flex-wrap mt-3'>
          <div className='w-[400px] h-auto text-white'>
            by Andrew Savage | January 16, 2024
          </div>
          <div className='w-[400px] h-auto text-white'>
            {' '}
            January 10, 2024
          </div>
          <div className='w-[400px] h-auto text-white'>
            December 13, 2023
          </div>
          
        </div>
        <div className='w-full flex justify-center items-center mt-10'>
          <button className='bg-[#00DD00] text-black rounded-full p-4'>
            View More
          </button>
        </div>
        
      </div>
      {/* play store div */}
      <div className='w-full h-auto bg-[#1A1A1A] flex items-center justify-center'>
        <div> 
          <img src={locationImage} alt="" />
        </div>
        <div></div>


      </div>
    </div>
  );
};

export default App;
