let mongoose = require("mongoose");
let songSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    duration: { type: Number, require: true },
    albumId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "albums",
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
let Song = mongoose.model("song", songSchema);
module.exports = Song;
