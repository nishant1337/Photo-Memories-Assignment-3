const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const authUser = asyncHandler(async (req, res) => {
  console.log("request")
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400).json({ message: "User doesn't exits" });
  }

  if (user && (await user.matchPassword)) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
    });
  } else {
    res.status(400).json({ message: "Wrong email or password" });
  }
});

module.exports = {
  authUser,
};
