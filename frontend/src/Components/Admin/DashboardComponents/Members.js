import React, { useState, useRef } from "react";
import axios from "axios";
import { updateTeam } from "./../../../APIs/admin";
import { useUserContext } from "./../../../context";
import {
  Save,
  Add,
  Edit,
  Delete,
  Cancel,
  Group,
  PersonAdd,
  PhotoCamera,
  CloudUpload,
  CheckCircle,
  Error
} from "@mui/icons-material";
import { CircularProgress } from "@mui/material";

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
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const fileInputRef = useRef(null);

  // Cloudinary image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setIsUploading(true);
      setUploadError("");
      const cloudinaryFormData = new FormData();
      cloudinaryFormData.append("file", file);
      cloudinaryFormData.append("upload_preset", "ml_default");
      
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dthriaot4/image/upload",
        cloudinaryFormData
      );
      
      setMemberDetails(prev => ({
        ...prev,
        photo: response.data.secure_url
      }));
    } catch (err) {
      setUploadError("Failed to upload image");
      console.error(err);
    } finally {
      setIsUploading(false);
    }
  };

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
    if (!selectedTeam || !name || !email || !position) {
      alert("Please fill in all required fields.");
      return;
    }

    const updatedMembers = members.map((team) => {
      if (team.name === selectedTeam) {
        return {
          ...team,
          members: [...team.members, { name, email, position, photo: photo || "https://via.placeholder.com/150" }],
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
    setSelectedTeam(members[teamIndex].name);
    setEditTeamIndex(teamIndex);
    setEditMemberIndex(memberIndex);
  };

  // Cancel editing
  const cancelEditing = () => {
    setMemberDetails({ name: "", email: "", position: "", photo: "" });
    setEditTeamIndex(null);
    setEditMemberIndex(null);
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

  // Delete a member
  const deleteMember = (teamIndex, memberIndex) => {
    if (!window.confirm("Are you sure you want to delete this member?")) return;
    
    const updatedMembers = members.map((team, idx) => {
      if (idx === teamIndex) {
        return {
          ...team,
          members: team.members.filter((_, i) => i !== memberIndex)
        };
      }
      return team;
    });

    setMembers(updatedMembers);
    setClub((prevClub) => ({ ...prevClub, members: updatedMembers }));
  };

  // Delete a team
  const deleteTeam = (teamIndex) => {
    if (!window.confirm("Are you sure you want to delete this team and all its members?")) return;
    
    const updatedMembers = members.filter((_, idx) => idx !== teamIndex);
    setMembers(updatedMembers);
    setClub((prevClub) => ({ ...prevClub, members: updatedMembers }));
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
    <div className="p-4 md:p-8 min-h-[calc(100vh-100px)] bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <Group className="text-white mr-3" fontSize="large" />
            <h2 className="text-3xl font-bold text-white">
              Manage Teams and Members
            </h2>
          </div>
          <button
            onClick={handleTeamUpdate}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex items-center"
          >
            <Save className="mr-2" />
            Save Changes
          </button>
        </div>

        {/* Add New Team Section */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-white flex items-center">
            <Add className="mr-2" />
            Add a New Team
          </h2>
          <div className="flex flex-col sm:flex-row sm:space-x-3 items-center">
            <input
              type="text"
              placeholder="Team Name"
              value={newTeam}
              onChange={(e) => setNewTeam(e.target.value)}
              className="p-3 border border-gray-600 bg-gray-700 text-white rounded-lg w-full sm:w-2/3 mb-3 sm:mb-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              onClick={addTeam}
              className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200 sm:w-1/3 w-full flex items-center justify-center"
            >
              <Add className="mr-2" />
              Add Team
            </button>
          </div>
        </div>

        {/* Add/Edit Member Section */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-white flex items-center">
            {editMemberIndex === null ? (
              <>
                <PersonAdd className="mr-2" />
                Add Member to a Team
              </>
            ) : (
              <>
                <Edit className="mr-2" />
                Edit Member
              </>
            )}
          </h2>
          
          <select
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
            className="p-3 border border-gray-600 bg-gray-700 text-white rounded-lg w-full mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            disabled={editMemberIndex !== null}
          >
            <option value="">Select Team</option>
            {members.map((team, index) => (
              <option key={index} value={team.name}>
                {team.name}
              </option>
            ))}
          </select>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-300 mb-2">Member Name</label>
              <input
                type="text"
                placeholder="Member Name"
                value={memberDetails.name}
                onChange={(e) =>
                  setMemberDetails((prev) => ({ ...prev, name: e.target.value }))
                }
                className="p-3 border border-gray-600 bg-gray-700 text-white rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Member Email</label>
              <input
                type="email"
                placeholder="Member Email"
                value={memberDetails.email}
                onChange={(e) =>
                  setMemberDetails((prev) => ({ ...prev, email: e.target.value }))
                }
                className="p-3 border border-gray-600 bg-gray-700 text-white rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Position</label>
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
                className="p-3 border border-gray-600 bg-gray-700 text-white rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Member Photo</label>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => fileInputRef.current.click()}
                  className="p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition duration-200 flex items-center"
                >
                  <CloudUpload className="mr-2" />
                  Upload Photo
                </button>
                {isUploading && <CircularProgress size={24} />}
                {memberDetails.photo && !isUploading && (
                  <CheckCircle className="text-green-500" />
                )}
                {uploadError && <Error className="text-red-500" />}
              </div>
              {memberDetails.photo && (
                <div className="mt-2">
                  <img
                    src={memberDetails.photo}
                    alt="Preview"
                    className="h-16 w-16 rounded-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={editMemberIndex === null ? addMember : saveMemberDetails}
              className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200 flex-1 flex items-center justify-center"
            >
              {editMemberIndex === null ? (
                <>
                  <Add className="mr-2" />
                  Add Member
                </>
              ) : (
                <>
                  <Save className="mr-2" />
                  Save Changes
                </>
              )}
            </button>
            {editMemberIndex !== null && (
              <button
                onClick={cancelEditing}
                className="p-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition duration-200 flex-1 flex items-center justify-center"
              >
                <Cancel className="mr-2" />
                Cancel
              </button>
            )}
          </div>
        </div>

        {/* Display Teams and Members */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white flex items-center">
            <Group className="mr-2" />
            Teams and Members
          </h2>
          {members.length === 0 ? (
  <div className="bg-gray-800 rounded-xl p-6 text-center">
    <p className="text-gray-400">No teams added yet.</p>
  </div>
) : (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {members.map((team, teamIndex) => (
      <div
        key={teamIndex}
        className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-200 flex flex-col"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-white truncate max-w-[70%]">
            {team.name}
          </h3>
          <button
            onClick={() => deleteTeam(teamIndex)}
            className="text-red-500 hover:text-red-400 flex-shrink-0"
            title="Delete Team"
          >
            <Delete />
          </button>
        </div>
        {team.members.length === 0 ? (
          <p className="text-gray-400">No members added yet.</p>
        ) : (
          <ul className="space-y-4 flex-grow">
            {team.members.map((member, memberIndex) => (
              <li
                key={memberIndex}
                className="bg-gray-700 rounded-lg p-3 flex flex-col"
              >
                <div className="flex items-start space-x-3">
                  <img
                    src={member.photo || "https://via.placeholder.com/150"}
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="min-w-0 flex-grow">
                    <p className="font-semibold text-white truncate">
                      {member.name}
                    </p>
                    <p className="text-gray-300 text-sm truncate">
                      {member.email}
                    </p>
                    <p className="text-blue-400 text-sm truncate">
                      {member.position}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end space-x-2 mt-2">
                  <button
                    onClick={() => startEditingMember(teamIndex, memberIndex)}
                    className="text-blue-500 hover:text-blue-400 p-1"
                    title="Edit"
                  >
                    <Edit fontSize="small" />
                  </button>
                  <button
                    onClick={() => deleteMember(teamIndex, memberIndex)}
                    className="text-red-500 hover:text-red-400 p-1"
                    title="Delete"
                  >
                    <Delete fontSize="small" />
                  </button>
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
    </div>
  );
}

export default Members;