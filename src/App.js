
import './App.css';
import MyNavbar from './components/navigation/navbar.js';
import ItemListContainer from './components/main/itemListContainer.js';
import Header from './components/main/header.js';
import './style/style.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductDetail from './components/main/productDetails.jsx';
import EuropeFilter from './components/navigation/FilterEurope.jsx'
import AsiaFilter from './components/navigation/FilterAsia.jsx';
import AmericasFilter from './components/navigation/FilterAmericas.jsx';
import AfricaFilter from './components/navigation/FilterAfrica.jsx';
import GourmetFilter from './components/navigation/FilterGourmet.jsx';
import SeasonalFilter from './components/navigation/FilterSeasonal.jsx';
import CultureFilter from './components/navigation/FilterCulture.jsx';
import RomanticFilter from './components/navigation/FilterRomantic.jsx';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/europe" element={<EuropeFilter />} />
        <Route path="/asia" element={<AsiaFilter />} />
        <Route path="/americas" element={<AmericasFilter />} />
        <Route path="/africa" element={<AfricaFilter />} />
        <Route path="/gourmet" element={<GourmetFilter />} />
        <Route path="/culture" element={<CultureFilter />} />
        <Route path="/seasonal" element={<SeasonalFilter />} />
        <Route path="/romantic" element={<RomanticFilter />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
