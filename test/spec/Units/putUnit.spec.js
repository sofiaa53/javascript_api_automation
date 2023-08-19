const request = require("supertest");
const { expect } = require("chai");
const { getToken } = require("../User/Auth/get.token.spec");
const unit = require("../../../data/unit.data.json")
const api_call = require("../../api-helper/apiCallUnit")

async function putUnit() {
    return response
}

describe("Put Unit", function () {

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


    it("Change unit name successfully", async function () {
        const token = await getToken()
        const payload = {
            "name": "update-meter",
            "description": "weight measurement"
        }
        const getResponse = await api_call.putUnit(createdUnitId, payload, token);
        expect((await getResponse).status).to.equal(200);

    });

    it("Change description successfully", async function () {
        const token = await getToken()
        const payload = {
            "name": "update-meter",
            "description": "description updated successfully"
        }
        const getResponse = await api_call.putUnit(createdUnitId, payload, token);
        expect((await getResponse).status).to.equal(200);
    });

    it("Change description successfully without input name", async function () {
        const token = await getToken()
        const payload = {
            //"name": "update-meter",
            "description": "description updated successfully"
        }
        const getResponse = await api_call.putUnit(createdUnitId, payload, token);
        expect((await getResponse).status).to.equal(400);
        expect((await getResponse).body.message).to.eql("name is required, description is optional");
    });

});

module.exports = { putUnit }