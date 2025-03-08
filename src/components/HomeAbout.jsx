import React from 'react'
import Carousel from './bits/Carrousel'
import Stats from './Stats'

const HomeAbout = () => {
    return (
        <div className="my-20">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-[1200px] mx-auto px-4">
                {/* Columna 1: Título */}
                <div className="flex-1 text-left md:text-right md:border-r md:border-white md:pr-8">
                    <h2 className="text-5xl font-bold text-secondary">
                        Diseñamos espacios, Creamos experiencias
                    </h2>
                </div>
                {/* Columna 2: Párrafo */}
                <div className="flex-1 text-left max-w-[800px]">
                    <p className='text-primaryaccent'>
                        En ILArchDesign, estamos listos para escuchar tus ideas y transformarlas en espacios únicos y funcionales. Contáctanos hoy mismo y empecemos a trabajar juntos en tu próximo proyecto.
                    </p>
                </div>
            </div>
            <Carousel />
            <Stats />
            <div className="my-32 flex flex-col md:flex-row justify-center items-center gap-8 max-w-[1200px] mx-auto px-4">
                <div className="flex md:w-1/2 text-left md:text-right md:border-r md:border-white md:pr-8">
                    <p className='text-3xl' >
                        ¿Listo para dar vida a tu próximo proyecto?
                        <b className='text-secondary'> Contáctanos y hagamos que tus ideas cobren forma.</b>
                    </p>
                </div>
                <div className="flex md:w-1/2 justify-center text-left max-w-[800px]">
                    <button
                        className='border bg-black border-primaryaccent text-primaryaccent hover:bg-primaryaccent hover:text-primary px-5 py-3 transition-colors duration-500'>
                        CONTACTANOS
                    </button>
                </div>
            </div>

        </div>
    )
}

export default HomeAbout