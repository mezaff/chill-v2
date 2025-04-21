import { axiosInstace } from "@/lib/axios";
import { useEffect, useState } from "react";

type TopRatedMoviesResponse = {
  results: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
};

export const useFetchTopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<
    TopRatedMoviesResponse["results"]
  >([]);
  const [topRatedMoviesIsLoading, setTopRatedMoviesIsLoading] = useState(false);
  const [topRatedMoviesError, setTopRatedMoviesError] = useState("");

  useEffect(() => {
    setTopRatedMoviesIsLoading(true);
    const fecthTopRatedMovies = async () => {
      try {
        const res = await axiosInstace.get<TopRatedMoviesResponse>(
          "/movie/top_rated"
        );
        setTopRatedMovies(res.data.results);
      } catch (error) {
        setTopRatedMoviesError("Failed to fetch top rated movies");
        console.log((error as TypeError).message);
      } finally {
        setTopRatedMoviesIsLoading(false);
      }
    };
    fecthTopRatedMovies();
  }, []);
  return {
    topRatedMovies,
    topRatedMoviesIsLoading,
    topRatedMoviesError,
  };
};
