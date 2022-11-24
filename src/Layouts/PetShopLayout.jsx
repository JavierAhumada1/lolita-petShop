import Footer from '../Components/Footer';
import Header from '../Components/Header/Header';

export default function PetShopLayout(props) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
}
