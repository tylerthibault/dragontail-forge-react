import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [menuShowing, setMenuShowing] = useState(false)

    const menuItems = () => {
        return (
            <ul className='flex flex-col md:flex-row gap-3 font-myHeading text-2xl md:text-base xl:text-xl mt-5 md:mt-0'>
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
    const topBarStyle = 'bg-black text-white w-full py-3 flex flex-col justify-center items-center gap-3'

    const navOpenStyle = 'fixed top-0 left-0 bg-black text-white w-full h-full flex flex-col mt-auto '

    const topBarContent = () => {
        return (
            <div className={topBarStyle}>
                <h2 className='text-xl md:text-2xl'>Dragontail <span className='text-myaccent1'>Forge</span></h2>
                <div className='md:hidden'>
                    {
                        !menuShowing ?
                            <>
                                <button onClick={() => setMenuShowing(true)}>Menu</button>
                            </>
                            :
                            <>
                                <button className='bg-myaccent1 text-black font-bold' onClick={() => setMenuShowing(false)}>Close</button>
                            </>

                    }
                </div>
            </div>
        )
    }

    return (
        <div className={wrapperStyle}>
            {topBarContent()}

            {/* Mobile Version */}
            {
                menuShowing &&
                <div className={navOpenStyle}>
                    <div className='mt-0'>
                        {topBarContent()}
                    </div>
                    <div className='mt-[50%]'>
                        {menuItems()}
                    </div>
                </div>
            }
        </div>
        // <div className='bg-black flex flex-col md:flex-row justify-center md:justify-between items-center px-3 text-white py-5 sticky top-0'>
        //     <h2 className='font-myHeading text-4xl'>Dragontail <span className='text-myaccent1'>Forge</span></h2>
        //     <div className='hidden md:inline-block'>
        //         {menuItems()}
        //     </div>
        //     <div className='md:hidden'>
        //         {
        //             !menuShowing ?
        //                 <span className='border border-white rounded px-3 duration-300' onClick={() => setMenuShowing(!menuShowing)}>Menu!!</span>
        //                 :
        //                 <span className='border-2 border-slate-500 rounded px-3 duration-300 bg-myaccent1 text-black' onClick={() => setMenuShowing(!menuShowing)}>Menu</span>

        //         }
        //         {
        //             menuShowing &&
        //             <div className='pt-3 fixed top-0 left-0 pb-7 bg-black w-screen h-screen mt-2 gap-3 flex flex-col items-center'>
        //                 <h2 className='font-myHeading text-4xl'>Dragontail <span className='text-myaccent1'>Forge</span></h2>
        //                 <span className='w-fit border-2 border-slate-500 rounded px-3 duration-300 bg-myaccent1 text-black' onClick={() => setMenuShowing(!menuShowing)}>Close</span>
        //                 <div className='h-full flex justify-center items-center gap-5 text-4xl'>
        //                 {menuItems()}
        //                 </div>
        //             </div>
        //         }
        //     </div>
        // </div>
    )
}
