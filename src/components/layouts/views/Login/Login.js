import React, { Component } from 'react'
import { login } from '../../../Controller/userController'
import Notifications, { notify } from 'react-notify-toast'
import {Redirect} from 'react-router-dom'
// notify.show(message, type, timeout, color)
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};
class Login extends Component {
    constructor(props) {
        super(props);
        // state bien toan cục
        this.state = {
            email: '',
            pass: '',
            formErrors: {
                email: "",
                pass: ""
            }
        };
    }
    handleSubmit = e => {
        // window.showLoading();
        // e.preventDefault();
        // if (formValid(this.state)) {
        //     const user = {
        //         email: this.state.email,
        //         pass: this.state.pass
        //     }
        //     login(user).then(res => {
        //         window.hiddenLoading();
        //         if (res.err === 200) {
        //             this.props.history.push("/dashboard")
        //         } else {
        //             let myColor = { background: '#0E1717', text: "#FFFFFF" };
        //             notify.show(res.msg, "error", 3000, myColor);
        //             // this.props.history.push("/login")
        //         }
        //     }).catch(err => {
        //         window.hiddenLoading();
        //         console.log(err)
        //     })
        // } else {
        //     window.hiddenLoading();
        //     console.log('err validator')
        // }
    };
    handleChange = e => {
        // hàm tránh lấy giá trị mặc định
        e.preventDefault();
        let formErrors = { email: '', pass: '' }
        let { name, value } = e.target
        switch (name) {
            case 'email':
                formErrors.email = emailRegex.test(value) ? "" : "Email không hợp lệ";
                break;
            case 'password':
                formErrors.pass = value.length < 6 ? "Mật khẩu phải lớn hơn 6 ký tự" : "";
                break;
            default:
                break;
        }
        // muốn thay đổi biến state dung setstate
        this.setState({ formErrors, [name]: value });
    }
    render() {
        const { formErrors } = this.state;
        return (
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper" style={{ padding: 0 }}>
                    <div className="row">
                        <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-full-bg">
                            <div className="row w-100">
                                <div className="col-lg-4 mx-auto">
                                    <div className="auth-form-dark text-left p-5">
                                        <h2>Login</h2>
                                        <h4 className="font-weight-light">Hello! let's get started</h4>
                                        <Notifications />
                                        <form className="pt-5" noValidate onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="email">Email truy cập</label>
                                                <input type="email" className="form-control" id="email" name="email"
                                                    noValidate
                                                    onChange={this.handleChange} />
                                                <i className="fa fa-user-o" />
                                                {formErrors.email.length > 0 && (
                                                    <span className="errorMessage">{formErrors.email}</span>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="pass">Mật khẩu</label>
                                                <input type="password" className="form-control" id="pass" name="pass"
                                                    noValidate
                                                    onChange={this.handleChange} />
                                                <i className="showPass fa fa-eye-slash" />
                                                {formErrors.pass.length > 0 && (
                                                    <span className="errorMessage">{formErrors.pass}</span>
                                                )}
                                            </div>
                                            <div className="mt-5">
                                                <button className="btn btn-block btn-warning btn-lg font-weight-medium">Đăng nhập</button>
                                            </div>
                                            <div className="mt-3 text-center">
                                                <a href="#" className="auth-link text-white">Quên mật khẩu?</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* content-wrapper ends */}
                    </div>
                    {/* row ends */}
                </div>
                {/* page-body-wrapper ends */}
            </div>
        )
    }
}
export default Login;