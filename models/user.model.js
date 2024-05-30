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

    image: {
      type: String,
      required: false,
      default:
        "https://i.pinimg.com/564x/00/96/9c/00969c9056bbfc6719b1d5eff4ce1992.jpg",
    },
  },

  {
    Timestamp: true,
  }
);

const User = mongoos.model("user", UserSchema);

module.exports = User;
