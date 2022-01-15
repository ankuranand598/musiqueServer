let express = require("express");
let app = express();
app.use(express.json());
let db = require("./configs/db");
let {
  login,
  register,
  update,
} = require("./controllers/artistUser.controller");
app.post("/login", login);
app.post("/register", register);
app.patch("/update", update);
let albumController = require("./controllers/album.controller");
app.use("/albums", albumController);
let songController = require("./controllers/song.controller");
const authenticate = require("./middleware/authenticate.middleware");
app.use("/songs", songController);
app.listen(2345, async () => {
  await db();
  console.log("connected to port 2345 and db");
});
