const request = require("supertest");

const { createServer } = require("../server");

const server = createServer();

describe("Sample Test", () => {
  it("should test that true === true", () => {
    expect(true).toBe(true);
  });

  it("should ping server", async () => {
    const res = await request(server).get("/ping");

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual("pong");
  });
});

describe("Auth Test", () => {
  let token;

  it("should register", async () => {
    const res = await request(server).post("/api/v1/auth/register").send({
      email: "johndoe@test.com",
      password: "secret42",
      phoneNumber: 123456789,
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "1990-01-01",
    });

    expect(res.statusCode).toEqual(201);

    expect(res.body.data).toHaveProperty("id");
    expect(res.body.data).toHaveProperty("email");
    expect(res.body.data).toHaveProperty("phoneNumber");
    expect(res.body.data).toHaveProperty("firstName");
    expect(res.body.data).toHaveProperty("lastName");
    expect(res.body.data).toHaveProperty("dateOfBirth");
    expect(res.body.data).toHaveProperty("street");
    expect(res.body.data).toHaveProperty("city");
    expect(res.body.data).toHaveProperty("zip");
    expect(res.body.data).toHaveProperty("state");
    expect(res.body.data).toHaveProperty("country");
    expect(res.body.data).toHaveProperty("createdAt");
    expect(res.body.data).toHaveProperty("updatedAt");

    expect(res.body.data.email).toEqual("johndoe@test.com");
    expect(res.body.data.phoneNumber).toEqual(123456789);
    expect(res.body.data.firstName).toEqual("John");
    expect(res.body.data.lastName).toEqual("Doe");
    expect(res.body.data.dateOfBirth).toEqual("1989-12-31T23:00:00.000Z");
    expect(res.body.data.street).toEqual(null);
    expect(res.body.data.city).toEqual(null);
    expect(res.body.data.zip).toEqual(null);
    expect(res.body.data.state).toEqual(null);
    expect(res.body.data.country).toEqual(null);
    expect(res.body.data.createdAt).not.toEqual(null);
    expect(res.body.data.updatedAt).not.toEqual(null);
  });

  it("should login", async () => {
    const res = await request(server).post("/api/v1/auth/login").send({
      email: "johndoe@test.com",
      password: "secret42",
    });

    expect(res.statusCode).toEqual(201);

    expect(res.body.data).toHaveProperty("user");
    expect(res.body.data).toHaveProperty("roles");
    expect(res.body.data).toHaveProperty("token");

    expect(res.body.data.user).toHaveProperty("id");
    expect(res.body.data.user).toHaveProperty("email");
    expect(res.body.data.user).toHaveProperty("phoneNumber");
    expect(res.body.data.user).toHaveProperty("firstName");
    expect(res.body.data.user).toHaveProperty("lastName");
    expect(res.body.data.user).toHaveProperty("dateOfBirth");
    expect(res.body.data.user).toHaveProperty("street");
    expect(res.body.data.user).toHaveProperty("city");
    expect(res.body.data.user).toHaveProperty("zip");
    expect(res.body.data.user).toHaveProperty("state");
    expect(res.body.data.user).toHaveProperty("country");
    expect(res.body.data.user).toHaveProperty("createdAt");
    expect(res.body.data.user).toHaveProperty("updatedAt");

    expect(res.body.data.user.email).toEqual("johndoe@test.com");
    expect(res.body.data.user.phoneNumber).toEqual(123456789);
    expect(res.body.data.user.firstName).toEqual("John");
    expect(res.body.data.user.lastName).toEqual("Doe");
    expect(res.body.data.user.dateOfBirth).toEqual("1989-12-31T23:00:00.000Z");
    expect(res.body.data.user.street).toEqual(null);
    expect(res.body.data.user.city).toEqual(null);
    expect(res.body.data.user.zip).toEqual(null);
    expect(res.body.data.user.state).toEqual(null);
    expect(res.body.data.user.country).toEqual(null);
    expect(res.body.data.user.createdAt).not.toEqual(null);
    expect(res.body.data.user.updatedAt).not.toEqual(null);

    expect(res.body.data.roles).toEqual([]);
    expect(res.body.data.token).not.toEqual(null);

    token = res.body.data.token;
  });

  it("should return user data", async () => {
    const res = await request
      .agent(server)
      .set("x-access-token", token)
      .get("/api/v1/auth/me");

    expect(res.statusCode).toEqual(200);

    expect(res.body.data).toHaveProperty("user");
    expect(res.body.data).toHaveProperty("roles");

    expect(res.body.data.user).toHaveProperty("id");
    expect(res.body.data.user).toHaveProperty("email");
    expect(res.body.data.user).toHaveProperty("phoneNumber");
    expect(res.body.data.user).toHaveProperty("firstName");
    expect(res.body.data.user).toHaveProperty("lastName");
    expect(res.body.data.user).toHaveProperty("dateOfBirth");
    expect(res.body.data.user).toHaveProperty("street");
    expect(res.body.data.user).toHaveProperty("city");
    expect(res.body.data.user).toHaveProperty("zip");
    expect(res.body.data.user).toHaveProperty("state");
    expect(res.body.data.user).toHaveProperty("country");
    expect(res.body.data.user).toHaveProperty("createdAt");
    expect(res.body.data.user).toHaveProperty("updatedAt");

    expect(res.body.data.user.email).toEqual("johndoe@test.com");
    expect(res.body.data.user.phoneNumber).toEqual(123456789);
    expect(res.body.data.user.firstName).toEqual("John");
    expect(res.body.data.user.lastName).toEqual("Doe");
    expect(res.body.data.user.dateOfBirth).toEqual("1989-12-31T23:00:00.000Z");
    expect(res.body.data.user.street).toEqual(null);
    expect(res.body.data.user.city).toEqual(null);
    expect(res.body.data.user.zip).toEqual(null);
    expect(res.body.data.user.state).toEqual(null);
    expect(res.body.data.user.country).toEqual(null);
    expect(res.body.data.user.createdAt).not.toEqual(null);
    expect(res.body.data.user.updatedAt).not.toEqual(null);

    expect(res.body.data.roles).toEqual([]);
  });
});

describe("Manufacturer Test", () => {
  let token;
  let manufacturerId;

  beforeAll(async () => {
    const res = await request(server).post("/api/v1/auth/login").send({
      email: "johndoe@test.com",
      password: "secret42",
    });

    token = res.body.data.token;
  });

  it("should get all manufacturers", async () => {
    const res = await request
      .agent(server)
      .set("x-access-token", token)
      .get("/api/v1/manufacturers");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("data");
  });

  it("should create a manufacturer", async () => {
    const res = await request
      .agent(server)
      .set("x-access-token", token)
      .post("/api/v1/manufacturers")
      .send({
        name: "Test Manufacturer",
        description: "Test Description",
        yearOfEstablishment: "1990-01-01",
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("data");

    expect(res.body.data).toHaveProperty("id");
    expect(res.body.data).toHaveProperty("name");
    expect(res.body.data).toHaveProperty("description");
    expect(res.body.data).toHaveProperty("yearOfEstablishment");
    expect(res.body.data).toHaveProperty("createdAt");
    expect(res.body.data).toHaveProperty("updatedAt");

    manufacturerId = res.body.data.id;
  });

  it("should get a manufacturer", async () => {
    const res = await request
      .agent(server)
      .set("x-access-token", token)
      .get(`/api/v1/manufacturers/${manufacturerId}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("data");

    expect(res.body.data).toHaveProperty("id");
    expect(res.body.data).toHaveProperty("name");
    expect(res.body.data).toHaveProperty("description");
    expect(res.body.data).toHaveProperty("yearOfEstablishment");
    expect(res.body.data).toHaveProperty("createdAt");
    expect(res.body.data).toHaveProperty("updatedAt");
  });

  it("should update a manufacturer", async () => {
    const res = await request
      .agent(server)
      .set("x-access-token", token)
      .put(`/api/v1/manufacturers/${manufacturerId}`)
      .send({
        name: "Test Manufacturer Updated",
        description: "Test Description Updated",
        yearOfEstablishment: "1990-01-01",
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("data");

    expect(res.body.data).toHaveProperty("id");
    expect(res.body.data).toHaveProperty("name");
    expect(res.body.data).toHaveProperty("description");
    expect(res.body.data).toHaveProperty("yearOfEstablishment");
    expect(res.body.data).toHaveProperty("createdAt");
    expect(res.body.data).toHaveProperty("updatedAt");
  });

  it("should delete a manufacturer", async () => {
    const res = await request
      .agent(server)
      .set("x-access-token", token)
      .delete(`/api/v1/manufacturers/${manufacturerId}`);

    expect(res.statusCode).toEqual(204);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("status");

    expect(res.body.message).toEqual("Manufacturer deleted");
    expect(res.body.status).toEqual("success");
  });
});

describe("Order Test", () => {
  let token;
  let orderId;
  let saleId;

  beforeAll(async () => {
    const res = await request(server).post("/api/v1/auth/login").send({
      email: "johndoe@test.com",
      password: "secret42",
    });

    token = res.body.data.token;

    const res2 = await request
      .agent(server)
      .set("x-access-token", token)
      .post("/api/v1/manufacturers")
      .send({
        name: "Test Manufacturer",
        description: "Test Description",
        yearOfEstablishment: "1990-01-01",
      });

    const res3 = await request
      .agent(server)
      .set("x-access-token", token)
      .post("/api/v1/vehicles")
      .send({
        manufacturerId: res2.body.data.id,
        name: "Test Name",
        model: "Test Model",
        type: "Test Type",
        description: "Test Description",
        condition: "Test Condition",
        productionYear: "1990-01-01",
        mileage: "10000",
        doorsNumber: "5",
        numberOfSeats: "5",
        color: "Test Color",
        lacquer: "Test Lacquer",
        enginePower: "100",
        engineCapacity: "100",
        fuelType: "Test Fuel Type",
        transmission: "Test Transmission",
        testDriveable: 1,
        VIN: "Test VIN",
      });

    const res4 = await request
      .agent(server)
      .set("x-access-token", token)
      .post("/api/v1/sales")
      .send({
        vehicleId: res3.body.data.id,
        cost: "10000",
        status: "Test Status",
        description: "Test Description",
        guarantee: "1990-01-01",
      });

    saleId = res4.body.data.id;
  });

  it("should get all orders", async () => {
    const res = await request
      .agent(server)
      .set("x-access-token", token)
      .get("/api/v1/orders");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("data");
  });

  it("should create a order", async () => {
    const res = await request
      .agent(server)
      .set("x-access-token", token)
      .post("/api/v1/orders")
      .send({
        saleId,
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("data");

    expect(res.body.data).toHaveProperty("id");
    expect(res.body.data).toHaveProperty("saleId");
    expect(res.body.data).toHaveProperty("deliveredAt");
    expect(res.body.data).toHaveProperty("status");
    expect(res.body.data).toHaveProperty("createdAt");
    expect(res.body.data).toHaveProperty("updatedAt");

    orderId = res.body.data.id;
  });

  it("should get a order", async () => {
    const res = await request
      .agent(server)
      .set("x-access-token", token)
      .get(`/api/v1/orders/${orderId}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("data");

    expect(res.body.data).toHaveProperty("id");
    expect(res.body.data).toHaveProperty("saleId");
    expect(res.body.data).toHaveProperty("deliveredAt");
    expect(res.body.data).toHaveProperty("status");
    expect(res.body.data).toHaveProperty("createdAt");
    expect(res.body.data).toHaveProperty("updatedAt");
  });

  it("should delete a order", async () => {
    const res = await request
      .agent(server)
      .set("x-access-token", token)
      .delete(`/api/v1/orders/${orderId}`);

    expect(res.statusCode).toEqual(204);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("status");

    expect(res.body.message).toEqual("Order deleted");
    expect(res.body.status).toEqual("success");
  });
});
