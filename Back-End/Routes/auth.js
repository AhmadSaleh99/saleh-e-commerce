const router = require("express").Router();

const User = require("../models/User.js");

const CryptoJs = require("crypto-js");

const jwt = require("jsonwebtoken");

//////////////// Register //////////////////////////////

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET_KEY
    ).toString(),
  });

  // you can do it this way
  // const {username, email, password} = req.body
  // try{const result = await  User.create({username, email,password})}

  try {
    const savedUser = await newUser.save();
    console.log(savedUser);
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("wrong credentials");

    const hashedPassword = CryptoJs.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET_KEY
    );

    const userpassword = hashedPassword.toString(CryptoJs.enc.Utf8);

    userpassword !== req.body.password &&
      res.status(401).json("wrong credentials");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.TOKEN_SECRET_KEY,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
