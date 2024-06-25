const mongoose = require("mongoose");
const User = require("./UserSchema");
mongoose.connect("mongodb://localhost/testdb");

try {
  run();
  async function run() {
    const user = new User({
      name: "asibul alam",
      age: 23,
      hobbies: ["weight lifting", "gym"],
      address: {
        street: "7010",
        city: "kumarkhali",
      },
    });
    await user.save();
    console.log(user);
  }
} catch (error) {
  console.log("Error ", error);
}
