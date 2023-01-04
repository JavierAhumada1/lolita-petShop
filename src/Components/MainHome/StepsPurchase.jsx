export default function StepsPurchase() {
    const steps = [
        {id: 1, title: "Carrito de compras", info: "Elegí los productos para tu/s mascotas/s"},
        {id: 2, title: "Métodos de pago", info: "Contrareembolso / Mercado Pago"},
        {id: 3, title: "Tiempo de Entrega", info: "Siguiente día hábil. Sin entrega el domingo."},
    ]

    return (
        <>
            <div className="font-nunito flex flex-col py-5">
                <h2 className='bg-black rounded-2xl text-white text-2xl font-bold uppercase self-center py-2 px-8 lg:px-20'>Tu compra en <span className="text-orange">3 pasos</span></h2>
                <div className='flex justify-evenly pt-5'>
                    {steps.map(step => (
                        <div className='flex flex-col items-center px-2 text-center' key={step.id}>
                            <div className='font-bold text-lg'>
                                <h3>{step.title} </h3>
                            </div>
                            <div className='text-base'>
                                <p>{step.info}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
