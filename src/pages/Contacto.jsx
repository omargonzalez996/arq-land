import React from 'react'
import { HardHat } from 'lucide-react'
import { Link } from 'react-router-dom'
const Contacto = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black py-10 px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-[600px] mx-auto">
                {/* Título */}
                <div className="flex justify-center w-full text-6xl sm:text-8xl font-bold text-secondaryaccent mb-4">
                    <HardHat size={64} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-secondary mb-6">
                    EN CONSTRUCCION
                </h2>

                {/* Botón de regreso */}
                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-black text-white font-medium border border-primaryaccent hover:text-primary shadow hover:bg-primaryaccent transition-colors duration-300"
                >
                    Volver al Inicio
                </Link>
            </div>
        </div>
    )
}

export default Contacto