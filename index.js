const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const Post = require("./models/post.model");
const app = express();
const PORT = 3000 || env.PORT;
const cors = require("cors"); // Import the cors package
app.use(express.json());
app.use(express.json());
app.use(cors()); // Use cors middleware
app.get("/", (req, res) => {
  res.status(200).json("Hello From Data Database");
});

app.get("/api/users", async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/adduser", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/Allposts", async (req, res) => {
  try {
    const post = await Post.find({});
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/post", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://mostafawaseem88:8sF8Fp5iFjKRFA4x@facenookdb.sdbab6a.mongodb.net/?retryWrites=true&w=majority&appName=FacenookDb"
  )
  .then(() => {
    console.log("connected To Database");
    app.listen(PORT, () => {
      console.log(`Server Is Runing In Port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Connencted Faild");
  });
