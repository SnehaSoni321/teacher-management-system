import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

useEffect(() => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || role !== "admin") {
    navigate("/login", { replace: true });
  }
}, [navigate]);


  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "white",
          marginBottom: "40px",
        }}
      >
        Admin Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "blue",
            padding: "25px",
            borderRadius: "15px",
            width: "250px",
            textAlign: "center",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Add Teacher</h2>

          <button
            onClick={() => navigate("/addteacher")}
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#10b981",
              color: "white",
              cursor: "pointer",
            }}
          >
            Open
          </button>
        </div>

        <div
          style={{
            background: "blue",
            padding: "25px",
            borderRadius: "15px",
            width: "250px",
            textAlign: "center",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2>View Teachers</h2>

          <button
            onClick={() => navigate("/viewteachers")}
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#10b981",
              color: "white",
              cursor: "pointer",
            }}
          >
            Open
          </button>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <button
         onClick={() => {
 	 localStorage.clear();
	  navigate("/login", { replace: true });
	  }}   
          style={{
            marginTop: "40px",
            padding: "12px 25px",
            border: "none",
            borderRadius: "10px",
            background: "#ef4444",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;