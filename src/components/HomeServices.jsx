import React from 'react'
import ServiceCard from './ServiceCard';

const services = [
    {
        title: 'Diseño Arquitectónico Personalizado',
        description: 'Creamos proyectos únicos adaptados a tus necesidades, gustos y presupuesto, combinando funcionalidad con estética de vanguardia.',
        backgroundImage: 'https://i.imgur.com/yjudspi.png', // Imagen de fondo de ejemplo
    },
    {
        title: 'Interiorismo y Diseño de Espacios',
        description: 'Diseñamos interiores que reflejan tu estilo, optimizando el espacio y creando ambientes acogedores y prácticos.',
        backgroundImage: 'https://i.imgur.com/cXYTXOF.jpg',
    },
    {
        title: 'Reformas y Rehabilitación',
        description: 'Damos nueva vida a edificaciones existentes, respetando su esencia mientras las adaptamos a las demandas modernas.',
        backgroundImage: 'https://i.imgur.com/LFNx2IG.jpg',
    },
];
const HomeServices = () => {
    return (
        <div className="my-20">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-[1200px] mx-auto px-4">
                {/* Columna 1: Título */}
                <div className="flex-1 text-left md:text-right md:border-r md:border-white md:pr-8">
                    <h2 className="text-5xl font-bold text-primaryaccent">
                        Descubre Nuestros <b className='text-secondary' >Servicios</b>
                    </h2>
                </div>
                {/* Columna 2: Párrafo */}
                <div className="flex-1 text-left max-w-[1200px]">
                    <button
                        className='border bg-black border-primaryaccent text-primaryaccent hover:bg-primaryaccent hover:text-primary px-5 py-3 transition-colors duration-500'>
                        VER TODOS LOS SERVICIOS
                    </button>
                </div>
            </div>
            <div className="mt-10 flex justify-center items-center gap-8 max-w-[1200px] mx-auto px-4">
                <div className="flex-1 text-left max-w-[800px] mb-10">
                    <p className="text-primaryaccent">
                        En ILArchDesign,{' '}
                        <b className="text-secondary">transformamos ideas en espacios que inspiran.</b>{' '}
                        Somos un equipo apasionado de arquitectos comprometidos con la excelencia, la innovación y la satisfacción de nuestros clientes. Ofrecemos una amplia gama de servicios diseñados para dar vida a tus proyectos, desde el concepto inicial hasta la ejecución final.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 justify-center p-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        backgroundImage={service.backgroundImage}
                    />
                ))}
            </div>
            <div className="flex justify-center text-left">
                <button
                    className='border bg-black border-primaryaccent text-primaryaccent hover:bg-primaryaccent hover:text-primary px-5 py-3 transition-colors duration-500'>
                    VER TODOS LOS SERVICIOS
                </button>
            </div>
        </div>
    );
}

export default HomeServices