import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { useState, useEffect } from "react";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
useState;
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

<<<<<<< HEAD
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className=" w-full block">
        <Header />
        <main>
          Todo: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
=======
  return (
    <>
      
      <h1 className="read-the-docs">
        Click on the Vite and React logos to learn more
      </h1>
    </>
  );
>>>>>>> 6746e2b2b65a18f128e1fab0749001327f6e3a4f
}

export default App;
