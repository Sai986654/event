import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServiceSelection from "./pages/ServiceSelection";
import Catering from "./pages/Catering";
import Decoration from "./pages/Decoration";
import Photography from "./pages/Photography";
import Makeup from "./pages/Makeup";
import Sangeet from "./pages/Sangeet";
import QuotationSummary from "./pages/QuotationSummary";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/service-selection" element={<ServiceSelection />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/decoration" element={<Decoration />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/sangeet" element={<Sangeet />} />
        <Route path="/summary" element={<QuotationSummary />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
