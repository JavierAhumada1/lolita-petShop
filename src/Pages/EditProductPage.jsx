import { useState } from "react";
import { useGetProductsFoodMutation } from "../features/products/foodAPI";
import { useEffect } from "react";
import CardProduct from "../Components/searchProducts/CardProduct";

export default function EditProductPage() {
  const [searchName, setSearchName] = useState("");
  const [dataProduct, setDataProduct] = useState();
  const [searchProducts, { isSuccess, isLoading }] =
    useGetProductsFoodMutation();
  const handleSearch = (e) => {
    e.preventDefault();
    if( toString(searchName)){
      console.log('Es un string')
      getSearch()
    }
  };

  const getSearch = async () => {
    try {
      const res = await searchProducts(searchName);
      console.log(res.data);
      if (res.data.products) {
        setDataProduct(res?.data.products);
      } else {
        setDataProduct(res?.data.product);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSearch();
  }, []);


  return (
    <div className="min-h-[72vh] flex flex-col pt-5 items-center">
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
      <div className="w-full h-[100vh] flex justify-center items-center flex-col pt-5 gap-4">
        {isSuccess
          ? dataProduct?.map((product) => (
              <CardProduct product={product} key={product._id} />
            ))
          : null}
      </div>
    </div>
  );
}
