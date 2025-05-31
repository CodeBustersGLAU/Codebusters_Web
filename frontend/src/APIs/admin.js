import axios from "axios";
const URL = "https://codebusters-web.onrender.com";

export const login = async (data) => {
  try {
    let res = await axios.post(`${URL}/login`, data);
    return res;
  } catch (error) {
    return error;
  }
};

export const updateTeam = async (data) => {
  try {
    let res = await axios.post(`${URL}/updateTeam`, data);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const updateEvents = async (data) => {
  try {
    let res = await axios.post(`${URL}/updateEvents`, data);
    console.log(res.data);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const updateAlumnies = async (data) => {
  try {
    let res = await axios.post(`${URL}/updateAlumnies`, data);
    console.log(data);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const updateHighlights = async (data) => {
  try {
    let res = await axios.post(`${URL}/updateHighlights`, data);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getClubData = async () => {
  try {
    let res = await axios.post(`${URL}/getClubData`);
    return res.data.club;
  } catch (error) {
    return error;
  }
};

export const startHiring = async (data) => {
  try {
    let res = await axios.post(`${URL}/hire`, data);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const stopHiring = async (data) => {
  try {
    let res = await axios.post(`${URL}/hire`, data);
    return res.data;
  } catch (error) {
   return error;
  } 
};
