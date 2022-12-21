import React from "react";
import { useState } from "react";
import AlertForm from "../AlertForm/AlertForm";
import { useEffect } from "react";
import { Bars } from "react-loader-spinner";
import { uploadFile } from "../../firebase/config";
import { useUpdateProductFoodMutation } from "../../features/products/foodAPI";
import { useDispatch } from "react-redux";
import { setReload } from "../../features/reload/reloadSlice";


const EditProductForm = ({ dataProduct }) => {
  const [file, setFile] = useState();
  const [updateProductFood] = useUpdateProductFoodMutation()
  const [image, setImage] = useState("");
  const [type, setType] = useState();
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [brand, setBrand] = useState("");
  const [date, setDate] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [alert, setAlert] = useState({});
  const [spinner, setSpinner] = useState(false);
  const dispath = useDispatch()

  useEffect(() => {
    setType(dataProduct.type);
    setWeight(dataProduct.weight?.$numberDecimal);
    setAge(dataProduct.age);
    setBrand(dataProduct.brand);
    setDate(dataProduct.date);
    setStock(dataProduct.stock);
    setPrice(dataProduct.price);
    setName(dataProduct.name);
    setImage(dataProduct.image)
  }, [dataProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      [type, weight, age, brand, date, stock, price, name].includes("")
    ) {
      return setAlert({ msg: "Completa todos los campos", error: true });
    }

    if(file) {
      console.log('option 1')
      sendImageFb(file);
    }else{
      console.log('option 2')
      const newDataProduct = {
        image,
        type,
        weight,
        age,
        brand,
        date,
        stock,
        name,
        price,
        _id : dataProduct._id
      }
      console.log(newDataProduct);
      updateProduct(newDataProduct)
    }
    setSpinner(true);
  };

  const sendImageFb = async (fileImage) => {
    try {
      const result = await uploadFile(fileImage);
      setImage(result);
      const newDataProduct = {
        image: result,
        type,
        weight,
        age,
        brand,
        date,
        stock,
        name,
        price,
        _id : dataProduct._id
      };
      // console.log(newDataProduct)
      updateProduct(newDataProduct);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = async (data) => {
    try {
      const res = await updateProductFood(data);
      if (res.data) {
        console.log(res.data)
        setAlert({ msg: "Producto creado y agregado", error: false });
        setSpinner(false);
        dispath(setReload())
      } else {
        setAlert({ msg: res.error.data.msg, error: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { msg } = alert;

  return (
    <div className="min-h-[72vh] flex flex-col justify-center items-center p-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-light-grey p-2 gap-3 rounded-sm"
      >
        <input
          type="text"
          value={type}
          id="tipo"
          placeholder="Tipo"
          onChange={(e) => setType(e.target.value)}
          className="rounded-md py-2 pl-2"
        />
        <input
          type="number"
          value={weight}
          placeholder="Peso"
          onChange={(e) => setWeight(e.target.value)}
          className="rounded-md py-2 pl-2"
        />
        <input
          type="text"
          value={name}
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
          className="rounded-md py-2 pl-2"
        />
        <input
          type="text"
          value={age}
          placeholder="Edad"
          onChange={(e) => setAge(e.target.value)}
          className="rounded-md py-2 pl-2"
        />
        <input
          type="text"
          value={brand}
          placeholder="Marca"
          onChange={(e) => setBrand(e.target.value)}
          className="rounded-md py-2 pl-2"
        />
        <input
          type="date"
          value={date}
          placeholder="Fecha"
          onChange={(e) => setDate(e.target.value)}
          className="rounded-md py-2 pl-2"
        />
        <input
          type="number"
          value={stock}
          placeholder="Stock"
          onChange={(e) => setStock(e.target.value)}
          className="rounded-md py-2 pl-2"
        />
        <input
          type="number"
          value={price}
          placeholder="Precio"
          onChange={(e) => setPrice(e.target.value)}
          className="rounded-md py-2 pl-2"
        />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <div className="flex items-center justify-center">
          <img
            src={image}
            alt="imagen del producto"
            style={{ width: 100 }}
            className="justify-center items-center flex"
          />
        </div>
        <button
          className="bg-black text-white px-12 rounded-md py-2"
          type="submit"
        >
          Agregar Producto
        </button>
        {spinner ? (
          <div className="flex justify-center">
            <Bars
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : null}
      </form>
      {msg ? <AlertForm alert={alert} /> : null}
    </div>
  );
};

export default EditProductForm;
