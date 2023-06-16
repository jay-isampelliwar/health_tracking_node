const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const errorHandler = require("./middlewares/errorHandler");
const dbConnect = require("./config/dbConnect");
const PORT = process.env.PORT || 3000;
const userRoute = require("./routes/userRoutes");
const userDataRoutes = require("./routes/userDataRoutes");
const userChatRoutes = require("./routes/chatBotRouter");
const app = express();
dbConnect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/user", userRoute);
app.use("/user/data", userDataRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
