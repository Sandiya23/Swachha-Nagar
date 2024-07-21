import React from 'react';
import { Link } from 'react-scroll';
import './navbar.css'; // Ensure the path to the CSS file is correct

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 p-0 m-0 fixed top-0 w-full z-50 py-2">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto px-5 py-1">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <i className="fa-solid fa-truck text-[#009600]"></i>&nbsp; Swachha <span className='text-[#009600]'>Nagar</span>
          </span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center w-10 h-10 justify-center text-sm text-gray-100 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className="w-full md:block md:w-auto flex flex-col justify-center items-center text-center" id="navbar-default">
          <ul className="font-medium flex flex-col md:p-0 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="#home_scroll" smooth={true} duration={100} className="block py-2 px-3 text-gray-900 rounded custom-link" aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="#about_scroll" smooth={true} duration={100} className="block py-2 px-3 text-gray-900 rounded custom-link">About</Link>
            </li>
            <li>
              <Link to="#whatwedo_scroll" smooth={true} duration={100} className="block py-2 px-3 text-gray-900 rounded custom-link">What we do</Link>
            </li>
            
            <li>
              <Link to="#contact_scroll" smooth={true} duration={100} className="block py-2 px-3 text-gray-900 rounded custom-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
