const Bank = require("../model/bankModel");
const requestHandler = require("./requestHandler");

exports.getBanks = requestHandler.getAll(Bank);

exports.postBanks = requestHandler.createOne(Bank);

exports.updateBank = requestHandler.updateOne(Bank);

exports.deleteBank = requestHandler.deleteOne(Bank);
