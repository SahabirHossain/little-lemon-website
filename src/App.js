import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
import HeaderElement from './components/HeaderElement';

import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HeaderElement />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
