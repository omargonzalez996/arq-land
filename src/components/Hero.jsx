import React from 'react'
import GridMotion from './bits/GridMotion'

// note: you'll need to make sure the parent container of this component is sized properly
const gridimgStyle = ""

const items = [
    'https://i.ibb.co/mrhHJZ4w/ila-01.jpg',
    'https://i.ibb.co/ZpGkFT7s/ila-02.jpg',
    'https://i.ibb.co/mWRRG2V/ila-03.jpg',
    'https://i.ibb.co/gbzMjSmb/ila-04.jpg',
    'https://i.ibb.co/svFNhPBR/ila-05.jpg',
    'https://i.ibb.co/RwVTcWc/ila-07.jpg',
    'https://i.ibb.co/ZzWzxH5c/ila-08.jpg',
    'https://i.ibb.co/VYLdd1j4/ila-09.jpg',
    'https://i.ibb.co/mrhHJZ4w/ila-01.jpg',
    'https://i.ibb.co/ZpGkFT7s/ila-02.jpg',
    'https://i.ibb.co/mWRRG2V/ila-03.jpg',
    'https://i.ibb.co/gbzMjSmb/ila-04.jpg',
    'https://i.ibb.co/svFNhPBR/ila-05.jpg',
    'https://i.ibb.co/RwVTcWc/ila-07.jpg',
    'https://i.ibb.co/ZzWzxH5c/ila-08.jpg',
    'https://i.ibb.co/VYLdd1j4/ila-09.jpg',
    'https://i.ibb.co/mrhHJZ4w/ila-01.jpg',
    'https://i.ibb.co/ZpGkFT7s/ila-02.jpg',
    'https://i.ibb.co/mWRRG2V/ila-03.jpg',
    'https://i.ibb.co/gbzMjSmb/ila-04.jpg',
    'https://i.ibb.co/svFNhPBR/ila-05.jpg',
    'https://i.ibb.co/RwVTcWc/ila-07.jpg',
    'https://i.ibb.co/ZzWzxH5c/ila-08.jpg',
    'https://i.ibb.co/VYLdd1j4/ila-09.jpg',
    'https://i.ibb.co/mrhHJZ4w/ila-01.jpg',
    'https://i.ibb.co/ZpGkFT7s/ila-02.jpg',
    'https://i.ibb.co/mWRRG2V/ila-03.jpg',
    'https://i.ibb.co/gbzMjSmb/ila-04.jpg'
];


const Hero = () => {
    return (
        <div className="w-screen h-screen relative">
            {/* Logo centrado */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40">
                <img src="/imago.png" alt="Logo" className="w-[290px] md:w-[600px]" />
            </div>
            {/* Capa oscura */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-30"></div>

            {/* GridMotion con menor opacidad opcional */}
            <GridMotion items={items} className="relative opacity-80" />
        </div>

    )
}

export default Hero