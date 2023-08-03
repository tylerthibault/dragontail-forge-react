import React, { useState } from 'react'
import KnifeMini from './KnifeMini'
import { Link } from 'react-router-dom'

export default function ProductsShow(props) {
    const { products } = props

    return (
        <div>
            {
                products ?
                    <div>
                        <div className='flex justify-between items-center px-4'>
                            <p className='text-4xl font-bold font-myHeading'>Featured Knives</p>
                            <Link className='flex gap-3 items-center font-myHeading'>
                                <p>Your Cart</p>
                                <i class="fa-solid fa-cart-shopping text-4xl py-3"></i>
                            </Link>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 p-3'>
                            {
                                products.map((item, key) => {
                                    return (
                                        <div key={key}>
                                            <KnifeMini data={item} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    :
                    <p>Loading...</p>
            }
        </div>
    )
}

