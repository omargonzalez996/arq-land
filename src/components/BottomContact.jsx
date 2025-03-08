import React from 'react'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';


const BottomContact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const result = await emailjs.send(
                'SERVICE_ID',
                'TEMPLATE_ID',
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                },
                'PUBLIC_KEY'
            );
            console.log('Correo enviado:', result.text);
            alert('¡Mensaje enviado con éxito!');
            reset(); // Limpia el formulario
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            alert('Hubo un error al enviar el mensaje. Intenta de nuevo.');
        }
    };
    return (
        <div className="max-w-[600px] mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 bg-black p-6 rounded-lg shadow-md"
            >
                {/* Campo Nombre */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register('name', { required: 'El nombre es obligatorio' })}
                        className={`mt-1 block w-full px-3 py-2 border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="Tu nombre"
                    />
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                </div>

                {/* Campo Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary">
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', {
                            required: 'El correo es obligatorio',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Ingresa un correo válido',
                            },
                        })}
                        className={`mt-1 block w-full px-3 py-2 border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="tu@ejemplo.com"
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                </div>

                {/* Campo Mensaje */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary">
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        {...register('message', { required: 'El mensaje es obligatorio' })}
                        rows="4"
                        className={`mt-1 block w-full px-3 py-2 border resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="Escribe tu mensaje aquí"
                    />
                    {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                </div>

                {/* Botón de enviar */}
                <div className="text-center">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full sm:w-auto px-6 py-3 bg-black text-primaryaccent shadow border border-primaryaccent hover:bg-primaryaccent hover:text-primary focus:outline-none focus:ring-2 focus:ring-blue-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default BottomContact