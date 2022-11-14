const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/posts", postRoutes);
app.use("/users", userRoutes);

const MONGO_URL =
  "mongodb+srv://nishant:1234@mernnishant.2klxpjv.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4000;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("SERVER RUNNING ON PORT:", PORT);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
