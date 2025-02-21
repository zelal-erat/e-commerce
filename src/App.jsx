import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Router kullanarak yönlendirme işlemi yapacağız
import Footer from "./layout/Footer"; // Footer bileşenini içeri aktar
import Header from "./layout/Header"; // Header bileşenini içeri aktar
import PageContent from "./layout/PageContent"; // PageContent bileşenini içeri aktar
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { useDispatch } from "react-redux";
import { checkAuth } from "./actions/authAction";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("checkAuth çalıştırılıyor...");
      dispatch(checkAuth());
    }
  }, [dispatch]);
  
  
  return (
    <Router>
       <ToastContainer position="top-right" autoClose={3000} />
      {/* Header tüm sayfalarda görüntülenecek */}
      <Header />

      
      {/* Sayfa içeriği */}
      <PageContent />

      {/* Footer tüm sayfalarda görüntülenecek */}
      <Footer />
    </Router>
  );
}

export default App;
