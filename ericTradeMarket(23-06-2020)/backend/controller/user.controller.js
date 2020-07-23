let user = require("../model/user.model");
let image = require("../model/image");

const fs = require("fs");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const moment = require("moment");

generateHash = (text) => {
  return bcrypt.hashSync(text, bcrypt.genSaltSync(saltRounds), null);
};

verify = (password, DBPassword) => {
  return bcrypt.compareSync(password, DBPassword);
};

exports.register = async (req, res) => {
  console.log("register api req.body", req.file, req.body);

  if (req.body == undefined || req.body == null || req.body == {}) {
    res.json({
      code: 404,
      status: "err",
      message: "Please provide proper fields.",
    });
  } else {
    user
      .findOne({ email: req.body.email })
      .lean()
      .exec((err, foundUser) => {
        if (foundUser) {
          res.json({
            code: 403,
            status: "err",
            message: "User is already registered with this email",
          });
        } else {
          let newUser = new user();
          newUser.firstName = req.body.firstName;
          newUser.lastName = req.body.lastName;
          newUser.email = req.body.email;
          newUser.password = generateHash(req.body.password);
          newUser.contactNo = req.body.contactNo;
          newUser.usertype = req.body.usertype;
          newUser.profilePic =
            Date.now() + "." + req.file.originalname.split(".")[1];
          newUser.save((err, userData) => {
            if (err) {
              res.json({
                code: 403,
                status: "err",
              });
            } else {
              res.json({
                code: 200,
                status: "success",
                data: userData,
              });
            }
          });
        }
      });
  }
};

exports.login = (req, res) => {
  console.log("login req.body ", req.body);
  if (req.body.email && req.body.password) {
    user
      .findOne({ email: req.body.email })
      .lean()
      .exec((err, foundUser) => {
        if (foundUser) {
          if (verify(req.body.password, foundUser.password)) {
            const data = {
              _id: foundUser._id,
              email: foundUser.email,
              password: foundUser.password,
            };
            const token = jwt.sign(data, "debate", {});
            res.json({
              code: 200,
              status: "success",
              authToken: token,
              data: foundUser,
            });
          } else {
            res.json({
              code: 403,
              status: "err",
              message: "Password is wrong",
            });
          }
        } else {
          res.json({
            code: 403,
            status: "err",
            message: "No user found",
          });
        }
      });
  } else {
    res.json({
      code: 403,
      status: "err",
      message: "Please give data in proper fields",
    });
  }
};

exports.logout = (req, res) => {
  jwt.verify(req.body.token, "debate", function (err, decoded) {});
};

exports.changePassword = async (req, res) => {
  console.log("change password api", req.user);

  const foundUser = await user.findOne({ _id: req.user._id }).lean().exec();

  if (foundUser) {
    const newPassword = generateHash(req.body.password);

    user.findByIdAndUpdate(
      { _id: foundUser._id },
      {
        $set: {
          password: newPassword,
        },
      },
      { new: true },
      (err, newUser) => {
        if (err) {
          console.log("err", err);
          return;
        }

        res.json({
          code: 200,
          status: "success",
          data: newUser,
        });
      }
    );
  }
};

exports.viewUsers = async (req, res) => {
  console.log("view users api");

  const foundUser = await user.findOne({ _id: req.user._id }).lean().exec();
  if (foundUser) {
    const userList = await user
      .find({ usertype: { $ne: "admin" } })
      .lean()
      .exec();
    console.log("user list.. ", userList.length);

    res.json({
      code: 200,
      status: "success",
      data: userList,
    });
  }
};

exports.searchUsers = async (req, res) => {
  console.log("req.body search api.. ", req.body);
  const searchInfo = req.body.searchData;

  const searchFoundUser = await user.find({
    $or: [
      {
        firstName: {
          $regex: new RegExp(".*" + searchInfo.toLowerCase() + ".*", "i"),
        },
      },
      {
        lastName: {
          $regex: new RegExp(".*" + searchInfo.toLowerCase() + ".*", "i"),
        },
      },
    ],
  });

  console.log("searchFoundUser.length", searchFoundUser.length);
  if (searchFoundUser.length > 0) {
    res.json({
      code: 200,
      status: "success",
      data: searchFoundUser,
    });
  } else {
    res.json({
      code: 404,
      status: "error",
      data: "Not found",
    });
  }
};

exports.editProfileImg = async (req, res) => {
  let imagePath;
  let base64Data;
  function myFunction(length, chars) {
    var mask = "";
    if (chars.indexOf("a") > -1) mask += "abcdefghijklmnopqrstuvwxyz";
    if (chars.indexOf("A") > -1) mask += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (chars.indexOf("#") > -1) mask += "0123456789";
    var result = "";
    for (var i = length; i > 0; --i)
      result += mask[Math.floor(Math.random() * mask.length)];
    return result;
  }
  var randomNumber = myFunction(25, "#aA");
  var data = req.body.profilePic.split(";");
  if (data[0] == "data:image/1") {
    imagePath = "./uploads/" + randomNumber + ".png";
    base64Data = req.body.profilePic.replace(/^data:image\/1;base64,/, "");
  } else if (data[0] == "data:image/*") {
    var base64 = data[2].split(",");
    base64Data = base64[1];
    var data = base64[1].substring(0, 8);
    if (data == "/9j/4AAQ") {
      imagePath = "./uploads/" + randomNumber + ".jpeg";
    } else {
      imagePath = "./uploads/" + randomNumber + ".png";
    }
  } else if (data[0] == "data:image/png") {
    imagePath = "./uploads/" + randomNumber + ".png";
    base64Data = req.body.profilePic.replace(/^data:image\/png;base64,/, "");
  } else if (data[0] == "data:image/jpeg") {
    imagePath = "./uploads/" + randomNumber + ".jpeg";
    base64Data = req.body.profilePic.replace(/^data:image\/jpeg;base64,/, "");
  } else {
    console.log("image invalid");
  }
  fs.writeFile(imagePath, base64Data, "base64", async function (err) {
    if (err) {
      console.log("err: ", err);
      res.json({
        success: false,
        message: "Base64 Image is not converted",
        data: err,
      });
    } else {
      const imageUrlPath =
        "http://localhost:8000/" + imagePath.split("./uploads")[1];

      user
        .findOne({ _id: req.body.userId })
        .lean()
        .exec((error, loginUser) => {
          if (loginUser.profilePic) {
            const getImgName = loginUser.profilePic.split("//");

            let filePath = "./uploads/" + getImgName[2];
            fs.unlinkSync(filePath);
          }
          if (loginUser) {
            user.findByIdAndUpdate(
              { _id: req.body.userId },
              {
                $set: {
                  profilePic: imageUrlPath,
                },
              },
              { new: true },
              (e1, newUser) => {
                if (e1) {
                  return;
                }

                res.json({
                  code: 200,
                  status: "success",
                  data: newUser,
                });
              }
            );
          } else {
            res.json({
              code: 400,
              status: "err",
              message: "No user found",
            });
          }
        });
    }
  });
};

exports.editProfile = async (req, res) => {
  console.log("edit profile req.body ", req.body);

  user
    .findOne({ _id: req.user._id })
    .lean()
    .exec((error, loginUser) => {
      if (loginUser) {
        user.findByIdAndUpdate(
          { _id: loginUser._id },
          {
            $set: {
              firstName: req.body.firstName
                ? req.body.firstName
                : loginUser.firstName,
              lastName: req.body.lastName
                ? req.body.lastName
                : loginUser.lastName,
              contactNo: req.body.contactNo
                ? req.body.contactNo
                : loginUser.contactNo,
              profilePic:
                "http://localhost:8000/" +
                Date.now() +
                "." +
                req.file.originalname.split(".")[1],
              updatedDate: moment(),
            },
          },
          { new: true },
          (e1, newUser) => {
            if (e1) {
              return;
            }

            res.json({
              code: 200,
              status: "success",
              data: newUser,
            });
          }
        );
      } else {
        res.json({
          code: 400,
          status: "err",
          message: "No user found",
        });
      }
    });
};

exports.viewProfile = async (req, res) => {
  console.log("viewProfile ", req.query.userId);

  let foundUser = await user.findOne({ _id: req.query.userId }).lean().exec();

  if (foundUser) {
    res.json({
      code: 200,
      status: "success",
      data: foundUser,
    });
  } else {
    res.json({
      code: 404,
      status: "err",
      message: "No user found",
    });
  }
};

exports.addNewUser = async (req,res) => {
  console.log('add new user req.body', req.body);

  const foundUser = await user.findOne({ _id: req.user._id }).lean().exec();

  if(foundUser) {
      let imagePath;
      let base64Data;
      function myFunction(length, chars) {
        var mask = '';
        if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
        if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (chars.indexOf('#') > -1) mask += '0123456789';
        var result = '';
        for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
        return result;
      }
      var randomNumber = myFunction(25, '#aA');
      var data = req.body.profilePic.split(';');
      if (data[0] == "data:image/1") {
        imagePath = './uploads/' + randomNumber + '.png';
        base64Data = req.body.profilePic.replace(/^data:image\/1;base64,/, "");
      } else if (data[0] == "data:image/*") {
        var base64 = data[2].split(",");
        base64Data = base64[1];
        var data = base64[1].substring(0, 8);
        if (data == "/9j/4AAQ") {
          imagePath = './uploads/' + randomNumber + '.jpeg';
        } else {
          imagePath = './uploads/' + randomNumber + '.png';
        }
      } else if (data[0] == "data:image/png") {
        imagePath = './uploads/' + randomNumber + '.png';
        base64Data = req.body.profilePic.replace(/^data:image\/png;base64,/, "");
      } else if (data[0] == "data:image/jpeg") {
        imagePath = './uploads/' + randomNumber + '.jpeg';
        base64Data = req.body.profilePic.replace(/^data:image\/jpeg;base64,/, "");
      } else {
        console.log("image invalid");
      }
      fs.writeFile(imagePath, base64Data, 'base64', function (err) {
        if (err) {
          console.log('err: ', err);
          res.json({
            success: false,
            message: 'Base64 Image is not converted',
            data: err
          });
        } else {
        }
      })
    let newUser = new user();
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.email = req.body.email;
    newUser.password = generateHash(req.body.password);
    newUser.contactNo = req.body.contactNo;
    newUser.usertype = req.body.usertype;
    newUser.createdBy = foundUser._id;
    newUser.profilePic = 'http://localhost:8000/' + imagePath.split('./uploads')[1];
    newUser.save((err, userData) => {
      if (err) {
        res.json({
          code: 403,
          status: "err",
        });
      } else {
        res.json({
          code: 200,
          status: "success",
          data: userData,
        });
      }
    });
  }
  else {
    res.json({
      code: 404,
      status: 'err',
      message: 'No user found'
    })
  }
}