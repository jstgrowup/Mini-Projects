import { Routes, Route } from "react-router-dom";
import IndividualProd from "../Products/IndividualProd";

import Home from "../Pages/Home";
import Mens from "../Pages/Mens";
import Sneakers from "../Pages/Sneakers";
import Womens from "../Pages/Womens";
import Products from "../Pages/Products";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<IndividualProd />} />
        <Route path="/products/mens" element={<Mens />}></Route>
        <Route path="/products/sneakers" element={<Sneakers />} />
        <Route path="/products/womens" element={<Womens />} />


        <Route path="/login" element={<h1>Login</h1>} ></Route>

        {" "}

        <Route path="/cart" element={<h1>Cart</h1>}></Route>
        <Route path="/unisex" element={<h1>Unisex</h1>}></Route>
      </Routes>
    </>
  );
}
