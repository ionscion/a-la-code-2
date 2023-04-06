const express = require("express");
const path = require("path");
const sequelize = require("./server/config/connection");
const User = require("./server/models/User");
const jwt = require("jsonwebtoken");
const Client = require("./server/models/Client");

const app = express();

const assetsRouter = require("./server/assets-router");

app.use("/", express.static(path.join(__dirname, "public")));

// const authMiddleware = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (authHeader) {
//     const token = authHeader.split(" ")[1];
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//       if (err) {
//         return res.sendStatus(403);
//       }
//       req.user = user;
//       next();
//     });
//   } else {
//     res.sendStatus(401);
//   }
// };

app.get("/api/v1/users/:id", async (req, res) => {
  const user = await User.findAll({ where: { user_id: req.params.id } });
  res.json(user);
});

app.get("/api/v1/clients/:id", async (req, res) => {
  const user = await Client.findAll({ where: { user_id: req.params.id } });
  res.json(user);
});

app.get("/api/v1/users", async (req, res) => {
  const user = await User.findAll();
  res.json(user);
});

// app.get("/api/v1/users/:id", authMiddleware, async (req, res) => {
//   const user = await User.findOne({ where: { user_id: req.params.id } });
//   res.json(user);
// });

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
