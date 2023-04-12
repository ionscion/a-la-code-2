const express = require("express");
const path = require("path");
const sequelize = require("./server/config/connection");
const User = require("./server/models/User");
const jwt = require("jsonwebtoken");
const Client = require("./server/models/Client");

const app = express();

const assetsRouter = require("./server/assets-router");

app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/api/v1/users/:id", async (req, res) => {
  const user = await User.findAll({ where: { user_id: req.params.id } });
  res.json(user);
});

app.get("/api/v1/clients/:id", async (req, res) => {
  const user = await Client.findAll({ where: { user_id: req.params.id } });
  res.json(user);
});

app.get("/api/v1/clients/details/:id", async (req, res) => {
  const client = await Client.findOne({ where: {id: req.params.id } });
  res.json(client);
});

app.post("/api/v1/clients/auth", async (req, res) => {
  console.log(req);
  Client.create(req.body)
    .then((client) => {
      res.status(200).json(client);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

app.post("/api/v1/clients/", async (req, res) => {
  console.log(req);
  Client.create(req.body)
    .then((client) => {
      res.status(200).json(client);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

app.get("/api/v1/users", async (req, res) => {
  const user = await User.findAll();
  res.json(user);
});

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/src", assetsRouter);

const { PORT = 5001 } = process.env;

sequelize.sync({ force: false }).then(() => {
  console.log("Database synced");

  app.listen(PORT, () => {
    console.log();
    console.log(`  App running in port ${PORT}`);
    console.log();
    console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
  });
});
