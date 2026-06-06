import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
  setFormData({
    email: "",
    password: "",
  });
}, []);

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



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const text = await response.text();
      const data = JSON.parse(text);
      console.log(data);

      
      alert(data.message);

     if (!data.token) {
  setFormData({
    email: "",
    password: "",
  });
} 

      if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("name", data.name);
      localStorage.setItem("email", data.email);
      localStorage.setItem("subject", data.subject);
      localStorage.setItem("timing", data.timing);

      setFormData({
      email: "",
      password: "",
      });

  if (data.role === "admin") {
  navigate("/dashboard", { replace: true });
} else {
  navigate("/teacherdashboard", { replace: true });
}

}
      console.log(data);
    } catch (error) {
      alert("Login failed");
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

      <h1
  style={{
    color: "#2563eb",
    marginBottom: "15px",
    fontSize: "32px",
    lineHeight: "1.2",
  }}
>
  Teacher Management
  <br />
  System
</h1>

<p
  style={{
    color: "#666",
    marginBottom: "30px",
    fontSize: "15px",
  }}
>
Admin & Teacher Login Portal
</p>

       <input
  type="email"
  name="email"
  placeholder="Enter email"
  value={formData.email}
  onChange={handleChange}
  autoComplete="new-email"
  style={{
    width: "90%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "15px",
  }}
/>
        <br /><br />

      <input
  type="password"
  name="password"
  placeholder="Enter password"
  value={formData.password}
  onChange={handleChange}
  autoComplete="new-password"
  style={{
    width: "90%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "15px",
  }}
/>
        <br /><br />
     <button
  onClick={handleLogin}
  style={{
    width: "95%",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#2563eb",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  }}
>
  Login
</button>

      </div>
    </div>
  );
}

export default Login;