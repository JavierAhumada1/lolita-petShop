import React from "react";
import { useSelector } from "react-redux";

const DataUserProfile = () => {

    const user = useSelector(state => state.user)

  return (
    <>
      <p className="flex gap-2">
        Nombre: <span className="text-dark-grey">{user?.name ? user.name : null}</span>
      </p>
      <p className="flex gap-2">
        Apellido: <span className="text-dark-grey">{user?.lastName ? user.lastName : null}</span>
      </p>
      <p className="flex gap-2">
        Número de teléfono:{" "}
        <span className="text-dark-grey">{user?.phone ? user.phone : null}</span>
      </p>
      <p className="flex gap-2">
        Código postal: <span className="text-dark-grey">{user?.cp ? user.cp : null}</span>
      </p>
      <p className="flex gap-2">
        Barrio: <span className="text-dark-grey">{user?.district ? user.district : null}</span>
      </p>
      <p className="flex gap-2">
        Dirección y altura:{" "}
        <span className="text-dark-grey">{user?.streetCode ? user.streetCode : null}</span>
      </p>
      <p className="flex gap-2">
        Dni: <span className="text-dark-grey">{user?.dni ? user.dni : null}</span>
      </p>
      <p className="flex gap-2">
        Email: <span className="text-dark-grey">{user?.email ? user.email : null}</span>
      </p>
      <p className="flex flex-wrap gap-2">
        Descripción para envíos:{" "}
        <span className="text-dark-grey">{user?.description ? user.description : null}</span>
      </p>
    </>
  );
};

export default DataUserProfile;
