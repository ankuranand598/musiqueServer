let express = require("express");
let app = express();
app.use(express.json());
let db = require("./configs/db");
let { login, register } = require("./controllers/artistUser.controller");
app.post("/login", login);
app.post("/register", register);
let albumController = require("./controllers/album.controller");
app.use("/albums", albumController);
app.listen(2345, async () => {
  await db();
  console.log("connected to port 2345 and db");
});
