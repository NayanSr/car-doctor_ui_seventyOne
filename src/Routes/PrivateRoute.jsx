import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-dots loading-md"></span>;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" replace:true></Navigate>;
};

export default PrivateRoute;
