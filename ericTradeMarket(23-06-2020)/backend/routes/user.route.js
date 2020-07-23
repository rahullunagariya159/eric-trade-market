const express = require("express");
let userModel = require("../model/user.model");
const user = require("../controller/user.controller");
const fs = require("fs");
const router = express.Router();

const multer = require("multer");
const path = require("path");

let fileNewName = "";
let orgFileName = "";

let storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    fileNewName = Date.now() + "*" + file.originalname;
    orgFileName = file.originalname;
    fileNewName = Date.now() + path.extname(file.originalname);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
});

router.post("/register", upload.single("profilePic"), user.register);
router.post("/login", user.login);
router.put("/logout", user.logout);
router.put("/api/changePassword", user.changePassword);
router.get("/api/viewUsers", user.viewUsers);
router.post("/searchUsers", user.searchUsers);
router.put("/api/editProfile", upload.single("profilePic"), user.editProfile);
router.get("/viewProfile", user.viewProfile);
router.post("/editProfileImg", user.editProfileImg);
router.post('/api/addNewUser', user.addNewUser);

module.exports = router;
