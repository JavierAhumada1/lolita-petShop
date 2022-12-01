import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PetShopLayout from './Layouts/PetShopLayout';
import AccessoriesPage from './Pages/AccessoriesPage';
import AddProductPage from './Pages/AddProductPage';
import CartPage from './Pages/CartPage';
import Contact from './Pages/Contact';
import EditProductPage from './Pages/EditProductPage';
import EditUserData from './Pages/EditUserData';
import ErrorPage from './Pages/ErrorPage';
import DogsPage from './Pages/DogsPage';
import CatsPage from './Pages/CatsPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import MyAccountPage from './Pages/MyAccountPage';
import MyOrderPage from './Pages/MyOrderPage';
import SignupPage from './Pages/SignupPage';
import VerificationPage from './Pages/VerificationPage';
import FaqsPage from './Pages/FaqsPage';

export default function App() {
  return (
        <BrowserRouter>
          <PetShopLayout>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/alimento-para-perros' element={<DogsPage />} />
              <Route path='/alimento-para-gatos' element={<CatsPage />} />
              <Route path='/accesorios-para-mascotas' element={<AccessoriesPage />} />
              <Route path='/editar-producto/:id' element={<EditProductPage />} />
              <Route path='/agregar-producto' element={<AddProductPage />} />
              <Route path='/carrito' element={<CartPage />} />
              <Route path='/iniciar-sesion' element={<LoginPage />} />
              <Route path='/registrarse' element={<SignupPage />} />
              <Route path='/mi-cuenta' element={<MyAccountPage />} />
              <Route path='/orden/:id' element={<MyOrderPage />} />
              <Route path='/verificacion' element={<VerificationPage />} />
              <Route path='/error' element={<ErrorPage />} />
              <Route path='/contacto' element={<Contact />} />
              <Route path='/editar-datos' element={<EditUserData />} />
              <Route path='/preguntas-frecuentes' element={<FaqsPage />} />
            </Routes>
          </PetShopLayout>
        </BrowserRouter>
  );
}