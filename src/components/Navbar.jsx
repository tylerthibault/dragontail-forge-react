import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='bg-black flex justify-between items-center px-3 text-white py-5 sticky top-0'>
            <h2 className='font-myHeading text-4xl'>Dragontail <span className='text-myaccent1'>Forge</span></h2>
            <ul className='flex gap-3 font-myHeading'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Available Work</Link></li>
                <li><Link to="/">Story</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/">Knife Care</Link></li>
                <li><Link to="/">FAQ</Link></li>
                <li><Link to="/">Return Policy</Link></li>
                <li><Link to="/">Blog</Link></li>
            </ul>
        </div>
    )
}
