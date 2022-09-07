const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  senderAddress: {
    type: String,
    required: [true, "Sender address is required"],
    trim: true,
    maxlength: [80, "Sender address must be less than 80 characters"],
    minlength: [3, "Sender address must be more than 3 characters"],
  },
  message: {
    type: String,
    required: [true, "Transaction message is required"],
  },
  credited: {
    type: Boolean,
    default: false,
  },
  amount: {
    type: Number,
    required: [true, "A transaction must have an amount"],
  },
  addedOn: {
    type: Date,
    default: Date.now(),
  },
  addedBy:{
      type:mongoose.Schema.Types.ObjectId,
      required:[true,'Transaction must belong to some user.']
  }
});

const Transactions = mongoose.model("Transactions", transactionSchema);

module.exports = Transactions;
