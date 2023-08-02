import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [menuShowing, setMenuShowing] = useState(false)

    const menuItems = () => {
        return (
            <ul className='flex flex-col md:flex-row gap-3 font-myHeading md:text-base xl:text-xl mt-5 md:mt-0'>
                <li><Link className='btn-nav' to="/">Home</Link></li>
                <li><Link className='btn-nav' to="/">Available Work</Link></li>
                <li><Link className='btn-nav' to="/">Story</Link></li>
                <li><Link className='btn-nav' to="/">Contact</Link></li>
                <li><Link className='btn-nav' to="/">Knife Care</Link></li>
                <li><Link className='btn-nav' to="/">FAQ</Link></li>
                <li><Link className='btn-nav' to="/">Return Policy</Link></li>
                <li><Link className='btn-nav' to="/">Blog</Link></li>
            </ul>
        )
    }
    return (
        <div className='bg-black flex flex-col md:flex-row justify-center md:justify-between items-center px-3 text-white py-5 sticky top-0'>
            <h2 className='font-myHeading text-4xl'>Dragontail <span className='text-myaccent1'>Forge</span></h2>
            <div className='hidden md:inline-block'>
                {menuItems()}
            </div>
            <div className='md:hidden mt-3'>
                {
                    !menuShowing ?
                        <span className='border border-white rounded px-3 duration-300' onClick={() => setMenuShowing(!menuShowing)}>Menu</span>
                        :
                        <span className='border-2 border-slate-500 rounded px-3 duration-300 bg-myaccent1 text-black' onClick={() => setMenuShowing(!menuShowing)}>Menu</span>

                }
                {
                    menuShowing &&
                    <div className='pt-3 fixed top-0 left-0 pb-7 bg-black w-screen h-screen'>
                        <span className='border-2 border-slate-500 rounded px-3 duration-300 bg-myaccent1 text-black' onClick={() => setMenuShowing(!menuShowing)}>Close</span>
                        <div className='h-full flex justify-center items-center gap-5 text-4xl'>
                        {menuItems()}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
