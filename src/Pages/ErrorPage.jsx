import React from "react";
import { Link as LinkRouter } from "react-router-dom";


export default function ErrorPage() {
    return (
        <>
            <main className="min-h-[70vh]">
                <div className="flex items-center justify-center">
                    <div className="px-4 lg:py-12">
                        <div className="lg:gap-4 lg:flex">
                            <div className="flex flex-col gap-1 items-center justify-center md:py-24 lg:py-32">
                                <h1 className="font-bold text-red text-9xl">404</h1>
                                <p className="mb-2 text-2xl font-bold text-center md:text-3xl">
                                    <span className="text-red">Oops!</span> Algo salió mal y no encontramos lo que buscas. . .
                                </p>
                                <p className="mb-8 text-center text-gray-500 md:text-lg">
                                    La página que buscas no existe.
                                </p>
                                <LinkRouter
                                    to="/alimento-para-perros"
                                    className="rounded-md bg-[rgba(237,100,54,0.8)] px-6 py-2 font-nunito font-medium text-[1.2rem] text-white transition hover:bg-orange hover:-translate-y-1"
                                >Productos</LinkRouter>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
{/* <div>
            <div>
                <p>ERROR 404</p>
                <p>Ups!!! Algo salió mal y no encontramos lo que buscas. . .</p>
            </div>
            <LinkRouter to='/alimento-para-perros'>Productos</LinkRouter>
        </div> */}