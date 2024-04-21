const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./Routes/user.js");
const authRouter = require("./Routes/auth.js");
const productsRouter = require("./Routes/product.js");
const cartRouter = require("./Routes/cart.js");
const ordersRouter = require("./Routes/order.js");
const stripeRouter = require("./Routes/stripe.js");
const cors = require("cors");

dotenv.config();
// require("dotenv").config();
const app = express();

// mongo db connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("mongodb connected successfully"))
  .catch((err) => console.log(err));

////////////////

app.use(cors());
app.use(express.json());
// user Router

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/checkout", stripeRouter);

app.listen(process.env.PORT || 5000, () =>
  console.log("listening on port 5000")
);
