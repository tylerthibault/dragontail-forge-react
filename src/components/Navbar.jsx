import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [menuShowing, setMenuShowing] = useState(false)

    const menuItems = () => {
        return (
            <ul className='flex flex-col md:flex-row gap-3 font-myHeading text-2xl md:text-base xl:text-xl mt-5 md:mt-0 items-center'>
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

    const wrapperStyle = 'sticky top-0 z-10'
    const topBarStyle = 'bg-black text-white w-fit py-3 flex w-full md:w-fit whitespace-nowrap justify-between px-3 items-center gap-3'

    const navOpenStyle = 'fixed top-0 left-0 bg-black text-white w-full h-full flex flex-col mt-auto '

    const topBarContent = () => {
        return (
            <div className={topBarStyle}>
                <h2 className='text-2xl md:text-2xl '>Dragontail <span className='text-myaccent1'>Forge</span></h2>
                <div className='md:hidden flex items-center'>
                    {
                        !menuShowing ?
                            <>
                                <button className='leading-none pt-1' onClick={() => setMenuShowing(true)}>Menu</button>
                            </>
                            :
                            <>
                                <button className='leading-none pt-1 bg-myaccent1 text-black font-bold' onClick={() => setMenuShowing(false)}>Close</button>
                            </>

                    }
                </div>
            </div>
        )
    }

    return (
        <div className={wrapperStyle}>
            <div className='flex justify-between bg-black md:px-7'>
                {topBarContent()}
                <div className='hidden text-white w-full md:flex justify-end'>
                    {menuItems()}
                </div>
            </div>


            {/* Mobile Version */}
            <div className='md:hidden'>
                {
                    menuShowing &&
                    <div className={navOpenStyle}>
                        <div className='mt-0'>
                            {topBarContent()}
                        </div>
                        <div className='mt-[10%]'>
                            {menuItems()}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
