"use client";
import Header from '@/components/Header';
import { MAIN_ROUTE, REGISTER_ROUTE } from '@/constants/routes';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { auth } from '@/services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href=(MAIN_ROUTE);
      console.log("loging succesfull");
    } catch (error) {
      
    }
  }
  
  return (
    <div>
      <Header/>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-red-400 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-white">Login</h2>
        <form  onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center p-2 bg-gray-200 rounded-lg">
            <MdEmail className="mr-2 text-gray-500" />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-transparent outline-none" 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center p-2 bg-gray-200 rounded-lg">
            <FaLock className="mr-2 text-gray-500" />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full bg-transparent outline-none" 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
          <div className=' text-white'>
            <span>Don't Register ?  
              <Link href={REGISTER_ROUTE}><span>  Register Here</span></Link>
            </span>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}


export default Login
