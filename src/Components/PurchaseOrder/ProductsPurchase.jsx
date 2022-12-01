import React from "react";

const ProductsPurchase = ({ item }) => {
  let name = item?.brand
    ? `${item.brand} ${item.name} - ${item.weight}kg`
    : `${item.name} - ${item.width}x${item.length}cm`;

  return (
    <div className=" w-full flex items-center justify-between bg-white p-2 rounded-md mt-2 gap-5">
      <div className=" flex items-center w-[25rem]">
        <img className="w-[5rem]" src={item.img} alt="product" />
        <p className="pl-4">{name}</p>
      </div>
      <div className="w-[5rem] flex">
        <p className=" font-extrabold">
          <span className="text-sm">$</span>{" "}
          {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </p>
      </div>
    </div>
  );
};

export default ProductsPurchase;
