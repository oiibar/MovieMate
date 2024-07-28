import axios from "axios";

const apiKey = "d56372f3ada929d6e287a8b3677028a9";
const baseURL = "https://api.themoviedb.org/3";

export const tmdbClient = axios.create({
  baseURL,
  params: {
    api_key: apiKey,
    language: "en-US",
    page: 1,
  },
});
