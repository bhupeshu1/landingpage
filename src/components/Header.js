import React from 'react';
import HeaderLogo from '../common/images/logo_image.png';
import LngButton from '../common/images/Language_button.png';

const Header = () => {
  const listData = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Contact', link: '/contact' },
    { name: 'Blog', link: '/blog' },
    { name: 'Careers', link: '/careers' },
    { name: 'Support', link: '/support' },
  ];

  return (
    <div className='w-full h-28 flex items-center justify-between px-8'>
      <div className='flex items-center gap-6'>
        <img src={HeaderLogo} className='cursor-pointer' alt='Company Logo' />
        <div className='border border-[#FFFFFF4D] p-2 rounded-md'>
          <img
            src={LngButton}
            className='w-6 h-6 cursor-pointer'
            alt='Language Button'
          />
        </div>
      </div>
      <div className='flex gap-5 items-center max-md:hidden'>
        <ul className='flex gap-6'>
          {listData.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className='hover:underline text-white font-normal text-sm leading-4'
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button className='bg-[#00DD00] p-2 rounded-full text-[#000000] font-normal text-sm border border-[#00DD00]'>
          Download App
        </button>
      </div>
    </div>
  );
};

export default Header;
