const request = require("supertest");
const { expect } = require("chai");
const { getToken } = require("../User/Auth/get.token.spec");
const api_call = require("../../api-helper/apiCallUnit")

async function createUnit() {
    return response
}

describe('Create Unit', () => {

    before(async function () {
        this.timeout(20000)
    });

    it('Success create a new unit successfully', async () => {
        const token = await getToken()
        const payload = {
            "name": "gram",
            "description": "weight measurement"
        }
        const response = await api_call.postUnit(payload, token)
        expect((await response).status).to.equal(201);
        expect((await response).body.message).to.eql("Unit berhasil ditambahkan");
        expect((await response).body).to.include.keys("status", "message", "data");
    })

    it('Create a new unit without fill description', async () => {
        const token = await getToken()
        const payload = {
            "name": "gram"
        }
        const response = await api_call.postUnit(payload, token)
        expect((await response).status).to.equal(201);
        expect((await response).body.message).to.eql("Unit berhasil ditambahkan");
        expect((await response).body).to.include.keys("status", "message", "data");
    })

    it('Create a new unit without fill name', async () => {
        const token = await getToken()
        const payload = {
            "description": "weight measurement"
        }
        const response = await api_call.postUnit(payload, token)
        expect((await response).status).to.equal(400);
        expect((await response).body.message).to.eql("name is required, description is optional");
        expect((await response).body).to.include.keys("status", "message");
    })

    it('Create a new unit without fill name and description', async () => {
        const token = await getToken()
        const payload = {
        }
        const response = await api_call.postUnit(payload, token)
        expect((await response).status).to.equal(400);
        expect((await response).body.message).to.eql("name is required, description is optional");
        expect((await response).body).to.include.keys("status", "message");

    })
})

module.exports = { createUnit }