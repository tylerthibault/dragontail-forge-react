import React from 'react'
import { Link } from 'react-router-dom'

import LandingPagePNG from '../../img/landingpage.png'
import Logo from '../../img/logo.svg'

export default function Header() {
    return (
        <div className='flex flex-col-reverse md:grid grid-cols-2'>
            <img className='border-t-[0.75em] md:border-r-[0.75em] border-black' src={LandingPagePNG} alt="landing page" />
            <div className='flex flex-col gap-3 my-7 md:my-0 justify-center items-center'>
                <h1 className='text-4xl'>Dragontail <span className='text-myaccent1'>Forge</span></h1>
                <img className='w-1/2 md:w-fit' src={Logo} alt="dragontail logo" />
                <div className='font-myHeading text-xl md:text-2xl flex flex-col gap-3'>
                    <p>Handcrafted Knives</p>
                    <p>Unleash your Edge</p>
                    <Link to='/' className='btn btn-accent font-myHeading text-lg md:text-xl py-2 w-full md:w-fit self-end'>Shop Now</Link>
                </div>
            </div>
        </div>
    )
}
