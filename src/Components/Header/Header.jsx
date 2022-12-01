import { Link as Linkrouter } from 'react-router-dom';
import Navbar from './Navbar';

export default function Header() {
    return (
        <div className='max-h-[10vh]'>
            <div className='bg-green'>
                <div className='flex py-1 px-36 justify-between'>
                    <div className='my-auto header-help font-nunito font-light text-[0.8rem]'>
                        <Linkrouter className='hover:text-white' href="">Preguntas Frecuentes</Linkrouter >
                        <span className='text-white'> | </span>
                        <Linkrouter className='hover:text-white' href="">Ayuda</Linkrouter >
                        <span className='text-white'> | </span>
                        <Linkrouter className='hover:text-white' href="">Soporte</Linkrouter >
                    </div>
                    <div className='header-social'>
                        <Linkrouter>
                            <i className='fab fa-instagram fa-1x px-5 hover:text-white'></i>
                        </Linkrouter>
                        <Linkrouter href="">
                            <i className='fab fa-facebook-f fa-1x hover:text-white'></i>
                        </Linkrouter>
                    </div>
                </div>
            </div>
            <div className='bg-black flex justify-between text-light px-24'>
                <div className='my-auto px-12'>
                    <Linkrouter to="/" className='font-nunito text-[1.5rem] font-bold'><h2 className='text-white'><span className='text-orange'>Lola</span>PetShop</h2></Linkrouter>
                </div>
                <Navbar />
            </div>
        </div>

    );
}
