import axios from "axios";
const URL = "http://localhost:8000";
export const updateTeam = async () => {
  try {
    let res = await axios.post(`${URL}/updateTeam`);
    return res.data;
  } catch (error) {
    return error;
  }
};
