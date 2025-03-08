import React, { useState } from 'react'
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavLinks, setShowNavLinks] = useState(false);
    let location = useLocation();

    const isActive = (route) => {
        if (route === location.pathname) {
            return true
        }
    }

    return (
        <nav className="fixed top-0 left-0 w-full bg-black p-4 z-50 shadow-md backdrop-blur-md">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo con animación */}
                <div className="w-10 flex items-center justify-center p-2">
                    <img src="/logo_light.png" alt="logo" />
                </div>

                {/* Opciones para pantallas grandes */}
                <div className="hidden md:flex space-x-6">
                    <NavLink to="/" className={isActive('/') ? 'text-secondary' : 'text-primaryaccent hover:text-blue-400'}>
                        INICIO
                    </NavLink>
                    <NavLink to="/servicios" className={isActive('/servicios') ? 'text-secondary' : 'text-primaryaccent hover:text-blue-400'}>
                        SERVICIOS
                    </NavLink>
                    <NavLink to="/contacto" className={isActive('/contacto') ? 'text-secondary' : 'text-primaryaccent hover:text-blue-400'}>
                        CONTACTO
                    </NavLink>
                </div>

                {/* Botón de menú con transición */}
                <button
                    className="md:hidden text-secondary transition-transform duration-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Menú desplegable */}
            <motion.div
                className="md:hidden p-2 space-y-2 overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onAnimationComplete={() => setShowNavLinks(isOpen)} // Muestra los NavLinks solo cuando el menú está abierto
            >
                {showNavLinks && (
                    <>
                        <motion.div
                            className="block text-primaryaccent hover:text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            <NavLink to="/" className={isActive('/') ? 'text-secondary' : 'text-primaryaccent'}>
                                INICIO
                            </NavLink>
                        </motion.div>
                        <motion.div
                            className="block text-primaryaccent hover:text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                        >
                            <NavLink to="/servicios" className={isActive('/servicios') ? 'text-secondary' : 'text-primaryaccent'}>
                                SERVICIOS
                            </NavLink>
                        </motion.div>
                        <motion.div
                            className="block text-primaryaccent hover:text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                        >
                            <NavLink to="/contacto" className={isActive('/contacto') ? 'text-secondary' : 'text-primaryaccent'}>
                                CONTACTO
                            </NavLink>
                        </motion.div>
                    </>
                )}
            </motion.div>
        </nav>
    )
}

export default Navbar