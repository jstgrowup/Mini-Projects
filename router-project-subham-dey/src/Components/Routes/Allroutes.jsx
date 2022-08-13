import { Routes, Route } from "react-router-dom";
import IndividualProd from "../../Products/IndividualProd";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/products" element={<h1>Products</h1>}></Route>
        <Route path="/products/:id" element={<IndividualProd />}></Route>
        <Route path="/mens" element={<h1>Mens</h1>}></Route>
        <Route path="/womens" element={<h1>Womens</h1>}></Route>
        <Route path="/login" element={<h1>Login</h1>}>
          {" "}
        </Route>
        <Route path="/cart" element={<h1>Cart</h1>}></Route>
        <Route path="/unisex" element={<h1>Unisex</h1>}></Route>
      </Routes>
    </>
  );
}
