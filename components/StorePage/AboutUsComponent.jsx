"use client"
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Other imports...

const ImageTile = ({ src }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  const animateImage = () => {
    controls.start({
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 20,
      transition: { duration: 0.5, ease: 'easeOut' },
    });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      onAnimationStart={animateImage}
      className="h-64 w-44 overflow-hidden rounded-lg"
    >
      <img src={src} alt="" className="h-full w-full object-cover object-center" />
    </motion.div>
  );
};

const AboutUsComponent = () => {


  return (
    <div className="relative overflow-hidden bg-[#E1E3DA] w-screen ">
      <div className='text-8xl space-y-10 font-semibold'>
        <h1 className='text-[#538C51]'>
          WE DESIGN.
        </h1>
        <h1 className='text-[#AFBF73]'>
          WE CREATE.
        </h1>
        <h1 className='text-[#F2B84B]'>
          ANKARAAAA.
        </h1>
        <h1 className='text-[#D95E32]'>
          ANKARAAAMM.
        </h1>
      </div>
    </div>
  );
};

export default AboutUsComponent;
