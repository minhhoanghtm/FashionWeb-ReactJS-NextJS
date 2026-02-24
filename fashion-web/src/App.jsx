import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProdectDetail/index"
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto flex flex-col min-h-screen">
        <Header />
        <ScrollToTop />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
          </Routes>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
