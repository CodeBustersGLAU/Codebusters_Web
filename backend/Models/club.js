import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  image: {
    type: String,
  },
  team: {
    type: String,
  },
  position: {
    type: String,
  },
});

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  description: {
    type: String,
  },
  poster: {
    type: String,
  },
  images: {
    type: [String],
  },
});

const alumnieSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  graduationYear: {
    type: String,
  },
  description: {
    type: String,
  },
  profession: {
    type: String,
  },
  company: {
    type: String,
  },
  photo: {
    type: String,
  },
});

const highlightSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  date: {
    type: String,
  },
  description: {
    type: String,
  },
  images: {
    type: [String],
  },
  id: {
    type: Number,
  },
});

const clubSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Codebusters",
  },
  members: {
    type: [memberSchema],
    default: [],
  },
  events: {
    type: [eventSchema],
    default: [],
  },
  alumnies: {
    type: [alumnieSchema],
    default: [],
  },
  highlights: {
    type: [highlightSchema],
    default: [],
  },
});

const Club = mongoose.model("club", clubSchema);
export default Club;
