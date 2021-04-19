import React from 'react';

const Login = () => {


    // Login button click event
    const handleLogin = () =>{
        console.log('clicked');
    }
    return (
        <div style={{height:'450px'}} className="d-flex align-items-center justify-content-center">
            <div>
                <button onClick={handleLogin} className="btn btn-success"> <i class="bi bi-google"></i> Login with google</button>
            </div>
        </div>
    );
};

export default Login;