const request = require("supertest");
const { expect } = require("chai");
const { getToken } = require("./Auth/get.token.spec");
const config  = require('../../../data/config.data.json')

async function createUser(payload, token) {
    const response = await request(config.baseUrl)
    .post('/users')
    .send(payload)
    .set("Authorization", `Bearer ${token}`)
    return response 
}

describe('Create User', () => {
    it('Success create a new user', async () => {
        const token = await getToken()

        const payload = {
            "name": "kasir-serbaguna",
            "email": "user@example.com",
            "password": "jiasda2321@"
         } 
        const response = await createUser(payload, token)
        expect((await response).status).to.equal(201);
    })

})

module.exports= {createUser}