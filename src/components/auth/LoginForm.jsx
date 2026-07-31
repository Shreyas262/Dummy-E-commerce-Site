import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/auth/authSlice";

function LoginForm() {
  
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    
    const { name, value } = e.target;

    setLoginState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(login());
    setLoginState({
      email: "",
      password: "",
    });
    navigate("/");
  };

  return (
    <form className="login-form" onSubmit={handleFormSubmit}>

      <label htmlFor="login-email">Email: </label>
      <input
        type="email"
        name="email"
        id="login-email"
        placeholder="e.g. abc@email.com "
        value={loginState.email}
        onChange={handleChange}
      />  

      <label htmlFor="login-password">Password: </label>
      <input
        type="password"
        name="password"
        id="login-password"
        placeholder="Enter your password"
        value={loginState.password}
        onChange={handleChange}
      />

      <button type="submit" className="button">Login</button>

    </form>
  );
}

export default LoginForm
