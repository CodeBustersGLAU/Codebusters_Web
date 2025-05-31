import Codebusters from "./../Models/club.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();
const saltRounds = parseInt(process.env.SALTED_ROUNDS, 10);
import { redisClient } from './../redis.js'
export const login = async (req, res) => {
  try {
    const { name, password } = req.body;
    if (!name || !password)
      return res
        .status(400)
        .json({ message: "Please provide the required data" });
    let club = await Codebusters.findOne({ name: name });
    if (!club) return res.status(201).json({ message: "Incorrect Username" });
    else if (!(await bcrypt.compare(password, club.password)))
      return res.status(201).json({ message: "Wrong password" });
    return res.status(200).json({ message: "Logged in successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Authentication failed" });
  }
};

export const updateTeam = async (req, res) => {
  try {
    const { name, password, members } = req.body;
    if (!name || !password || !members) {
      return res.status(400).json({ message: "Please provide the required data" });
    }
    if (!Array.isArray(members) || members.length === 0) {
      return res.status(400).json({ message: "Invalid or empty input data" });
    }
    let club = await Codebusters.findOne({ name: name });
    if (!club) return res.status(201).json({ message: "Incorrect Username" });
    if (!(await bcrypt.compare(password, club.password))) {
      return res.status(201).json({ message: "Wrong password" });
    }
    const newTeams = members.map((team) => ({
      name: team.name,
      members: team.members.map((member) => ({
        name: member.name,
        email: member.email,
        position: member.position,
        photo: member.photo,
      })),
    }));
    club.members = newTeams;
    await club.save();
    await redisClient.del('club:data');
    return res.status(200).json({
      message: "Teams added successfully ✅",
      teams: club.teams
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred",
      error: error.message
    });
  }
};
export const updateEvents = async (req, res) => {
  try {
    const { name, password, events } = req.body;
    if (!name || !password || !events) {
      return res.status(400).json({ message: "Please provide the required data" });
    }

    let club = await Codebusters.findOne({ name: name });
    if (!club) return res.status(201).json({ message: "Incorrect Username" });
    if (!(await bcrypt.compare(password, club.password))) {
      return res.status(201).json({ message: "Wrong password" });
    }

    const allEvents = events.map((event) => ({
      eventName: event.eventName,
      startDate: event.startDate,
      endDate: event.endDate,
      description: event.description,
      eventImages: event.eventImages || null,
      previewImage: event.eventImages || null,
      registrationLink: event.registrationLink,
      id: event.id,
    }));

    club.events = allEvents;
    await club.save();

    // Invalidate the cached club data
    await redisClient.del('club:data');
    // Also invalidate events-specific cache if you have it
    await redisClient.del('events:data');

    return res.status(200).json({ message: "Events updated ✅" });
  } catch (error) {
    console.error("Error updating events:", error);
    return res.status(500).json({ message: "An error occurred" });
  }
};

export const updateAlumnies = async (req, res) => {
  try {
    const { name, password, alumnies } = req.body;
    if (!name || !password || !alumnies) {
      return res.status(400).json({ message: "Please provide the required data" });
    }

    let club = await Codebusters.findOne({ name: name });
    if (!club) return res.status(201).json({ message: "Incorrect Username" });
    if (!(await bcrypt.compare(password, club.password))) {
      return res.status(201).json({ message: "Wrong password" });
    }

    const allAlumnies = alumnies.map((alumnie) => ({
      id: alumnie.id,
      name: alumnie.name,
      graduationYear: alumnie.graduationYear,
      email: alumnie.email,
      about: alumnie.about,
      profession: alumnie.profession,
      company: alumnie.company,
      photo: alumnie.photo || null,
    }));

    club.alumnies = allAlumnies;
    await club.save();

    // Invalidate the cached club data
    await redisClient.del('club:data');
    // Also invalidate alumnies-specific cache if you have it
    await redisClient.del('alumnies:data');

    return res.status(200).json({ message: "Alumnies updated ✅" });
  } catch (error) {
    console.error("Error updating alumnies:", error);
    return res.status(500).json({ message: "An error occurred" });
  }
};

export const updateHighlights = async (req, res) => {
  try {
    const { name, password, highlights } = req.body;
    if (!name || !password || !highlights) {
      return res.status(400).json({ message: "Please provide the required data" });
    }

    let club = await Codebusters.findOne({ name: name });
    if (!club) return res.status(201).json({ message: "Incorrect Username" });
    if (!(await bcrypt.compare(password, club.password))) {
      return res.status(201).json({ message: "Wrong password" });
    }

    club.highlights = highlights;
    await club.save();

    // Invalidate the cached club data
    await redisClient.del('club:data');
    // Also invalidate highlights-specific cache if you have it
    await redisClient.del('highlights:data');

    return res.status(200).json({ message: "Highlights updated successfully ✅" });
  } catch (error) {
    return res.status(500).json({ message: "Some error occurred" });
  }
};
export const hire = async (req, res) => {
  try {
    const hireStatus = req.body.hireStatus;

    if (typeof hireStatus !== "boolean") {
      return res.status(400).json({ message: "hireStatus must be a Boolean value" });
    }

    // You need to define 'club' - this was missing in your original code
    let club = await Codebusters.findOne({ name: "Codebusters" });
    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }

    club.hire = hireStatus;
    await club.save();

    // Invalidate the cached club data
    await redisClient.del('club:data');
    // Also invalidate hiring status cache if you have it
    await redisClient.del('hiring:status');

    return res.status(200).json({ 
      message: "Hiring status updated successfully",
      hireStatus: club.hire 
    });
  } catch (error) {
    console.error("Error in hire route:", error);
    return res.status(500).json({ message: "Some error occurred" });
  }
};