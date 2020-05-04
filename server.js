const express = require("express");
const app = express();
const mongoose = require("mongoose");

const mongoUrl =
  "mongodb+srv://Manju3003:Manju3003@cluster0-mmipo.mongodb.net/test?retryWrites=true&w=majority";
// mongodb connected
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
//check the database connection
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("mongodb connected.."));

app.use(express.json());
//adding routes
const subscriberRoute = require("./routes/subscriber");
app.use("/subscribers", subscriberRoute);

app.listen(3000, () => console.log("server connected"));
