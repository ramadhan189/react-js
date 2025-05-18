import { BrowserRouter, Routes, Route } from "react-router";

import Login from "./component/login";
import Register from "./component/register";
import Home from "./component/home";
import  Layout from "./component/layout-homepage";
import  DaftarSaya from "./component/fitur/for-home/pages/daftar-saya";
import  Series  from "./component/fitur/for-home/pages/series";
import Film from "./component/fitur/for-home/pages/film";
import Profile from "./component/fitur/for-home/pages/profil";
import Premium from "./component/fitur/for-home/pages/premium/premium";
import Pembayaran from "./component/fitur/for-home/pages/premium/pembayaran";
function Awal() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="series" element={<Series />} />
        <Route path="daftarSaya" element={<DaftarSaya />} />
        <Route path="film" element={<Film />} />
        <Route path="profile" element={<Profile />} />
        <Route path="premium" element={<Premium />}>
          <Route path="pembayaran" element={<Pembayaran />} />            
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  
  );
}



export default Awal