const { Timestamp } = require("mongodb");
const mongoos = require("mongoose");

const RoomSchema = mongoos.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Inter Room Name"],
    },

    secretkey: {
      type: [Number],
      required: [true, "Please Inter secret key"],
    },

    chat: {
      type: [Object],
      required: [false],
    },
  },

  {
    Timestamp: true,
  }
);

const Room = mongoos.model("Room", RoomSchema);

module.exports = Room;
