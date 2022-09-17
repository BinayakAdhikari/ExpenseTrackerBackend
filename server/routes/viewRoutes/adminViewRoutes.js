const express = require("express");
const bankController = require("../../controller/bankController");

const router = express.Router();


router.route("/")
    .get((req, res, next) => {
        console.log("Method Called");
        var bankAddressList = bankController.getBanks(req, res, next);
        console.log(bankAddressList);
        res.render('adminView', { title: 'Admin Dashboard', bankItems: bankAddressList});
    });

router.route("/")
    .post((req, res, next) => {
        
    });

module.exports = router;
