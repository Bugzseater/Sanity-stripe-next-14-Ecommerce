"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HOME_ROUTE } from '@/constants/routes';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="w-full h-[10px] mb-11 bg-gray-800 fixed shadow-lg z-10">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-white text-3xl font-bold">TechMart</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white space-x-4">
            <li>
              <Link href={HOME_ROUTE}>Home</Link>
            </li>
            <li>
              
              <Link href={HOME_ROUTE}>About</Link>
              
            </li>
            <li>
              
              <Link href={HOME_ROUTE}>Service</Link>
              
            </li>
            <li>

               <Link href={HOME_ROUTE}>Contact</Link>

            </li>

          </ul>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <FaBars className="text-white" size={30} /> : <FaTimes className="text-white" size={30} />}
        </div>
      </div>

      <div className={`md:hidden ${!nav ? 'hidden' : ''} absolute top-0 left-0 w-full bg-gray-800`}>
        <ul className="flex flex-col items-center">
          <li className="py-6 text-2xl">
              <Link onClick={handleClick} href={HOME_ROUTE}>Home</Link>
            </li>
            <li className="py-6 text-2xl">
              
              <Link  onClick={handleClick} href={HOME_ROUTE}>About</Link>
              
            </li>
            <li className="py-6 text-2xl">
              
              <Link onClick={handleClick} href={HOME_ROUTE}>Service</Link>
              
            </li>
            <li className="py-6 text-2xl">

               <Link onClick={handleClick} href={HOME_ROUTE}>Contact</Link>

            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
