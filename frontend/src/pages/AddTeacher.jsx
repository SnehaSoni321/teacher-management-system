import { useState } from "react";

function AddTeacher() {
  const [teacherData, setTeacherData] = useState({
    name: "",
    subject: "",
    timing: "",
  });

  const handleChange = (e) => {
    setTeacherData({
      ...teacherData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTeacher = async () => {
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
    console.log(data);
  } catch (error) {
    alert("Failed to add teacher");
    console.log(error);
  }
};
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "150px",
        fontFamily: "Arial",
      }}
    >
      <h1>Add Teacher</h1>

      <input
        type="text"
        name="name"
        placeholder="Teacher Name"
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="text"
        name="timing"
        placeholder="Class Timing"
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={handleAddTeacher}>Add Teacher</button>
    </div>
  );
}

export default AddTeacher;