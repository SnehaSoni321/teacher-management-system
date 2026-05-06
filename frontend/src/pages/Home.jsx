import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "darkblue" }}>Teacher Management System</h1>

      <p style={{ fontSize: "20px" }}>
        Welcome to Teacher Management Portal
      </p>

      <Link to="/login">
        <button
          style={{
            padding: "12px 25px",
            margin: "10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Admin Login
        </button>
      </Link>

      <Link to="/login">
        <button
          style={{
            padding: "12px 25px",
            margin: "10px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Teacher Login
        </button>
      </Link>

      <br /><br />

      <Link to="/signup">
        <button
          style={{
            padding: "12px 25px",
            backgroundColor: "purple",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Signup
        </button>
      </Link>
    </div>
  );
}

export default Home;