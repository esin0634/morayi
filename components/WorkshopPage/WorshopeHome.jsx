import { IoIosArrowRoundDown } from "react-icons/io";
import React from 'react'

import { Aleo } from 'next/font/google'
const aleo = Aleo({ subsets: ['latin'] })

const WorkshopHome = () => {
  return (
    <div className={` h-screen w-screen flex flex-col items-center justify-center gap-y-52  text-[#4D4D4D]`}>
        <div>
            
        </div>
        <div className='flex flex-col justify-center items-center  space-y-5 '>
            <div>
                <p className='title '>
                M<span className='title-span'>or</span>A<span className='title-span'>yı</span> <span className='title-2'>WORKSHOP</span>
                </p>
            </div>
            <div>
                <p className='text'>
                    WE ART THE WORLD POWERED BY TRADITIONS, NATURE AND INNOVATIONS
                </p>
            </div>

        </div>
        <div className='text-xs text-[#75488E] flex flex-col justify-center items-center'>
            <div>
                <IoIosArrowRoundDown  className="text-xl"/>
            </div>
            <p>
                scroll down
            </p>
            </div>
    </div>
  )
}

export default WorkshopHome