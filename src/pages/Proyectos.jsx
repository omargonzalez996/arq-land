import React from 'react'
import Footer from '../components/Footer';
import ProjectDisplay from '../components/ProjectDisplay';

const projects = [
    {
        hashtag: '#RESIDENCIAl',
        title: 'MACARIO CASA DE DESCANSO',
        description:
            'PROYECTO DE VIVIENDA DE RETIRO DE 79 M2, EN UN NIVEL, SOBRE UNA SUPERFICIE DE 130M2, EN UN COTO CERRADO.',
        category: 'RESIDENCIAL, UNIFAMILIAR',
        date: 'JARAL DEL PROGRESO, GUANAJUATO, 2023',
        views: '79m²',
        backgroundImage: 'https://i.imgur.com/qz1itBC.jpg',
    },
    {
        hashtag: '#RESIDENCIAl',
        title: 'CASA JANAI',
        description:
            'PROYECTO DE VIVIENDA UNIFAMILIAR DE 189 M2, DE TRES NIVELES, SOBRE UNA SUPERFICIE DE 429M2, EN UN COTO CERRADO.',
        category: 'RESIDENCIAL, UNIFAMILIAR',
        date: 'JARAL DEL PROGRESO, GUANAJUATO, 2023',
        views: '189m²',
        backgroundImage: 'https://i.imgur.com/jMF7H9o.jpg',
    },
    {
        hashtag: '#RESIDENCIAl',
        title: 'CASA LA HOYA',
        description:
            'ANTEPROYECTO DE VIVIENDA UNIFAMILIAR DE 350 M2, EN TRES NIVELES, DONDE SU BUSCO EL EMPLEO DE LINEAS RECTAS Y GEOMETRIAS PURAS.',
        category: 'RESIDENCIAL, UNIFAMILIAR',
        date: 'VALLE DE SANTIAGO, GUANAJUATO. ',
        views: '350m²',
        backgroundImage: 'https://i.imgur.com/pYz7Nv9.jpg',
    },
];

const Proyectos = () => {
    return (
        <>
            <div
                style={{ backgroundImage: `url(https://i.imgur.com/bPL2JXc.jpg)` }}
                className='mt-20 w-screen h-[350px] bg-fixed bg-cover bg-center flex justify-center items-center align-middle mx-auto px-4'>
                <h2 className="text-5xl font-bold text-primaryaccent bg-black p-5 rounded-md shadow-md text-center">
                    NUESTROS PROYECTOS
                </h2>
            </div>

            <div className="my-20">
                <div className="flex flex-col justify-center items-center gap-8 max-w-[1200px] mx-auto px-4">
                    <div className="text-left max-w-[800px]">
                        <p className="text-primaryaccent text-center">
                            En ILArchDesign, <b className="text-secondary">damos vida a tus sueños</b> a través de proyectos únicos que combinan innovación, funcionalidad y estética. Explora algunos de nuestros trabajos más destacados.
                        </p>
                    </div>
                    <div className="flex flex-col gap-8 w-full">
                        {projects.map((project, index) => (
                            <ProjectDisplay
                                key={index}
                                hashtag={project.hashtag}
                                title={project.title}
                                description={project.description}
                                category={project.category}
                                date={project.date}
                                views={project.views}
                                backgroundImage={project.backgroundImage}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>


    )
}

export default Proyectos