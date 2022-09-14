const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const transactionRouter = require("./server/routes/transactionRoutes");
const authRouter = require("./server/routes/authenticationRoutes");
const bankRouter = require("./server/routes/bankRoutes");
const keywordRouter = require("./server/routes/keywordRoutes");
const appError = require("./server/utils/appError");

const authViewRouter = require("./server/routes/viewRoutes/authViewRoutes");
const globalErrorHandler = require("./server/controller/errorController");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/transactions", transactionRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/banks", bankRouter);
app.use("/api/v1/keywords", keywordRouter);

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.use("/login", authViewRouter);

app.all("*", (req, res, next) => {
  next(new appError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
