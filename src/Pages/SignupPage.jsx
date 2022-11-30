import { useState } from "react";
import imageBg from "/pexels-mq-huang-6782551.jpg";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepatPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([email, password, name, repeatPassword].includes("")) {
      return console.log("Completa todos los campos");
    }

    if(password !== repeatPassword) return console.log('Las password no son iguales')
    if(password.length < 6) return console.log('El password es muy corto, agrega minimo 6 caracteres')
    
    const data = {
        name,
        email,
        password,
        repeatPassword
    };
    console.log(data);
  };
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center font-nunito gap-5">
      <h2 className="text-4xl flex font-nunito-sans">Regístrate</h2>
      <div className="w-full justify-center items-center flex flex-col md:flex-row-reverse">
        <div className=" md:w-[39rem] md:flex hidden shadow-md rounded-sm">
          <img src={imageBg} className="rounded-l-sm" alt="cats eating" />
        </div>
        <form
          className="w-[20rem] h-[28rem] flex flex-col bg-green justify-evenly items-center rounded-sm shadow-2xl"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-1 flex-col w-3/4">
            <label htmlFor="name">Nombre</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-md py-2 pl-2"
              type="text"
              id="name"
              placeholder="Nombre"
            />
          </div>
          <div className="flex gap-1 flex-col w-3/4">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md py-2 pl-2"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="flex gap-1 flex-col w-3/4">
            <label htmlFor="password">Contraseña</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-md py-2 pl-2"
              type="password"
              id="password"
              placeholder="Contraseña"
            />
          </div>
          <div className="flex gap-1 flex-col w-3/4">
            <label htmlFor="repeat-password">Repetir Contraseña</label>
            <input
              value={repeatPassword}
              onChange={(e) => setRepatPassword(e.target.value)}
              className="rounded-md py-2 pl-2"
              type="password"
              id="repeat-password"
              placeholder="Repetir Contraseña"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-black text-white px-12 rounded-md py-2"
              type="submit"
            >
              Ingresa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
