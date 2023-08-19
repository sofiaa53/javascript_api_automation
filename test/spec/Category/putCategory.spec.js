const request = require("supertest");
const { expect } = require("chai");
const { getToken } = require("../User/Auth/get.token.spec")
const category = require("../../../data/category.data.json")
const api_call = require("../../api-helper/apiCallCategory")

async function putCategory() {
    return response
}

describe("Put Category", function () {

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


    it("Change category name successfully", async function () {
        const token = await getToken()
        const payload = {
            "name": "update-meter",
            "description": "weight measurement"
        }
        const getResponse = await api_call.putCategory(createdCategoryId, payload, token);
        expect((await getResponse).status).to.equal(200);

    });

    it("Change description successfully", async function () {
        const token = await getToken()
        const payload = {
            "name": "update-meter",
            "description": "description updated successfully"
        }
        const getResponse = await api_call.putCategory(createdCategoryId, payload, token);
        expect((await getResponse).status).to.equal(200);
    });

    it("Change description successfully without input name", async function () {
        const token = await getToken()
        const payload = {
            //"name": "update-meter",
            "description": "description updated successfully"
        }
        const getResponse = await api_call.putCategory(createdCategoryId, payload, token);
        expect((await getResponse).status).to.equal(400);
        expect((await getResponse).body.message).to.eql("\"name\" is required");
    });

});

module.exports = { putCategory }