import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

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

      alert(data.message);
      navigate("/dashboard");
      console.log(data);
    } catch (error) {
      alert("Login failed");
      console.log(error);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "200px",
        fontFamily: "Arial",
      }}
    >
      <div>
        <h1>Login Page</h1>

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
        <br /><br />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;