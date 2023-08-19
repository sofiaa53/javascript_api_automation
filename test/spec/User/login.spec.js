const request = require("supertest");
const { expect } = require("chai");
const config  = require('../../../data/config.data.json')

async function getToken(payload) {
    const response = await request(config.baseUrl)
        .post("/authentications")
        .send(payload)
    return response
}

describe("Login Feature", () => {
    it("Success Login", async () => {
        const payload = {
            "email": "kelontong.murah@gmail.com",
            "password": "SUKAJAYA10",
        }
        const response = await getToken(payload)
        //console.log((await response).status);
        //console.log((await response).body);

        //ASSERTION
        expect((await response).status).to.equal(201);
        expect((await response).body.data.user.name).to.equal("Kelontong Murah")
    })
    it("Failed Login", async () => {
        const payload = {
            "email": "kelontong.murah@gmail.com",
            "password": "SUKAJAYA10123",
        }
        const response = await getToken(payload)
        //console.log((await response).status);
        //console.log((await response).body);

        expect((await response).status).to.equal(401);
    })

})

module.exports = {getToken}