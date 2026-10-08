import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  // Separate state for each input field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // stop page from refreshing

    // Check all fields are filled
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
      setError("Please fill in all fields.");
      return;
    }

    // Check passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Check password length
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // This is frontend only - no real registration
    // Just navigate to login page
    navigate("/login");
  }

  return (
    <div className="section">
      <div className="auth-container">
        <div className="auth-card">

          <h2>Create Account 🧁</h2>
          <p className="auth-sub">Join Sweet Crumbs today</p>

          {/* Show error message if there is one */}
          {error && <p className="form-error">{error}</p>}

          <form onSubmit={handleSubmit} className="auth-form">

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={function (e) { setName(e.target.value); }}
              />
            </div>

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
                placeholder="Min. 6 characters"
                value={password}
                onChange={function (e) { setPassword(e.target.value); }}
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Repeat your password"
                value={confirmPassword}
                onChange={function (e) { setConfirmPassword(e.target.value); }}
              />
            </div>

            <button type="submit" className="btn-primary btn-full">
              Register
            </button>

          </form>

          <p className="auth-switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;
