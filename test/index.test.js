const request = require("supertest");
const app = require("../index");

describe("GET Endpoint", () => {
  it("Getting the /", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
  });
});

app.close();
