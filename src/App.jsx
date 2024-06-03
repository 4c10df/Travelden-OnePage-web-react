import React, { useState } from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex flex-col justify-center items-center relative w-full ${darkMode ? 'bg-black' : 'bg-gray-800'}`}>
      <Header />
      <Main />
      <div className="relative flex flex-col justify-start items-start w-full 2xl:w-[1280px] px-[15px] at500:px-[20px] md:px-[80px]">
        <button
          className="relative top-[19px] left-2 text-white butt rounded cursor-pointer"
          onClick={toggleTheme}
        >
          <span className="text-white text-[17px] leading-4 font-normal capitalize">
            {darkMode ? 'gray mode' : 'dark mode'}
          </span>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
