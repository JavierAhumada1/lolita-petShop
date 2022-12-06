import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'

export default function VerificationMail() {

    return (
        <>
            <main className='bg-verify-img3 bg-contain flex justify-center items-start pt-28 bg-no-repeat min-h-[70vh]'>
                <div className='flex items-center px-8 flex-col lg:gap-8 lg:flex'>
                    <h2 className='font-bold text-red text-4xl py-4'>Verificaste correctamente tu cuenta!</h2>
                    <div>
                        <LinkRouter to="/iniciar-sesion" className='rounded-md bg-[rgba(237,100,54,0.8)] px-6 py-2 font-nunito font-medium text-[1.2rem] text-white transition hover:bg-orange hover:-translate-y-1'>Iniciá sesión</LinkRouter>
                    </div>
                </div>
            </main>
        </>
    )
}