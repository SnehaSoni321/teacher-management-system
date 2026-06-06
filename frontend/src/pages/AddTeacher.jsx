import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddTeacher() {
  const [teacherData, setTeacherData] = useState({
    name: "",
    email: "",
    subject: "",
    timing: "",
  });

  const navigate = useNavigate();

useEffect(() => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || role !== "admin") {
    navigate("/login", { replace: true });
  }
}, [navigate]);

  const handleChange = (e) => {
    setTeacherData({
      ...teacherData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTeacher = async () => {

if (!teacherData.name || !teacherData.email || !teacherData.subject || !teacherData.timing) {
  alert("Please fill all fields");
  return;
}


    try {
      const response = await fetch("http://localhost:5000/api/teacher/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(teacherData),
      });

      const data = await response.json();
     alert(data.message);

setTeacherData({
  name: "",
  email: "",
  subject: "",
  timing: "",
});

navigate("/viewteachers");

      console.log(data);
    } catch (error) {
      alert("Failed to add teacher");
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
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        width: "450px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#2563eb",
          marginBottom: "10px",
        }}
      >
        Add Teacher
      </h1>

      <p
        style={{
          color: "#666",
          marginBottom: "25px",
        }}
      >
        Add new teacher details
      </p>

      <input
        type="text"
        name="name"
        placeholder="Teacher Name"
        value={teacherData.name}
        onChange={handleChange}
        style={{
          width: "90%",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          marginBottom: "15px",
        }}
      />

      <input
        type="email"
        name="email"
        placeholder="Teacher Email"
        value={teacherData.email}
        onChange={handleChange}
        style={{
          width: "90%",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          marginBottom: "15px",
        }}
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={teacherData.subject}
        onChange={handleChange}
        style={{
          width: "90%",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          marginBottom: "15px",
        }}
      />

      <input
        type="text"
        name="timing"
        placeholder="Class Timing"
        value={teacherData.timing}
        onChange={handleChange}
        style={{
          width: "90%",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          marginBottom: "20px",
        }}
      />

      <button
        onClick={handleAddTeacher}
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
        Add Teacher
      </button>
    </div>
  </div>
);

}

export default AddTeacher;