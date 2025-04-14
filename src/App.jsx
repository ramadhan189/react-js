import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login";
import Register from "./component/register";
import Home from "./component/home";

function Awal() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}



export { Awal }