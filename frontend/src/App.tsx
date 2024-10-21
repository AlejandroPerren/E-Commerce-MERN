import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import SummaryApi from './common';
import { useDispatch } from 'react-redux';


export default function App() {
  const dispatch = useDispatch();
  const [cartProductCount, setCartProductCount] = useState(0);

  const fetchUserDetails = async () => {
    try {
      const dataResponse = await fetch(SummaryApi.current_user.url, {
        method: SummaryApi.current_user.method,
        credentials: 'include',
      });

      if (!dataResponse.ok) {
        throw new Error("Failed to fetch user details");
      }

      const dataApi = await dataResponse.json();

 
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };


  useEffect(() => {
    fetchUserDetails();
  }, [dispatch]); 

  return (
    <Context.Provider
      value={{
        fetchUserDetails,
      }}
    >
      <ToastContainer position="top-center" />
      <Header />
      <main className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </main>
      <Footer />
    </Context.Provider>
  );
}
