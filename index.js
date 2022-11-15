import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import { lol, bbb, ccc, ddd, eee } from "./db.js";
const app = express();

//middlewares
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, HEAD, PUT, PATCH, POST, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "*");
  next();
});

app.use(morgan("dev")); //http requests logger
app.use(express.json()); //для того что бы использовать req.body

app.get("/api/api/mine", (req, res) => {
  console.log("===================================");
  console.log("231 req.method", req.method);
  console.log("232 req.body", req.body);
  //   console.log("232 res", res);
  // res.json(123);
  console.log("===================================");
  // res.status(200).send("Its ok");
  res.json(lol);
});

// app.get("/api/api/lava?idmine=2296", (req, res) => {
//   console.log("===================================");
//   console.log("231 req.method", req.method);
//   console.log("232 req.body", req.body);
// //   console.log("232 res", res);
//   // res.json(123);
//   console.log("===================================");
//   // res.status(200).send("Its ok");
//   res.json(bbb);
// });

app.get("/api/api/lava", (req, res) => {
  console.log("===================================");
  console.log("231 req.method", req.method);
  console.log("232 req.body", req.body);
  // console.log("232 res", res);
  // res.json(123);
  console.log("===================================");
  // res.status(200).send("Its ok");
  res.json(bbb);
});

app.get("/api/Limits", (req, res) => {
  console.log("===================================");
  console.log("231 req.method", req.method);
  console.log("232 req.body", req.body);
  //   console.log("232 res", res);
  // res.json(123);
  console.log("===================================");
  // res.status(200).send("Its ok");
  res.json(ccc);
});

app.get("/api/Diagnostic", (req, res) => {
  console.log("===================================");
  console.log("231 req.method", req.method);
  console.log("232 req.body", req.body);
  //   console.log("232 res", res);
  // res.json(123);
  console.log("===================================");
  // res.status(200).send("Its ok");
  res.json(ddd);
});

app.get("/api/GetCheckLists", (req, res) => {
  console.log("===================================");
  // console.log("231 req.method", req.method);
  // console.log("232 req.body", req.body);
  // console.log("232 res", res);
  // res.json(123);
  console.log("===================================");
  // res.status(200).send("Its ok");
  res.json(eee);
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
