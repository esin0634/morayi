"use client"
import React from 'react'
import Image from 'next/image'
import { motion, useViewportScroll, useTransform } from "framer-motion";
 


const WorkshopImage = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 2]);

  return (
    <div className='flex justify-center'>
    <motion.div
     style={{scale}}
    > 
       <Image
          src="/bt-wide.jpg"
          width={1500}
          height={1500}
          objectFit="cover"
          quality={100}
          alt="bıçak tutacağı"
        /> 
      
    </motion.div>
    </div>
  )
}

export default WorkshopImage