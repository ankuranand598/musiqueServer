let mongoose = require("mongoose");
let albumSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    genre: { type: String, require: true },
    year: { type: Number, require: true, minlength: 1800, maxlength: 2021 },
    artistId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "artistUsers",
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
let Album = mongoose.model("album", albumSchema);
module.exports = Album;
