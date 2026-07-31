import React from 'react'

function AuthHeader({ title, subtitle}) {
  return (
    <header className="auth-header">
        
        <h1>{title}</h1>
        
        <p>{subtitle}</p>
        
    </header>
  )
}

export default AuthHeader
