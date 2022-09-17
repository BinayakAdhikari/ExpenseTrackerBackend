const express = require("express");
const authenticationController = require("../controller/authenticationController");
const keywordController = require("../controller/keywordController");

const router = express.Router();

router
  .route("/")
  .get(authenticationController.protect, keywordController.getKeyword);

router
  .route("/")
  .post(authenticationController.protect, keywordController.postKeyword);

router
  .route("/keyword/:id")
  .patch(authenticationController.protect, keywordController.updateKeyword);

router
  .route("/keyword/:id")
  .delete(authenticationController.protect, keywordController.deleteKeyword);


module.exports = router;
