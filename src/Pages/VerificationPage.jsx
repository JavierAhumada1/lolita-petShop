import React, { useState } from "react";
import { useEffect } from "react";
import { Link as LinkRouter, useParams } from "react-router-dom";
import { useGetConfirmUserMutation } from "../features/user/userAPI";

export default function VerificationMail() {
  const [confirmUser] = useGetConfirmUserMutation();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [accountConfirm, setAccountConfirm] = useState(false);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const confirm = async () => {
      try {
        const res = await confirmUser(id);
        if (res.data) {
        //   console.log(res.data.msg);
          setAccountConfirm(true);
          setMessage(res.data.msg);
        } else {
        //   console.log(res.error.data.msg);
          setMessage(res.error.data.msg);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    confirm();
  }, []);

  return (
    <>
      <main className="bg-verify-img3 bg-contain flex justify-center items-start pt-28 bg-no-repeat min-h-[70vh]">
        <div className="flex items-center px-8 flex-col lg:gap-8 lg:flex">
          <h2 className="font-bold text-red text-4xl py-4">{message}</h2>
          {accountConfirm ? (
            <div>
              <LinkRouter
                to="/iniciar-sesion"
                className="rounded-md bg-[rgba(237,100,54,0.8)] px-6 py-2 font-nunito font-medium text-[1.2rem] text-white transition hover:bg-orange hover:-translate-y-1"
              >
                Iniciá sesión
              </LinkRouter>
            </div>
          ) : (
            <div>
              <LinkRouter
                to="/"
                className="rounded-md bg-[rgba(237,100,54,0.8)] px-6 py-2 font-nunito font-medium text-[1.2rem] text-white transition hover:bg-orange hover:-translate-y-1"
              >
                Volver a Inicio
              </LinkRouter>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
