const userLogin = require('../spec/User/login.spec')

async function login_suite() {
    await userLogin()
}