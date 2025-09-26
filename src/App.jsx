import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";
import Product from "./component/Product";
import Pricing from "./component/Pricing";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/pricing" element={<Pricing />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
