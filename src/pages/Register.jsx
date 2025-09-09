// import { useState } from "react";
// import API from "../api";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post("/auth/register", { name, email, password });
//       navigate("/login");
//     } catch (error) {
//       alert("Registration failed");
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleRegister}>
//         <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;

// import { useState } from "react";
// import API from "../api";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";

// const Register = () => {
//   const [username, setUsername] = useState(""); // changed from name
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post("/auth/register", { username, email, password }); // changed from name
//       navigate("/login");
//     } catch (error) {
//       alert("Registration failed");
//       console.error(error);
//     }
//   };

//   return (
//     <>
//     <Navbar />
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleRegister}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)} // changed from setName
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//     </>
//   );
// };

// export default Register;

import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../assets/styles/Register.css";
import logo1 from "../assets/images/chatnote-removebg-preview.png";

const Register = () => {
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", { username, email, password });
      navigate("/login");
    } catch (error) {
      alert("Registration failed");
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="register-container">
        <div className="register-left">
          <h2>Register</h2>
          <form onSubmit={handleRegister} className="register-form">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Register</button>
          </form>
        </div>
        <div className="register-right">
          <img src={logo1} alt="Logo" />
        </div>
      </div>
    </>
  );
};

export default Register;
