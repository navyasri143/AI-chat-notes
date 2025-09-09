// import { Link, useNavigate, useLocation } from "react-router-dom";
// import "../assets/styles/Navbar.css";
// import logo from "../assets/images/chatnote-removebg-preview.png";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const isHome = location.pathname === "/";
//   const isNotes = location.pathname === "/notes";
//   const isLogin = location.pathname === "/login";
//   const isRegister = location.pathname === "/register";
//   const isAbout = location.pathname === "/about";
//   const isContact = location.pathname === "/contact";
//   return (
//     <nav className="navbar">
//       <Link to="/" className="navbar-brand">
//         <img src={logo} alt="AI Chat Notes Logo" className="navbar-logo" />
//         <h1 className="navbar-title">AI Chat Notes</h1>
//       </Link>
//       <div className="navbar-links">
//         {isHome || isLogin || isRegister || isAbout || isContact ? (
//           <>
//             <Link to="/about" className="nav-link">About</Link>
//             <Link to="/contact" className="nav-link">Contact</Link>
//             <Link to="/login" className="nav-link">Login</Link>
//             <Link to="/register" className="nav-link">Register</Link>
//           </>
//         ) : (
//           <>
//             <Link
//               to="/notes"
//               className={`nav-link ${location.pathname === "/notes" ? "active" : ""}`}
//             >
//               Notes
//             </Link>
//             <button onClick={handleLogout} className="logout-button">
//               Logout
//             </button>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/images/chatnote-removebg-preview.png";
import "../assets/styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const getInitial = (name) => name ? name[0].toUpperCase() : "U";

  const isPublicPage = ["/", "/login", "/register", "/about", "/contact"].includes(location.pathname);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="AI Chat Notes Logo" className="navbar-logo" />
        <h1 className="navbar-title">AI Chat Notes</h1>
      </Link>

      <div className="navbar-links">
        {isPublicPage ? (
          <>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        ) : user ? (
          <>
            {/* <Link to="/notes" className={`nav-link ${location.pathname === "/notes" ? "active" : ""}`}>Notes</Link> */}
            <div className="avatar-dropdown" onClick={toggleDropdown}>
              <div className="avatar-circle" style={{ backgroundColor: "#4285F4" }}>
                {getInitial(user.name)}
              </div>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <p>{user.name}</p>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          </>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
