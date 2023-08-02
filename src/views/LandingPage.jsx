import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/landingpage/Header'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

import { Knives } from '../data/knives'
import KnifeMini from '../components/KnifeMini'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function LandingPage() {
    return (
        <>
            <Header />
            <Navbar />
            <Banner
                title="There are no ordinary people"
            />
            <div className='md:p-7 flex flex-col justify-center items-center'>
                <div className='w-10/12'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-4xl'>Featured Knives</h2>
                        <Link><i class="fa-solid fa-cart-shopping text-2xl py-3"></i></Link>
                    </div>
                    <div className='flex flex-wrap justify-between gap-x-1 gap-y-5'>
                        {
                            Knives.map((item, key) => {
                                if (item.isFeatured) {
                                    let style
                                    if (key % 3 === 2) style = 'md:justify-end'
                                    else if (key % 3 === 1) style = 'md:justify-center'
                                    else style = 'md:justify-start'
                                    return (
                                        <div key={key} className={'flex justify-center w-full lg:w-1/3 xl:w-1/4 ' + style}>
                                            <KnifeMini
                                                data={item}
                                            />
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <div className='flex my-5 justify-center'>
                        <Link className='btn bg-slate-500 text-white font-myHeading text-xl' to='/'>See All</Link>
                    </div>
                </div>
            </div>
            <Banner
                title="You are no mere mortal"
            />
            <div className='flex flex-col md:grid grid-cols-2 '>
                <img className='mb-7 md:mb-0 h-full object-cover' src="https://images.pexels.com/photos/35860/forge-craft-hot-form.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className='w-full flex justify-center items-center mb-7 md:mb-0'>
                <ContactForm />
                </div>
            </div>
            <Footer />
        </>
    )
}
