import Link from 'next/link'
import React from 'react'
import ContactBtn from './ContactBtn'

const Navbar = () => {
  return (
    <header className='flex items-center justify-between px-12 md:px-20 py-8'>
        <div className='flex items-center justify-start gap-14'>
                <Link href='/' className='font-medium text-[24px]'>PORTFOLIO</Link>
                <nav className='flex items-center justify-between md:gap-12 gap-6'>
                    <Link href='/work'>
                        Work
                    </Link>
                    <Link href='/#about'>
                        About
                    </Link>
                    <Link href='/#contact'>
                        Contact
                    </Link>
                </nav>
        </div>

        <div className='lg:block hidden'>
            <ContactBtn />
        </div>
    </header>
  )
}

export default Navbar