import {Link as LinkRouter} from 'react-router-dom'

export default function Welcome() {
    return (
        <>
            <div className="bg-welcome-img h-[55rem] bg-cover bg-no-repeat bg-center lg:bg-no-repeat lg:bg-cover lg:bg-left-bottom flex flex-col justify-end items-center pb-16">
                <h2 className="text-center font-nunito font-black text-[3.5rem] text-white tracking-tight drop-shadow-[0_4px_3px_rgba(237,100,54,0.5)]">Todo Para Tu Mascota</h2>
                <LinkRouter className="Welcome-btn px-4 py-2 rounded-md bg-[rgba(237,100,54,0.8)] font-nunito font-medium text-[1.2rem] text-white transition hover:bg-orange hover:-translate-y-1" to={'/alimento-para-mascotas'}>Comprá Ahora</LinkRouter>
            </div>
        </>
    );
}
