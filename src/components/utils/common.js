const commons = {
    // check phone
    validateNumber: async (checkingText) => {
        /* reg exp để kiểm tra xem chuỗi có chỉ bao gồm 10 - 11 chữ số hay không */
        let regexp = /^\d{10,11}$/;
        let checkingResult = regexp.exec(checkingText);
        if (checkingResult === null) {
            return {
                isValid: false,
                errorMessage: 'Số điện thoại phải có 10 - 11 chữ số.'
            };
        }
        return {
            isValid: true,
            errorMessage: ''
        };
    },
    // check email
    validateEmail: async (email) => {
        var mailformat = /^\w+(\.-?\w+)*@\w+(\.-?\w+)*(\.\w{2,3})+$/;
        if (email.match(mailformat)) {
            return {
                isValid: true,
                errorMessage: ''
            };
        } else {
            return {
                isValid: false,
                errorMessage: 'Email không hợp lệ'
            };
        }
    },
    // check passworld
    validatePass: async (pass) => {
        if (pass && pass.length >= 6) {
            return {
                isValid: true,
                errorMessage: ''
            };
        } else {
            return {
                isValid: false,
                errorMessage: 'Mật khẩu phải lớn hơn 6 ký tự'
            };
        }
    },
    validateConfPass: async (pass, confirmPass) => {
        if (confirmPass === 'undefined') {
            return {
                isValid: false,
                errorMessage: 'Bạn phải xác nhận lại mật khẩu'
            };
        } else if (pass !== confirmPass) {
            return {
                isValid: false,
                errorMessage: 'Xác nhận mật khẩu không đúng!'
            };
        } else if (pass === confirmPass) {
            return {
                isValid: true,
                errorMessage: ''
            };
        }
    },
    // function validate
    validateInput: (checkingText) => {
        /* reg exp để kiểm tra xem chuỗi có chỉ bao gồm 10 - 11 chữ số hay không */
        const regexp = /^\d{10,11}$/;
        const checkingResult = regexp.exec(checkingText);
        if (checkingResult !== null) {
            return {
                isInputValid: true,
                errorMessage: ''
            };
        } else {
            return {
                isInputValid: false,
                errorMessage: 'Số điện thoại phải có 10 - 11 chữ số.'
            };
        }
    },
    // confim form
    JSconfirm: (title = '', text = '') => {
        return window.swal({
            title: title,
            text: text,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Xác nhận",
            cancelButtonText: "Hủy"
        })
    },
    confirmSuccess: (title = '', text = '') => {
        return window.Swal.fire(
            title,
            text,
            'success'
        )
    },
    confirmErr: (title = '', text = '') => {
        return window.Swal.fire({
            type: 'error',
            title: title,
            text: text
        })
    },
    emailRegex: RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
    // validate check not emply
    formValid: ({ formErrors, ...rest }) => {
        debugger
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
    }
}

export default commons;