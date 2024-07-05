import React from 'react'
import Image from 'next/image'

const posters = [
  { name: 'poster1.png' },
  { name: 'poster2.png' },
  { name: 'poster3.png' },
  { name: 'poster4.png' },
  { name: 'poster5.png' },
  { name: "poster (1).JPG" },
  { name: "poster (2).JPG" },
  { name: "poster (3).JPG" },
  { name: "poster (4).JPG" },
  { name: "poster (5).JPG" },
  { name: "poster (6).JPG" },
  { name: "poster (7).JPG" },
  { name: "poster (8).JPG" },
  { name: "poster (9).JPG" },
  { name: "poster (10).JPG" },
  { name: "poster (11).JPG" },
  { name: "poster (12).JPG" },
  { name: "poster (13).JPG" },
  { name: "poster (14).JPG" },
  { name: "poster (15).JPG" },
  { name: "poster (16).JPG" },
  { name: "poster (17).JPG" },
  { name: "poster (18).JPG" },
  { name: "poster (19).JPG" },
  { name: "poster (20).JPG" },
  { name: "poster (21).JPG" },
  { name: "poster (22).JPG" },
  { name: "poster (23).JPG" },
  { name: "poster (24).JPG" },
  { name: "poster (25).JPG" },
  { name: "poster (26).JPG" },
  { name: "poster (27).JPG" },
  { name: "poster (28).JPG" },
  { name: "poster (29).JPG" },
  { name: "poster (30).JPG" },
  { name: "poster (31).JPG" },
  { name: "poster (32).JPG" },
  { name: "poster (33).JPG" },
  { name: "poster (34).JPG" },
  { name: "poster (35).JPG" },
  { name: "poster (36).JPG" },
  { name: "poster (37).JPG" },
  { name: "poster (38).JPG" },
  { name: "poster (39).JPG" },
  { name: "poster (40).JPG" },
  { name: "poster (41).JPG" },
  { name: "poster (42).JPG" },
  { name: "poster (43).JPG" },
  { name: "poster (44).JPG" },
  { name: "poster (45).JPG" },
  { name: "poster (46).JPG" },
]

const Page = () => {
  return (
    <div>
      <h1 className='font-semibold text-2xl text-center my-4'>MY WORK</h1>
    <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 p-4'>
      {posters.map((poster, index) => (
        <div key={index} className='border border-neutral-200 shadow-md p-3 rounded-xl'>
          <Image
            height={330}
            width={315}
            alt={`Poster ${index + 1}`}
            src={`/${poster.name}`}
            className='object-cover aspect-square rounded-lg shadow-lg'
          />
        </div>
      ))}
    </div>
    </div>
  )
}

export default Page
