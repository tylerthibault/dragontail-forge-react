import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/landingpage/Header'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

import { Knives } from '../data/knives'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import ProductsShow from '../components/ProductsShow'
import Testimonials from '../components/TestimonialList'
import AboutUs from '../components/landingpage/AboutUs'

export default function LandingPage() {
    const [allKnives, setAllKnives] = useState(Knives)

    return (
        <>
            {/* Header */}
            <Header />

            {/* Navbar */}
            <Navbar />

            {/* About Us */}
            <div className=''>
                <AboutUs />
            </div>

            {/* Banner */}
            <Banner
                title="You are no mere mortal"
            />

            {/* Featured Products */}
            <div className='my-7'>
                <ProductsShow
                    products={allKnives.filter((k) => k.isFeatured)}
                />
            </div>

            {/* Banner */}
            <Banner
                title="There are no ordinary people"
            />


            {/* Testimonials */}
            <div className='my-7'>
                <Testimonials />
            </div>

            {/* Banner */}
            <Banner
                title=" where steel meets soul, and your story finds its everlasting edge"
                textStyle="text-xl md:text-4xl"
            />

            {/* Contact Section */}
            <div className='flex flex-col md:grid grid-cols-2 '>
                <img className='mb-7 md:mb-0 h-full object-cover border-b-[0.75em] md:border-r-[0.75em] md:border-b-0 border-black' src="https://images.pexels.com/photos/35860/forge-craft-hot-form.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className='w-full flex justify-center items-center mb-7 md:mb-0'>
                    <ContactForm />
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}
