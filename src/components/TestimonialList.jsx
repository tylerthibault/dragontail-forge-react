import React from 'react'

import data from '../data/testimonials'
import Testimonial from './Testimonial'

export default function TestimonialList(props) {

    return (
        <div className='px-4'>
            <p className='font-myHeading text-4xl text-left font-bold'>Testimonials</p>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-7 w-full my-7 px-7'>
                {
                    data.map((item, key) => <Testimonial data={item} />)
                }
            </div>
        </div>
    )
}
