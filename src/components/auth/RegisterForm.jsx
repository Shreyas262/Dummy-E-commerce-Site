import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { loadUsers, saveUsers } from "../../utils/localStorage";

const initialState = {
  id: null,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addresses: [],
  zipcode: "",
  password: "",
}

function RegisterForm() {

  const [registerState, setRegisterState] = useState(initialState);
  const [error, setError] = useState("");
  const [cnfPass, setCnfPass] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (error) {
      setError("");
    }
    setRegisterState(prev => ({ ...prev, [name]: value }));
  }

  const handleAddressChange = (e) => {
    setRegisterState(prev => ({...prev, addresses: [e.target.value]}))
  };

  const handleFormSubmit = (e) => {

    e.preventDefault();
    const allUsers = loadUsers();
    const emailExists = allUsers.some(user => user.email === registerState.email);
    const phoneExists = allUsers.some(user => user.phone === registerState.phone); 

    if (emailExists) {
      setError("A user already exists with this e-mail.");
      return;
    }

    if (phoneExists) {
      setError("A user already exists with this phone number.");
      return;
    }

    if (registerState.password !== cnfPass) {
      setError("Passwords do not match.");
      return;
    }

    const newUser = {
      ...registerState, 
      id: crypto.randomUUID(),
    }

    allUsers.push(newUser);
    saveUsers(allUsers);

    setRegisterState(initialState);
    setCnfPass("");
    
    navigate("/login");
    
  };

  return (
    <form className="register-form" onSubmit={handleFormSubmit}>
      
      {error && <p className="error">{error}</p> }

      <label htmlFor="userFirstName">First Name: </label>
      <input
        type="text"
        name="firstName"
        id="userFirstName"
        placeholder="Enter your first name"
        value={registerState.firstName}
        onChange={handleChange}
        required
      />

      <label htmlFor="userLastName">Last Name: </label>
      <input
        type="text"
        name="lastName"
        id="userLastName"
        placeholder="Enter your last name"
        value={registerState.lastName}
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

      <label htmlFor="userPhone">Phone Number: </label>
      <input
        type="text"
        name="phone"
        id="userPhone"
        placeholder="e.g. 9876543210"
        inputMode="numeric"
        pattern="^[0-9]*$"
        maxLength="10"
        value={registerState.phone}
        onChange={handleChange}
        required
      />

      <label htmlFor="useraddresses">Default addresses: </label>
      <textarea
        name="addresses"
        id="useraddresses"
        placeholder="e.g. 301, Building Name, Street, City"
        value={registerState.addresses[0]}
        onChange={handleAddressChange}
        required
      />

      <label htmlFor="userZipcode">Zip-code: </label>
      <input
        type="text"
        name="zipcode"
        id="userZipcode"
        placeholder="e.g. 425201"
        maxLength="6"
        value={registerState.zipcode}
        onChange={handleChange}
        required
      />

      <label htmlFor="userPassword">Password: </label>
      <input
        type="password"
        name="password"
        id="userPassword"
        placeholder="Create a strong password"
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        minLength="8"
        value={registerState.password}
        onChange={handleChange}
        required
      />
      <p className="password-help">
        Password must be at least 8 characters and
        include an uppercase letter, a lowercase letter, a number, and a special character.
      </p>

      <label htmlFor="cnfPassword">Confirm Password: </label>
      <input
        type="password"
        name="confirmPassword"
        id="cnfPassword"
        placeholder="Confirm your password"
        value={cnfPass}
        onChange={e=> setCnfPass(e.target.value)}
        required
      />

      <button type="submit" className="button">Register</button>

    </form>
  )
}

export default RegisterForm
