import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import ProductPage from './components/products/ProductPage';
import UserPage from './components/users/UserPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/users' element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
