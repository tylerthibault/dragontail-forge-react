import React from 'react'

export default function AboutUs() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center'>
            {/* Section */}
            <div className='text-left mx-7 py-3'>
                <p>Welcome to <span className='font-myHeading'>Dragontail Forge</span>, a sanctuary of craftsmanship and passion for the art of bladesmithing. I'm David, the hands and heart behind every blade that comes to life in this forge. As a former U.S. Army veteran, I discovered the transformative power of forging steel, breathing new life into my journey. Each knife I create holds a story waiting to be told – a story that blends purpose, precision, and the indomitable spirit of adventure.</p>
            </div>

            {/* Section */}
            <div className=' flex flex-col gap-3 text-left mx-7 py-3'>
                <p>Step into the realm of Dragontail Forge, and let me craft a blade that speaks to your soul, guiding you through the wilds of life with strength and purpose. Learn more about my journey and the art of bladesmithing on the About Me page. Together, let's shape your story into a legend that will stand the test of time.</p>
                <p>Welcome to the heart of the forge, where dreams are forged into reality.</p>
            </div>

            {/* Section */}
            <div className='md:border-r-[0.75em] border-t-[0.75em] lg:border-t-0 lg:border-x-[0.75em] border-black h-full'>
                <img className='h-full object-cover object-right' src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/355363078_9351674868236503_3352577227081706991_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ozJZFf3tyD4AX9i1pIy&_nc_ht=scontent-sjc3-1.xx&oh=00_AfBP61QvMe8rPP6aLV1liPYQ70mvvegKBig7AD4xA_7eFg&oe=64D0B6F2" alt="" />
            </div>

            {/* Section */}
            <div className='bg-myaccent2 md:border-t-[0.5em] lg:border-t-0 border-black w-full h-full font-myHeading text-2xl flex flex-col justify-center items-center p-7 sm:p-0'>
                <p>You have an adventure waiting for you.</p>
                <p>Every knife tells a story.</p>
                <p>Let’s tell yours together.</p>
            </div>
        </div>
    )
}
