import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';
import logo from './images/logo.png';

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

 

 
  return (
    <nav className={`fixed top-0 z-[88] ${scrolled ? 'bg-[#F5811E]' : 'bg-none'} flex justify-center items-center w-full`}>
      <div className='relative flex justify-center items-center w-full 2xl:w-[1280px] py-[20px] px-[15px] at500:px-[20px] md:px-[80px]'>

        <div className="relative w-full mx-auto flex md:flex-row justify-between items-start md:items-center">

          <div className="relative flex justify-start items-start w-full text-white text-2xl font-bold mb-2 md:mb-0">
            <a href="#">
              <img src={logo} alt="logo" className="h-8" />
            </a>
          </div>

          <div className='hidden md:flex justify-end items-center space-x-4 w-full'>
            <a href="#travel-card" className="text-white hover:text-gray-400 font-semibold text-[20px] leading-[24px] capitalize">deals</a>
            <a href="http://wa.me/message/S6EJ6JIZTGGFM1" className="text-white hover:text-gray-400 font-semibold text-[20px] leading-[24px] capitalize">contact us</a>
            <a href="#target-section" className="text-white hover:text-gray-400 font-semibold text-[20px] leading-[24px] capitalize">subscribe</a>
          </div>
          

          <div className='md:hidden cursor-pointer z-[999]'>
            {toggle ? (
              <AiOutlineClose onClick={closeMenu} size={30} className='text-white' />
            ) : (
              <HiMenuAlt1 onClick={openMenu} size={30} className='text-white' />
            )}
          </div>
        </div>

        {toggle && (
          <div className="md:hidden absolute top-[73px] transition-all ease-in duration-300 w-full bg-[#F5811E] border-b-white border-b-[3px] border-solid">
            <ul className="flex flex-col justify-start items-start w-full p-[17px] space-y-2">
              <li className='cursor-pointer text-left'>
                <a href="#travel-card" className="text-white hover:text-gray-400 font-semibold text-[20px] leading-[24px] capitalize">deal</a>
              </li>
              <li className='cursor-pointer text-left'>
                <a href="http://wa.me/message/S6EJ6JIZTGGFM1" className="text-white hover:text-gray-400 font-semibold text-[20px] leading-[24px] capitalize">contact us</a>
              </li>
              <li className='cursor-pointer text-left'>
                <a href="#target-section" className="text-white hover:text-gray-400 font-semibold text-[20px] leading-[24px] capitalize">subscribe</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
