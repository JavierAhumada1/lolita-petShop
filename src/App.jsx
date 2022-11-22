import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PetShopLayout from './Layouts/PetShopLayout';
import AddProductPage from './Pages/AddProductPage';
import CartPage from './Pages/CartPage';
import EditProductPage from './Pages/EditProductPage';
import ErrorPage from './Pages/ErrorPage';
import FoodPage from './Pages/FoodPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import MyAccountPage from './Pages/MyAccountPage';
import MyOrderPage from './Pages/MyOrderPage';
import SignupPage from './Pages/SignupPage';
import VerificationPage from './Pages/VerificationPage';

export default function App() {
  return (
        <BrowserRouter>
          <PetShopLayout>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/alimento-para-mascotas' element={<FoodPage />} />
              <Route path='/editar-producto/:id' element={<EditProductPage />} />
              <Route path='/agregar-producto/:id' element={<AddProductPage />} />
              <Route path='/carrito' element={<CartPage />} />
              <Route path='/logueo' element={<LoginPage />} />
              <Route path='/registro' element={<SignupPage />} />
              <Route path='/mi-cuenta' element={<MyAccountPage />} />
              <Route path='/orden/:id' element={<MyOrderPage />} />
              <Route path='/verificacion' element={<VerificationPage />} />
              <Route path='/error' element={<ErrorPage />} />
            </Routes>
          </PetShopLayout>
        </BrowserRouter>
  );
}