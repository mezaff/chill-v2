import { axiosInstace } from "@/lib/axios";
import { useEffect, useState } from "react";

type PopularMoviesResponse = {
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

export const useFetchPopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState<
    PopularMoviesResponse["results"]
  >([]);
  const [popularMoviesIsLoading, setPopularMoviesIsLoading] = useState(false);
  const [popularMoviesError, setPopularMoviesError] = useState("");

  useEffect(() => {
    setPopularMoviesIsLoading(true);
    const fecthTopRatedMovies = async () => {
      try {
        const res = await axiosInstace.get<PopularMoviesResponse>(
          "/trending/movie/week"
        );
        setPopularMovies(res.data.results);
      } catch (error) {
        setPopularMoviesError("Failed to fetch trending movies");
        console.log((error as TypeError).message);
      } finally {
        setPopularMoviesIsLoading(false);
      }
    };
    fecthTopRatedMovies();
  }, []);
  return {
    popularMovies,
    popularMoviesIsLoading,
    popularMoviesError,
  };
};
