import React from 'react'
import StarRating from './StarRating'

export default function Testimonial(props) {
    const {name, occupation, rating, testimonial} = props.data

    return (
        <div className='flex flex-col items-center justify-center w-fit shadow rounded-lg p-3 hover:bg-myaccent2'>
            <p className='text-2xl font-myHeading'>{name}</p>
            <StarRating rating={rating} />
            <p>Occupation: {occupation}</p>
            <p>{testimonial}</p>
        </div>
    )
}
