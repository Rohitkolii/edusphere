import React from 'react'
import "../Categories/Categories.css"

import { MdComputer } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

import { FaBusinessTime } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { FaCameraRetro } from "react-icons/fa";
import { MdOutlineAppShortcut } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";

import { MdOutlineDataObject } from "react-icons/md";


const Categories = () => {
  return (
    <section className='categories'>
        <div className='categories_inner'>
            <h1>Fetured Categories</h1>
            <div className='categories_grid'>
                <div className='categorie_card'><div className='over'></div><MdWeb />Web Developement</div>
                <div className='categorie_card'><div className='over'></div><FaMoneyBillTrendUp />Marketing</div>
                <div className='categorie_card'><div className='over'></div><FaDatabase />Data Science</div>
                <div className='categorie_card'><div className='over'></div><FaBusinessTime />Bussiness</div>
                <div className='categorie_card'><div className='over'></div><FaCameraRetro />Photograpy</div>
                <div className='categorie_card'><div className='over'></div><MdOutlineAppShortcut />Application Developement</div>
                <div className='categorie_card'><div className='over'></div><FaBook />10th to 12th</div>
                <div className='categorie_card'><div className='over'></div><CgDetailsMore />Explore +</div>
            </div>
        </div>
    </section>
  )
}

export default Categories