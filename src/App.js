import "./style/App.css";
import Welcome from "./components/Welcome"
import MainNavigation from "./components/MainNavigation";
import Products from "./components/Products";
import Basket from "./components/Basket";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/product-list" element={<Products />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
