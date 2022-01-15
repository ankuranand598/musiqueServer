let express = require("express");
let router = express.Router();
let Album = require("../models/album.model");
router.get("", async (request, response) => {
  let album = await Album.find().lean().exec();
  response.status(200).send(album);
});
router.post("", async (request, response) => {
  let album = await Album.create(request.body);
  response.status(201).send(album);
});
router.get("/:id", async (request, response) => {
  let album = await Album.find().lean().exec();
  response.status(200).send(album);
});
router.patch("/:id", async (request, response) => {
  let album = await Album.find().lean().exec();
  response.status(200).send(album);
});
router.delete("/:id", async (request, response) => {
  let album = await Album.find().lean().exec();
  response.status(200).send(album);
});
module.exports = router;
