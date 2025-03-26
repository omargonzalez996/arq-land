import React from 'react'
import CountUp from './bits/CountUp'

const Contador = ({ from = 0, to = 10, descripcion = "Count" }) => {
    return (
        <div className='flex flex-col justify-center items-center font-bold space-y-2'>
            <div className='flex'>
                <p className='text-7xl text-secondary'>+</p>
                <CountUp
                    from={from}
                    to={to}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text text-7xl text-secondary"
                />
            </div>
            <p className='text-primaryaccent text-4xl'>
                {descripcion}
            </p>
        </div>
    )
}

export default Contador