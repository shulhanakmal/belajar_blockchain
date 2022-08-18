import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./menu/Header";
import HomeHeader from "./menu/HomeHeader";
import PeternakHeader from "./menu/PeternakHeader";
import Sidebar from "./menu/Sidebar";
import Home from "./home/Home";
import TentangKami from "./home/TentangKami";
import Galeri from "./home/Galeri";
import Produk from "./home/Produk";
import TentangTraceability from "./home/TentangTraceability";
import Peternak from "./dashboard/peternak/Peternak";
import Peternakan from "./dashboard/peternak/Peternakan";
import Stup from "./dashboard/peternak/Stup";
import Dashboard from "./dashboard/Dashboard";
import Traceability from "./dashboard/traceability/Traceability";

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
              <Route
                path="/tentangtraceability"
                exact
                element={<TentangTraceability />}
              />
            </Routes>
          </BrowserRouter>
        </>
      ) : (
        <BrowserRouter>
          <Header session={session} />
          <Sidebar />
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route
              path="/Peternak"
              exact
              element={
                <>
                  <PeternakHeader />
                  <Peternak />
                </>
              }
            />
            <Route
              path="/Peternakan"
              exact
              element={
                <>
                  <PeternakHeader />
                  <Peternakan />
                </>
              }
            />
            <Route
              path="/Stup"
              exact
              element={
                <>
                  <PeternakHeader />
                  <Stup />
                </>
              }
            />
            <Route path="/Traceability" exact element={<Traceability />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
