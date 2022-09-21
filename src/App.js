import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/admin/product/AddProduct';
import AddUser from './components/admin/user/AddUser';
import Login from './components/auth/Login';
import Signin from './components/auth/Signin';
import Home from './components/home/Home';
import DetailProduct from './components/products/DetailProduct';
import ProductPage from './components/products/ProductPage';
import UserPage from './components/users/UserPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/users' element={<UserPage />} />
        <Route path='/products/:id' element={<DetailProduct />} />
        <Route path='/products/add' element={<AddProduct />} />
        <Route path='/users/add' element={<AddUser />} />
        <Route path='/signIn' element={<Signin />} />
        <Route path='/logIn' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
