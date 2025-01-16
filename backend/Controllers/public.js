import Codebusters from "./../Models/club.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

export const getClubData = async (req, res) => {
  try {
    let club = await Codebusters.findOne({ name: "Codebusters" });
    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }
    club.password = null;
    club.name = null;
    return res
      .status(200)
      .json({ message: "Fetched Successfully", club: club });
  } catch (error) {
    return res.status(500).json({ message: "Some error occurred" });
  }
};
