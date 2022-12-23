import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';
import { signup } from '../auth';
import "./css/Signup.css"

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
        <form>
            <div className="form-group">
                <h4 className="text-muted">Tên đăng nhập</h4>
                <input onChange={handleChange('name')} type="text" className="form-control" value={name} />
            </div>

            <div className="form-group">
                <h4 className="text-muted">Email</h4>
                <input onChange={handleChange('email')} type="email" className="form-control" value={email} />
            </div>

            <div className="form-group">
                <h4 className="text-muted">Mật khẩu</h4>
                <input onChange={handleChange('password')} type="password" className="form-control" value={password} />
            </div>
            <button onClick={clickSubmit} className="btn btn-primary">
                Tạo tài khoản mới
            </button>
        </form>
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
            title="Đăng ký"
            description=""
            className="container col-md-8 offset-md-2"
        >
            {showSuccess()}
            {showError()}
            {signUpForm()}
            {imgSignUp()}
        </Layout>
    );
};

export default Signup;
