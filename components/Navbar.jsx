import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='text-[#538C51]'>
      <div className='p-5'>
        <div className='flex items-center justify-center space-x-1 md:text-md text-sm font-semibold'>
          <Link href="/store">
              store
          </Link>
          <p>/</p>
          <Link href="/workshop">
              workshop
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar