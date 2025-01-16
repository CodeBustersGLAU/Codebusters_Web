import express from "express";
import Database from "./db.js";
import Routes from "./routes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/", Routes);

Database();

app.listen(8000, () => {
  console.log("Backend connected on http://localhost:8000");
});
