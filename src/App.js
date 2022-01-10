import ButtonAppBar from "./components/AppBar";
import ProductListComponent from "./components/ProductListComponent";
import {useState} from "react";
import { Routes, Route } from "react-router-dom";
import UsersPage from "./routes/users";
import ProfilesPage from "./routes/profiles";
import CreateProduct from "./CreateProduct";
import { Login } from "./components/Login";




function App() {
    return (
    <>
        <ButtonAppBar/>
        <Routes>
            <Route path="/" element={<UsersPage />} />
            <Route path="about" element={<ProfilesPage />} />
            <Route path="login" element={<Login />} />
            <Route path="products" element={<ProductListComponent />} />
            <Route path="products/add" element={<CreateProduct />} />
        </Routes>
    </>
  );
}

export default App;
