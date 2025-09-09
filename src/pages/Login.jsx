// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import API from "../api";
// import Navbar from "../components/Navbar";
// import logo1 from "../assets/images/chatnote-removebg-preview.png";

// import "../assets/styles/Login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await API.post("/auth/login", { email, password });
//       localStorage.setItem("token", data.token);
//       navigate("/notes");
//     } catch (error) {
//       alert("Login failed");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="login-container">
//         <div className="login-left">
//           <form className="login-form" onSubmit={handleLogin}>
//             <h1 className="login-title">Welcome Back</h1>
//             <p className="login-subtitle">Sign in to continue to AI Chat Notes</p>

//             <div className="login-group">
//               <label>Email Address</label>
//               <input
//                 type="email"
//                 placeholder="you@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="login-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 placeholder="Enter 6 characters or more"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <button type="submit">Sign In</button>

//             <Link to="/forgot-password" className="login-link">
//               Forgot your password?
//             </Link>

//             <div className="login-divider">
//               <span>Or continue with</span>
//             </div>

//             <div className="login-socials">
//               <button type="button" className="login-social-btn">Google</button>
//               <button type="button" className="login-social-btn">Facebook</button>
//             </div>

//             <Link to="/register" className="login-link">
//               Don't have an account? Sign up
//             </Link>
//           </form>
//         </div>

//         <div className="login-right">
//           <img src={logo1} alt="Login Illustration" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";
import Navbar from "../components/Navbar";
import logo1 from "../assets/images/chatnote-removebg-preview.png";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth";

import "../assets/styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    await signOut(auth);
    try {
      const { data } = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", data.token);
      // localStorage.setItem("user", JSON.stringify({
      //   name: data.user.username || "User",
      //   email: data.user.email,
      //   photoURL: ""
      // }));
      localStorage.setItem("user", JSON.stringify({
  name: data.user?.username || "User",
  email: data.user?.email || email,
  photoURL: ""
}));
      navigate("/notes");
    } catch (error) {
      alert("Login failed");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();

      // Save to localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify({
        name: user.displayName || "User",
        email: user.email,
        photoURL: user.photoURL || ""
      }));

      console.log("Google login success, navigating to /notes");
      navigate("/notes");
    } catch (error) {
      console.error("Google sign-in error", error);
      alert("Google sign-in failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-left">
          <form className="login-form" onSubmit={handleLogin}>
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-subtitle">Sign in to continue to AI Chat Notes</p>

            <div className="login-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="login-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter 6 characters or more"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit">Sign In</button>

            <Link to="/forgot-password" className="login-link">
              Forgot your password?
            </Link>

            <div className="login-divider">
              <span>Or continue with</span>
            </div>

            <div className="login-socials">
              <button
                type="button"
                className="login-social-btn"
                onClick={handleGoogleSignIn}
              >
                Google
              </button>
              <button type="button" className="login-social-btn">
                Facebook
              </button>
            </div>

            <Link to="/register" className="login-link">
              Don't have an account? Sign up
            </Link>
          </form>
        </div>

        <div className="login-right">
          <img src={logo1} alt="Login Illustration" />
        </div>
      </div>
    </>
  );
};

export default Login;
