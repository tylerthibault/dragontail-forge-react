import React from 'react'
import { Link } from 'react-router-dom'

import LandingPagePNG from '../../img/landingpage.png'
import Logo from '../../img/logo.svg'

export default function Header() {
    return (
        <div className='grid grid-cols-2'>
            <img className='border-r-[0.75em] border-black' src={LandingPagePNG} alt="landing page image" />
            <div className='flex flex-col gap-3 justify-center items-center'>
                <img src={Logo} alt="dragontail logo" />
                <div className='font-myHeading text-4xl flex flex-col gap-3'>
                    <p>Handcrafted Knives</p>
                    <p>Unleash your Edge</p>
                    <Link to='/' className='btn btn-accent font-myHeading text-2xl py-2 w-fit self-end'>Shop Now</Link>
                </div>
            </div>
        </div>
    )
}
