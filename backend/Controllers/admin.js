import Codebusters from "./../Models/club.js";
export const updateTeam = async (req, res) => {
  try {
    const allMembers = req.body
      .flatMap((team) => team.members)
      .map((member) => ({
        name: member.name,
        email: member.email,
        position: member.position,
        profilePic: member.profilePic || null,
        previewPic: member.previewPic || null,
      }));
    let club = await Codebusters.findOne({ name: "Codebusters" });
    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }

    club.members = allMembers;
    await club.save();
    return res
      .status(200)
      .json({ message: "Members updated", members: allMembers });
  } catch (error) {
    console.error("Error updating members:", error);
    return res.status(500).json({ message: "An error occurred" });
  }
};

export const updateEvents = async (req, res) => {
  try {
    console.log(req.body);

    const allEvents = req.body.map((event) => ({
      eventName: event.eventName,
      startDate: event.startDate,
      endDate: event.endDate,
      eventDescription: event.eventDescription,
      eventImage: event.eventImage || null,
      previewImage: event.previewImage || null,
      formFields: event.formFields || [],
      subEvents: event.subEvents.map((subEvent) => ({
        name: subEvent.name,
        date: subEvent.date,
        time: subEvent.time,
        description: subEvent.description,
      })),
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
      .json({ message: "Events updated", events: allEvents });
  } catch (error) {
    console.error("Error updating events:", error);
    return res.status(500).json({ message: "An error occurred" });
  }
};

export const updateAlumnies = async (req, res) => {
  try {
    console.log(req.body);

    const allAlumnies = req.body.map((alumnie) => ({
      id: alumnie.id,
      name: alumnie.name,
      year: alumnie.year,
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
      .json({ message: "Alumnies updated", alumnies: allAlumnies });
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

    return res.status(200).json({ message: "Highlights updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Some error occurred" });
  }
};
