import avatarImage from "/fff0263a-8f19-4b74-8f3d-fc24b9561a96.svg";
import Order from "../Components/PurchaseOrder/Order";


export default function MyAccountPage() {
  return (
    <div className="min-h-[70vh] w-full flex justify-around py-2 px-2 font-nunito gap-4">
      <div className="w-[40rem] flex justify-between items-center">
        <div className="h-full bg-light-grey flex flex-col gap-5 p-3 items-start justify-around">
          <h2 className="flex self-start text-3xl font-nunito font-bold">
            Perfil
          </h2>
          <div className="border-2 w-24 h-24 rounded-full flex justify-center items-center">
            <img src={avatarImage} className="p-1 rounded-full" alt="" />
          </div>
          <div className="w-full flex flex-col gap-2 text-lg">
            <p className="flex gap-2">Nombre: <span className="text-dark-grey">{`Matias`}</span></p>
            <p className="flex gap-2">Apellido: <span className="text-dark-grey">{`Campos`}</span></p>
            <p className="flex gap-2">Número de teléfono: <span className="text-dark-grey">{`123456789`}</span></p>
            <p className="flex gap-2">Código postal: <span className="text-dark-grey">{`5014`}</span></p>
            <p className="flex gap-2">Barrio: <span className="text-dark-grey">{`barrio bueno`}</span></p>
            <p className="flex gap-2">Dirección y altura: <span className="text-dark-grey">{`holanda 1234`}</span></p>
            <p className="flex gap-2">Dni: <span className="text-dark-grey">{`1234567890`}</span></p>
            <p className="flex gap-2">Email: <span className="text-dark-grey">{`matias@correo.com`}</span></p>
            <p className="flex flex-wrap gap-2">Descripción para envíos: <span className="text-dark-grey">{`esquina holanda frente de un kiosco chino 24hs`}</span></p>
          </div>
          <button className="bg-black text-white px-12 rounded-md py-2 hover:bg-dark-grey">Actualizar datos</button>
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-full h-full flex flex-col gap-5 p-3 bg-light-grey">
            <h2 className="flex self-start text-3xl font-nunito font-bold">
                Mis órdenes de compra
            </h2> 
            <div className="flex flex-wrap gap-5">
                <Order/>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
            </div>
        </div>
      </div>
    </div>
  );
}
