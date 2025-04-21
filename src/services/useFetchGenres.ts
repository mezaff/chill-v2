import { axiosInstace } from "@/lib/axios";
import { useEffect, useState } from "react";

type GenreResponse = {
  genres: {
    id: number;
    name: string;
  }[];
};
export const useFetchGenres = () => {
  const [genres, setGenres] = useState<GenreResponse["genres"]>([]);

  useEffect(() => {
    const fetchGeneres = async () => {
      try {
        const res = await axiosInstace.get<GenreResponse>("/genre/movie/list");
        setGenres(res.data.genres);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGeneres();
  });
  return { genres };
};
