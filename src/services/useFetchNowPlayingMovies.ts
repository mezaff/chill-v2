import { axiosFilmInstance } from "@/lib/axios";
import { useEffect, useState } from "react";

type NowPlayingMoviesResponse = {
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

export const useFetchNowPlayingMovies = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<
    NowPlayingMoviesResponse["results"]
  >([]);
  const [nowPlayingMoviesIsLoading, setNowPlayingMoviesIsLoading] =
    useState(false);
  const [nowPlayingMoviesError, setNowPlayingMoviesError] = useState("");

  useEffect(() => {
    setNowPlayingMoviesIsLoading(true);
    const fecthTopRatedMovies = async () => {
      try {
        const res = await axiosFilmInstance.get<NowPlayingMoviesResponse>(
          "/trending/movie/week"
        );
        setNowPlayingMovies(res.data.results);
      } catch (error) {
        setNowPlayingMoviesError("Failed to fetch trending movies");
        console.log((error as TypeError).message);
      } finally {
        setNowPlayingMoviesIsLoading(false);
      }
    };
    fecthTopRatedMovies();
  }, []);
  return {
    nowPlayingMovies,
    nowPlayingMoviesIsLoading,
    nowPlayingMoviesError,
  };
};
