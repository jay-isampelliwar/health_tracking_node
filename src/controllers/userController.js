const asyncHandler = require("express-async-handler");
const User = require("./../models/userModel");
const OTP = require("./../models/otp_model");
const bcrypt = require("bcrypt");
const randomOtp = require("./../helper/otp_generator");
const otpSender = require("./../helper/mail_sender");
const jwt = require("jsonwebtoken");

const userRegistration = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    res.status(401);
    throw new Error("Email is already taken");
  }

  const hashedPass = await bcrypt.hash(password, 10);

  const newUser = {
    name,
    email,
    password: hashedPass,
  };

  const otp = randomOtp();

  const newOTP = new OTP({
    otp: otp,
    email,
    newUser,
  });

  await newOTP.save();
  await otpSender.otpSender(email, otp);

  return res.json({
    status: true,
    message: "We have sent an OTP on your registered email.",
    data: {},
  });
});
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(401);
    throw new Error("You don't have an account");
  }

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign(
      {
        user: {
          name: user.name,
          email,
          id: user.id,
        },
      },
      process.env.TOKEN_KEY,
      { expiresIn: "1D" }
    );

    return res.json({
      status: true,
      message: "Token",
      data: token,
    });
  } else {
    res.status(401);
    throw new Error("Wrong Email or Password");
  }
});

const userDetails = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.user.email });
  if (!user) {
    res.status(404);
    throw new Error("User not Found");
  }
  return res.json({
    status: true,
    message: "User Details",
    data: {
      //! Photo
      name: user.name,
      phone: user.phone,
      email: user.email,
    },
  });
});

const verifyOTP = asyncHandler(async (req, res) => {
  const { otp, email } = req.body;
  const otpModel = await OTP.findOne({ email: email });

  if (!otpModel) {
    res.status(404);
    throw new Error("Email not found");
  }
  if (otpModel.otp === otp) {
    await OTP.deleteOne({ email: email });

    const user = new User({
      email: otpModel.newUser.email,
      password: otpModel.newUser.password,
      name: otpModel.newUser.name,
      verification: "Verified",
    });

    user.save();

    return res.json({
      status: true,
      message: "Your OTP Verified, Please Login.",
      data: [],
    });
  } else {
    res.status(400);
    throw new Error("Your OTP is wrong.");
  }
});

module.exports = { userRegistration, userLogin, userDetails, verifyOTP };
