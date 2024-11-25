import React, { useState } from "react";
import { updateTeam } from "./../../../APIs/admin";
function Members() {
  const [teams, setTeams] = useState([]);
  const [newTeam, setNewTeam] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [memberDetails, setMemberDetails] = useState({
    name: "",
    email: "",
    position: "",
    profilePic: null,
    previewPic: null,
  });

  const addTeam = () => {
    if (newTeam.trim() === "") return;
    setTeams([...teams, { name: newTeam, members: [] }]);
    setNewTeam("");
  };

  const handleTeamUpdate = async () => {
    let res = await updateTeam();
    console.log(res);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setMemberDetails((prev) => ({
          ...prev,
          profilePic: file,
          previewPic: event.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addMember = () => {
    const { name, email, position, profilePic } = memberDetails;
    if (!selectedTeam || !name || !email || !position || !profilePic) return;
    const updatedTeams = teams.map((team) =>
      team.name === selectedTeam
        ? { ...team, members: [...team.members, memberDetails] }
        : team
    );
    setTeams(updatedTeams);
    setMemberDetails({
      name: "",
      email: "",
      position: "",
      profilePic: null,
      previewPic: null,
    });
  };

  return (
    <div className="p-2">
      <button
        className="absolute right-14 bg-red-200 p-2 rounded-lg"
        onClick={() => handleTeamUpdate}
      >
        Update Team
      </button>
      <h1 className="text-2xl font-bold mb-4">Manage Teams and Members</h1>

      {/* Add Team Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Add a New Team</h2>
        <input
          type="text"
          placeholder="Team Name"
          value={newTeam}
          onChange={(e) => setNewTeam(e.target.value)}
          className="p-2 border border-gray-300 rounded w-1/2"
        />
        <button
          onClick={addTeam}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Add Team
        </button>
      </div>

      {/* Add Member Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Add Member to a Team</h2>
        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          className="p-2 border border-gray-300 rounded w-1/2"
        >
          <option value="">Select Team</option>
          {teams.map((team, index) => (
            <option key={index} value={team.name}>
              {team.name}
            </option>
          ))}
        </select>

        <div className="mt-4 space-y-2">
          <input
            type="text"
            placeholder="Member Name"
            value={memberDetails.name}
            onChange={(e) =>
              setMemberDetails((prev) => ({ ...prev, name: e.target.value }))
            }
            className="p-2 border border-gray-300 rounded w-full"
          />
          <input
            type="email"
            placeholder="Member Email"
            value={memberDetails.email}
            onChange={(e) =>
              setMemberDetails((prev) => ({ ...prev, email: e.target.value }))
            }
            className="p-2 border border-gray-300 rounded w-full"
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
            className="p-2 border border-gray-300 rounded w-full"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="p-2"
          />
          {memberDetails.previewPic && (
            <img
              src={memberDetails.previewPic}
              alt="Preview"
              className="w-32 h-32 rounded mt-2 object-cover"
            />
          )}
        </div>

        <button
          onClick={addMember}
          className="mt-4 p-2 bg-green-500 text-white rounded w-full"
        >
          Add Member
        </button>
      </div>

      {/* Teams and Members List */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Teams and Members</h2>
        {teams.length === 0 ? (
          <p>No teams added yet.</p>
        ) : (
          <div>
            {teams.map((team, index) => (
              <div
                key={index}
                className="mb-4 p-4 border border-gray-300 rounded"
              >
                <h3 className="text-lg font-bold">{team.name}</h3>
                {team.members.length === 0 ? (
                  <p>No members added yet.</p>
                ) : (
                  <ul className="list-disc pl-5">
                    {team.members.map((member, i) => (
                      <li key={i} className="flex items-center space-x-4 mb-2">
                        <img
                          src={member.previewPic}
                          alt={member.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-bold">{member.name}</p>
                          <p>{member.email}</p>
                          <p className="text-sm text-gray-500">
                            {member.position}
                          </p>
                        </div>
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
