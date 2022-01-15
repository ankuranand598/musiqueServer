let express = require("express");
let router = express.Router();
let Song = require("../models/song.model");
router.get("", async (request, response) => {
  let song = await Song.find().lean().exec();
  response.status(200).send({ song });
});
router.post("", async (request, response) => {
  let song = await Song.create(request.body);
  response.status(201).send({ song });
});
router.get("/:albumId", async (request, response) => {
  let song = await Song.find({ albumId: request.params.albumId }).lean().exec();
  response.status(200).send({ song });
});
module.exports = router;
