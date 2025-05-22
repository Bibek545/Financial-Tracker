import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import Header from "./components/Header";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          {/* login */}
          <Route path="/login" element={<Login />} />
          {/* signup */}
          <Route path="/signup" element={<Signup />} />
          {/* dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* transaction */}
          <Route path="/transaction" element={<Transaction />} />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
