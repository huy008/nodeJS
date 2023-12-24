import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import initAuthRoutes from "./route/authRoute";
import connectDB from "./config/connectDB";
const session = require("express-session");

require("dotenv").config();
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

viewEngine(app);
initWebRoutes(app);
initAuthRoutes(app);
connectDB();
let port = process.env.PORT;

app.listen(port, () => {
  console.log("listening on port");
});
