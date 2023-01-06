import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';
import { signup } from '../auth';
import "./css/Signup.css"
import "../core/Footer"
import Footer from '../core/Footer';

//và các thao tác cần thực thi bên trong
// để tạo tài khoản
// người dùng sẽ nhập vào
//email cá nhân
//password với định dạng gồm số, chữ và kí tự đặc biệt, nhóm cũng đã thiết kế độ dài tối thiểu của 1 password là từ 8 kí tự trở lên
//nếu người dùng tạo tài khoản sẽ có 2 TH
// 1 là user là 1 admin thì dẫn trực tiếp người dùng vào trang quản lí luôn ko cần tạo tk mới
// 2 là user ko phải là 1 admin nhưng tài khoản nhập đã tồn tại
const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    // nhóm toàn bộ các thông tin user nhập thành một biến value để gửi lên database
    const { name, email, password, success, error } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    //bước thực thị việc xác nhận SignIn
    //việc signup rất đơn giản và ngắn gọn
    // chỉ cần user nhập vào các dữ liệu hợp lệ và ko bị trùng
    // là 1 tài khoản sẽ đc tạo thành công và gửi dữ liệu lên database quản lí của admin
    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ name, email, password }).then(data => {
            // nếu nhập các dữ liệu tạo tài khoản ko thỏa 1 trong những điều kiện trên thì tạo tk thất bại
            if (error) {
                setValues({ ...values, error: data.error, success: false });
            
            // ngược lại thì lưu các giá trị vừa tạo lại
            // và đặt cờ success thành thành công cho thông báo cho user
            // đồng thời để chuyển trang
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

    //đây là hình ảnh logo của nhóm trong trang sign in
    const imgSignUp = () => (
        <div className="image">
            <img src="https://riothcmus.github.io/login_signup/images/signin-image.jpg" alt="logo" />
        </div>
    );

    //bắt đầu thực thi việc tạo form của trang Signup
    const signUpForm = () => (
        <>
            {/* phần này là thuộc phần html là khung xương cho trang SignUp
            hay nói cách khác đây là khung tạo tài khoản mới */}
            <div class="tab-content">
                <form>
                    <div class="text-center mb-3">
                        {/* đăng nhập bằng facebook, gg, twitter hoặc github */}
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


                    {/* tiếp đây là nơi người dùng sẽ nhập vào
                    và em cũng sẽ để tại đây một div mới
                    biến name tại đây thuộc SignUp nên sẽ thuộc class registerName, vì cũng sẽ có 1 class của SignIn em sẽ trình bày sau */}
                    <div class="form-outline mb-4">
                        <label class="form-label" for="registerName">Name</label>
                        <input onChange={handleChange('name')} type="text" className="form-control" value={name} />
                        
                    </div>

                    {/* tiếp dưới class tiếp theo là khung nhập email
                    định dạng nhập vào cũng sẽ tương tự như biến Name trên, thuộc class registerEmail*/}
                    <div class="form-outline mb-4">
                        <label class="form-label" for="registerEmail">Email</label>
                        <input onChange={handleChange('email')} type="email" className="form-control" value={email} />
                        
                    </div>

                    {/* tại đây là class khung nhập password cho người dùng */}
                    <div class="form-outline mb-4">
                        <label class="form-label" for="registerPassword">Password</label>
                        <input onChange={handleChange('password')} type="password" className="form-control" value={password} />

                    </div>

                    {/* tại đây là class khung nhập lại password cho người dùng
                    để đảm bảo việc nhập password ko bị sai sót
                    nhập 2 lần sẽ tăng độ tin cậy cho user, nhập 1 lần thì xác xuất nhập sai cao
                    user phải reset lại password */}
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

    //thanh báo lỗi khi thông tin tạo tài khoản ko hợp lệ
    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    //thanh báo việc tạo tk mới thành công khi thông tin tạo tài khoản hợp lệ
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
