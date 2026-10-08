import { useNavigate } from "react-router-dom";

function CakeCard({ cake, addToCart }) {

  const navigate = useNavigate();

  function goToDetails() {
    navigate("/cakes/" + cake.id);
  }

  function handleAddToCart() {
    addToCart(cake);
  }

  return (
    <div className="cake-card">

      <img src={cake.image} alt={cake.name} className="cake-card-img" />

      <div className="cake-card-body">

        <span className="cake-category">{cake.category}</span>

        <h3 className="cake-name">{cake.name}</h3>

        <div className="cake-meta">
          <span>⭐ {cake.rating}</span>
          <span className="cake-price">₹{cake.price}</span>
        </div>

        <div className="cake-card-actions">
          <button className="btn-outline" onClick={goToDetails}>
            View Details
          </button>
          <button className="btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default CakeCard;
