import { Link } from 'react-router-dom';

function AuthFooter({ to, linkText, text, }) {
    return (
        <footer className='auth-footer'>
            <p>{text}
                <Link to={to} >
                    {linkText}
                </Link>
            </p>
        </footer>
    );
}

export default AuthFooter
