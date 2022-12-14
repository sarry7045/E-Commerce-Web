import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Navbar from "./Pages/Navbar";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Products from "./Pages/Products";
// import Contact from "./Pages/Contact";
// import Cart from "./Pages/Cart";
// import SingleProduct from "./Pages/SingleProduct";
import Footer from "./Pages/Footer";
const Home = React.lazy(() => import("./Pages/Home"));
const Products = React.lazy(() => import("./Pages/Products"));
const About = React.lazy(() => import("./Pages/About"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const SingleProduct = React.lazy(() => import("./Pages/SingleProduct"));
const Cart = React.lazy(() => import("./Pages/Cart"));

function App() {
  const theme = {
    colors: {
      // heading: "rgb(24 24 29)",
      heading: "#101820FF",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "rgb(98 84 243)",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgb(98 84 243)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg, rgb(98 84 243) 0%, rgb(98 84 243) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Navbar />
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/singleproduct/:id" element={<SingleProduct />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
