"use client"
import React, { useRef } from 'react'
import "../Courses/Courses.css"

const data = [
    {
        img: "images/class/1.png",
        title : "Class 12th",
        hours : "2",
        extra: "Commerce"
    },
    {
        img: "images/class/2.png",
        title : "Class 12th",
        hours : "2",
        extra : "Science PCM"
    },
    {
        img: "images/class/3.png",
        title : "Class 12th",
        hours : "2",
        extra: "Science PCB"
    },
    {
        img: "images/class/4.png",
        title : "Class 12th",
        hours : "2",
        extra: "Arts"
    },
    {
        img: "images/class/5.png",
        title : "Class 10th",
        hours : "2",
        extra: ""
    },
    {
        img: "images/class/6.png",
        title : "HTML for Beginers",
        hours : "2",
    },
    {
        img: "images/class/7.png",
        title : "CSS for Beginers",
        hours : "2",
    },
    {
        img: "images/class/8.png",
        title : "JavaScript for Beginers",
        hours : "2",
    },
]

const Courses = () => {

    // const [slideLeft, setSlideLeft] = React.useState(0);
    // const [isScrolling, setIsScrolling] = React.useState(false);
    // const sliderWidth = 1900;


    // //on arrow click
    // const moveRight = () => {
    //     const el = document.getElementById(`scroll`);
    //     setSlideLeft((el.scrollLeft += 200));
    // };

    // const moveLeft = () => {
    //     const el = document.getElementById(`scroll`);
    //     setSlideLeft((el.scrollLeft -= 200));
    // };

  return (
    
    <section className='courses'>
        <div id="scroll" className='courses_inner'>
            <h1>Popular courses</h1>
            <div className='courses_grid'>
                {
                    data && data.map((item, i) => {
                        return(
                            <div key={i} className='courses_card'>
                                <div>
                                    <img src={item.img} alt="" />
                                </div>

                                <div className='courses_content'>
                                    <div>
                                        <p>{item.title} {item?.extra}</p>
                                        <p>{item.hours} hr</p>
                                    </div>
                                    <div><span>Free</span></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Courses