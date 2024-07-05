import React from 'react'
import Button from '@/app/components/Button'
import ContactBtn from './ContactBtn'
import About from './About'
import Projects from './Projects'

const Hero = () => {
  return (
    <main className='max-w-7xl mx-auto mt-32 flex justify-between flex-wrap items-center px-8 pb-6'>
        <div className='max-w-xl flex-grow'>
            <h1 className='font-medium text-[57px]'>I'm Zainab Imran</h1>
            <p className='text-xl'>
            Graphic Designer; student at Central Park Medical College
            </p>

            <div className='flex items-center gap-5 mt-8'>
                <Button />
                <ContactBtn />
            </div>

            <About />
        </div>

        <Projects />
    </main>
  )
}

export default Hero