const express = require("express");
const trade = require("../controller/trade.controller");
const router = express.Router();

// router.post("/register", upload.single("profilePic"), user.register);
router.post("/addNewTrade", trade.addTrade);
router.post("/updateTrade", trade.updateTrade);
router.post('/sendTradeRequest', trade.sendTradeRequest);
router.delete('/deleteTrade', trade.deleteTrade);

// router.put("/logout", user.logout);
// router.put("/api/changePassword", user.changePassword);
// router.get("/viewUsers", user.viewUsers);
// router.post("/searchUsers", user.searchUsers);
// router.put("/api/editProfile", upload.single("profilePic"), user.editProfile);

module.exports = router;
