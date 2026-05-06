import { useNavigate } from "react-router-dom";


function Dashboard() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
      }}
    >
      <h1>Admin Dashboard</h1>

      <button
        style={{ margin: "10px", padding: "10px" }}
        onClick={() => navigate("/addteacher")}
      >
        Add Teacher
      </button>
      
       <button
        style={{ margin: "10px", padding: "10px" }}
        onClick={() => navigate("/viewteachers")}
>
  View Teachers
</button>
      
      <div style={{ marginTop: "20px" }}>
         <h2>🔔</h2>
         <p>3 Notifications</p>
      </div>

     <button
  style={{ marginTop: "20px", padding: "10px" }}
  onClick={() => navigate("/login")}
>
  Logout
</button>    

    </div>
  );
}

export default Dashboard;