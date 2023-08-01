import React from 'react'

import LogoWhite from '../img/logoWhite.svg'

export default function Footer() {
    return (
        <div className='flex flex-col justify-center items-center bg-black pb-7 mt-7 text-white min-h-[10em]'>
            <span className='bg-gray-700 w-full py-1'>Back to Top</span>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col md:flex-row mb-3'>
                    <p className='font-myHeading text-xl mt-7'>Handcrafted Knives,</p>
                    <p className='font-myHeading text-xl mt-7'>Unleash your Edge</p>
                </div>

                <img className='' src={LogoWhite} alt="" />
                <p className='font-myHeading'>Dragontail Forge @2022</p>
            </div>
            <div>
                {/* social icons */}
                <ul className='flex gap-3 text-4xl my-3'>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-square-facebook"></i></li>
                    <li><i class="fa-solid fa-message"></i></li>
                </ul>
            </div>
            <div className='flex flex-col md:flex-row gap-1'>
                <p>Website created and maintained by </p>
                <p>
                    <span className='text-red-600 font-bold'>Pixel</span>Tek | a<span className='text-red-600 font-bold'>tbo</span>company
                </p>
            </div>
        </div>
    )
}
