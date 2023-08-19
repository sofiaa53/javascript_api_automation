const config = require('../../data/config.data.json')
const request = require("supertest")(config.baseUrl);

class ApiCall {

    async postUnit(reqBody, token) {
        return request.post("/units")
            .set("Authorization", `Bearer ${token}`)
            .send(reqBody);
    }

    async deleteUnit(id, token) {
        return request
            .delete("/units/" + id)
            .set("Authorization", `Bearer ${token}`)
    }

    async getUnitById(id, token) {
        return request.get("/units/" + id)
            .set("Authorization", `Bearer ${token}`)
    }

    async getUnitList(token) {
        return request.get("/units")
            .set("Authorization", `Bearer ${token}`)
    }

    async putUnit(id, reqBody, token) {
        return request.put("/units/" + id)
            .set("Authorization", `Bearer ${token}`)
            .send(reqBody);
    }
}

module.exports = new ApiCall();