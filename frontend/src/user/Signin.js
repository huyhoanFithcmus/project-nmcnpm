import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import { signin, authenticate, isAuthenticated } from "../auth";
import "./css/Signin.css"

const Signin = () => {
    const [values, setValues] = useState({
        email: " ",
        password: "",
        error: "",
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, loading, error, redirectToReferrer } = values;
    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    });
                });
            }
        });
    };

    const clickSignUp = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    });
                });
            }
        });
    };


    const imgSignin = () => (
        <div className="image">
            <img src="https://riothcmus.github.io/login_signup/images/signin-image.jpg" alt="logo" />
        </div>
    );

    const signUpForm = () => (

        <form>

            <div className="form-group">
                <h4 className="text-muted">Email</h4>
                <input
                    onChange={handleChange("email")}
                    type="email"
                    className="form-control"
                    value={email}
                />
            </div>

            <div className="form-group">
                <h4 className="text-muted">Mật Khẩu</h4>
                <input
                    onChange={handleChange("password")}
                    type="password"
                    className="form-control"
                    value={password}
                />
            </div>

            <button onClick={clickSubmit} className="btn btn-primary">
                Đăng nhập
            </button>

            <div className="form-group">
                <a href="/auth/password/forgot" className="forgot-pass">
                    Quên mật khẩu?
                </a>
            </div>

            <button onClick={clickSignUp} className="btn btn-primary">
                Tạo tài khoản mới
            </button>

        </form>
    );

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-info">
                <h2>Đang đăng nhập</h2>
            </div>
        );


    const redirectUser = () => {
        if (redirectToReferrer) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />;
            } else {
                return <Redirect to="/user/dashboard" />;
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />;
        }
    };

    return (
        <Layout
            title="Đăng nhập"
            description=""
            className="container col-md-8 offset-md-2"
        >
            {showError()}
            {signUpForm()}
            {imgSignin()}
            {showLoading()}
            {redirectUser()}
        </Layout>
    );
};

export default Signin;
