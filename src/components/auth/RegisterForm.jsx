import { useState } from "react"
import { useNavigate } from "react-router-dom";

function RegisterForm() {

  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  }
  const [registerState, setRegisterState] = useState(initialState)

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (error) {
      setError("");
    }

    setRegisterState(prev => ({ ...prev, [name]: value }));
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (registerState.password !== registerState.confirmPassword) {
        setError("Passwords do not match.");
        return;
    }

    setError("");

    setRegisterState(initialState);

    navigate("/auth/login");
    
  }

  return (
    <form className="register-form" onSubmit={handleFormSubmit}>
      {error && <p className="form-error">{error}</p>}
      <label htmlFor="username">Full Name: </label>
      <input
        type="text"
        name="name"
        id="username"
        placeholder="Enter your full name"
        value={registerState.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="useremail">E-mail: </label>
      <input
        type="email"
        name="email"
        id="useremail"
        placeholder="e.g. abc@email.com"
        value={registerState.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="userpassword">Password: </label>
      <input
        type="password"
        name="password"
        id="userpassword"
        placeholder="Enter a strong password"
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        value={registerState.password}
        onChange={handleChange}
        required
      />
      <p>Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number, and a special character.</p>

      <label htmlFor="cnfpassword">Confirm Password: </label>
      <input
        type="password"
        name="confirmPassword"
        id="cnfpassword"
        placeholder="Confirm your password"
        value={registerState.confirmPassword}
        onChange={handleChange}
        required
      />

      <button type="submit" className="button">Register</button>

    </form>
  )
}

export default RegisterForm
