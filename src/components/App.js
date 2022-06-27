import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/login";
import Account from "./Account";
import Header from "./menu/Header";
import HomeHeader from "./menu/HomeHeader";
import Sidebar from "./menu/Sidebar";
import Home from "./home/Home";
import TentangKami from "./home/TentangKami";
import Galeri from "./home/Galeri";
import Produk from "./home/Produk";
import Peternak from "./dashboard/Peternak";
import Panen from "./dashboard/Panen";
import Dashboard from "./dashboard/Dashboard";

const HalamanSatu = () => {
  return <h1>Hello World</h1>;
};

const HalamanDua = () => {
  return <h1>Halaman Dua</h1>;
};

const App = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div>
      {!session ? (
        <>
          <BrowserRouter>
            <HomeHeader />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/tentang-kami" exact element={<TentangKami />} />
              <Route path="/galeri" exact element={<Galeri />} />
              <Route path="/produk" exact element={<Produk />} />
              <Route path="/login" exact element={<Login />} />
            </Routes>
          </BrowserRouter>
        </>
      ) : (
        <BrowserRouter>
          <Header session={session} />
          <Sidebar />
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/HalamanDua" exact element={<HalamanDua />} />
            <Route path="/Peternak" exact element={<Peternak />} />
            <Route path="/Panen" exact element={<Panen />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
