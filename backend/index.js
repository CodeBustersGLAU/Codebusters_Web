import express from "express";
import Database from "./db.js";
import Routes from "./routes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Routes);
Database();
app.listen(8000, () => {
  console.log("Backend connected");
});
