import React from "react";
import { BsClipboard } from "react-icons/bs";

const Order = () => {
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
        <p className="flex bg-black rounded-lg p-2 justify-center items-center gap-2 cursor-pointer">
          Ver mas
          <BsClipboard />
        </p>
      </div>
    </div>
  );
};

export default Order;
