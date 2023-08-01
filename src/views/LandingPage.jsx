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
            <div className='p-7 flex flex-col justify-center items-center'>
                <div className='w-10/12'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-2xl text-left'>Featured Knives</h2>
                        <Link><i class="fa-solid fa-cart-shopping text-2xl py-3"></i></Link>
                    </div>
                    <div className='flex flex-wrap justify-between gap-y-5'>
                        {
                            Knives.map((item, key) => {
                                let style
                                if (key % 3 === 2) style = 'justify-end'
                                else if (key % 3 === 1) style = 'justify-center'
                                return (
                                    <div key={key} className={'flex w-1/3 ' + style}>
                                        <KnifeMini
                                            data={item}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='flex mt-5 justify-center'>
                        <Link className='btn bg-slate-500 text-white font-myHeading text-xl' to='/'>See All</Link>
                    </div>
                </div>
            </div>
            <Banner
                title="You are no mere mortal"
            />
            <div className='py-7'>
                <ContactForm />
            </div>
            <Footer />
        </>
    )
}