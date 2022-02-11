import React from 'react';

const Login = () => {
    return (
        <>
            <div>
                <label>Username : </label>
                <input type="input" name="username" />
            </div>
            <div>
                <label>Password : </label>
                <input type="password" name="password" />
            </div>
        </>
    )
}

export default Login;