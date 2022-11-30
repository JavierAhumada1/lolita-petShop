export default function TotalPurchase() {
    const areaList = [
        {id: 101, name: "Palermo"},
        {id: 102, name: "Microcentro"},
        {id: 103, name: "Almagro"},
        {id: 104, name: "Belgrano"},
    ]

    return (
        <>
            <div className="w-[23%] flex flex-col">
                <h6 className="text-center text-lg font-bold border-b-2 border-green">datos de envío y total</h6>
                <div className="pt-3">
                    <form className="flex flex-col gap-3 px-4">
                        <label className="flex flex-col">Elegí tu barrio
                            <select className="bg-light-grey text-dark-grey py-1" name="area">
                                {/* <option className="" value={""}>Elegí tu barrio</option> */}
                                {areaList.map(area => (<option className="" key={area.id} value={area.name}>{area.name}</option>))}
                            </select>
                        </label>
                        <label className="flex flex-col">Dirección
                            <input className="border-b-2 border-light-grey" type="text" placeholder="ej: Santa Fe 3456 7 A" name="address" />
                        </label>
                        <label className="flex flex-col">Teléfono
                            <input className="border-b-2 border-light-grey" type="text" placeholder="ej: 1157770000" name="tel" />
                        </label>
                    </form>
                </div>
                <div className="flex flex-col gap-3 px-4 py-5">
                    <div className="flex justify-between">
                        <p>Subtotal</p>
                        <p>$ 1000</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Envío</p>
                        <p>$ 200</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-extrabold">TOTAL</p>
                        <p>$ 1200</p>
                    </div>
                </div>
                <button className="self-center w-3/5 border-[.2rem] border-green rounded-md py-1">Finalizar compra</button>
            </div>
        </>
    )
}