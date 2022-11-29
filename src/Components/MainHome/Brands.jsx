export default function Brands() {
    const brands = [
        {id: "purina", img: "/brands/purina.jpg"},
        {id: "eukanuba", img: "/brands/eukanuba.jpg"},
        {id: "pedigree", img: "/brands/pedigree.jpg"},
        {id: "royal-canin", img: "/brands/royal-canin.jpg"},
        {id: "sieger", img: "/brands/sieger.png"},
    ]

    return (
        <>
            <div className="font-nunito flex flex-col py-5">
                <h2 className='bg-black rounded-2xl text-white text-2xl font-bold uppercase self-center py-2 px-20'>Nuestras <span className="text-orange">marcas</span></h2>
                <div className='flex justify-evenly pt-5'>
                    {brands.map(brand => (
                        <img className="w-[10rem]" key={brand.id} src={brand.img} alt="brand"/>
                    ))}
                </div>
            </div>
        </>
    );
}
