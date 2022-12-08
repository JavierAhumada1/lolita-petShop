import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link as Linkrouter} from 'react-router-dom';
import AlertForm from "../Components/AlertForm/AlertForm";
import { useUpdateUserDataMutation } from "../features/user/userAPI";
import { addUser } from "../features/user/userSlice";


const EditUserData = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [updateUserData] = useUpdateUserDataMutation()
    const [alert, setAlert] = useState({});
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [cp, setCode] = useState('')
    const [streetCode, setStreecode] = useState('')
    const [district, setDistrict] = useState('')
    const [phone, setPhone] = useState('')
    const [dni, setDni] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
      setName(user.name ? user.name : '')
      setEmail(user.email ? user.email : '')
      setLastName(user.lastName ? user.lastName : '')
      setCode(user.cp ? user.cp : '')
      setStreecode(user.streetCode ? user.streetCode : '')
      setDistrict(user.district ? user.district : '')
      setPhone(user.phone ? user.phone : '')
      setDni(user.dni ? user.dni : '')
      setDescription(user.description ? user.description : '')
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        if([name, email, cp, streetCode, district, phone, dni, lastName].includes('')){
          console.log('error');
            setAlert({
                msg: 'Completa todos los campos',
                error: true
            })
            return
        }
        const data = {name, description, email, cp, streetCode, district, phone, dni, lastName, _id: user._id}
        sendUpdateUser(data)
        setAlert({})
    }

    const sendUpdateUser = async(dataUser) => {
      // console.log(dataUser)
      try {
        const res = await updateUserData(dataUser)
        // console.log(res)
        if(res.data){
          setAlert({msg: 'Datos actualizados', error: false})
          dispatch(addUser(res.data))
        }else {
          setAlert({
            msg: 'Hubo un error',
            error: true
          })
        }
      } catch (error) {
        console.log(error)
      }
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
            value={user?.name ? user.name : name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-md py-2 pl-2 w-full"
            type="text"
            id="name"
            placeholder="Nombre"
          />
          <input
            value={user?.lastName ? user.lastName : lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="rounded-md py-2 pl-2 w-full"
            type="text"
            id="lastName"
            placeholder="Apellido"
          />
          <input
            value={user?.email ? user.email : email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md py-2 pl-2 items-center w-full px-10"
            type="text"
            id="lastName"
            placeholder="Apellido"
          />
          <input
            value={user?.cp ? user.cp : cp}
            onChange={(e) => setCode(e.target.value)}
            className="rounded-md py-2 pl-2 items-center w-full px-10"
            type="number"
            id="cp"
            placeholder="Codigo Postal"
          />
          <input
            value={user?.streetCode ? user.streetCode : streetCode}
            onChange={(e) => setStreecode(e.target.value)}
            className="rounded-md py-2 pl-2 items-center w-full px-10" 
            type="text"
            id="streecode"
            placeholder="Altura"
          />
          <input
            value={user?.district ? user.district : district}
            onChange={(e) => setDistrict(e.target.value)}
            className="rounded-md py-2 pl-2 items-center w-full px-10"
            type="text"
            id="district"
            placeholder="Dirrecion"
          />
          <input
            value={user?.phone ? user.phone : phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-md py-2 pl-2 items-center w-full px-10"
            type="number"
            id="phone"
            placeholder="Nro de Telefono"
          />
          <input
            value={user?.dni ? user.dni : dni}
            onChange={(e) => setDni(e.target.value)}
            className="rounded-md py-2 pl-2 items-center w-full px-10"
            type="number"
            id="dni"
            placeholder="Dni"
          />
          <textarea
            value={user?.description ? user.description : description}
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
