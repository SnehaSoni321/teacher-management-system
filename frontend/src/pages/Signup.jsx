import { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "teacher"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async () => {
  alert("Button clicked");

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
    } catch {
      alert("Server did not return JSON");
      console.log(text);
    }
  } catch (error) {
    alert("Signup failed");
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
      <h1>Signup Page</h1>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;