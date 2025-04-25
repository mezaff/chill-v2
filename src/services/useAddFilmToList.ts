import { axiosAuthInstance, axiosFilmInstance } from "@/lib/axios";
import { useNavigate } from "react-router";

type FilmResponse = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Genre[];
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
};

type Genre = {
  id: number;
  name: string;
};

type AddFilm = {
  user_id: number;
  film_id: number;
};

type AddFilmToListProps = {
  userId: string | number | undefined;
  movieId: number;
};

export const useAddFilmToList = (props: AddFilmToListProps) => {
  const navigate = useNavigate();
  const { userId, movieId } = props;
  const handleAddToList = async () => {
    if (userId) {
      try {
        const film = await axiosFilmInstance.get<FilmResponse>(
          `movie/${movieId}`
        );
        const filmData = {
          user_id: userId,
          film_id: film.data.id,
          adult: film.data.adult,
          backdrop_path: film.data.backdrop_path,
          genre_ids: film.data.genre_ids,
          original_language: film.data.original_language,
          original_title: film.data.original_title,
          overview: film.data.overview,
          popularity: film.data.popularity,
          poster_path: film.data.poster_path,
          release_date: film.data.release_date,
          title: film.data.title,
          video: film.data.video,
          vote_average: film.data.vote_average,
          vote_count: film.data.vote_count,
        };
        await axiosAuthInstance.post<AddFilm>(`/userFilmList`, filmData);
        alert("Film berhasil ditambahkan ke list film Anda");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Anda belum login");
      navigate("/login");
    }
  };
  return { handleAddToList };
};
