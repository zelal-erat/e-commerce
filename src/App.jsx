import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Router kullanarak yönlendirme işlemi yapacağız
import Footer from "./layout/Footer"; // Footer bileşenini içeri aktar
import Header from "./layout/Header"; // Header bileşenini içeri aktar
import PageContent from "./layout/PageContent"; // PageContent bileşenini içeri aktar

function App() {
  return (
    <Router>
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
