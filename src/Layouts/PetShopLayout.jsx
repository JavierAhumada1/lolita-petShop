import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

export default function PetShopLayout(props) {
    return (
        <>
            <Header />
            {/* <div className='min-h-[70vh] flex flex-col justify-center items-center'> */}
            {props.children}
            {/* </div> */}
            <Footer />
        </>
    );
}
