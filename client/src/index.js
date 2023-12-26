import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Events from "./pages/events";
import Meditation from "./pages/meditation";
import About from "./pages/about";
import { ToastContainer } from "react-toastify";
import Register from "./pages/register";
export default function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />} />
        <Route path='events' element={<Events />} />
        <Route path='meditation' element={<Meditation />} />
        <Route path='register' element={<Register />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);
