import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary text-secondary py-10">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Grid responsivo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Sección 1: Sobre Nosotros */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">ILArchDesign</h3>
                        <p className="text-sm text-primaryaccent">
                            Diseñamos espacios únicos y funcionales que transforman tus ideas en realidad. Innovación, creatividad y calidad en cada proyecto.
                        </p>
                    </div>

                    {/* Sección 2: Enlaces Útiles */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Enlaces Útiles</h3>
                        <ul className="space-y-2 text-sm text-primaryaccent">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Proyectos
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Servicios
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Sección 3: Contacto */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                        <ul className="space-y-2 text-sm text-primaryaccent">
                            <li><b>Email:</b> info@ilarchdesign.com</li>
                            <li><b>Teléfono:</b> +57 300 123 4567</li>
                            <li><b>Dirección:</b> Calle Ficticia 123, Ciudad, País</li>
                        </ul>
                    </div>

                    {/* Sección 4: Redes Sociales */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-primaryaccent transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    {/* Ícono de Facebook */}
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                            <a href="#" className="text-primaryaccent transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" stroke-width="2" d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z" /><circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" /><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" /></g></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Línea divisoria y derechos reservados */}
                <div className="mt-8 pt-8 border-t border-primaryaccent text-center text-sm text-primaryaccent">
                    <p>&copy; {new Date().getFullYear()} ILArchDesign. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;