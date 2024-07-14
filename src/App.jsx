import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login, Products } from "./Components";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
