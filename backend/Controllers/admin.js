import Codebusters from "./../Models/club.js";

export const login = async (req, res) => {
  try {
    let club = await Codebusters.findOne({ name: req.body.name });
    if (!club)
      return res.status(201).json({ message: "You are not authorized" });
    if (club.password == req.body.password)
      return res.status(200).json({ message: "Logged in successfully" });
    else return res.status(201).json({ message: "Wrong password" });
  } catch (error) {
    return res.status(500).json({ message: "Authentication failed" });
  }
};
export const updateTeam = async (req, res) => {
  try {
    const allMembers = req.body.flatMap((team) =>
      team.members.map((member) => ({
        name: member.name,
        email: member.email,
        position: member.position,
        photo: member.photo,
        team: team.name,
      }))
    );

    let club = await Codebusters.findOne({ name: 'Codebusters' });
    if (!club) return res.status(404).json({ message: "Club not found" });
    club.members = allMembers;
    club.team = req.body;
    await club.save();

    return res.status(200).json({ message: "Members updated ✅", members: allMembers });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred" });
  }
};

export const updateEvents = async (req, res) => {
  try {
    const allEvents = req.body.map((event) => ({
      eventName: event.eventName,
      startDate: event.startDate,
      endDate: event.endDate,
      description: event.description,
      eventImages: event.eventImages || null,
      previewImage: event.eventImages || null,
      registrationLink: event.registrationLink,
      id: event.id,
    }));

    let club = await Codebusters.findOne({ name: "Codebusters" });
    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }

    club.events = allEvents;
    await club.save();

    return res
      .status(200)
      .json({ message: "Events updated ✅", events: allEvents });
  } catch (error) {
    console.error("Error updating events:", error);
    return res.status(500).json({ message: "An error occurred" });
  }
};

export const updateAlumnies = async (req, res) => {
  try {
    const allAlumnies = req.body.map((alumnie) => ({
      id: alumnie.id,
      name: alumnie.name,
      graduationYear: alumnie.graduationYear,
      email: alumnie.email,
      about: alumnie.about,
      profession: alumnie.profession,
      company: alumnie.company,
      photo: alumnie.photo || null,
    }));

    let club = await Codebusters.findOne({ name: "Codebusters" });
    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }

    club.alumnies = allAlumnies;
    await club.save();

    return res
      .status(200)
      .json({ message: "Alumnies updated ✅", alumnies: allAlumnies });
  } catch (error) {
    console.error("Error updating alumnies:", error);
    return res.status(500).json({ message: "An error occurred" });
  }
};

export const updateHighlights = async (req, res) => {
  try {
    let club = await Codebusters.findOne({ name: "Codebusters" });

    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }
    club.highlights = req.body;
    await club.save();

    return res
      .status(200)
      .json({ message: "Highlights updated successfully ✅" });
  } catch (error) {
    return res.status(500).json({ message: "Some error occurred" });
  }
};
export const hire = async (req, res) => {
  try {
    let club = await Codebusters.findOne({ name: "Codebusters" });
    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }

    // Ensure hireStatus is a Boolean
    const hireStatus = req.body.hireStatus; 

    if (typeof hireStatus !== "boolean") {
      return res.status(400).json({ message: "hireStatus must be a Boolean value" });
    }

    club.hire = hireStatus; // Update the hire field with the Boolean value
    await club.save();

    return res.status(200).json({ message: "Done" });
  } catch (error) {
    console.error("Error in hire route:", error);
    return res.status(500).json({ message: "Some error occurred" });
  }
};
