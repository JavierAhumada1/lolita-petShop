import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { useDeleteProductFoodMutation } from "../../features/products/foodAPI";
import AlertForm from "../AlertForm/AlertForm";
import { useDispatch, useSelector } from "react-redux";
import { setReload } from "../../features/reload/reloadSlice";

const CardProduct = ({ product }) => {
  const [deleteProduct] = useDeleteProductFoodMutation();
  const [alert, setAlert] = useState({});
  const dispatch = useDispatch()
  const reloadState = useSelector(state => state.reload)

  const handleDelete = async (id) => {
    try {
      const res = await deleteProduct(id);
      setAlert({msg: res.data.msg, error: false})
      dispatch(setReload())
    } catch (error) {
      console.log(error);
    }
  };

  const { msg } = alert;
  return (
    <>
      {msg ? <AlertForm alert={alert} /> : null}
      <div className="w-5/6 h-40 flex items-center text-center p-10 border-b-2">
        <div className="w-1/2 flex">
          <p>{product.name}</p>
        </div>
        <div className="w-1/2 flex">
          <p>${product.price}</p>
        </div>
        <div className="w-1/2 flex">
          <img
            src={product.image ? product.image : null}
            alt=""
            className="w-20"
          />
        </div>
        <div className="flex flex-col items-end gap-2 w-1/2">
          <button
            className="bg-red w-1/2 p-1 rounded-lg"
            onClick={() => handleDelete(product._id)}
          >
            Eliminar
          </button>
          <LinkRouter to={`/editar-producto/${product._id}`} className="bg-green w-1/2 p-1 rounded-lg">Editar</LinkRouter>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
