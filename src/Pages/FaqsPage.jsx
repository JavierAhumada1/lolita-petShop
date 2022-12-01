import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const questionsList = [
    {
        key: '1',
        question: '¿Que es LolaPetShop',
        answer: 'LolaPetShop es una tienda online de Argentina, donde podes comprar las 24hs, los 365 días del año y recibir el pedido en tu domicilio'
    },
    {
        key: '2',
        question: '¿Por qué comprar en LolaPetShop?',
        answer: 'Porque comprar desde la comodidad de tu hogar o trabajo nunca fue tan rápido y fácil.'
    },
    {
        key: '3',
        question: '¿Cómo comprar?',
        answer: 'Es muy fácil, el pedido se hace en nuestra página web, desde tu celular, tablet, nootebook o computadora:',
        answer2: '1° AGREGAR AL CARRITO: Selecciona los productos que quieras y haces clic en "AGREGAR AL CARRITO", luego vas a "VER CARRITO".',
        answer3: '2° CONFIRMAR COMPRA: Inicia sesión con tu mail. Si no estas registrado, deberas crear tu cuenta.',
        answer4: '3° SELECCIONA DONDE QUERES RECIBIR EL PEDIDO: Seleccioná el domicilio donde recibiras el pedido.',
        answer5: '4° CONFIRMAR PAGO: Podes elegir, "Efectivo contra entrega", "Tranferencia bancaria" o "Mercado Pago".'
    },
    {
        key: '4',
        question: '¿Cómo contactarnos?',
        answer: 'Si tenes alguna consulta, podes escribirnos al Whatsapp 11 1111 1111 de Lunes a Viernes de 9 a 18hs.'
    },
    {
        key: '5',
        question: '¿Cómo pagar?',
        answer: 'Podes pagar de las siguientes formas:',
        answer2: 'Efectivo: Pagás al recibir el pedido en tu domicilio.',
        answer3: 'Transferencia Bancaria: Depositas o transferís el pago de tu compra.',
        answer4: 'Mercado Pago: El pago se realiza en el carrito de compras de nuestra página web y podes pagar con tarjeta de crésdito o débito,Pago fácil, Rapi pago, Provincia Net y dinero en tu cuenta de Mercado Pago.',
    },
    {
        key: '6',
        question: '¿El envío tiene costo?',
        answer: 'Si vivis en el Partido de Vicente López el envío es gratis. Los envíos a otros barrios tendran un costo de acuerdo a la ciudad de destino.'
    },
    {
        key: '7',
        question: '¿Cuando llega mi pedido?',
        answer: 'El envío es de 1 a 2 días habiles una vez realizada la compra. Te enviaremos un mensaje confirmando el día y rango horario que recibiras tu pedido. El tiempo de entrega esta sujeto a imprevistos viales y cuestiones climáticas o logísticas.'
    },
    {
        key: '8',
        question: '¿Que pasa si no hay nadie para recibir el pedido?',
        answer: 'Si el envío llega dentro de las 3 horas pactadas y no hay nadie para recibirlo; primero nos comunicaremos a los teléfonos que cargaste en tu registro de usuario y si nadie responde se re-coordinara la entrega para otro día, sumándose el costo de un envío adicional.', 
        answer2:'En caso que no puedas recibir el pedido, avisanos antes del horario pactado de entrega al Whatsapp 11 1111 1111.'
    },
    {
        key: '9',
        question: '¿Quién puede recibir mi pedido?',
        answer: 'Podes recibirlo vos mismo, o el portero o vecino de confianza. Deberas aclararlo en la orden de compra. Si tu pago es con tarjeta de crédito o débito, únicamente lo puede recibir una persona mayor de edad con DNI en mano.'
    },
    {
        key: '10',
        question: 'Cambios y devoluciones.',
        answer: 'Si deseas cambiar el alimento que adquiriste para tu mascota por otro, comunicate con nosotros por Whatsapp al 11 1111 1111.',
        answer2:'El producto NO fue usado.',
        answer3:'El packaging NO se encuentra rayado, con golpes, sucio, mojado o con otra forma de maltrato.',
        answer4:'El packaging original este cerrado con los sellos de fábrica. NO fue usado.',
        answer5:'Los reclamos por alimento balanceado, los debe realizar el cliente a través de los servicios de atención al cliente de cada marca y ellos harán el cambio.',
        answer6:'No se realizan devoluciones del dinero.'
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <main className='min-h-[70vh] font-nunito flex flex-col items-center'>
            <h2 className="text-2xl font-bold mt-5 text-center">Preguntas Frecuentes</h2>
            {
                questionsList.map(item => (
                    <Menu as="div" className="relative inline-block text-left w-full mt-5">
                        <div className='flex justify-center items-center'>
                            <Menu.Button className="inline-flex justify-center rounded-md px-5 py-2 text-sm font-medium text-gray-700 hover:bg-light-grey focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                                {/* <p>¿Qué es <span className='text-orange font-semibold'>Lola</span>PetShop?</p> */}
                                <p>{item.question}</p>
                                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 items-center" aria-hidden="true" />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="z-10 flex justify-center origin-top-right ring-black ring-opacity-5 focus:outline-none">
                                <div>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'px-4 py-4 text-sm text-center'
                                                )}
                                            >
                                                {/* <p><span className='text-orange font-semibold'>Lola</span>PetShop es una tienda online de Argentina, donde podes comprar las 24hs, los 365 días del año y recibir el pedido en tu domicilio.</p> */}
                                                <div className='pt-0 overflow-hidden text-center flex flex-col gap-2'>
                                                    <p>{item.answer} </p>
                                                    <p>{item.answer2}</p>
                                                    <p>{item.answer3}</p>
                                                    <p>{item.answer4}</p>
                                                    <p>{item.answer5}</p>
                                                    <p className='font-bold py-4'>{item.answer6}</p>
                                                </div>
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                ))
            }
        </main>
    )
}