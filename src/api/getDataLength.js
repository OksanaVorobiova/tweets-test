import axios from "axios";

const ENDPOINT = `https://645415fdc18adbbdfeaf23e9.mockapi.io/api/v1/users`;

axios.defaults.baseURL = ENDPOINT;

export const getDataLength = async () => {
  try {
    const res = await axios.get();
    return res.data.length;
  } catch (error) {
    console.log(error.message);
  }
};
