const express = require("express");
const mongoose = require("mongoose");
const PORT = 3000 || env.PORT;
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.json());
app.use(cors());

// Data Base Models

const User = require("./models/user.model");
const Room = require("./models/room.model");

// AuthorizationCode

const auth = "mostafawaseem11.";

// Get Methods

app.get("/", (req, res) => {
  res.status(200).json("Hello From Data Database");
});

app.post("/v2/allusers", async (req, res) => {
  const Auth = req.body["auth"];

  if (Auth == Auth) {
    try {
      const user = await User.find({});
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(401).json({ message: "UnAuthrized" });
  }
});

// Post Methods

app.post("/v2/join", async (req, res) => {
  const Auth = req.body["auth"];
  if (Auth == auth) {
    const data = {
      name: req.body["name"],
      email: req.body["email"],
      password: req.body["password"],
      phoneNumber: req.body["phonenumber"],
    };
    if (data) {
      try {
        const user = await User.create(data);
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } else {
      res.status(400).json({ message: "badRequst(No Data Posted Found)" });
    }
  } else {
    res.status(401).json({ message: "UnAuthrized" });
  }
});

app.post("/v2/addroom", async (req, res) => {
  const Auth = req.body["auth"];
  if (Auth == auth) {
    const name1 = req.body["name1"];
    const name2 = req.body["name2"];
    const RoomName = `${name1} & ${name2}`;
    const num1 = req.body["num1"];
    const num2 = req.body["num2"];
    const secretRoomkey = [Number(num1), Number(num2)];

    const data = {
      name: RoomName,
      secretkey: secretRoomkey,
      chat: [],
    };
    if (data) {
      try {
        const room = await Room.create(data);
        res.status(200).json(room);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } else {
      res.status(400).json({ message: "badRequst(No Data Posted Found)" });
    }
  } else {
    res.status(401).json({ message: "UnAuthrized" });
  }
});
app.post("/v2/addmessage", async (req, res) => {
  const Auth = req.body["auth"];
  if (Auth === auth) {
    const data = {
      roomid: req.body["roomid"],
    };
    const d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    const messageData = {
      message: req.body["message"],
      hour: hour,
      min: min,
    };
    if (data.roomid) {
      try {
        const room = await Room.findOne({ _id: data.roomid });
        room.chat.push(messageData); // Append message to chat array
        await room.save(); // Save updated room
        res.status(200).json(room);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } else {
      res.status(400).json({ message: "Bad Request (No Data Posted Found)" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

app.post("/v2/allrooms", async (req, res) => {
  const Auth = req.body["auth"];

  if (Auth == Auth) {
    try {
      const room = await Room.find({});
      res.status(200).json(Room);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(401).json({ message: "UnAuthrized" });
  }
});

mongoose
  .connect(
    "mongodb+srv://mostafawaseem22:F4nNYVG7SFzSIWct@onlinechatdb.4uqhkez.mongodb.net/?retryWrites=true&w=majority&appName=OnlineChatDb"
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
