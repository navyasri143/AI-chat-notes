// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// const Home = () => {
//   return (
//     <>
//     <Navbar />
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Welcome to AI Chat Notes</h1>
//       <p>Organize your thoughts and notes with AI-powered assistance.</p>
//       <div style={{ marginTop: "20px" }}>
//         <Link to="/login">
//           <button style={{ marginRight: "10px" }}>Login</button>
//         </Link>
//         <Link to="/register">
//           <button>Register</button>
//         </Link>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Home;

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../assets/styles/Home.css"; // (optional, if you want to separate styles)

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-left">
          <h1>Welcome to AI Chat Notes</h1>
          <p>Organize your thoughts and notes with AI-powered assistance.</p>
          <div className="home-buttons">
            <Link to="/login">
              <button className="home-btn">Login</button>
            </Link>
            <Link to="/register">
              <button className="home-btn">Register</button>
            </Link>
          </div>
        </div>
        {/* Optional: You can add icons or images on the right here */}
        <div className="home-right">
          {/* Placeholder for visual elements */}
        </div>
      </div>
    </>
  );
};

export default Home;
