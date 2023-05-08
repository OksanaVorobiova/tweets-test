import axios from "axios";

const ENDPOINT = `https://645415fdc18adbbdfeaf23e9.mockapi.io/api/v1/users`;
axios.defaults.baseURL = ENDPOINT;

export const filterThroughRequest = async (isFollowing, page) => {
  const config = {
    params: {
      isFollowing: isFollowing,
      page: page,
    },
  };

  try {
    const res = await axios.get("", config);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
