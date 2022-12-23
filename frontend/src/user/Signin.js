import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import { signin, authenticate, isAuthenticated } from "../auth";
import "./css/Signin.css"

const Signin = () => {
    const [values, setValues] = useState({
        email: "",
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

        // <form>

        //     <div className="form-group">
        //         <h4 className="text-muted">Email</h4>
                // <input
                //     onChange={handleChange("email")}
                //     type="email"
                //     className="form-control"
                //     value={email}
                // />
        //     </div>

        //     <div className="form-group">
        //         <h4 className="text-muted">Mật Khẩu</h4>
                // <input
                //     onChange={handleChange("password")}
                //     type="password"
                //     className="form-control"
                //     value={password}
                // />
        //     </div>

        //     <button onClick={clickSubmit} className="btn btn-primary">
        //         Đăng nhập
        //     </button>

        //     <div className="form-group">
        //         <a href="/auth/password/forgot" className="forgot-pass">
        //             Quên mật khẩu?
        //         </a>
        //     </div>

            // <button onClick={clickSignUp} className="btn btn-primary">
            //     Tạo tài khoản mới
            // </button>

        // </form>

        // sign in form using html and bootstrap 5
        <>
            <div class="tab-content">
                <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form>
                        <div class="text-center mb-3">
                            <p>Sign in with:</p>
                            <button type="button" class="btn btn-link btn-floating mx-1">
                            <i class="fab fa-facebook"></i>
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
                            <label class="form-label" for="loginName">Email or username</label>
                            <input
                    onChange={handleChange("email")}
                    type="email"
                    className="form-control"
                    value={email}
                    placeholder="email or username"
                />
                        </div>


                        <div class="form-outline mb-4">
                            <label class="form-label" for="loginPassword">Password</label>
                            <input
                    onChange={handleChange("password")}
                    type="password"
                    className="form-control"
                    value={password}
                    placeholder="password"
                />

                        </div>


                        <div class="row mb-4">
                            <div class="col-md-6 d-flex justify-content-center">

                                <div class="form-check mb-3 mb-md-0">
                                    <input class="form-check-input" type="checkbox" value="" id="loginCheck"/>
                                    <label class="form-check-label" for="loginCheck"> Remember me </label>
                                </div>
                            </div>

                            <div class="col-md-6 d-flex justify-content-center">

                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>


                        <button onClick={clickSignUp} className="btn btn-primary btn-btn-md4">
                    Sign in
            </button>


                        <div class="text-center">
                            <p>Not a member? <a href="#!">Register</a></p>
                        </div>
                    </form>
                </div>
                <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                </div>
            </div>
        </>
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
            className="container col-md-8 offset-md-2"
        >
            {showLoading()}
            {showError()}
            {signUpForm()}
            {redirectUser()}
        </Layout>

    );
};

export default Signin;
