import axios from "axios";

const url = "https://api.covid19api.com/";

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url + "/summary");
    return data.Global;
  } catch (error) {}
};

export const fetchGlobalData = async () => {
  try {
    const response = await axios.get(url + "/summary");
    return response.data.Global;
  } catch (error) {}
};
