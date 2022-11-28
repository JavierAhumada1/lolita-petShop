import Brands from '../Components/MainHome/Brands'
import FeaturedProducts from '../Components/MainHome/FeaturedProducts'
import StepsPurchase from '../Components/MainHome/StepsPurchase'
import Welcome from '../Components/MainHome/Welcome'

export default function HomePage() {
    return (
        <>
            <Welcome />
            <main>
                <Brands />
                <FeaturedProducts />
                <StepsPurchase />
            </main>
        </>
    )
}