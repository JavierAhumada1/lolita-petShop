import { Disclosure, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';
import { Bars3Icon, BellIcon, XMarkIcon, } from '@heroicons/react/24/outline';
import { Link as Linkrouter } from 'react-router-dom';
import ProductsCategories from './ProductsCategories';
import { HiUser } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5"

const navigation = [
    {
        name: 'Inicio',
        href: '/',
        current: false
    },
    /* {
        name: 'Gatos',
        href: '#',
        current: false,
        icon: '',
    },
    {
        name: 'Perros',
        href: '#',
        current: false,
        icon: '',
    }, */
    {
        name: 'Contacto',
        href: '/contacto',
        current: false
    },
]

const accesories = [
    {
        name: 'Grande',
        href: '#',
        current: false,
    },
    {
        name: 'Mediano',
        href: '#',
        current: false,
    },
    {
        name: 'Chico',
        href: '#',
        current: false,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="font-nunito bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                {/* <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-8 w-auto lg:hidden"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                </div> */}

                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Linkrouter
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-orange',
                                                    'px-2 py-2 rounded-md text-base font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Linkrouter>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <ProductsCategories animals='Perros' />
                            <ProductsCategories animals='Gatos' />
                            <Linkrouter to={'/carrito'}>
                                <IoCartOutline className='w-6 h-6 text-white hover:text-orange cursor-pointer' />
                            </Linkrouter>
                            <div className="absolute inset-y-5 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-2 right-1 left-2">
                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="flex rounded-full bg-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">Open user menu</span>
                                            <HiUser className='bg-white rounded-full w-6 h-6' />
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
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-46 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Linkrouter
                                                        href="#"
                                                        className={classNames(active ? 'bg-orange' : '', 'block px-4 py-2 text-base text-gray-700')}
                                                    >
                                                        Perfil
                                                    </Linkrouter>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Linkrouter
                                                        href="#"
                                                        className={classNames(active ? 'bg-orange' : '', 'block px-4 py-2 text-base text-gray-700')}
                                                    >
                                                        Configuración
                                                    </Linkrouter>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Linkrouter
                                                        href="#"
                                                        className={classNames(active ? 'bg-orange' : '', 'block px-4 py-2 text-base text-gray-700')}
                                                    >
                                                        Cerrar Sesión
                                                    </Linkrouter>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}