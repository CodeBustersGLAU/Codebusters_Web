import React, { useState } from "react";
import { updateTeam } from "./../../../APIs/admin";
import { useUserContext } from "./../../../context";

function Members() {
  const { club, setClub, user } = useUserContext();
  const [members, setMembers] = useState(club?.members || []);
  const [newTeam, setNewTeam] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [memberDetails, setMemberDetails] = useState({
    name: "",
    email: "",
    position: "",
    photo: "",
  });
  const [editTeamIndex, setEditTeamIndex] = useState(null);
  const [editMemberIndex, setEditMemberIndex] = useState(null);

  // Add a new team
  const addTeam = () => {
    if (newTeam.trim() === "") return;
    const updatedMembers = [...members, { name: newTeam, members: [] }];
    setMembers(updatedMembers);
    setClub((prevClub) => ({ ...prevClub, members: updatedMembers }));
    setNewTeam("");
  };

  // Add a member to a team
  const addMember = () => {
    const { name, email, position, photo } = memberDetails;
    if (!selectedTeam || !name || !email || !position || !photo) {
      alert("Please fill in all fields.");
      return;
    }

    const updatedMembers = members.map((team) => {
      if (team.name === selectedTeam) {
        return {
          ...team,
          members: [...team.members, { name, email, position, photo }],
        };
      }
      return team;
    });

    setMembers(updatedMembers);
    setClub((prevClub) => ({ ...prevClub, members: updatedMembers }));
    setMemberDetails({ name: "", email: "", position: "", photo: "" });
  };

  // Start editing a member
  const startEditingMember = (teamIndex, memberIndex) => {
    const memberToEdit = members[teamIndex].members[memberIndex];
    setMemberDetails(memberToEdit);
    setEditTeamIndex(teamIndex);
    setEditMemberIndex(memberIndex);
  };

  // Save edited member details
  const saveMemberDetails = () => {
    const updatedMembers = members.map((team, teamIndex) => {
      if (teamIndex === editTeamIndex) {
        const updatedTeam = { ...team };
        updatedTeam.members[editMemberIndex] = memberDetails;
        return updatedTeam;
      }
      return team;
    });

    setMembers(updatedMembers);
    setClub((prevClub) => ({ ...prevClub, members: updatedMembers }));
    setMemberDetails({ name: "", email: "", position: "", photo: "" });
    setEditTeamIndex(null);
    setEditMemberIndex(null);
  };

  // Update the backend with the latest members
  const handleTeamUpdate = async () => {
    try {
      const res = await updateTeam({
        name: user.name,
        password: user.password,
        members: members,
      });
      alert(res.message || "Team updated successfully!");
    } catch (error) {
      console.error("Failed to update team:", error);
      alert("Failed to update team.");
    }
  };

  return (
    <div className="p-10 pl-8 pr-8 min-h-[calc(100vh-100px)] bg-slate-800 bg-opacity-50">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Manage Teams and Members
      </h2>
      <div className="text-right mb-4">
        <button
          onClick={handleTeamUpdate}
          className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 focus:ring-4 focus:ring-red-300 focus:outline-none transition duration-300 ease-in-out"
        >
          Update Team
        </button>
      </div>

      {/* Add New Team Section */}
      <div className="bg-slate-300 shadow-sm rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-slate-700">
          Add a New Team
        </h2>
        <div className="flex flex-col sm:flex-row sm:space-x-2 items-center">
          <input
            type="text"
            placeholder="Team Name"
            value={newTeam}
            onChange={(e) => setNewTeam(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg w-full sm:w-2/3 text-sm mb-3 sm:mb-0"
          />
          <button
            onClick={addTeam}
            className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200 sm:w-1/3 text-sm"
          >
            Add Team
          </button>
        </div>
      </div>

      {/* Add Member Section */}
      <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          {editMemberIndex === null ? "Add Member to a Team" : "Edit Member"}
        </h2>
        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full mb-4 text-sm"
          disabled={editMemberIndex !== null}
        >
          <option value="">Select Team</option>
          {members.map((team, index) => (
            <option key={index} value={team.name}>
              {team.name}
            </option>
          ))}
        </select>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Member Name"
            value={memberDetails.name}
            onChange={(e) =>
              setMemberDetails((prev) => ({ ...prev, name: e.target.value }))
            }
            className="p-2 border border-gray-300 rounded-lg w-full text-sm"
          />
          <input
            type="email"
            placeholder="Member Email"
            value={memberDetails.email}
            onChange={(e) =>
              setMemberDetails((prev) => ({ ...prev, email: e.target.value }))
            }
            className="p-2 border border-gray-300 rounded-lg w-full text-sm"
          />
          <input
            type="text"
            placeholder="Position"
            value={memberDetails.position}
            onChange={(e) =>
              setMemberDetails((prev) => ({
                ...prev,
                position: e.target.value,
              }))
            }
            className="p-2 border border-gray-300 rounded-lg w-full text-sm"
          />
          <input
            type="text"
            placeholder="Member Photo URL"
            value={memberDetails.photo}
            onChange={(e) =>
              setMemberDetails((prev) => ({ ...prev, photo: e.target.value }))
            }
            className="p-2 border border-gray-300 rounded-lg w-full text-sm"
          />
        </div>

        <button
          onClick={editMemberIndex === null ? addMember : saveMemberDetails}
          className="mt-4 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 w-full text-sm"
        >
          {editMemberIndex === null ? "Add Member" : "Save Changes"}
        </button>
      </div>

      {/* Display Teams and Members */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-white">
          Teams and Members
        </h2>
        {members.length === 0 ? (
          <p className="text-white">No teams added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((team, teamIndex) => (
              <div
                key={teamIndex}
                className="bg-white shadow-sm rounded-lg p-4 hover:shadow-lg transition duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {team.name}
                </h3>
                {team.members.length === 0 ? (
                  <p className="text-gray-600 text-sm">No members added yet.</p>
                ) : (
                  <ul className="mt-3">
                    {team.members.map((member, memberIndex) => (
                      <li
                        key={memberIndex}
                        className="flex items-center space-x-3 mb-3"
                      >
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">
                            {member.name}
                          </p>
                          <p className="text-gray-600 text-xs">
                            {member.email}
                          </p>
                          <p className="text-sm text-gray-500">
                            {member.position}
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            startEditingMember(teamIndex, memberIndex)
                          }
                          className="ml-auto text-sm text-blue-600 underline"
                        >
                          Edit
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Members;
