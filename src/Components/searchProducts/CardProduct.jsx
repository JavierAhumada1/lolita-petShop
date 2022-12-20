import React from 'react'

const CardProduct = ({product}) => {
  return (
    <div className='w-5/6 h-40 flex items-center text-center p-10 border-b-2'>
        <div className='w-1/2 flex'>
            <p>{product.name}</p>
        </div>
        <div className='w-1/2 flex'>
            <p>${product.price}</p>
        </div>
        <div className='w-1/2 flex'>
            <img src={product.image ? product.image : null} alt=""  className='w-20'/>
        </div>
        <div className='flex flex-col items-end gap-2 w-1/2'>
            <button className='bg-red w-1/2 p-1 rounded-lg'>Eliminar</button>
            <button className='bg-green w-1/2 p-1 rounded-lg'>Editar</button>
        </div>
    </div>
  )
}

export default CardProduct