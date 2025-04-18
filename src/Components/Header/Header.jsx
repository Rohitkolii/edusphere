import Link from 'next/link'
import React from 'react'
import "../Header/Header.css"

import { HiOutlineArrowSmRight } from "react-icons/hi";
import Navbar from '../Navbar/Navbar';


const Header = () => {
  return (
    <>
      <Navbar />
      <header className='header_con '>
        <div className='header_con_inner'>
          <div>
              <h1>Unlock Your Full Potential with EduSphere: Learn New Skills and Achieve Your Dreams!</h1>
              <p>learn with top educators!</p>
              <Link href="/">Join Today <HiOutlineArrowSmRight /></Link>
          </div>

          <div>
              <img src="images/h3.svg" alt="" />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header