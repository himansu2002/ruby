import React, { useState } from 'react';
import '/src/styles/login.css';

const Login = ({showWelcomeHandler}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/vendor/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const data = await response.json();
            if (response.ok) {
                alert("Login successful");
                setEmail('');
                setPassword('');
                localStorage.setItem("logintoken", data.token);
                showWelcomeHandler();
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Login failed");
        }
    };

    return (
        <div className='loginsection'>
            <form className='authform' onSubmit={loginHandler}>
                <h3>Login</h3>
                <label>Email</label><br/>
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email'/><br/>
                <label>Password</label><br/>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password'/>
                <div className="btnsubmit">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
