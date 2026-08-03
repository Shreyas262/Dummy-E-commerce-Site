import AuthHeader from '../../components/auth/AuthHeader'
import AuthFooter from '../../components/auth/AuthFooter'
import LoginForm from '../../components/auth/LoginForm'
import './auth.css'

function Login() {
  return (
    <main className='login-section'>
      <div className="login-container">
        
        <AuthHeader title="Login" subtitle="Sign in to continue shopping." />

        <LoginForm />
      
        <AuthFooter
          text="Don't have an account?"
          linkText="Register"
          to="/register"
        />
        
      </div>

    </main>
  )
}

export default Login