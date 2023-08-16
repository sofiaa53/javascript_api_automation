const request = require("supertest");
const userData = require('../../data/user.data.json')
const config = require('../../data/login.data.json')

async function getToken() {
    const response = await request(config.baseUrl)
        .post("/authentications")
        .send(userData)

    const token = await response.body.data.accessToken
        //console.log((await response.body));
    return token
}

module.exports = { getToken };