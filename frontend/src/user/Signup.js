import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';
import { signup } from '../auth';
import "./css/Signup.css"
import "../core/Footer"
import Footer from '../core/Footer';

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    const { name, email, password, success, error } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ name, email, password }).then(data => {
            if (error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    success: true
                });
            }
        });
    };

    const imgSignUp = () => (
        <div className="image">
            <img src="https://riothcmus.github.io/login_signup/images/signin-image.jpg" alt="logo" />
        </div>
    );

    const signUpForm = () => (
        <>

            <div class="tab-content">
                <form>
                    <div class="text-center mb-3">
                        <p>Sign up with:</p>
                        <button type="button" class="btn btn-link btn-floating mx-1">
                            <i class="fab fa-facebook-f"></i>
                        </button>

                        <button type="button" class="btn btn-link btn-floating mx-1">
                            <i class="fab fa-google"></i>
                        </button>

                        <button type="button" class="btn btn-link btn-floating mx-1">
                            <i class="fab fa-twitter"></i>
                        </button>

                        <button type="button" class="btn btn-link btn-floating mx-1">
                            <i class="fab fa-github"></i>
                        </button>
                    </div>

                    <p class="text-center">or:</p>


                    <div class="form-outline mb-4">
                        <label class="form-label" for="registerName">Name</label>
                        <input onChange={handleChange('name')} type="text" className="form-control" value={name} />
                        
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="registerEmail">Email</label>
                        <input onChange={handleChange('email')} type="email" className="form-control" value={email} />
                        
                    </div>


                    <div class="form-outline mb-4">
                        <label class="form-label" for="registerPassword">Password</label>
                        <input onChange={handleChange('password')} type="password" className="form-control" value={password} />

                    </div>


                    <div class="form-outline mb-4">
                        <label class="form-label" for="registerRepeatPassword">Repeat password</label>
                        <input type="password" id="registerRepeatPassword" class="form-control" />
                    </div>


                    <button onClick={clickSubmit} className="btn btn-primary">
                Tạo tài khoản mới
            </button>
                </form>
            </div>

        </>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            New account is created. Please <Link to="/signin">Signin</Link>
        </div>
    );

    return (
        <Layout
            className="container col-md-8 offset-md-2"
        >
            {showSuccess()}
            {showError()}
            {signUpForm()}
        </Layout>
    );
};

export default Signup;
