import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth()
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'
    const handleGoogleLogin = () => {
        signInUsingGoogle()

            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <div className="container mt-4 mb-4">
            <h2 className="title fs-1 mb-4 text-uppercase">Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-primary p-3 text-white fw-bold fs-6 text-uppercase">Login with in google</button>
        </div>
    );
};

export default Login;