import axios from "axios";

const API_KEY = " apikey 64AI4VscmrEPpOjw5Czek3:0gKGcSWQKdPEMu4F6BavsL";
const BASE_URL = "https://api.collectapi.com/imdb";

export const searchByName = async (query) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/imdbSearchByName?query=${query}`,
      {
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Search by name response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const searchById = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/imdbSearchById?movieId=${movieId}`,
      {
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Search by ID response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
