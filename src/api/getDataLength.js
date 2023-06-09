import axios from "axios";

const ENDPOINT = `https://645415fdc18adbbdfeaf23e9.mockapi.io/api/v1/users`;

axios.defaults.baseURL = ENDPOINT;

export const getDataLength = async (isFollowing) => {
  const config = {
    params: {
      isFollowing: isFollowing,
    },
  };

  try {
    const res = await axios.get("", config);
    return res.data.length;
  } catch (error) {
    console.log(error.message);
  }
};
