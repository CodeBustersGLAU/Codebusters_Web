import axios from "axios";
export const awake = async () => {
  let res = axios.post(
    "https://codebusters-web.onrender.com/getClubData",
  );
};

export default awake;
