import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    "X-RapidAPI-Key": "71b90de5abmsh2a6854b97fec852p17c200jsn2f6949e66a4b",
  },
};

export const getPlacesData = async () => {
  try {
    //request
    const {
      data: { data },
    } = await axios.get(URL, options);

    return data;
  } catch (error) {
    //If request fails
    console.log(error);
  }
};
