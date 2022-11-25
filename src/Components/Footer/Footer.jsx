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
            <div className='bg-orange text-white flex justify-around py-4'>
                <div className='flex'>
                    <img src="" alt="logo" />
                </div>
                <div className=''>
                    <div className='flex flex-col gap-4'>
                        <Linkrouter className='flex gap-4' to='/'><GiDogHouse/>Inicio</Linkrouter>
                        <Linkrouter className='flex gap-4' to={'/alimento-para-mascotas'}><FaDog/>Perros</Linkrouter>
                        <Linkrouter className='flex gap-4' to={'/alimento-para-mascotas'}><FaCat/>Gatos</Linkrouter>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col gap-4'>
                        <Linkrouter to={'/contacto'} >Contacto</Linkrouter>
                        <Linkrouter to=''>Preguntas Frecuentes</Linkrouter>
                        <Linkrouter to=''>Politicas de Envio</Linkrouter>
                    </div>
                </div>
                {/* <div className='flex flex-col gap-4'>
                        <p>Términos de Uso</p>
                        <p>Condiciones de suministro</p>
                        <p>Política de privacidad</p>
                        <p>Política de cookies</p>
                        <p>Preferencias de cookies</p>
                    </div> */}
                <div className='flex flex-col gap-4'>
                    <p className='flex gap-3'><IoLogoWhatsapp/> 15-1234-2222</p>
                    <a href='mailto:lolapetshop@gamil.com'className='flex gap-3'><IoIosMail/>lolapetshop@gamil.com</a>
                    <p className='flex gap-3'><IoMdPaw/> Petshop 1234</p>
                </div>
                <button className='' onClick={scrollTopUp}>
                    <IoIosArrowUp className='scroll-smooth border-2 bg-white/20 rounded w-10 h-10 hover:-translate-y-1 hover:bg-black/20' />
                </button>
            </div>
        </>
    );
}
