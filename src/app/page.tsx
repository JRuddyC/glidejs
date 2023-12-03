'use client'
import React from 'react'
import Carousel from './components/Carousel'
import i1 from '@/assets/profile.webp'
import i2 from '@/assets/deathwing.jpg'
import i3 from '@/assets/lk.jpg'

const page = () => {
  const images = [i1.src, i2.src, i3.src, i1.src, i2.src, i3.src]

  return (
    <div>
      page
      <Carousel images={images} />
    </div>
  )
}

export default page