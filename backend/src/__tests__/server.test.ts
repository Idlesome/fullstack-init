import request from "supertest";
import { app } from "../server";

describe("client api", () => {
  it("lists an index of clients", async () => {
    // TODO: async await timeout with supertest
    request(app)
      .get("/api/client/index")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  it("creates a client", async () => {
    request(app)
      .post("/api/client/store")
      .send({
        // TODO
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
