import { useNavigate } from "react-router-dom";

function OrderSuccess() {

  const navigate = useNavigate();

  // Create a simple fake order ID like SC123456
  const randomNumber = Math.floor(100000 + Math.random() * 900000);
  const orderId = "SC" + randomNumber;

  return (
    <div className="section">
      <div className="container" style={{ textAlign: "center" }}>
        <div className="success-card">

          <div className="success-icon">🎉</div>

          <h2>Order Placed Successfully!</h2>

          <p>Thank you for your order. Your cakes are being freshly baked!</p>

          {/* Show the fake order ID */}
          <div className="order-id-box">
            <p>Your Order ID</p>
            <h3>{orderId}</h3>
          </div>

          <p className="success-note">
            Estimated delivery: <strong>2–4 hours</strong>
          </p>

          <button className="btn-primary btn-lg" onClick={() => navigate("/")}>
            Continue Shopping
          </button>

        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
