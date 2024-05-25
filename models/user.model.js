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
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAwwMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAXEAEBAQEAAAAAAAAAAAAAAAAAAUEh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDERAAAAAAACgIKACUVAFRQAAUQBUAABQAQQKKAAAKggqAKigAAACiKgiiRQAAAAAAFRQRFARUICgACRQQAFEUUAAABAoIAAKigAAAAAAhFAQAAAAAAAFEBVAARQEFQQUACACiKCACgAIKgipQAAAAAAAVAFEUUAAAEAAAAAFABFAAQVBAAAAAAAAFEBVAAAEAAXggKAKgAigACVQEAEAAAAAAAAUAUAEAAAAAiggAoAACCAAAAAAAAAACoQFAFCgIAAAAAAAAJQAAAAAAAAAFAEigAAoEUAAEAVAAAwAQAAAAAAUQRQAAAoAEAFUABQFf/2Q=",
    },
  },

  {
    Timestamp: true,
  }
);

const User = mongoos.model("user", UserSchema);

module.exports = User;
