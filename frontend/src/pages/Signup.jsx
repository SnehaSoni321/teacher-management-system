import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

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


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "teacher",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const text = await response.text();
      console.log(text);

     try {
  const data = JSON.parse(text);

  alert(data.message || data.error);

  if (response.ok) {
    navigate("/login");
  }

} catch {
  alert("Server did not return JSON");
}

    } catch (error) {
      alert("Signup failed");
      console.log(error);
    }
  };

  return (
     <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
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
    width: "450px",
    textAlign: "center",
  }}
>

        <h2 style={{ marginBottom: "20px", color: "#333" }}>
          Create Account
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
	  autoComplete="off"
          style={{
            width: "90%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
	   autoComplete="off"

          style={{
            width: "90%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
	   autoComplete="new-password"

          style={{
            width: "90%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={handleSignup}
          style={{
            width: "95%",
            padding: "12px",
            marginTop: "15px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export default Signup;