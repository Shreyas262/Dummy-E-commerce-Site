import { useState } from "react";
import './newsletter.css'

function Newsletter() {

    const [email, setEmail] = useState("")
    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        setEmail("")
    }

    return (
        <section className="newsletter-section">
            <div className="newsletter-container container">

                <div className="newsletter-content">
            
                    <h2>Stay Updated</h2>

                    <p>Subscribe to our newsletter and be the first to know about exclusive offers, new arrivals, and exciting deals.</p>

                    <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                        
                        <input
                            type="email"
                            required
                            name="email"
                            placeholder="Enter your email"
                            className="newsletter-input"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />

                        <button type="submit" className="button">Subscribe</button>

                    </form>
            
                </div>
        
            </div>
        </section>
    );
}

export default Newsletter
