import React, { useState } from "react";
import "./App.css";

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
    <line x1="2" y1="2" x2="22" y2="22" />
  </svg>
);

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (isLogin) {
        alert(`Welcome back, ${formData.email}!`);
      } else {
        alert(`Registration successful! Welcome, ${formData.name}.`);
      }
    }, 1500);
  };

  const handleTabSwitch = (loginState) => {
    setIsLogin(loginState);
    setFormData({ name: "", email: "", password: "" });
    setShowPassword(false);
  };

  return (
    <div className="auth-shell">
      {/* Brand Panel */}
      <div className="brand-panel">
        <div className="brand-overlay" />
        <div className="brand-grid" />
        <div className="brand-content">
          <div className="brand-badge">EST. 2025</div>
          <h1 className="brand-title">Construct<span>Build</span></h1>
          <p className="brand-tagline">Building the future, one structure at a time.</p>
          <div className="brand-metrics">
            <div className="metric">
              <span className="metric-value">250+</span>
              <span className="metric-label">Projects</span>
            </div>
            <div className="metric-divider" />
            <div className="metric">
              <span className="metric-value">98%</span>
              <span className="metric-label">On Time</span>
            </div>
            <div className="metric-divider" />
            <div className="metric">
              <span className="metric-value">15+</span>
              <span className="metric-label">Years</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Panel */}
      <div className="form-panel">
        <div className="form-container">
          {/* Tabs */}
          <div className="tabs" role="tablist">
            <button
              className={`tab ${isLogin ? "active" : ""}`}
              onClick={() => handleTabSwitch(true)}
              type="button"
              role="tab"
              aria-selected={isLogin}
            >
              Sign In
            </button>
            <button
              className={`tab ${!isLogin ? "active" : ""}`}
              onClick={() => handleTabSwitch(false)}
              type="button"
              role="tab"
              aria-selected={!isLogin}
            >
              Register
            </button>
            <div className={`tab-indicator ${isLogin ? "left" : "right"}`} />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="form-header">
              <h2>{isLogin ? "Welcome back" : "Create account"}</h2>
              <p>{isLogin ? "Enter your credentials to access your account." : "Fill in the details below to get started."}</p>
            </div>

            {!isLogin && (
              <div className="input-group slide-in">
                <label htmlFor="name" className={focusedField === "name" || formData.name ? "float" : ""}>Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required={!isLogin}
                  autoComplete="name"
                />
              </div>
            )}

            <div className="input-group slide-in" style={{ animationDelay: "0.05s" }}>
              <label htmlFor="email" className={focusedField === "email" || formData.email ? "float" : ""}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                required
                autoComplete="email"
              />
            </div>

            <div className="input-group slide-in" style={{ animationDelay: "0.1s" }}>
              <label htmlFor="password" className={focusedField === "password" || formData.password ? "float" : ""}>Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  required
                  autoComplete={isLogin ? "current-password" : "new-password"}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="forgot-password slide-in" style={{ animationDelay: "0.15s" }}>
                <a href="#forgot">Forgot password?</a>
              </div>
            )}

            <button
              type="submit"
              className={`submit-btn ${isLoading ? "loading" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="spinner" />
              ) : isLogin ? (
                "Sign In"
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="divider slide-in" style={{ animationDelay: "0.2s" }}>
            <span>or continue with</span>
          </div>

          <div className="social-btn slide-in" style={{ animationDelay: "0.25s" }}>
            <GoogleIcon />
            <span>{isLogin ? "Sign in with Google" : "Sign up with Google"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return <AuthForm />;
}
