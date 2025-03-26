import React from 'react'
import { LuSquareDashed } from "react-icons/lu";
import { MdOutlinePinDrop } from "react-icons/md";
import { RiBuilding2Line } from "react-icons/ri";

const ProjectDisplay = ({ hashtag, title, description, category, date, views, backgroundImage }) => {
    return (
        <div
            className="relative w-full max-w-[600px] h-[400px] bg-cover bg-center rounded-lg overflow-hidden shadow-lg mx-auto"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Capa de oscurecimiento */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Contenido principal */}
            <div className="relative z-10 flex flex-col h-full p-2">
                {/* Hashtag */}
                <div className="absolute top-4 left-4">
                    <span className="bg-primary text-secondary text-xs font-semibold uppercase px-3 py-1 rounded-full">
                        {hashtag}
                    </span>
                </div>

                {/* Título y descripción centrados */}
                <div className="flex-1 flex flex-col justify-center items-center text-center text-white">
                    <h3 className="text-3xl font-bold text-shadow-md mb-4 text-secondary">{title}</h3>
                    <p className="text-sm max-w-[500px] text-shadow-sm">{description}</p>
                </div>

                {/* Botón "Continuar Leyendo" */}
                <div className="flex justify-center mb-6">
                    <button className="border border-white text-white text-sm font-semibold px-4 py-2 rounded hover:bg-white/20 transition-all duration-300">
                        CONTINUAR LEYENDO
                    </button>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center bg-black text-primaryaccent text-xs font-normal py-2 px-2 rounded-md">
                    <span className='flex justify-center items-center'>
                        <div className='mx-2'><RiBuilding2Line /></div>
                        {category}
                    </span>
                    <span className='flex justify-center items-center'>
                        <div className='mx-2'><MdOutlinePinDrop /></div>
                        {date}
                    </span>
                    <span className='flex justify-center items-center'>
                        <div className='mx-2'><LuSquareDashed /></div>
                        {views}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProjectDisplay