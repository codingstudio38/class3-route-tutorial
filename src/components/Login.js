import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login() {
    useEffect(() => {
        let login = localStorage.getItem('login');
        if (login) {
            navigate('/user/vidyut');
        }
    })
    const navigate = useNavigate();
    const loginnow = () => {
        window.localStorage.clear();
        window.localStorage.setItem('login', true);
        navigate('/user/vidyut');
    }

    return (
        <div>
            <h2>Login Page</h2>
            <input type="test" /><br /><br />
            <input type="test" /><br /><br />
            <button onClick={loginnow}>Login</button>
        </div>
    )
} 