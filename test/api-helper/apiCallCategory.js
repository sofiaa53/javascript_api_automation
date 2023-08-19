const config = require('../../data/config.data.json')
const request = require("supertest")(config.baseUrl);

class ApiCall {

    async postCategory(reqBody, token) {
        return request.post("/categories")
            .set("Authorization", `Bearer ${token}`)
            .send(reqBody);
    }

    async deleteCategory(id, token) {
        return request
            .delete("/categories/" + id)
            .set("Authorization", `Bearer ${token}`)
    }

    async getCategoryById(id, token) {
        return request.get("/categories/" + id)
            .set("Authorization", `Bearer ${token}`)
    }

    async getCategoryList(token) {
        return request.get("/categories")
            .set("Authorization", `Bearer ${token}`)
    }

    async putCategory(id, reqBody, token) {
        return request.put("/categories/" + id)
            .set("Authorization", `Bearer ${token}`)
            .send(reqBody);
    }
}

module.exports = new ApiCall();