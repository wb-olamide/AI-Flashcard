import { useContext } from "react";
import AuthContext from "../context/authContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Dashboard Page two</h1>
      <h2>Welcome {user?.username}</h2>
    </div>
  );
};

export default Dashboard;
