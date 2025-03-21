import request from "supertest";
import app from "../app"; // Importing the Express app, not the server

describe("Data Endpoints", () => {
  it("should fetch all data", async () => {
    const res = await request(app).get("/api/data");
    console.log(res.body); 
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it("should create new data", async () => {
    const res = await request(app)
      .post("/api/data")
      .send({ name: "exampleName", value: "exampleValue" });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
  });
});
