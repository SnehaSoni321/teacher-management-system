import { useEffect, useState } from "react";

function ViewTeachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

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

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
      }}
    >
      <h1>Teachers List</h1>

      {teachers.map((teacher, index) => (
        <div key={index}>
          <p>Name: {teacher.name}</p>
          <p>Subject: {teacher.subject}</p>
          <p>Timing: {teacher.timing}</p>

          <button onClick={() => deleteTeacher(teacher._id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default ViewTeachers;