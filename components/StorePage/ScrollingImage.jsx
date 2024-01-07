import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

import bt1 from "@/public/bt/1.jpg";

const ScrollingImage = () => {
  return (
    <div className='w-screen h-screen'>
      <Image
        src={bt1}
        alt="Descriptive alt text"
        layout="fill"
        objectFit="cover"
        className="m-x-2 m-y-2"
      />
    </div>
  );
};

export default ScrollingImage;
