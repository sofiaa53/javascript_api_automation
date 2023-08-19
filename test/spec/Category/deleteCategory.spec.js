const request = require("supertest");
const { expect } = require("chai");
const { getToken } = require("../User/Auth/get.token.spec");
const category = require("../../../data/category.data.json")
const api_call = require("../../api-helper/apiCallCategory")

async function deleteCategory() {
    return response
}

describe("Delete Category ID", function () {

    let createdCategoryId = 0;

    before(async function () {
        const token = await getToken()
        const reqBody = category
        const createResponse = await api_call.postCategory(reqBody, token)

        expect((await createResponse).status).to.equal(201);
        createdCategoryId = await createResponse.body.data.categoryId
        this.timeout(20000)

    });

    it("Delete category successfully", async function () {
        const token = await getToken()
        const getResponse = await api_call.deleteCategory(createdCategoryId, token);
        expect((await getResponse).status).to.equal(200);

    });
});

module.exports = { deleteCategory }