import React from 'react'

export default function Product(props) {
    const { id, title, descriptionShort, descriptionLong, stars, price, img } = props.product

    

    return (
        <div className='w-fit max-w-[20rem]'>
            <img className='w-fit max-w-[20rem] object-cover rounded border-2 border-black' src={img} alt={"knive " + title} />
            <div className='flex justify-between'>
                <p>{title}</p>
                <p>${price}</p>
            </div>

            <p>{descriptionShort}</p>

        </div>
    )
}
