import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Login, Products } from "./Components";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}
