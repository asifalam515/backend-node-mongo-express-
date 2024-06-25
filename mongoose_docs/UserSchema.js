const mongoose = require("mongoose");

const StreetSchema = new mongoose.Schema({
  street: String,
  city: String,
});
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  createdAt: Date,
  updateAt: Date,
  bestFriends: {
    type: mongoose.Schema.Types.ObjectId, //this bestFriends is a referance of another object based on a objectId
    ref: "User",
  },
  hobbies: [String],
  address: StreetSchema,
});

module.exports = mongoose.model("User", UserSchema);
