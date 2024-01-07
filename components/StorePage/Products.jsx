"use client"
import Image from 'next/image'
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Reveal } from '../Reveal';

const Products = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const scalePlus = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const translateY = useTransform(scrollYProgress, [0, 1], [0, 100]); // Adjust the range as needed



  return (
    <div >
        <div className='lg:min-h-screen lg:m-52 flex flex-col items-center  '>
            <div className='flex items-start lg:w-full'>
                <div className='p-10'>
                    <h1 className=' text-7xl font-semibold text-[#D95E32]'>
                        Spring 24' <br/> Ankara Collection.
                    </h1>

                </div>
            </div>
            <div className='lg:w-full'>
                <div className='flex justify-center items-center w-full'>
                    
                <motion.div
                     style={{ scale, y: translateY }}
                    
                    >
                    <Image src="/bt/1.jpg"
                    width={1200}
                    height={600}
                    alt="Picture of the author"/>
                </motion.div>
                </div>

                <div className='lg:grid lg:grid-cols-2 gap-x-10 ' >
                <motion.div style={{ scale, y: translateY }}>
                    <div className='grid-cols-1 w-full space-y-10'>
                        <div>
                            <Image src="/bt/1.jpg"
                            width={800}
                            height={600}
                            alt="Picture of the author"/>
                        </div>
                        <div className="flex justify-center items-center text-[#848374] w-2/3  font-semibold ">
                        <Reveal>
                            <p className="p-10 text-5xl" >
                                Here in PurpleBear, our <span className='text-[#4c4b42]'>designs</span> are a harmonious blend of tradition and innovation, a testament to our dedication to <span className='text-[#4c4b42]'>timeless</span> aesthetics. 
                            </p>
                        </Reveal>

                        </div>
                    </div>
                    </ motion.div>

                <motion.div style={{ scale, y: translateY }}>
                    <div className='grid-cols-1 w-full py-80'>
                        <div>
                            <Image src="/bt/1.jpg"
                            width={800}
                            height={600}
                            alt="Picture of the author"/>
                        </div>
                        <div className="flex justify-center items-center text-[#848374] w-9/10  font-semibold ">
                        <Reveal>
                            <p className="p-10 text-3xl" >
                                Here in PurpleBear, our <span className='text-[#4c4b42]'>designs</span> are a harmonious blend of tradition and innovation, a testament to our dedication to <span className='text-[#4c4b42]'>timeless</span> aesthetics. 
                            </p>
                        </Reveal>

                        </div>
                    </div>
                    </ motion.div>

                </div>
                
            </div>
            
        </div>
            
    </div>
  )
}

export default Products