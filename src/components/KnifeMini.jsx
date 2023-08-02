import React from 'react'

export default function KnifeMini(props) {
    const { data } = props
    const { title, descriptionShort, stars, price, img } = data

    const starsEl = () => {
        let starsArr = []
        for (let i = 0; i < 5; i++) {
            if (i < stars) {
                starsArr.push(
                    <div>
                        <i class="fa-solid fa-star text-yellow-300 my-outline-black"></i>
                    </div>
                )
            }
            else {
                starsArr.push(
                    <div>
                        <i class="fa-regular fa-star"></i>
                    </div>
                )
            }
        }
        return starsArr
    }


    return (
        <>
            <div className='flex flex-col items-center justify-center gap-1 w-11/12 md:w-full'>
                <img className='w-11/12 md:h-full md:w-full bg-gray-100 rounded-lg border border-black shadow' src={img} alt={"knife " + title} loading='lazy' />
                <div className='flex gap-3'>
                    {starsEl()}
                </div>
                <div className='flex justify-between w-full text-2xl'>
                    <p className='text-left w-full font-myHeading'>{title}</p>
                    <p className='font-myHeading'>${price}</p>
                </div>
                <p className='text-left'>{descriptionShort}</p>
                <div className='flex gap-1 w-full justify-end md:justify-center text-sm'>
                    <span className='btn text-xl py-2 btn-accent-2'><i class="fa-solid fa-eye"></i></span>
                    <span className='btn btn-accent text-xl py-2'><i class="fa-solid fa-plus"></i> <i class="fa-solid fa-cart-shopping"></i></span>
                </div>
            </div>
        </>
    )
}
