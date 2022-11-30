import React from 'react'

export default function Contact() {
    return (
        <>
            <div className='font-nunito min-h-[70vh] items-center bg-contact-img bg-cover bg-no-repeat'>
                <h3 className="text-lg font-medium leading-6 font-nunito text-center py-4">Dejanos tu mensaje. Estaremos encantados de responderte.</h3>
                <div className="md:grid md:grid-cols-3 md:gap-6 p-5">
                    <div className='mt-5 md:grid-cols-3 md:gap-6 flex justify-center text-center my-5'>
                        <form className='w-96 text-base font-nunito rounded bg-green'>
                            <div className='p-2'>
                                <div className='inputContact'>
                                    <label className='flex flex-col text-white font-semibold py-1 gap-2  px-5'>Nombre
                                        <input className="rounded px-2" type='text' name='nombre' placeholder='ej: Maria' required />
                                    </label>
                                </div>
                                <div className='inputContact1'>
                                    <label className='flex flex-col text-white font-semibold py-1 gap-2  px-5'>Email
                                        <input className="rounded px-2" type='email' name='email' placeholder='ej: marialopez@gmail.com' required />
                                    </label>
                                </div>
                                <div className='inputContact2'>
                                    <label className='flex flex-col text-white font-semibold py-1 gap-2  px-5'>Teléfono
                                        <input className="rounded px-2" type='tel' name='telefono' placeholder='ej: 0800 230 201' required />
                                    </label>
                                </div>
                                <div>
                                    <label className='flex flex-col text-white font-semibold py-1 gap-2 px-5'>Mensaje
                                        <textarea className="rounded px-2" type='text' name='mensaje' placeholder='Mensaje' required />
                                    </label>
                                </div>
                            </div>
                            <div className="bg-black rounded p-2 m-10 text-center">
                                <button className="text-white" type="submit">ENVIAR</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}

