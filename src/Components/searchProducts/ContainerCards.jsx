import React from "react";
import { useGetProductsFoodMutation } from "../../features/products/foodAPI";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import CardProduct from "./CardProduct";

const ContainerCards = () => {
  const [searchProducts, { isSuccess }] = useGetProductsFoodMutation();
  const reload = useSelector((state) => state.reload);
  const [dataProduct, setDataProduct] = useState();
  const [searchName, setSearchName] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    getSearch();
  };

  const getSearch = async () => {
    try {
      const res = await searchProducts(searchName);
      if (res.data.products) {
        setDataProduct(res?.data.products);
      } else {
        setDataProduct(res?.data.product);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearch();
  }, [reload.reloadState]);

  return (
    <>
      <form
        onSubmit={handleSearch}
        className="w-full flex justify-center gap-2"
      >
        <input
          type="text"
          placeholder="Buscar productos"
          value={searchName}
          className="w-1/2 flex justify-center items-center bg-light-grey text-black rounded-md p-3"
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button className="bg-dark-grey rounded-md px-5 text-white cursor-pointer">
          Buscar
        </button>
      </form>
      <div className="w-full flex justify-center items-center flex-col py-10 gap-4">
        {isSuccess ? (
          dataProduct?.map((product) => (
            <CardProduct product={product} key={product._id} />
          ))
        ) : (
          <div>
            <p>Cargando...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ContainerCards;
