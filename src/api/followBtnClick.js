import axios from "axios";

const ENDPOINT = `https://645415fdc18adbbdfeaf23e9.mockapi.io/api/v1/users`;
axios.defaults.baseURL = ENDPOINT;

export const onFollowBtnClick = async (id) => {
  try {
    const { data } = await axios.get(`/${id}`);
    const updateIsFollowing = await axios.put(`/${id}`, {
      ...data,
      isFollowing: !data.isFollowing,
      followers: data.isFollowing ? data.followers - 1 : data.followers + 1,
    });
    return updateIsFollowing.data;
  } catch (error) {
    console.log(error.message);
  }
};
