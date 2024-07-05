import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className='w-[35%] p-8 self-stretch'>

        <div className='mt-3 grid grid-cols-2 gap-3'>
            <Image
            height={230}
            width={215}
            alt='POSTER'
            src='/poster1.png'
            className='self-end'
            />
            <Image
            height={230}
            width={320}
            alt='POSTER'
            src='/poster2.png'
            />
            <Image
            height={210}
            width={215}
            alt='POSTER'
            src='/poster3.png'
            />
            <div className='self-start flex flex-col gap-3'>
            <Image
            height={210}
            width={215}
            alt='POSTER'
            src='/poster4.png'
            />
            <Image
            height={210}
            width={215}
            alt='POSTER'
            src='/poster5.png'
            />
            </div>
        </div>
    </div>
  )
}

export default Projects