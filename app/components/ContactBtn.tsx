import Link from 'next/link'
import React from 'react'

const ContactBtn = () => {
  return (
    <Link href='/work' className='font-semibold text-lg rounded-full py-3 px-5 border border-neutral-400'>
        See my work
    </Link>
  )
}

export default ContactBtn