import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cakes from "./pages/Cakes";
import CakeDetails from "./pages/CakeDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

function App() {

  // cart state - we load it from localStorage so it stays after page refresh
  const [cart, setCart] = useState([]); 

  // This runs once when the app loads
  // It reads the saved cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // This runs every time cart changes
  // It saves the latest cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  // Add a cake to the cart
  function addToCart(cake, qty) {

    // qty is optional - default is 1
    if (!qty) {
      qty = 1;
    }

    // Check if this cake is already in the cart
    let alreadyInCart = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === cake.id) {
        alreadyInCart = true;
        break;
      }
    }

    if (alreadyInCart) {
      // If cake is already in cart, just increase its quantity
      const updatedCart = cart.map(function (item) {
        if (item.id === cake.id) {
          return { ...item, qty: item.qty + qty };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      // If cake is not in cart, add it as a new item
      const newItem = { ...cake, qty: qty };
      setCart([...cart, newItem]);
    }
  }


  // Remove a cake from the cart by its id
  function removeFromCart(id) {
    const updatedCart = cart.filter(function (item) {
      return item.id !== id;
    });
    setCart(updatedCart);
  }


  // Increase quantity of a cart item
  function increaseQty(id) {
    const updatedCart = cart.map(function (item) {
      if (item.id === id) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  }


  // Decrease quantity of a cart item
  // If quantity becomes 0, remove it from cart
  function decreaseQty(id) {
    const updatedCart = [];

    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];

      if (item.id === id) {
        // Only keep the item if qty is more than 1
        if (item.qty > 1) {
          updatedCart.push({ ...item, qty: item.qty - 1 });
        }
        // If qty is 1, we don't push it - so it gets removed
      } else {
        updatedCart.push(item);
      }
    }

    setCart(updatedCart);
  }


  // Clear the entire cart (used after placing order)
  function clearCart() {
    setCart([]);
  }


  // Count total number of items in cart (for navbar badge)
  let cartCount = 0;
  for (let i = 0; i < cart.length; i++) {
    cartCount = cartCount + cart[i].qty;
  }


  return (
    <BrowserRouter>

      {/* Navbar is shown on every page */}
      <Navbar cartCount={cartCount} />

      <main>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/cakes" element={<Cakes addToCart={addToCart} />} />
          <Route path="/cakes/:id" element={<CakeDetails addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} increaseQty={increaseQty} decreaseQty={decreaseQty} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
          <Route path="/order-success" element={<OrderSuccess />} />
        </Routes>
      </main>

      {/* Footer is shown on every page */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;
