import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const ProjectCard = ({ title, backgroundImage, details }) => {
    return (
        <div className="relative w-full max-w-[400px] h-[500px] overflow-hidden group">
            {/* Imagen de fondo */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            {/* Título en la parte superior */}
            <div className="relative flex z-10 p-4">
                <h3 className="w-full text-xl md:text-2xl font-bold text-primaryaccent px-2 py-1">
                    {title}
                </h3>
                <div className='p-2 bg-black rounded-full flex justify-center items-center'>
                    <ArrowUpRight size={24} color='white' />
                </div>
            </div>

            {/* Degradado y detalles al hacer hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10 flex items-end">
                <p className="text-primar p-4 text-sm md:text-base">
                    {details}
                </p>
            </div>
        </div>
    )
}

export default ProjectCard