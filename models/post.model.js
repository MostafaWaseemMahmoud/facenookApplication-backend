const { Timestamp } = require("mongodb");
const mongoos = require("mongoose");

const PostSchema = mongoos.Schema(
  {
    name: {
      type: String,
      required: [true, "please Inter Your Name"],
    },

    post: {
      type: String,
      required: [false],
      default: "Emty Post",
    },

    image: {
      type: String,
      required: false,
      default:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAwwMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAXEAEBAQEAAAAAAAAAAAAAAAAAAUEh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDERAAAAAAACgIKACUVAFRQAAUQBUAABQAQQKKAAAKggqAKigAAACiKgiiRQAAAAAAFRQRFARUICgACRQQAFEUUAAABAoIAAKigAAAAAAhFAQAAAAAAAFEBVAARQEFQQUACACiKCACgAIKgipQAAAAAAAVAFEUUAAAEAAAAAFABFAAQVBAAAAAAAAFEBVAAAEAAXggKAKgAigACVQEAEAAAAAAAAUAUAEAAAAAiggAoAACCAAAAAAAAAACoQFAFCgIAAAAAAAAJQAAAAAAAAAFAEigAAoEUAAEAVAAAwAQAAAAAAUQRQAAAoAEAFUABQFf/2Q==",
    },
  },

  {
    Timestamp: true,
  }
);

const Post = mongoos.model("post", PostSchema);

module.exports = Post;
