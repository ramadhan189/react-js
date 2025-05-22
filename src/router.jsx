import { BrowserRouter, Routes, Route } from "react-router";
import { lazy, Suspense } from "react";

import UserList from "../api/servis";
import Login from "./component/login";
const Register = lazy(() => import("./component/register"));
const Home = lazy(() => import("./component/home"));
import  Layout from "./component/layout-homepage";
const DaftarSaya = lazy(() => import("./component/fitur/for-home/pages/daftar-saya"));
const Series = lazy(() => import("./component/fitur/for-home/pages/series"));
const Film = lazy(() => import("./component/fitur/for-home/pages/film"));
const Profile = lazy(() => import("./component/fitur/for-home/pages/profil"));2
const Premium = lazy(() => import("./component/fitur/for-home/pages/premium/premium"));
const Pembayaran = lazy(() => import("./component/fitur/for-home/pages/premium/pembayaran"));
function Awal() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/user" element={<UserList />} />
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
    </Suspense>
  </BrowserRouter>
  
  );
}



export default Awal