import React from 'react'

export default function Contact() {
    return (
        <>
            <div className='font-nunito min-h-[70vh] bg-contact-img bg-cover bg-no-repeat'>
                <div className="md:grid md:grid-cols-5 md:gap-6 p-5 ">
                    <div className='pt-10 flex flex-wrap'>
                        <h3 className="text-lg font-medium font-nunito text-center">Dejanos tu mensaje. Estaremos encantados de responderte.</h3>
                    </div>
                    <div className='mt-5 md:grid-cols-3 md:gap-6 flex justify-center my-5'>
                        <form className='w-96 text-base font-nunito rounded bg-green'>
                            <div className='p-2'>
                                <div className='inputContact'>
                                    <label className='flex flex-col font-semibold py-1 gap-2  px-5'>Nombre
                                        <input className="rounded-md py-2 pl-2" type='text' name='nombre' placeholder='ej: Maria' required />
                                    </label>
                                </div>
                                <div className='inputContact1'>
                                    <label className='flex flex-col font-semibold py-1 gap-2  px-5'>Email
                                        <input className="rounded-md py-2 pl-2" type='email' name='email' placeholder='ej: marialopez@gmail.com' required />
                                    </label>
                                </div>
                                <div className='inputContact2'>
                                    <label className='flex flex-col font-semibold py-1 gap-2  px-5'>Teléfono
                                        <input className="rounded-md py-2 pl-2" type='tel' name='telefono' placeholder='ej: 0800 230 201' required />
                                    </label>
                                </div>
                                <div>
                                    <label className='flex flex-col font-semibold py-1 gap-2 px-5'>Mensaje
                                        <textarea className="rounded-md pl-2" type='text' name='mensaje' placeholder='Mensaje' required />
                                    </label>
                                </div>
                            </div>
                            <div className="py-6 text-center">
                                <button className="bg-black text-white px-12 rounded-md py-2" type="submit">ENVIAR</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}

