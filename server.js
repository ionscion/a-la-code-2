const express = require("express");
const path = require("path");
const sequelize = require("./server/config/connection");
const User = require("./server/models/User");

const app = express();

const assetsRouter = require("./server/assets-router");

app.use("/", express.static(path.join(__dirname, "public")));

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
