import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import React from 'react'

import { IoLanguage } from "react-icons/io5";
import { RiTimeZoneLine } from "react-icons/ri";
import { IoIosCheckmark } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";


import "../course/course.css"

const page = () => {
  return (
    <>
        <Navbar />
        <section className='course_area'>
            <div className='course_head'>
                <div className='course_head_inner'>
                    <div className='col'>
                        <h1>The Complete AI Guide: Learn ChatGPT, Generative AI & More</h1>
                        <p>50+ Generative AI Tools to 10x Business, Productivity, Creativity | ChatGPT, Artificial Intelligence, Prompt Engineering</p>
                        <br/>
                        <br/>
                        <p className='color'><IoLanguage /> Hindi, English</p>
                        <p className='color'><RiTimeZoneLine /> Last Updated 04/2025</p>
                        
                    </div>

                    <div className='course_card_float'>
                        <img src="/images/Class/6.png" alt='' />

                        <div className='course_content_float'>
                            <p><IoIosCheckmark />Live Classes</p>
                            <p><IoIosCheckmark />27/7 Acces</p>
                            <p><IoIosCheckmark />Written notes in pdf</p>
                            <p><IoIosCheckmark />Recording access after the session</p>
                            <p><IoIosCheckmark /> Multilingual Support</p>
                            <p><IoIosCheckmark />Scheduled live sessions with chat/Q&A</p>
                            <p><IoIosCheckmark />Assignments with Peer Reviews</p>
                            <p><IoIosCheckmark />Live projects Practice</p>
                            <p><IoIosCheckmark />Doubt Sessions</p>
                            <br />
                            <button>Get this course now</button>
                        </div>

                    </div>
                </div>
            </div>

            <div className='course_detail'>
                <div className='course_detail_inner'>
                    <h2>Course Description</h2>
                    <p>Are you ready to dive into the world of web development? "Mastering HTML" is the perfect starting point for beginners who want to build a strong foundation in creating websites from scratch. This course walks you through the core concepts of HTML — the standard markup language used to create web pages — in a simple, beginner-friendly way.</p>
                    <br />
                    <p>Through practical examples and real-world projects, you’ll learn how to structure webpages, format content, create links, embed images and videos, and build well-organized layouts using semantic HTML. By the end of this course, you’ll have the skills to create responsive, accessible, and professional-looking web pages — ready to bring your web ideas to life!</p>
                    
                    <br />
                    
                    <h2>Key Highlights</h2>
                    <ul>
                        <p><CiStar style={{fontSize: 20}} />Beginner-friendly, no prior experience needed</p>
                        <p><CiStar style={{fontSize: 20}} />Covers HTML5 and semantic HTML best practices</p>
                        <p><CiStar style={{fontSize: 20}} />Hands-on projects and mini exercises</p>
                        <p><CiStar style={{fontSize: 20}} />Real-time preview of your code</p>
                        <p><CiStar style={{fontSize: 20}} />Practical tips for web accessibility and SEO</p>
                        <p><CiStar style={{fontSize: 20}} />Downloadable resources and cheat sheets</p>
                        <p><CiStar style={{fontSize: 20}} />Lifetime access and certificate of completion</p>
                    </ul>

                    <br />

                    <h2>What You'll Learn</h2>
                    <ul>
                        <p><IoIosCheckmark />What HTML is and how it works in a webpage</p>
                        <p><IoIosCheckmark />How to write clean, structured HTML code</p>
                        <p><IoIosCheckmark />How to use elements like headings, paragraphs, lists, images, and links</p>
                        <p><IoIosCheckmark />How to create tables and forms</p>
                        <p><IoIosCheckmark />The power of semantic HTML and accessibility standards</p>
                        <p><IoIosCheckmark />Best practices for organizing content and building page structure</p>
                        <p><IoIosCheckmark />How to embed multimedia (images, audio, video)</p>
                        <p><IoIosCheckmark />Introduction to responsive design and integrating CSS</p>
                    </ul>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default page