import React from 'react'
import { Link } from 'react-router-dom'

import IntroVid from '../img/vids/blacksmithIntro2.mp4'
import Logo from '../img/logoWhite.svg'

export default function Header() {
    return (
        <div className='-z-20 bg-black relative '>
            <div className='flex flex-col-reverse md:grid grid-cols-1 relative'>
                <div className='flex flex-col gap-3 my-7 py-7 md:my-0 justify-center items-center z-10 text-white'>
                    <h1 className='text-4xl md:text-7xl'>Dragontail <span className='text-myaccent1'>Forge</span></h1>
                    <img className='w-1/2 md:w-3/12' src={Logo} alt="dragontail logo" />
                    <div className='font-myHeading text-xl md:text-2xl flex flex-col gap-3'>
                        <p>Handcrafted Knives</p>
                        <p>Unleash your Edge</p>
                        <Link to='/' className='btn btn-accent font-myHeading text-lg md:text-xl py-2 w-full md:w-fit self-end'>Shop Now</Link>
                    </div>
                </div>
                <video className='blur-sm -z-10 absolute w-full h-full object-cover top-0 left-0' autoPlay muted loop>
                    <source src={IntroVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}
