import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../app-store/slice/authSlice";
import { loadUsers } from "../../utils/localStorage";

const initialLoginState = {
  email: "",
  password: "",
}

function LoginForm() {
  
  const [loginState, setLoginState] = useState(initialLoginState);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    
    if(error) setError("")

    const { name, value } = e.target;
    setLoginState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const allUsers = loadUsers();
    const user = allUsers.find(u => u.email === loginState.email)
    
    if (!user) {
      setError("Invalid e-mail or password")
      return;
    }

    if (user.password !== loginState.password) {
      setError("Invalid e-mail or password");
      return;
    }

    dispatch(login(user))    
    setLoginState(initialLoginState)
    navigate("/");
  }

  return (
    <form className="login-form" onSubmit={handleFormSubmit}>
      {error && <p className="error">{error}</p>}

      <label htmlFor="login-email">Email: </label>
      <input
        type="email"
        name="email"
        id="login-email"
        placeholder="e.g. abc@email.com "
        value={loginState.email}
        onChange={handleChange}
        required
      />  

      <label htmlFor="login-password">Password: </label>
      <input
        type="password"
        name="password"
        id="login-password"
        placeholder="Enter your password"
        value={loginState.password}
        onChange={handleChange}
        required
      />

      <button type="submit" className="button">Login</button>

    </form>
  );
}

export default LoginForm
