import axios from "axios";

const url = "https://api.covid19api.com";

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

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get("https://covid19.mathdro.id/api/daily");

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {}
};
