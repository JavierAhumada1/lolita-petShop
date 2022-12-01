import React, { useState } from "react";
import {Link as Linkrouter} from 'react-router-dom';
import AlertForm from "../Components/AlertForm/AlertForm";


const EditUserData = () => {
    const [alert, setAlert] = useState({});
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('')
    const [streecode, setStreecode] = useState('')
    const [district, setDistrict] = useState('')
    const [phone, setPhone] = useState('')
    const [dni, setDni] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if([name, email, code, description, streecode, district, phone, dni].includes('')){
            setAlert({
                msg: 'Completa todos los campos',
                error: true
            })
            return
        }
        console.log('Mostrando data')
        setAlert({})
    }


    const {msg} = alert

  return (
    <div className="w-full min-h-[71vh] flex justify-center items-center font-nunito my-10">
      <Linkrouter
        to="/mi-cuenta"
        className="bg-black text-white px-12 rounded-md py-2 flex justify-start items-start self-start hover:bg-green absolute left-40 top-36"
      >
        Atras
      </Linkrouter>
      <div className="bg-light-grey w-[25rem] flex flex-col justify-center items-center py-5 rounded-md gap-4">
        <h4 className="text-center text-3xl font-nunito-sans">
          Edita tus datos
        </h4>
        {msg ? <AlertForm alert={alert}/> : null}
        <form
            onSubmit={handleSubmit} 
            className="flex flex-col gap-4 justify-center items-center w-full px-10">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-md py-2 pl-2 w-full"
            type="text"
            id="name"
            placeholder="Nombre"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md py-2 pl-2 items-center w-full px-10"
            type="text"
            id="lastName"
            placeholder="Apellido"
          />
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="rounded-md py-2 pl-2 items-center w-full px-10"
            type="text"
            id="cp"
            placeholder="Codigo Postal"
          />
          <input
            value={streecode}
            onChange={(e) => setStreecode(e.target.value)}
            className="rounded-md py-2 pl-2 items-center w-full px-10" 
            type="text"
            id="streecode"
            placeholder="Altura"
          />
          <input
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="rounded-md py-2 pl-2 items-center w-full px-10"
            type="text"
            id="district"
            placeholder="Dirrecion"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-md py-2 pl-2 items-center w-full px-10"
            type="text"
            id="phone"
            placeholder="Nro de Telefono"
          />
          <input
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            className="rounded-md py-2 pl-2 items-center w-full px-10"
            type="text"
            id="dni"
            placeholder="Dni"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="rounded-md py-2 pl-2 items-center w-full px-10"
            type="text"
            id="description"
            placeholder="Descripción para envíos"
          />
          <button
            type="submit"
            className="bg-black text-white px-12 rounded-md py-2 hover:bg-green"
          >
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUserData;
