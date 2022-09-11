import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import ListProduct from './components/products/ListProduct';
import User from './components/users/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ListProduct />} />
        <Route path='/users' element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
