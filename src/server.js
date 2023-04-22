const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;
const userRoute = require();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
