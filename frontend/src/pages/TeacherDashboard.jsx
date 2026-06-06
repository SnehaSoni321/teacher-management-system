import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function TeacherDashboard() {
  const navigate = useNavigate();

useEffect(() => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || role !== "teacher") {
    navigate("/login", { replace: true });
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
          padding: "40px",
          borderRadius: "20px",
          width: "500px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h1
  style={{
    color: "#2563eb",
    fontSize: "42px",
    marginBottom: "20px",
    lineHeight: "1.3",
  }}
>
 👨‍🏫 Teacher Dashboard
</h1>
        <p
          style={{
            color: "#666",
            marginBottom: "30px",
          }}
        >
          Welcome Teacher
        </p>

        <div
          style={{
            background: "#f8fafc",
            padding: "20px",
            borderRadius: "15px",
            textAlign: "left",
          }}
        >
          <h3>📋 Teacher Information</h3>

          <p><b>Name:</b> {localStorage.getItem("name")}</p>
          <p><b>Email:</b> {localStorage.getItem("email")}</p>
          <p><b>Role:</b> {localStorage.getItem("role")}</p>


        </div>

        <div
          style={{
            marginTop: "20px",
            background: "#eff6ff",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h3>📅 Today's Schedule</h3>
         <p>
           Schedule Available in Teacher Records
        </p>

        </div>

        <button
         onClick={() => {
 	 localStorage.clear();
 	 navigate("/login", { replace: true });
	 }}

           style={{
            marginTop: "25px",
            padding: "12px 25px",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#ef4444",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default TeacherDashboard;