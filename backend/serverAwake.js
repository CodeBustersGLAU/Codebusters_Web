export const awake = async (data) => {
  let res = axios.post(
    "https://codebusters-web.onrender.com/getClubData",
    data
  );
};

export default awake;
