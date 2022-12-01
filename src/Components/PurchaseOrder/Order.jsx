import React from "react";
import { BsClipboard } from "react-icons/bs";

const Order = ({order, setShowMore}) => {
  const { id, orderDate, orderDescription, quantity, price } = order;

  const handleClick = orderId => {
    setShowMore(true)
    console.log(orderId)
  }
  return (
    <div className="bg-orange text-white flex w-[25rem] h-[7rem] justify-between items-center rounded-lg p-2">
      <div className="flex flex-col justify-around h-full">
        <p>
          Nro de Orden: <span>#3123213</span>
        </p>
        <p>
          Estado: <span>Pagado - Sin enviar</span>
        </p>
      </div>
      <div className="flex flex-col justify-around h-full">
        <p>2022-10-13</p>
        <button
          onClick={() => handleClick(id)}
          className="flex bg-black rounded-lg p-2 justify-center items-center gap-2 cursor-pointer hover:bg-dark-grey"
        >
          Ver mas
          <BsClipboard />
        </button>
      </div>
    </div>
  );
};

export default Order;
