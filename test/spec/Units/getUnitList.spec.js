const request = require("supertest");
const { expect } = require("chai");
const { getToken } = require("../User/Auth/get.token.spec");
const unit = require("../../../data/unit.data.json")
const api_call = require("../../api-helper/apiCallUnit")

async function getUnitList() {
    return response
}

describe("Get Unit List", function () {
    before(async function () {
        this.timeout(20000)
    });

    it("Get Unit list successfully", async function () {
        const token = await getToken()
        const getResponse = await api_call.getUnitList(token);
        expect((await getResponse).status).to.equal(200);

    });
});

module.exports = { getUnitList }
