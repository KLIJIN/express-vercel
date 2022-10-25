import express from "express";
import { lol } from "./db.js";
const app = express();

app.use(express.json({ extended: false }));

app.get("/api/api/mine", (req, res) => {
  console.log("===================================");
  console.log("231 req.method", req.method);
  console.log("232 req.body", req.body);
  // res.json(123);
  console.log("===================================");
  // res.status(200).send("Its ok");
  res.json(lol);
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
