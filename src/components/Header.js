import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from '@/constants/routes'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className=' h-20 bg-red-400 flex px-10'>
        <nav className=' flex justify-between items-center w-full'>
            <Link href={LOGIN_ROUTE}><div className=' text-3xl'>TechMart</div></Link>
            <ul className=' flex gap-4'>
                <Link href={LOGIN_ROUTE}><li>Login</li></Link>
                <Link href={REGISTER_ROUTE}><li>Register</li></Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header
