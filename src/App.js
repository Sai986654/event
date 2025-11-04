import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import FloatingContact from "./components/FloatingContact";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import { SelectionProvider } from "./context/SelectionContext";
import LiveSummarySidebar from "./components/LiveSummarySidebar";
import "./App.css";
import RequestCallback from "./components/RequestCallback";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function App() {
  const location = useLocation();
  const hideOnPaths = ["/", "/about", "/contact", "/summary"];
  {!hideOnPaths.includes(location.pathname) && <LiveSummarySidebar />}
  return (
    <SelectionProvider>
      <Navbar />
      <LiveSummarySidebar /> 
      <ScrollToTop/>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
        <Routes location={location}>
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
        </motion.div>
      </AnimatePresence>
      <RequestCallback />
      <FloatingContact />
      <Footer />
    </SelectionProvider>
  );
}

export default App;
