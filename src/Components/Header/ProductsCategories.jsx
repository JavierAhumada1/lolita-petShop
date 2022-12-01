import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link as Linkrouter } from 'react-router-dom';

const brands = [
    {
        name: 'Todos los productos',
        href: '#',
        current: false,
    },
    {
        name: 'Royal',
        href: '#',
        current: false,
    },
    {
        name: 'Purina',
        href: '#',
        current: false,
    },
    {
        name: 'Exccelent',
        href: '#',
        current: false,
    },
    {
        name: 'Eukanuba',
        href: '#',
        current: false,
    },
    {
        name: 'Pedigree',
        href: '#',
        current: false,
    },
    {
        name: 'Vital',
        href: '#',
        current: false,
    },
    {
        name: 'Old Prince',
        href: '#',
        current: false,
    },
    {
        name: '',
        href: '#',
        current: false,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductsCategories({ animals }) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="hover:text-orange inline-flex w-full justify-center text-white px-3 py-1 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                    {animals}
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {brands.map(brand =>
                        (
                            <Menu.Item key={brand.name}>
                                {({ active }) => (
                                    <Linkrouter 
                                        href="#"
                                        className={classNames( 
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'hover:bg-orange',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        {brand.name}
                                    </Linkrouter>
                                )}
                            </Menu.Item>)
                        )}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}