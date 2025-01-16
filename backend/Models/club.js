import mongoose from "mongoose";


const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  members: {
    type: [Object],
    default: [],
  },
});

const eventSchema = new mongoose.Schema({
  eventName: {
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
  eventImages: {
    type: [String],
    default: [],
    registrationLink: "",
  },
  registrationLink:{
    type: String,
  }
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
  about: {
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
    default: [],
  },
  id: {
    type: Number,
  },
});

const clubSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Codebusters",
    unique: true,
  },
  password: {
    type: String,
    default: "xyz",
  },
  members: {
    type: [teamSchema],
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
  hire:{
    type: String,
    default: "nothiring",
  }
});

const Club = mongoose.model("club", clubSchema);
export default Club;
