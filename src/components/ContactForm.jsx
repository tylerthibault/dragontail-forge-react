import React from 'react'

export default function ContactForm() {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <h2 className='text-4xl'>Contact Us Today</h2>
            <p className='font-myHeading text-xl'>Inquire today and let's etch your story on steel</p>
            <form className='w-1/2'>
                <div className='flex gap-3 w-full'>
                    <div className='mb-3 w-full'>
                        <label htmlFor="firstName"></label>
                        <input type="text" name="firstName" id="firstName" placeholder='First Name' />
                    </div>
                    <div className='mb-3 w-full'>
                        <label htmlFor="lastName"></label>
                        <input type="text" name="lastName" id="lastName" placeholder='Last Name' />
                    </div>
                </div>
                <div className='mb-3 w-full'>
                    <label htmlFor="email"></label>
                    <input type="text" name="email" id="email" placeholder='Email' />
                </div>
                <div className='mb-3 w-full'>
                    <label htmlFor="phoneNum"></label>
                    <input type="number" name="phoneNum" id="phoneNum" placeholder='Phone Number' />
                </div>
                <div className='mb-3 w-full'>
                    <label htmlFor="knifeId"></label>
                    <input type="text" name="knifeId" id="knifeId" placeholder='Knife Id' />
                </div>
                <div className='mb-3 w-full'>
                    <label htmlFor="message"></label>
                    <textarea className='input capitalize' name="message" id="message" cols="30" rows="10" placeholder='Write your message here'></textarea>
                </div>
                <div className='flex justify-end'>
                <button className='btn-accent font-myHeading text-xl py-3'>Send</button>
                </div>
            </form>
        </div>
    )
}
