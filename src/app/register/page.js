"use client";
import Header from '@/components/Header';
import { LOGIN_ROUTE, REGISTER_ROUTE } from '@/constants/routes';
import { auth, db } from '@/services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaUserAlt, FaLock, FaMailBulk } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";


function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister =async (e) =>{
    e.preventDefault();
    try {
        await createUserWithEmailAndPassword(auth,email,password);
        const user = auth.currentUser;
        console.log(user);
        if (user) {
            await setDoc(doc(db, "Users", user.uid),{
                email: user.email,
                name:name,
            });
            
        }
        alert('Signup successful! Redirecting to login page...');
    } catch (error) {
    }
  }

  return (
    <div>
      <Header/>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-red-500 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-white">Login</h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="flex items-center p-2 bg-gray-200 rounded-lg">
            <FaUserAlt className="mr-2 text-gray-500" />
            <input 
              type="text" 
              placeholder="Username" 
              className="w-full bg-transparent outline-none" 
              onChange={(e) => setName(e.target.value)} required
            />
          </div>
          <div className="flex items-center p-2 bg-gray-200 rounded-lg">
            <MdEmail className="mr-2 text-gray-500" />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-transparent outline-none" 
              onChange={(e) => setEmail(e.target.value)} required
            />
          </div>
          <div className="flex items-center p-2 bg-gray-200 rounded-lg">
            <FaLock className="mr-2 text-gray-500" />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full bg-transparent outline-none" 
              onChange={(e) => setPassword(e.target.value)} required
            />
          </div>
          <button 
            type="submit" 
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
          <div className=' text-white'>
            <span>You have account  
              <Link href={LOGIN_ROUTE}><span>  Log Now</span></Link>
            </span>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Register
