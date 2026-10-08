import { useNavigate } from "react-router-dom";

function CategoryCard({ category }) {

  const navigate = useNavigate();

  function goToCakes() {
    // Navigate to cakes page with category as a URL query
    navigate("/cakes?category=" + category.name);
  }

  return (
    <div className="category-card" onClick={goToCakes}>
      <span className="category-icon">{category.icon}</span>
      <h4>{category.name}</h4>
      <p>{category.count} Cakes</p>
    </div>
  );
}

export default CategoryCard;
