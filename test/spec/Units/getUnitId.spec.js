const request = require("supertest");
const { expect } = require("chai");
const { getToken } = require("../User/Auth/get.token.spec");
const unit = require("../../../data/unit.data.json")
const api_call = require("../../api-helper/apiCallUnit")

async function getUnitId() {
    return response
}

describe("Get Unit ID", function () {

    let createdUnitId = 0;

    before(async function () {
        const token = await getToken()
        const reqBody = unit
        const createResponse = await api_call.postUnit(reqBody, token)

        expect((await createResponse).status).to.equal(201);
        createdUnitId = await createResponse.body.data.unitId
        this.timeout(20000)

    });

    after(async function () {
        const token = await getToken()
        const deleteResponse = await api_call.deleteUnit(createdUnitId, token);
        expect(deleteResponse.status).to.eql(200);
    });


    it("Get Unit by ID successfully", async function () {
        const token = await getToken()
        const getResponse = await api_call.getUnitById(createdUnitId, token);
        expect((await getResponse).status).to.equal(200);

    });

    it("Enter nonexsit id, response 404", async function () {
        const token = await getToken()
        const tempId = 99990;
        const getResponse = await api_call.getUnitById(tempId, token);

        // Verify getResponse using assertion
        expect(getResponse.status).to.eql(404);
        expect(getResponse.text).to.have.string("id tidak valid");
    });

});

module.exports = { getUnitId }