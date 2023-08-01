import React from 'react'

export default function KnifeMini(props) {
    const { data, width = '10em' } = props
    const { title, descriptionShort, stars, price, isFeatured, img } = data

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

    const divStyle = `flex flex-col items-center justify-center gap-1 w-[${width}]`
    const imgStyle = `h-[10em] w-[10em] bg-gray-100 rounded-lg border border-black shadow`

    return (
        <div className={divStyle}>
            <img className={imgStyle} src={img} alt="" />
            <div className='flex gap-3'>
                {starsEl()}
            </div>
            <div className='flex justify-between w-full'>
                <p className='text-left w-full font-myHeading'>{title}</p>
                <p className='font-myHeading'>${price}</p>
            </div>
            <p className='text-left'>{descriptionShort}</p>
            <div className='flex justify-between w-full '>
                <div className='flex gap-1 items-center justify-center text-sm'>
                    <a href="" className='btn'>View</a>
                    <a href="" className='btn btn-accent'>Add to Cart</a>
                </div>
            </div>
        </div>
    )
}
