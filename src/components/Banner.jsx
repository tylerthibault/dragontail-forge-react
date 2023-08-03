import React from 'react'

export default function Banner(props) {
    const { title = "title Here", textStyle="text-xl md:text-6xl" } = props
    return (
        <div className='bg-black text-white font-myHeading pt-3 pb-5 capitalize'>
            <p className={textStyle}>{title}</p>
        </div>
    )
}
