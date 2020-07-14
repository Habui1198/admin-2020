// import axios from 'axios'
import { request } from '../../request'
import _ from 'lodash';
import { createBrowserHistory } from 'history';
// import { async } from 'q';
const history = createBrowserHistory();

let dataToken = {};
function load() {
    var t = localStorage.getItem('infoUser');
    if (t != null) {
        dataToken = JSON.parse(t);
    } else {
        dataToken = {}
    }
}
load()
function setData(_data) {
    dataToken = Object.assign(dataToken, _data);
    localStorage.setItem('infoUser', JSON.stringify(_data));
}
export const createUser = async (data) => {
    try {
        let dataUser = await request.post('user/createUser', data)
        // if (dataUser && dataUser.err !== 200) console.log(dataUser.msg)
        return dataUser
    } catch (err) {
        console.log('err listUser', err)
    }
}

export const login = user => {
    return request.post('api/register', {
        email: user.email,
        pass: user.pass
    }).then(res => {
        if (res && res.err !== 404) {
            localStorage.clear()
            sessionStorage.clear()
            let dataInfor = {
                token: res.token,
                user: res.dbUser
            }
            setData(dataInfor)
        }
        return res

    }).catch(err => {
        console.log(err)
        return err
    })
}
export const checkLogin = () => {
    if (_.isEmpty(dataToken)) {
        history.push("/login")
    } else {
        // history.push("/dashboard")
        return true
    }
}

// check token customer, agency, officer
export const getToken = (key) => {
    if (checkLogin()) {
        return 'Bearer ' + dataToken.token.token;
    } else {
        if (key === "api/user/login") {
            return 'Basic qa48fcc8dfa5c43315cdb1642949341b';
        } else if (key === "api/customer/login") {
            return 'Basic qa48fcc8dfa5c43315cdb1642949341b';
        }
    }
}
export const getInfoUser = () => {
    if (checkLogin()) {
        return dataToken.user;
    }
}
// get list user

export const listUser = async (reqData) => {
    try {
        let dataUser = await request.post('user/listUser', reqData)
        return dataUser
    } catch (err) {
        console.log('err listUser', err)
    }

}
// find user
export const inforUser = async (idUser) => {
    try {
        let info = await request.post('/user/inforUser', { id: idUser })
        return info
    } catch (err) {
        console.log('err inforUser', err)
    }
}

export const editUser = async (data) => {
    try {
        let dataUser = await request.post('/user/editUser', data)
        return dataUser
    } catch (err) {
        console.log('err inforUser', err)
    }
}
//change password
export const changePassword = (data) => {
    return request.post('api/user/changePassword', data).then(res => {
        console.log(res)
        return res
    }).catch(err => {
        console.log(err)
    })
}
//edit user
//change password
// export const edit = (user) => {
//     return request.post('api/users/edit', user).then(res => {
//         console.log(res)
//         return res

//     }).catch(err => {
//         console.log(err)
//     }) 
// }
//delete user
// export const deleted = (userId) => {
//     return request.post('api/users/deleted', userId).then(res => {
//         return res
//     })
// }
//
export const logout = () => {
    let data = getToken('api/user/logout')
    return request.post('api/user/logout', { data }).then(rs => {
        if (rs.err === 200) {
            dataToken = {}
            localStorage.clear()
            sessionStorage.clear()
            return true
        } else {
            console.log('khoong logout duoccccc')
            return false
        }
    }).catch(err => {
        console.log(err)
        return err
    })
}
export const getProfile = async () => {
    try {
        let userInfo = await request.post('user/findOwnRoles')
        if (userInfo.err !== 200) console.log(userInfo.msg)
        return userInfo
    } catch (err) {
        console.log('err exception listUserRole', err)
    }
    // api.profile().then(result => {
    //     $rootScope.USER = result.msg;
    //     api.findOwnRoles().then(result => {
    //         $rootScope.USER.roles = result.roles;
    //     }, err => console.error(err));
    // }, err => {

    // })
}