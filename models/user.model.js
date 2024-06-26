const { Timestamp } = require("mongodb");
const mongoos = require("mongoose");

const UserSchema = mongoos.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Inter User Name"],
    },

    email: {
      type: String,
      required: [true, "please Inter User Email "],
    },

    password: {
      type: String,
      required: [true, "please Inter User Password"],
    },

    phoneNumber: {
      type: Number,
      required: [true, "Please Inter User Number"],
    },
  },

  {
    Timestamp: true,
  }
);

const User = mongoos.model("user", UserSchema);

module.exports = User;
