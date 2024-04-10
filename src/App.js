
import './App.css';
import MyNavbar from './components/navigation/navbar.js';
import ItemListContainer from './components/main/itemListContainer.js';
import './style/style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from './components/main/productDetails.jsx';
import ContinentFilter from './components/navigation/ContinentFilter.jsx';
import TypeFilter from './components/navigation/TypeFilter.jsx';
import { CartProvider } from './context/cartContext.jsx';
import CheckoutPage from './components/pages/Checkout.jsx';
import CityFilter from './components/navigation/CityFilter.jsx';
import CountryFilter from './components/navigation/CountryFilter.jsx';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <MyNavbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/continent/:continent" element={<ContinentFilter />} />
            <Route path="/type/:type" element={<TypeFilter />} />
            <Route path="/city/:cities" element={<CityFilter />} />
            <Route path="/country/:countries" element={<CountryFilter />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
