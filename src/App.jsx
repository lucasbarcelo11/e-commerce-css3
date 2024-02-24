import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import { getAllProductsThunk } from "./store/slices/products.slice";
import { useDispatch } from "react-redux";
import Header from "./components/shared/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductIdPage from "./pages/ProductIdPage";
import CartPage from "./pages/CartPage";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Purchases from "./pages/Purchases";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsThunk());
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductIdPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/purchases" element={<Purchases/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
