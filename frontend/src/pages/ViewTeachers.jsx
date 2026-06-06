import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ViewTeachers() {
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || role !== "admin") {
      navigate("/login", { replace: true });
      return;
    }

    fetchTeachers();
  }, [navigate]);

  const fetchTeachers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/teacher/all");
      const data = await response.json();
      setTeachers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTeacher = async (id) => {
  if (!window.confirm("Are you sure you want to delete this teacher?")) return;

  try {
    await fetch(`http://localhost:5000/api/teacher/delete/${id}`, {
      method: "DELETE",
    });

    alert("Teacher deleted successfully");
    fetchTeachers();
  } catch (error) {
    console.log(error);
  }
};

const editTeacher = async (teacher) => {
  const newName = prompt("Enter new name", teacher.name);
  const newSubject = prompt("Enter new subject", teacher.subject);
  const newTiming = prompt("Enter new timing", teacher.timing);

  try {
    await fetch(`http://localhost:5000/api/teacher/update/${teacher._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newName,
        subject: newSubject,
        timing: newTiming,
      }),
    });

    alert("Teacher updated successfully");
    fetchTeachers();
  } catch (error) {
    console.log(error);
  }
};


  return (
   <div
  style={{
    textAlign: "center",
    minHeight: "100vh",
    padding: "30px",
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
    fontFamily: "Arial",
  }}
>
     <h1
  style={{
    color: "white",
    marginBottom: "30px",
  }}
>
  Teachers List
</h1>

      {teachers.map((teacher, index) => (
        <div
  key={index}
  style={{
    background: "white",
    padding: "20px",
    margin: "20px auto",
    width: "70%",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  }}
>

         <h3>{teacher.name}</h3>
<p><strong>Subject:</strong> {teacher.subject}</p>
<p><strong>Timing:</strong> {teacher.timing}</p>

          <button
  onClick={() => deleteTeacher(teacher._id)}
  style={{
    backgroundColor: "#ef4444",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  Delete
</button>
<button
  onClick={() => editTeacher(teacher)}
  style={{
    marginLeft: "10px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  Edit
</button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default ViewTeachers;