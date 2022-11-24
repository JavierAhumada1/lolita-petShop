import {Link as LinkRouter} from 'react-router-dom'

export default function Welcome() {
    return (
        <>
            <div className="bg-welcome-img bg-no-repeat bg-cover bg-bottom h-[50rem] flex flex-col justify-end items-center pb-16">
                <h2 className="font-nunito font-black text-[4rem] text-white tracking-tight drop-shadow-[0_4px_3px_rgba(237,100,54,0.25)] pb-2">Todo para tu mascota</h2>
                <LinkRouter className="Welcome-btn px-5 py-3 rounded-md bg-[rgba(237,100,54,0.8)] font-nunito font-medium text-[1.5rem] text-white transition ease-in-out hover:bg-orange hover:-translate-y-1" to={'/alimento-para-mascotas'}>Comprá Ahora</LinkRouter>
            </div>
        </>
    );
}
