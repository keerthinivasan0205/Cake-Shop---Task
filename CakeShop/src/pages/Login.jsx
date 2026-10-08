import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  // Separate state for each input field
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // stop page from refreshing

    // Simple validation
    if (email === "" || password === "") {
      setError("Please fill in all fields.");
      return;
    }

    // This is frontend only - no real login
    // Just navigate to home page
    navigate("/");
  }

  return (
    <div className="section">
      <div className="auth-container">
        <div className="auth-card">

          <h2>Welcome Back 🎂</h2>
          <p className="auth-sub">Login to your Sweet Crumbs account</p>

          {/* Show error message if there is one */}
          {error && <p className="form-error">{error}</p>}

          <form onSubmit={handleSubmit} className="auth-form">

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={function (e) { setEmail(e.target.value); }}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={function (e) { setPassword(e.target.value); }}
              />
            </div>

            <button type="submit" className="btn-primary btn-full">
              Login
            </button>

          </form>

          <p className="auth-switch">
            Don't have an account? <Link to="/register">Register</Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;
