const request = require("supertest");
const { expect } = require("chai");
const { getToken } = require("../User/Auth/get.token.spec");
const category = require("../../../data/category.data.json")
const api_call = require("../../api-helper/apiCallCategory")

async function getCategoryId() {
    return response
}

describe("Get Category ID", function () {

    let createdCategoryId = 0;

    before(async function () {
        const token = await getToken()
        const reqBody = category
        const createResponse = await api_call.postCategory(reqBody, token)

        expect((await createResponse).status).to.equal(201);
        createdCategoryId = await createResponse.body.data.categoryId
        this.timeout(20000)
    });

    after(async function () {
        const token = await getToken()
        const deleteResponse = await api_call.deleteCategory(createdCategoryId, token);
        expect(deleteResponse.status).to.eql(200);
    });


    it("Get Category by ID successfully", async function () {
        const token = await getToken()
        const getResponse = await api_call.getCategoryById(createdCategoryId, token);
        expect((await getResponse).status).to.equal(200);

    });

    it("Enter nonexsit id, response 404", async function () {
        const token = await getToken()
        const tempId = 99990;
        const getResponse = await api_call.getCategoryById(tempId, token);

        // Verify getResponse using assertion
        expect(getResponse.status).to.eql(404);
        expect(getResponse.text).to.have.string("id tidak valid");
    });

});

module.exports = { getCategoryId }