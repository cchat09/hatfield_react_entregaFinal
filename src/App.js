
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

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <MyNavbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/gourmet" element={<TypeFilter type="gourmet" />} />
            <Route path="/seasonal" element={<TypeFilter type="seasonal" />} />
            <Route path="/romantic" element={<TypeFilter type="romantic" />} />
            <Route path="/culture" element={<TypeFilter type="culture and history" />} />
            <Route path="/active" element={<TypeFilter type="active" />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/continent/:continent" element={<ContinentFilter />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
