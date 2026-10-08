import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cart, clearCart }) {

  const navigate = useNavigate();

  // Separate state for each form field
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState("");

  // Calculate totals
  let subtotal = 0;
  for (let i = 0; i < cart.length; i++) {
    subtotal = subtotal + cart[i].price * cart[i].qty;
  }
  const delivery = 50;
  const total = subtotal + delivery;

  // If cart is empty, show a message
  if (cart.length === 0) {
    return (
      <div className="section container" style={{ textAlign: "center" }}>
        <h3>Your cart is empty.</h3>
        <button className="btn-primary" onClick={() => navigate("/cakes")}>
          Shop Cakes
        </button>
      </div>
    );
  }

  function handleOrder(e) {
    e.preventDefault(); // stop page from refreshing

    // Check all fields are filled
    if (name === "" || phone === "" || address === "" || city === "" || pincode === "") {
      setError("Please fill in all fields.");
      return;
    }

    // Clear the cart and go to success page
    clearCart();
    navigate("/order-success");
  }

  return (
    <div className="section">
      <div className="container">

        <h2 className="section-title">Checkout</h2>

        <div className="checkout-layout">

          {/* ---- Delivery Form ---- */}
          <div className="checkout-form-wrap">
            <h3>Delivery Details</h3>

            {error && <p className="form-error">{error}</p>}

            <form onSubmit={handleOrder} className="auth-form">

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={function (e) { setName(e.target.value); }}
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  placeholder="10-digit phone number"
                  value={phone}
                  onChange={function (e) { setPhone(e.target.value); }}
                />
              </div>

              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Street address"
                  value={address}
                  onChange={function (e) { setAddress(e.target.value); }}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={function (e) { setCity(e.target.value); }}
                  />
                </div>
                <div className="form-group">
                  <label>Pincode</label>
                  <input
                    type="text"
                    placeholder="Pincode"
                    value={pincode}
                    onChange={function (e) { setPincode(e.target.value); }}
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary btn-full">
                Place Order 🎂
              </button>

            </form>
          </div>


          {/* ---- Order Summary ---- */}
          <div className="cart-summary">
            <h3>Order Summary</h3>

            {/* List each cart item */}
            {cart.map(function (item) {
              return (
                <div key={item.id} className="summary-item">
                  <span>{item.name} × {item.qty}</span>
                  <span>₹{item.price * item.qty}</span>
                </div>
              );
            })}

            <hr />

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <span>₹{delivery}</span>
            </div>

            <div className="summary-row total-row">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Checkout;
