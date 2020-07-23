let trade = require("../model/trade.model");
let user = require("../model/user.model");
let tradeHistory = require('../model/tradeHistory');
const nodemailer = require("nodemailer");
const ejs = require('ejs');

let transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  secure: false,
  auth: {
    user: "cce7cd0ca1f274",
    pass: "24f92ada6fa11c"
  },
});

exports.addTrade = async (req, res) => {
  console.log("add new trade");

  const userId = req.body.userId;
  const name = req.body.name;
  const quantity = req.body.quantity;
  const amount = req.body.amount;

  const getUserExist = await user.findOne({ _id: userId });

  if (getUserExist) {
    let newTrade = new trade();
    newTrade.name = name;
    newTrade.quantity = quantity;
    newTrade.amount = amount;
    newTrade.createdBy = userId;

    const newTradAdded = await newTrade.save();

    if (newTradAdded) {
      res.json({
        code: 200,
        status: "success",
        data: newTradAdded,
        message: "New trade details added successfully",
      });
    } else {
      res.json({
        code: 404,
        status: "error",
        message: "Something want wrong please try again!",
      });
    }
  } else {
    res.json({
      code: 404,
      status: "error",
      message: "User not found!",
    });
  }
};

exports.updateTrade = async (req, res) => {
  const userId = req.body.userId;
  const tradeId = req.body.tradeId;
  const name = req.body.name;
  const quantity = req.body.quantity;
  const amount = req.body.amount;

  const getTradeExist = await trade.findOne({ _id: tradeId });

  if (getTradeExist) {
    const updateTrade = await trade.findByIdAndUpdate(
      { _id: tradeId },
      {
        $set: {
          name: name,
          quantity: quantity,
          amount: amount,
          updatedBy: userId,
          updatedDate: new Date(),
        },
      }
    );

    if (updateTrade) {
      res.json({
        code: 200,
        status: "success",
        data: updateTrade,
        message: "Trade details updated successfully",
      });
    }
  } else {
    res.json({
      code: 404,
      status: "error",
      message: "Trade not found!",
    });
  }
};

exports.sendTradeRequest = (req,res) => {
  console.log('sendTradeRequest req.body  ', req.body);

  // user.findOne({ _id: req.user._id }).lean().exec((error, loginUser) => {
      // if(loginUser) {
          let newTradeHistory = new tradeHistory();
          newTradeHistory.tradeId = req.body.tradeId;
          newTradeHistory.createdBy = req.body.senderId;
          newTradeHistory.receivedBy = req.body.receiverId;
          newTradeHistory.requestStatus = req.body.status;
          newTradeHistory.save((error, newRecord) => {
            if(error) {
                return;
            }

            user.findOne({ _id: req.body.senderId }).lean().exec((err, user) => {
              if(user) {
                ejs.renderFile( __dirname +"/mail.ejs", function (err, data) {
                  if (err) {
                      console.log('err in reading file ', err);
                  } else {
                      var mainOptions = {
                          from: '"Ticker" testmail@test.com',
                          to: user.email,
                          subject: 'Norification from Ticker',
                          html: data
                      };
                      transporter.sendMail(mainOptions, function (err, info) {
                          if (err) {
                            res.json({
                                code: 500,
                                status: 'err',
                                message: 'Something went wrong'
                            })
                          } else {
                            res.json({
                              code: 200,
                              status: 'success'
                            })
                          }
                      });
                  }
                  
                  })
              }
            })
            
          })
      // }
      // else {
      //     res.json({
      //         code: 400,
      //         status: 'err',
      //         message: 'No user found'
      //     })
      // }
  // })
}

exports.deleteTrade = (req,res) => {
  console.log('delete trade.. ', req.body);

  trade.findByIdAndUpdate({ _id: req.body.tradeId }, 
    {
      $set:
      {
        status: 'deleted'
      }
    }, {new:true}, (err) => {
      if(err) {
        return;
      }

      res.json({
        c0de: 200,
        status: 'success'
      })
    })
}