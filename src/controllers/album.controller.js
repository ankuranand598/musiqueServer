let express = require("express");
let router = express.Router();
let authenticate = require("../middleware/authenticate.middleware");
let Album = require("../models/album.model");
router.get("", async (request, response) => {
  let album = await Album.find().populate("artistId").lean().exec();
  response.status(200).send(album);
});
router.post("", authenticate, async (request, response) => {
  let album = await Album.create(request.body);
  let artist = request.artist;
  //if (artist._id == album.artistId) {
  response.status(201).send({ album, artist });
  //   } else {
  //     response.status(404).send({ messege: "not an artist of perticular album" });
  //   }
});
router.get("/artist", authenticate, async (request, response) => {
  let artist = request.artist;
  let album = await Album.find({ artistId: artist._id }).lean().exec();
  response.status(200).send({ album });
});
// router.patch("/:id", async (request, response) => {
//   let album = await Album.find().lean().exec();
//   response.status(200).send(album);
// });
router.delete("/:id", async (request, response) => {
  //let artist = request.artist;
  let album = await Album.findByIdAndDelete({ _id: request.params.id });
  response.status(200).send(album);
});
module.exports = router;
