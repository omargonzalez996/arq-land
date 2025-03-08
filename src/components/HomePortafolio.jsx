import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
    {
        imgSrc: "https://i.ibb.co/mrhHJZ4w/ila-01.jpg",
        title: "Proyecto 1",
        description: "Descripción del Proyecto 1"
    },
    {
        imgSrc: "https://i.ibb.co/ZpGkFT7s/ila-02.jpg",
        title: "Proyecto 2",
        description: "Descripción del Proyecto 2"
    },
    {
        imgSrc: "https://i.ibb.co/mWRRG2V/ila-03.jpg",
        title: "Proyecto 3",
        description: "Descripción del Proyecto 3"
    }
]

const HomePortafolio = () => {
    return (
        <div className="my-20">
            <div className='flex justify-center text-center'>
                <hr />
                <h2 className='text-5xl font-light text-secondary'>PROYECTOS</h2>
                <hr />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto px-4 py-10">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        backgroundImage={project.imgSrc}
                        details={project.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default HomePortafolio