import Link from 'next/link'
import React from 'react'

const ContactBtn = () => {
  return (
    <Link href='/#contact' className='font-semibold text-lg rounded-full py-3 px-8 bg-neutral-900 text-white'>
        Contact Me
    </Link>
  )
}

export default ContactBtn