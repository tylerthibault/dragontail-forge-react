import React from 'react'
import StarRating from './StarRating'

export default function KnifeMini(props) {
    const { data } = props
    const { title, descriptionShort, stars, price, img } = data

    return (
        <>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-1 h-full'>
                <img className='h-[20rem] w-[15rem] bg-gray-100 rounded-lg border border-black shadow' src={img} alt={"knife " + title} loading='lazy' />
                <div className='flex flex-col h-full'>
                    <div className='flex justify-center w-full text-2xl mt-0'>
                        <p className='text-center w-full font-myHeading'>{title}</p>
                    </div>
                    <div className='flex justify-center mt-0'>
                        <StarRating rating={stars} />
                    </div>
                    <div className='flex justify-center mt-auto'>
                    <p className='text-center mt-auto w-5/6'>{descriptionShort}</p>
                    </div>
                    <div className='flex justify-between w-full items-center mt-auto'>
                        <p className='font-myHeading text-4xl'>${price}</p>
                        <div className='flex gap-1 w-full justify-end md:justify-center text-sm'>
                            <span className='btn text-xl py-2 btn-accent-2'><i class="fa-solid fa-eye"></i></span>
                            <span className='btn btn-accent text-xl py-2'><i class="fa-solid fa-plus"></i> <i class="fa-solid fa-cart-shopping"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
