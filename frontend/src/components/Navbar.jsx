import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Brain, Home, Activity, Info, Mail, Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: <Home size={17} />,
    },
    {
      name: "Predict",
      path: "/predict",
      icon: <Activity size={17} />,
    },
    {
      name: "Info",
      path: "/info",
      icon: <Info size={17} />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <Mail size={17} />,
    },
  ];

  return (
    <header className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo">
          <div className="logo-icon">
            <Brain size={25} />
          </div>

          <div>
            <span className="logo-title">MindPulse</span>
            <span className="logo-subtitle">Mansik Santulan Score</span>
          </div>
        </NavLink>

        <nav
          id="primary-navigation"
          className={`nav-links ${isMenuOpen ? "is-open" : ""}`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <NavLink to="/predict" className="nav-predict-btn">
          Check Now
        </NavLink>

        <button
          type="button"
          className="nav-menu-toggle"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
