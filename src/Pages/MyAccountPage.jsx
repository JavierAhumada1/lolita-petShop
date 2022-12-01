import {Link as Linkrouter} from 'react-router-dom';
import { useEffect, useState } from "react";
import avatarImage from "/fff0263a-8f19-4b74-8f3d-fc24b9561a96.svg";
import Order from "../Components/PurchaseOrder/Order";
import OrderProducts from "../Components/PurchaseOrder/OrderProducts";

const data = [
  {
    id: "1",
    orderDate: "2020-04-01",
    orderDescription: "This is a description",
    quantity: "1",
    price: "2000.00",
  },
  {
    id: "2",
    orderDate: "2020-04-01",
    orderDescription: "This is a description",
    quantity: "3",
    price: "6000.00",
  },
  {
    id: "3",
    orderDate: "2020-04-01",
    orderDescription: "This is a description",
    quantity: "5",
    price: "1500.00",
  },
];

const itemsList = [
  {id: 1, type: "Alimento para perros", brand: "Royal Canin", name: "Mini Adulto", price: 9830, weight: 7.5, img: "https://puppis.vteximg.com.br/arquivos/ids/190298-1000-1000/156177.jpg?v=638028354661430000"},
  {id: 2, type: "Alimento para gatos", brand: "Royal Canin", name: "Gato Indoor", price: 10528, weight: 7.5, img: "https://arcarosario.com/wp-content/uploads/2022/11/RC-Indoor-01.jpg"},
  {id: 3, type: "Collares lisos y estampados", name:"Collar liso", width: 1.5, length: 30, price: 126, img: "https://leocan.com.ar/wp-content/uploads/2022/05/collar-tibet-nylon-doble-rojo-para-perro-24pg-24-x-1pg-D_NQ_NP_555225-MLM25393127505_022017-F.jpg"}
]

export default function MyAccountPage() {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setShowMore(false);
  }, []);

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
            <p className="flex gap-2">
              Nombre: <span className="text-dark-grey">{`Matias`}</span>
            </p>
            <p className="flex gap-2">
              Apellido: <span className="text-dark-grey">{`Campos`}</span>
            </p>
            <p className="flex gap-2">
              Número de teléfono:{" "}
              <span className="text-dark-grey">{`123456789`}</span>
            </p>
            <p className="flex gap-2">
              Código postal: <span className="text-dark-grey">{`5014`}</span>
            </p>
            <p className="flex gap-2">
              Barrio: <span className="text-dark-grey">{`barrio bueno`}</span>
            </p>
            <p className="flex gap-2">
              Dirección y altura:{" "}
              <span className="text-dark-grey">{`holanda 1234`}</span>
            </p>
            <p className="flex gap-2">
              Dni: <span className="text-dark-grey">{`1234567890`}</span>
            </p>
            <p className="flex gap-2">
              Email:{" "}
              <span className="text-dark-grey">{`matias@correo.com`}</span>
            </p>
            <p className="flex flex-wrap gap-2">
              Descripción para envíos:{" "}
              <span className="text-dark-grey">{`esquina holanda frente de un kiosco chino 24hs`}</span>
            </p>
          </div>
          <Linkrouter 
            to="/editar-datos"
            className="bg-black text-white px-12 rounded-md py-2 hover:bg-dark-grey">
            Actualizar datos
          </Linkrouter>
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-full h-full flex flex-col gap-5 p-3 bg-light-grey">
          <h3 className="flex self-start text-3xl font-nunito font-bold">
            Mis órdenes de compra
          </h3>
          <div className="flex flex-wrap gap-5">
            {data.length > 0 ? (
              showMore ? (
                <OrderProducts setShowMore={setShowMore} itemsList={itemsList}/>
              ) : (
                data.map((order) => (
                  <Order
                    order={order}
                    key={order.id}
                    setShowMore={setShowMore}
                  />
                ))
              )
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
