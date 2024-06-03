import React, { useState } from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex flex-col justify-center items-center relative w-full ${darkMode ? 'bg-black' : 'bg-gray-800'}`}>
      <div className='flex justify-center items-center w-full'>
        <div className='relative flex justify-end items-center w-full 2xl:w-[1280px]  py-[20px] px-[15px]'>
          <button className=" z-[99] fixed top-[27px] right-[55px] md:right-[18px] flex justify-center items-center gap-1 text-white rounded cursor-pointer " onClick={toggleTheme}> 
            <span>
              {darkMode ? (
                <MdDarkMode size={20} className=' text-gray-800'/>
              ) : (
                <MdOutlineDarkMode size={20} className='text-black'/>
              )} 
            </span>
            <span>
              {darkMode ? (<p className='text-white text-[12px] font-semibold'>gray </p>) : (<p className='text-white text-[12px] font-semibold'>dark</p>)}
            </span>
          </button>
        </div>
      </div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
