"use client"
import React from 'react'

    const handleMailClick = () => {
        window.open(`mailto:atolyemorayi@gmail.com`, '_blank');
    }

const Footer = () => {
  return (
    <div className='w-screen'>
        <div className='grid grid-cols-6 p-10'>
            <div className='grid-cols-1'>
                <p>E:</p>
                <p onClick={handleMailClick}>atolyemorayi@gmail.com</p>
            </div>
            <div className='grid-cols-1 flex flex-col'>
            <p>S:</p>
                <div className='space-x-3'>
                    <a href='https://www.instagram.com/morayiwoodshop/'>INSTAGRAM</a>
                    <a href='https://www.youtube.com/@atolyemorayi1483'>YOUTUBE</a>
                </div>
                <a>ETSY</a>
            </div>
            <div className='grid-cols-1'>
            <p>T:</p>
                <p> 023424234234 </p>
            </div>

        </div>

    </div>
  )
}

export default Footer