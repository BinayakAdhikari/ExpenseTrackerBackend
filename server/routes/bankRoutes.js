const express = require("express");
const authenticationController = require("../controller/authenticationController");
const bankController = require("../controller/bankController");

const router = express.Router();

router
  .route("/")
  .get(authenticationController.protect, bankController.getBanks);

router
  .route("/")
  .post(authenticationController.protect, bankController.postBanks);

router
  .route("/bank/:id")
  .patch(authenticationController.protect, bankController.updateBank);

router
  .route("/bank/:id")
  .delete(authenticationController.protect, bankController.deleteBank);

module.exports = router;
