import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductFoodMutation } from "../../features/products/foodAPI";
import EditProductForm from "./EditProductForm";
import AddProductPage from "../../Pages/AddProductPage";

const EditComponent = () => {
  const { id } = useParams();
  const [findProduct, { isLoading, isSuccess }] = useGetProductFoodMutation();
  const [dataProduct, setDataProduct] = useState({});

  useEffect(() => {
    const getDataProduct = async () => {
      try {
        const { data } = await findProduct(id);
        setDataProduct(data.food);
      } catch (error) {
        console.log(error);
      }
    };
    getDataProduct();
  }, []);

  return (
    <div>
      <p>Formulario aqui</p>
      {
        isLoading
        ?
        <p>Cargando</p>
        :
        isSuccess
        ?
        <EditProductForm dataProduct={dataProduct} />
        // <AddProductPage dataProduct={dataProduct}/>
        :
        null
      }
      
    </div>
  );
};

export default EditComponent;
