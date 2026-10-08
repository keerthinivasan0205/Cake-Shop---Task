import { useNavigate } from "react-router-dom";

function Cart({ cart, removeFromCart, increaseQty, decreaseQty }) {

  const navigate = useNavigate();

  // Calculate subtotal by looping through cart items
  let subtotal = 0;
  for (let i = 0; i < cart.length; i++) {
    subtotal = subtotal + cart[i].price * cart[i].qty;
  }

  const delivery = subtotal > 0 ? 50 : 0;
  const total = subtotal + delivery;

  // Show empty cart message if cart has no items
  if (cart.length === 0) {
    return (
      <div className="section container" style={{ textAlign: "center" }}>
        <div className="empty-cart">
          <p className="empty-icon">🛒</p>
          <h3>Your cart is empty</h3>
          <p>Add some delicious cakes to get started!</p>
          <button className="btn-primary btn-lg" onClick={() => navigate("/cakes")}>
            Shop Cakes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="container">

        <h2 className="section-title">Your Cart</h2>

        <div className="cart-layout">

          {/* ---- Cart Items ---- */}
          <div className="cart-items">
            {cart.map(function (item) {
              return (
                <div key={item.id} className="cart-item">

                  <img src={item.image} alt={item.name} className="cart-item-img" />

                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p className="cart-item-category">{item.category}</p>
                    <p className="cart-item-price">₹{item.price} each</p>
                  </div>

                  {/* Quantity controls */}
                  <div className="cart-item-controls">
                    <button onClick={() => decreaseQty(item.id)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>

                  {/* Item total and remove button */}
                  <div className="cart-item-total">
                    <p>₹{item.price * item.qty}</p>
                    <button className="btn-remove" onClick={() => removeFromCart(item.id)}>
                      🗑 Remove
                    </button>
                  </div>

                </div>
              );
            })}
          </div>


          {/* ---- Order Summary ---- */}
          <div className="cart-summary">
            <h3>Order Summary</h3>

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

            <button className="btn-primary btn-full" onClick={() => navigate("/checkout")}>
              Proceed to Checkout
            </button>

            <button className="btn-outline btn-full" onClick={() => navigate("/cakes")}>
              Continue Shopping
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Cart;
