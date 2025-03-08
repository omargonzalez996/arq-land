import React from 'react'
import Contador from './Contador'

const contadores = [
    { from: 0, to: 78, descripcion: "Ideas transformadas en proyectos" },
    { from: 0, to: 10, descripcion: "Años de experiencia" },
    { from: 0, to: 56, descripcion: "Clientes Satisfechos" }
]

const Stats = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto px-4 py-10">
            {contadores.map((contador, index) => (
                <div key={index} className="text-center border-y border-primaryaccent p-4">
                    <Contador
                        from={contador.from}
                        to={contador.to}
                        descripcion={contador.descripcion}
                    />
                </div>
            ))}
        </div>
    )
}

export default Stats