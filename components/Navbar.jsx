import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Link href="/about">
            about
        </Link>
        <Link href="/store">
            store
        </Link>
    </div>
  )
}

export default Navbar