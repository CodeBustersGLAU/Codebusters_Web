import express from "express";
import Database from "./db.js";
const app = express();
Database();
app.listen(8000, () => {
  console.log("Backend connected");
});
