import RegisterForm from '../../components/auth/RegisterForm'
import AuthHeader from '../../components/auth/AuthHeader'
import AuthFooter from '../../components/auth/AuthFooter'
import './auth.css'

function Register() {
  return (
    <main className='register-section'>
      
      <div className="register-container">

        <AuthHeader
          title="Register"
          subtitle="Create an account and continue shopping."
        />

        <RegisterForm />

        <AuthFooter
          text="Already have an account?"
          linkText="Login"
          to="/login"
        />  

      </div>
    
    </main>
  )
}

export default Register
