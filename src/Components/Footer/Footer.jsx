import Link from 'next/link'
import React from 'react'
import "../Footer/Footer.css"

//icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";



const Footer = () => {
  return (
    <footer>
        <div className='footer_inner'>

            <div className='footer1'>
                <div>
                    <p className='logo'><span>E</span>dusphere<span>.</span></p>
                    <p>Unlock Your Potential with Every Lesson.</p>
                    <ul className='social_links'>
                        <Link href="/"><FaInstagram /></Link>
                        <Link href="/"><FaLinkedinIn /></Link>
                        <Link href="/"><FaGithub /></Link>
                        <Link href="/"><MdManageAccounts /></Link>
                    </ul>
                </div>
                
                <div className='links1'>
                    <h1>Whats's new</h1>
                    <ul>
                        <Link href="/">Quizes</Link>
                        <Link href="/">Fun Games</Link>
                        <Link href="/">Ai career guidance</Link>
                    </ul>
                </div>

                <div className='links1'>
                    <h1>Latest courses</h1>
                    <ul>
                        <Link href="/">Web developement</Link>
                        <Link href="/">App developement</Link>
                        <Link href="/">Marketing</Link>
                        <Link href="/">Business</Link>
                        <Link href="/">Academic courses</Link>
                    </ul>
                </div>

                <div className='links1'>
                    <h1>Quick links</h1>
                    <ul>
                        <Link href="/">About</Link>
                        <Link href="/">Contact</Link>
                        <Link href="/">Blogs</Link>
                    </ul>
                </div>

            </div>

            <div className='footer2'>
                <p>All Right Reserved <Link href="/">Edusphere</Link></p>
                <ul>
                    <Link href="/">Terms & condition</Link>
                    <Link href="/">Privacy policy</Link>
                    <Link href="/">Sitemap</Link>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer