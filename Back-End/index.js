const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./Routes/user.js");

dotenv.config();
// require("dotenv").config();
const app = express();

// mongo db connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("mongodb connected successhully"))
  .catch((err) => console.log(err));

////////////////
app.use(express.json());
// user Router

app.use("/api/user", userRouter);

app.listen(process.env.PORT || 5000, () =>
  console.log("listening on port 5000")
);
