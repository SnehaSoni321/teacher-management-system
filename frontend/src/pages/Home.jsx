import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token) {
      if (role === "admin") {
        navigate("/dashboard", { replace: true });
      } else if (role === "teacher") {
        navigate("/teacherdashboard", { replace: true });
      }
    }
  }, [navigate]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "50px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          width: "500px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#2563eb",
            fontSize: "38px",
            marginBottom: "15px",
          }}
        >
          Teacher Management System
        </h1>

        <p
          style={{
            color: "#666",
            fontSize: "18px",
            marginBottom: "35px",
          }}
        >
          Manage Teachers, Schedules and Records Easily
        </p>

        <Link to="/login">
          <button
            style={{
              width: "90%",
              padding: "12px",
              marginBottom: "15px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Admin Login
          </button>
        </Link>

        <br />

        <Link to="/login">
          <button
            style={{
              width: "90%",
              padding: "12px",
              marginBottom: "15px",
              backgroundColor: "#10b981",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Teacher Login
          </button>
        </Link>

        <br />

        <Link to="/signup">
          <button
            style={{
              width: "90%",
              padding: "12px",
              backgroundColor: "#9333ea",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;