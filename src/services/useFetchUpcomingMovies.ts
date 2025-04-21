import { axiosInstace } from "@/lib/axios";
import { useEffect, useState } from "react";

type UpcomingMoviesResponse = {
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

export const useFetchUpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState<
    UpcomingMoviesResponse["results"]
  >([]);
  const [upcomingMoviesIsLoading, setUpcomingMoviesIsLoading] = useState(false);
  const [upcomingMoviesError, setUpcomingMoviesError] = useState("");

  useEffect(() => {
    setUpcomingMoviesIsLoading(true);
    const fecthTopRatedMovies = async () => {
      try {
        const res = await axiosInstace.get<UpcomingMoviesResponse>(
          "/movie/upcoming"
        );
        setUpcomingMovies(res.data.results);
      } catch (error) {
        setUpcomingMoviesError("Failed to fetch upcoming movies");
        console.log((error as TypeError).message);
      } finally {
        setUpcomingMoviesIsLoading(false);
      }
    };
    fecthTopRatedMovies();
  }, []);
  return {
    upcomingMovies,
    upcomingMoviesIsLoading,
    upcomingMoviesError,
  };
};
