import { useState } from "react";
import imageBg from "/pexels-mq-huang-6782551.jpg";

export default function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if([email, password].includes('')){
            return console.log('Completa todos los campos')
        }
        const data = {
            email,
            password
        }
        console.log(data);
    }

  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center font-nunito gap-5">
      <h2 className="text-4xl flex font-nunito-sans">
        Iniciar Sesión
      </h2>
      <div className="w-full justify-center items-center flex flex-col md:flex-row">
        <div className=" md:w-[30rem] md:flex hidden shadow-md rounded-sm">
            <img src={imageBg} className="rounded-l-sm" alt="cats eating" />
        </div>
        <form 
            className="w-[18rem] h-[22rem] flex flex-col bg-green justify-evenly items-center rounded-sm shadow-2xl"
            onSubmit={handleSubmit}
            >
          <div className="flex gap-1 flex-col w-3/4">
            <label htmlFor="email">
              Email
            </label>
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
