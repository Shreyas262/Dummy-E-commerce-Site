import AuthHeader from '../../components/auth/AuthHeader'
import AuthFooter from '../../components/auth/AuthFooter'
import LoginForm from '../../components/auth/LoginForm'
import './auth.css'

function Login() {
  return (
    <section className='login-section'>
      <div className="login-container">
        
        <AuthHeader title="Login" subtitle="Sign in to continue shopping." />

        <LoginForm />
      
        <AuthFooter
          text="Don't have an account?"
          linkText="Register"
          to="/auth/register"
        />
        
      </div>

    </section>
  )
}

export default Login