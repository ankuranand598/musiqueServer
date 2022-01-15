let jwt = require("jsonwebtoken");
let newToken = (user) => {
  return jwt.sign({ user }, "ankur111");
};
let Artist = require("../models/artistUser.model");
let login = async (request, response) => {
  try {
    let artist = await Artist.findOne({ email: request.body.email });
    if (!artist) {
      return response
        .status(400)
        .send({ messege: "kindly check your email & password" });
    }
    let match = artist.checkpassword(request.body.password);
    if (!match)
      return response
        .status(400)
        .send({ messege: "kindly check your email & password" });
    const token = newToken(artist);
    // console.log("token", token);
    return response.status(200).send({ artist, token });
  } catch (err) {
    return response.status(500).send({ messege: "sorry for inconvenience" });
  }
};
let register = async (request, response) => {
  let artist;
  try {
    artist = await Artist.findOne({ email: request.body.email });
    //console.log("err",request.error)
    // if (!request.error) {
    if (artist)
      return response.status(400).send({ messege: "user already exist" });
    artist = await Artist.create(request.body);
    const token = newToken(artist);
    // console.log("token", token);
    return response.status(200).send({ artist, token });
    // } else {
    //   return response.status(500).send({ messege: "not a valid admin" });
    // }
  } catch (err) {
    return response.status(500).send({ messege: "sorry for inconvenience" });
  }
};
let update = async (request, response) => {
  // let artistUser = request.artist;
  // let artist = await Artist.findByIdAndUpdate(
  //   artistUser._id,
  //   { body: request.body },
  //   {
  //     new: true,
  //   }
  // );
  // response.status(200).send({ artist });
};
module.exports = { login, register, update };
