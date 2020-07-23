const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
const jwt = require("jsonwebtoken");
const path = require("path");
let userRoute = require("./routes/user.route");

let stockRoute = require("./routes/trade.route");

mongoose.connect(
  "mongodb+srv://dds:dds123@cluster0-qxjv3.mongodb.net/stock-management?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, result) => {
    if (error) {
      console.log("error while connecting to db", error);
    } else {
      console.log("successfully connected with db");
    }
  }
);

const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
// app.use(express.static(__dirname + "/uploads"));
app.use(express.static(path.join(__dirname, "uploads")));

router.use(function (req, res, next) {
  var token = req.body.token || req.query.token || req.headers.token;

  if (token) {
    jwt.verify(token, "debate", function (err, decoded) {
      if (err) {
        return res.json({
          status: "err",
          success: false,
          message: "Failed to authenticate token.",
          data: null,
        });
      } else {
        if (decoded._doc) {
          req.user = decoded._doc;
          next();
        } else {
          req.user = decoded;
          next();
        }
      }
    });
  } else {
    return res.status(403).send({
      status: "err",
      success: false,
      message: "No token provided.",
      data: null,
    });
  }
});

app.use("/api", router);

app.use("/", userRoute);
app.use("/trade", stockRoute);

app.listen(8000, () => console.log("server is listening on port 8000"));
