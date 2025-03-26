import React from 'react'
import GridMotion from './bits/GridMotion'

// note: you'll need to make sure the parent container of this component is sized properly
const gridimgStyle = ""

const items = [
    'https://i.imgur.com/LFNx2IG.jpg',
    'https://i.imgur.com/94UabPr.jpg',
    'https://i.imgur.com/XjAstAr.jpg',
    'https://i.imgur.com/zGPOgOT.jpg',
    'https://i.imgur.com/pSp5YC2.jpg',
    'https://i.imgur.com/OAa4jsy.jpg',
    'https://i.imgur.com/9QJOY71.jpg',
    'https://i.imgur.com/BmC2QXp.jpg',
    'https://i.imgur.com/bagPsQM.jpg',
    'https://i.imgur.com/vjjkXOP.jpg',
    'https://i.imgur.com/94UabPr.jpg',
    'https://i.imgur.com/XjAstAr.jpg',
    'https://i.imgur.com/LFNx2IG.jpg',
    'https://i.imgur.com/9QJOY71.jpg',
    'https://i.imgur.com/pSp5YC2.jpg',
    'https://i.imgur.com/OAa4jsy.jpg',
    'https://i.imgur.com/BmC2QXp.jpg',
    'https://i.imgur.com/9QJOY71.jpg',
    'https://i.imgur.com/bagPsQM.jpg',
    'https://i.imgur.com/zGPOgOT.jpg',
    'https://i.imgur.com/vjjkXOP.jpg',
    'https://i.imgur.com/LFNx2IG.jpg',
    'https://i.imgur.com/94UabPr.jpg',
    'https://i.imgur.com/XjAstAr.jpg',
    'https://i.imgur.com/9QJOY71.jpg',
    'https://i.imgur.com/vjjkXOP.jpg',
    'https://i.imgur.com/XjAstAr.jpg',
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