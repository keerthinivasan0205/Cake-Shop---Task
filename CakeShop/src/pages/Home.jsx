import { useNavigate } from "react-router-dom";
import CakeCard from "../components/CakeCard";
import CategoryCard from "../components/CategoryCard";
import cakes from "../data/cakes";

// Category data for the home page
const categories = [
  { name: "Birthday",     icon: "🎂", count: 4 },
  { name: "Chocolate",    icon: "🍫", count: 3 },
  { name: "Wedding",      icon: "💍", count: 2 },
  { name: "Anniversary",  icon: "💐", count: 3 },
];

// Why choose us section data
const whyUs = [
  { icon: "🧁", title: "Fresh Daily",     desc: "Baked fresh every morning with premium ingredients." },
  { icon: "🚚", title: "Fast Delivery",   desc: "Same-day delivery available across the city." },
  { icon: "❤️", title: "Made with Love", desc: "Every cake is crafted with care and passion." },
  { icon: "🎨", title: "Custom Designs",  desc: "Personalize your cake for any occasion." },
];

function Home({ addToCart }) {

  const navigate = useNavigate();

  // Show only first 6 cakes on home page
  const popularCakes = cakes.slice(0, 6);

  return (
    <div>

      {/* ---- Hero Section ---- */}
      <section className="hero">
        <div className="hero-content">
          <h1>Freshly Baked Happiness</h1>
          <p>Handcrafted cakes made with love for every special moment in your life.</p>
          <button className="btn-primary btn-lg" onClick={() => navigate("/cakes")}>
            Shop Cakes 🎂
          </button>
        </div>
      </section>


      {/* ---- Categories Section ---- */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="categories-grid">
            {categories.map(function (cat) {
              return <CategoryCard key={cat.name} category={cat} />;
            })}
          </div>
        </div>
      </section>


      {/* ---- Popular Cakes Section ---- */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Popular Cakes</h2>
          <div className="cakes-grid">
            {popularCakes.map(function (cake) {
              return <CakeCard key={cake.id} cake={cake} addToCart={addToCart} />;
            })}
          </div>
          <div className="center-btn">
            <button className="btn-outline btn-lg" onClick={() => navigate("/cakes")}>
              View All Cakes
            </button>
          </div>
        </div>
      </section>


      {/* ---- Why Choose Us Section ---- */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="why-grid">
            {whyUs.map(function (item) {
              return (
                <div key={item.title} className="why-card">
                  <span className="why-icon">{item.icon}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
