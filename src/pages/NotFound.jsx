import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black py-10 px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-[600px] mx-auto">
                {/* Título */}
                <h1 className="text-6xl sm:text-8xl font-bold text-secondaryaccent mb-4">
                    404
                </h1>
                <h2 className="text-2xl sm:text-3xl font-semibold text-secondary mb-6">
                    ¡Página no encontrada!
                </h2>

                {/* Mensaje */}
                <p className="text-lg text-primaryaccent mb-8">
                    Lo sentimos, parece que te has perdido. La página que buscas no existe o ha sido movida.
                </p>

                {/* Botón de regreso */}
                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-black text-white font-medium border border-primaryaccent hover:text-primary shadow hover:bg-primaryaccent transition-colors duration-300"
                >
                    Volver al Inicio
                </Link>
            </div>
        </div>
    );
};

export default NotFound;