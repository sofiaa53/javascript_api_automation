const request = require("supertest");
const { expect } = require("chai");
const { getToken } = require("../User/Auth/get.token.spec");
const category = require("../../../data/category.data.json")
const api_call = require("../../api-helper/apiCallCategory")

async function getCategoryList() {
    return response
}

describe("Get Category List", function () {
    before(async function () {
        this.timeout(20000)
    });

    it("Get Category list successfully", async function () {
        const token = await getToken()
        const getResponse = await api_call.getCategoryList(token);
        expect((await getResponse).status).to.equal(200);

    });
});

module.exports = { getCategoryList }