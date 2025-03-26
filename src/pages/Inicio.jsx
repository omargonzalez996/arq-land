import React from 'react'
import HomeServices from '../components/HomeServices'
import HomeAbout from '../components/HomeAbout'
import HomePortafolio from '../components/HomePortafolio'
import BottomContact from '../components/BottomContact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Inicio = () => {
    return (
        <>
            <Hero />
            <div className='container mx-auto max-w-[1200px] p-5'>
                <HomeServices />
                <HomeAbout />
                <HomePortafolio />
                <BottomContact />
            </div>
            <Footer />
        </>
    )
}

export default Inicio