const Keyword = require("../model/keywordModel");
const requestHandler = require("./requestHandler");

exports.getKeyword = requestHandler.getAll(Keyword);

exports.postKeyword = requestHandler.createOne(Keyword);

exports.updateKeyword = requestHandler.updateOne(Keyword);

exports.deleteKeyword = requestHandler.deleteOne(Keyword);