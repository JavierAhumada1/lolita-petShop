import { Link as Linkrouter } from 'react-router-dom'
import { IoIosArrowUp, IoIosMail, IoLogoWhatsapp, IoMdPaw } from "react-icons/io"
import { FaCat, FaDog } from "react-icons/fa"
import { GiDogHouse } from "react-icons/gi"

export default function Footer() {
    const scrollTopUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            <div className='bg-orange text-white flex flex-col gap-3 lg:justify-evenly md:flex-row md:items-center md:justify-center py-4 min-h-[20vh]'>
                <img src="" alt="logo" />
                <div className='flex bg-black bg-opacity-30 justify-center sm:bg-orange '>
                    <div className='flex sm:flex-col gap-4'>
                        <Linkrouter className='flex gap-1' to='/'><GiDogHouse />Inicio</Linkrouter>
                        <Linkrouter className='flex gap-1' to={'/alimento-para-mascotas'}><FaDog />Perros</Linkrouter>
                        <Linkrouter className='flex gap-1' to={'/alimento-para-mascotas'}><FaCat />Gatos</Linkrouter>
                    </div>
                </div>
                <div className='flex bg-black bg-opacity-30 justify-center sm:flex-col gap-4 sm:bg-orange sm:items-center'>
                    <Linkrouter to={'/contacto'} >Contacto</Linkrouter>
                    <Linkrouter to='/preguntas-frecuentes'>Preguntas Frecuentes</Linkrouter>
                    <Linkrouter to=''>Politicas de Envio</Linkrouter>
                </div>
                {/* <div className='flex flex-col gap-4'>
                        <p>Términos de Uso</p>
                        <p>Condiciones de suministro</p>
                        <p>Política de privacidad</p>
                        <p>Política de cookies</p>
                        <p>Preferencias de cookies</p>
                    </div> */}
                <div className='flex bg-black bg-opacity-30 justify-center px-5 sm:flex-col gap-4 sm:bg-orange sm:items-center'>
                    <p className='flex gap-1'><IoLogoWhatsapp /> 15-1234-2222</p>
                    <a href='mailto:lolapetshop@gamil.com' className='flex gap-1'><IoIosMail />lolapetshop@gamil.com</a>
                    {/* <p className='flex gap-1'><IoMdPaw /> Petshop 1234</p> */}
                </div>
                <button className='flex relative item-center justify-center py-5 md:left-0 md:bottom-0' onClick={scrollTopUp}>
                    <IoIosArrowUp className=' scroll-smooth border-2 bg-white/20 rounded w-10 h-10 hover:-translate-y-1 hover:bg-black/20' />
                </button>
            </div>
        </>
    );
}
