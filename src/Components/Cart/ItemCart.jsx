export default function ItemCart({item}) {
    let name = item?.brand ? `${item.brand} ${item.name} - ${item.weight}kg` : `${item.name} - ${item.width}x${item.length}cm`

    return (
        <>
            <div className="h-[7rem] flex items-center border-b-2 border-light-grey">
                <div className="w-[57%] flex items-center">
                    <img className="w-[5rem]" src={item.img} alt="product"/>
                    <p className="pl-4">{name}</p>
                </div>
                <div className="w-[18%] px-5 flex items-center">
                    <div className="w-full h-[2rem] flex justify-evenly items-center border-[.1rem] border-dark-grey rounded-md">
                        <button onClick={()=> console.log("resto 1")} className="text-green text-lg font-bold">-</button>
                        <p className="">2</p>
                        <button onClick={()=> console.log("sumo 1")} className="text-green text-lg font-bold">+</button>
                    </div>
                </div>
                <p className="w-[10%]"><span className="text-sm">$ </span>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                <p className="w-[10%] font-extrabold"><span className="text-sm">$</span> {(item.price * 2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                <button className="w-[3.5%]" onClick={() => console.log("borrado")}><img src="./delete-item.png" alt="delete-item" /></button>
            </div>
        </>
    )
}