import React from 'react'

export default function Banner(props) {
    const { title = "title Here" } = props
    return (
        <div className='bg-black text-white font-myHeading text-6xl pt-3 pb-5 capitalize'>
            {title}
        </div>
    )
}
