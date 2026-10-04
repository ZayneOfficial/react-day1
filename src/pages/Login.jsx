import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleLogin() {
    login();
    navigate("/dashboard");
  }

  return (
    <div>
      <h1>Login</h1>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;