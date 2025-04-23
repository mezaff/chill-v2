import axios from "axios";

export const axiosFilmInstance = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  },
});

export const axiosAuthInstance = axios.create({
  baseURL: import.meta.env.VITE_MOCKAPI_BASE_URL,
});
