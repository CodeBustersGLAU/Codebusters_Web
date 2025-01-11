import express from "express";

import { login } from "./Controllers/admin.js";
import { updateTeam } from "./Controllers/admin.js";
import { updateEvents } from "./Controllers/admin.js";
import { updateAlumnies } from "./Controllers/admin.js";
import { updateHighlights } from "./Controllers/admin.js";

const route = express.Router();

route.post("/login", login);
route.post("/updateTeam", updateTeam);
route.post("/updateEvents", updateEvents);
route.post("/updateAlumnies", updateAlumnies);
route.post("/updateHighlights", updateHighlights);

export default route;
