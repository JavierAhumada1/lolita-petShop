import React, { useEffect, useState } from 'react'
import ProductsPurchase from './ProductsPurchase'



const OrderProducts = ({setShowMore, itemsList}) => {
    
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const totalGastado = itemsList.reduce((total, gasto) => gasto.price + total, 0)
        setTotal(totalGastado)
    }, [])

  return (
    <div className='w-full flex flex-col gap-2 justify-center p-2'>
        <button
            onClick={() => setShowMore(false)} 
            className='bg-black text-white px-12 rounded-md py-2 flex justify-start items-start self-start hover:bg-green'>
            Atras
        </button>
        <div className='flex items-center justify-between text-center'>
            <p className='text-2xl'>Productos comprados</p>
            <p  className='text-2xl'>Total: ${total}</p>
        </div>
        <div className='flex flex-col w-full gap-2'>
        {
            itemsList.length > 0
            ?
            itemsList.map(item => (
                <ProductsPurchase item={item} key={item.id}/>
            ))
            :
            null
        }
        </div>
    </div>
  )
}

export default OrderProducts