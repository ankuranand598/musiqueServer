let mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
let artistSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    age: { type: Number, require: true, minlength: 18, maxlength: 50 },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
artistSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  var hash = bcryptjs.hashSync(this.password, 8);
  this.password = hash;
  next();
});
artistSchema.methods.checkpassword = function (password) {
  const match = bcryptjs.compareSync(password, this.password);
  return match;
};
let Artist = mongoose.model("artistUser", artistSchema);
module.exports = Artist;
