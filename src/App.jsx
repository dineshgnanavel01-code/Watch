import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InteractiveBackground from "./components/InteractiveBackground";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import WatchDetails from "./pages/WatchDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { CartProvider } from "./context/CartContext";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>

       
        <div className={loading ? "app-hidden" : "app-visible"}>
          <InteractiveBackground>

            <Navbar />

            <main className="flex-grow">
              <Routes>

                <Route
                  path="/"
                  element={<Home />}
                />

                <Route
                  path="/collection"
                  element={<Collection />}
                />

                <Route
                  path="/watch/:id"
                  element={<WatchDetails />}
                />

                <Route
                  path="/cart"
                  element={<Cart />}
                />

                <Route
                  path="/checkout"
                  element={<Checkout />}
                />

                <Route
                  path="/login"
                  element={<Login />}
                />

                <Route
                  path="/signup"
                  element={<Signup />}
                />

              </Routes>
            </main>

            <Footer />

          </InteractiveBackground>
        </div>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;