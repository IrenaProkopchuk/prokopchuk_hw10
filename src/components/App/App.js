import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Contacts from '../Contacts/Contacts';
import Private from '../Private/Private';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Main from '../Main/Main';
import ProductItem from '../ProductsItem/ProductsItem';
import Products from '../Products/Products';


function App() {
  return (
    <div className="App">
      <h1>Error Page!</h1>

      <BrowserRouter>

        <Navigation />

        <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductItem />} />       
           
            <Route path='private' element={
              <PrivateRoute>
                  <Private/>
              </PrivateRoute>
            } />

        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;

