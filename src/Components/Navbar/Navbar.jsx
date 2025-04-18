import React from 'react'
import "../Navbar/Navbar.css"
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className='offer'>
                <p>New : Fullstack Developement Course</p>
            </div>

            <nav>
                <div>
                    <Link href="/" className='logo'><span>E</span>dusphere<span>.</span></Link>
                </div>
                <div>
                    <ul>
                        <Link href="/">Trending course</Link>
                        <Link href="/careerguidance">career guidance</Link>
                        <Link href="/">Jobs</Link>
                        <Link href="/">whats new</Link>
                        <Link className='logbtn' href="/login">Login</Link>
                    </ul>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Navbar