import React from 'react'

export default function StarRating(props) {
    const { rating } = props

    const starsEl = (starRating) => {
        let starsArr = []
        for (let i = 0; i < 5; i++) {
            if (i < starRating) {
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
        <div className='flex gap-1'>
            {starsEl(rating)}
        </div>
    )
}
