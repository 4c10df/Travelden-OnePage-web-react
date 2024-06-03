import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import '../components/contents/styles/_footer.css';



const currentYear = new Date().getFullYear();


function footer() {
  

  return (

    <footer className="h-auto w-full flex justify-center items-center bg-white pt-11">
      <div className="flex flex-col justify-center items-center relative m-auto py-[30px] px-[15px] w-full 2xl:w-[1280px] at500:px-[20px] md:px-[80px]">
     
        <h6 className=' tracking-normal'>
          Subscribe to our  
          <span className="groundText">
          &nbsp;newsletter
          </span>
        </h6>
        <div className="h-auto w-full">
          {/* email */}
          <form action="#" method="get">
              <div className="flex flex-col md:flex-row justify-center items-center gap-5 py-7 w-full h-auto">
                <div className=" flex justify-center items-center pb-[0.25rem] w-full h-auto silver:w-[534.066px] ">
                  <input className="subs-cribe " type="email" placeholder="Enter your email" required/>
                </div>
                <button className="suscrib md:w-[180.009px]" type="submit" value="Subscribe!">Subscribe</button>
              </div>
          </form>

          <div className="flex flex-col smipx:flex-row smipx:justify-center smipx:items-center pt-[-0.25rem] gap-[10px] smipx:gap-2 w-full">
            <a href="#">
              <FaFacebook size={35} className='text-[#102228]' />
            </a>
            <a href="#">
              <FaTwitter size={35} className='text-[#102228]' />
            </a>
            <a href="#">
              < FaInstagram size={35} className='text-[#102228]' />
            </a>
            <a href="#">
              <FaLinkedin size={35} className='text-[#102228]' />
            </a>
            <a href="#">
              <FaYoutube size={35} className='text-[#102228]' />
            </a>
          </div>

          <div className="flex justify-center items-center w-full py-[30px]">
            <hr className="w-full h-[2px] bg-[#C2C2C2]" />                   
          </div>
          <div className="flex justify-center items-center  w-full h-auto">
            <span>Copyright © {currentYear} | All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
   
  )
}

export default footer;
