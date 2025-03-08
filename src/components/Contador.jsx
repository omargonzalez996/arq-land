import React from 'react'
import CountUp from './bits/CountUp'

const Contador = ({ from = 0, to = 10, descripcion = "Count" }) => {
    return (
        <div className='flex flex-col justify-center items-center font-bold space-y-2'>
            <CountUp
                from={from}
                to={to}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-7xl text-secondary"
            />
            <p className='text-primaryaccent'>
                {descripcion}
            </p>
        </div>
    )
}

export default Contador