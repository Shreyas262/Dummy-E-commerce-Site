import React from 'react'
import { Link } from 'react-router-dom';

function AuthFooter({ linkText, text, to }) {
    return (
        <footer className='auth-footer'>
            <p>{text} <Link to={to}>{linkText}</Link></p>
        </footer>
    );
}

export default AuthFooter
