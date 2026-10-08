import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import cakes from "../data/cakes";

function CakeDetails({ addToCart }) {

  const { id } = useParams();       // get the cake id from the URL
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);

  // Find the cake that matches the id from the URL
  // useParams gives us a string, so we convert it to a number
  let cake = null;
  for (let i = 0; i < cakes.length; i++) {
    if (cakes[i].id === Number(id)) {
      cake = cakes[i];
      break;
    }
  }

  // If no cake found, show a simple message
  if (cake === null) {
    return (
      <div className="section container" style={{ textAlign: "center" }}>
        <h2>Cake not found.</h2>
        <button className="btn-primary" onClick={() => navigate("/cakes")}>
          Back to Cakes
        </button>
      </div>
    );
  }

  function handleDecrease() {
    // Don't go below 1
    if (qty > 1) {
      setQty(qty - 1);
    }
  }

  function handleIncrease() {
    setQty(qty + 1);
  }

  function handleAddToCart() {
    addToCart(cake, qty);
    navigate("/cart");
  }

  return (
    <div className="section">
      <div className="container">

        {/* Back button */}
        <button className="btn-back" onClick={() => navigate(-1)}>← Back</button>

        <div className="details-layout">

          {/* Cake Image */}
          <div>
            <img src={cake.image} alt={cake.name} className="details-img" />
          </div>

          {/* Cake Info */}
          <div className="details-info">

            <span className="cake-category">{cake.category}</span>

            <h2>{cake.name}</h2>

            <p className="details-rating">⭐ {cake.rating} / 5</p>

            <p className="details-price">₹{cake.price}</p>

            <p className="details-desc">{cake.description}</p>

            {/* Quantity Selector */}
            <div className="qty-selector">
              <button onClick={handleDecrease}>−</button>
              <span>{qty}</span>
              <button onClick={handleIncrease}>+</button>
            </div>

            {/* Action Buttons */}
            <div className="details-actions">
              <button className="btn-primary btn-lg" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button className="btn-outline btn-lg" onClick={() => navigate("/cakes")}>
                Continue Shopping
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default CakeDetails;
