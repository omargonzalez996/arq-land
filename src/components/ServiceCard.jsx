import React from 'react'

const ServiceCard = ({ title, description, backgroundImage }) => {
    return (
        <div
            className="relative w-full max-w-[350px] h-[250px] bg-cover bg-center rounded-none overflow-hidden transition-all duration-300 ease-in-out cursor-pointer group"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-300 ease-in-out group-hover:backdrop-blur-md group-active:backdrop-blur-md"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 group-active:bg-black/70 transition-all duration-300 ease-in-out" />

            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center p-5 transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-bold text-shadow-md text-secondary">{title}</h3>
                <p className="mt-2 text-base opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 group-active:opacity-100 group-active:translate-y-0 transition-all duration-300 ease-in-out">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ServiceCard