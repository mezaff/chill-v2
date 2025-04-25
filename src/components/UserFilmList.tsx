import { useEffect, useState } from "react";
import VerticalFilmLayout from "./Layouts/VerticalFilmLayout";
import { Card, CardContent } from "./ui/card";
import { CarouselContent, CarouselItem } from "./ui/carousel";
import { axiosAuthInstance } from "@/lib/axios";
import { useLogedInUser } from "@/hooks/useLogedInUser";
import { Button } from "./ui/button";
import { useHoveredMovies } from "@/hooks/useHoveredMovies";

type Genre = {
  id: number;
  name: string;
};

type UserFilmListDataResponse = {
  id: number;
  userId: string;
  film_id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: Genre[];
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

const UserFilmList = () => {
  const [filmList, setFilmList] = useState<UserFilmListDataResponse[]>([]);
  const { logedInUser } = useLogedInUser();
  const { handleMouseEnter, handleMouseLeave, hoveredId } = useHoveredMovies();
  const userId = logedInUser?.id;

  useEffect(() => {
    const fetchFilmList = async () => {
      try {
        const userFilmListData = (
          await axiosAuthInstance.get("userFilmList")
        ).data.slice(
          (userFilmList: UserFilmListDataResponse) =>
            userFilmList.userId === userId
        );
        setFilmList(userFilmListData);
      } catch (error) {
        console.error("Error fetching film list:", error);
      }
    };
    fetchFilmList();
  }, [setFilmList, userId]);

  const handleRemoveFromList = async (filmId: number) => {
    const listId = filmList.find((film) => film.film_id === filmId)?.id;
    try {
      await axiosAuthInstance.delete(`userFilmList/${listId}`);
      setFilmList((prevList) =>
        prevList.filter((film) => film.film_id !== filmId)
      );
      alert("Film berhasil dihapus dari list!");
    } catch (error) {
      console.error("Error removing film from list:", error);
    }
  };
  return (
    <VerticalFilmLayout type="myList" sectionTitle="">
      {filmList.length === 0 ? (
        <p className="text-center font-semibold  text-white">
          Anda belum punya list film.
        </p>
      ) : (
        <CarouselContent>
          {filmList.map((film) => (
            <CarouselItem key={film.id} className="basis-1/3 lg:basis-1/5">
              <div className="group relative w-[95px] h-[145px] md:w-[234px] md:h-[365px] overflow-hidden  rounded-2xl">
                <Card
                  onMouseEnter={() => handleMouseEnter(film.id)}
                  onMouseLeave={() => handleMouseLeave()}
                  style={{
                    backgroundImage: `url(${
                      import.meta.env.VITE_TMDB_IMG_URL
                    }/${film.poster_path})`,
                  }}
                  className={`absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 bg-cover bg-center `}
                >
                  <CardContent
                    className={`absolute inset-0 z-10 grid place-content-center ${
                      hoveredId === film.id
                        ? "bg-gradient-to-br from-white/20 to-white/0 backdrop-blur"
                        : ""
                    }`}
                  >
                    {hoveredId === film.id && (
                      <div className="flex flex-col gap-2 items-center justify-between w-[95px] h-[145px] md:w-[234px] md:h-[365px] py-15 px-5">
                        <p className="text-xl text-center font-semibold text-white">
                          {film.title}
                        </p>
                        <Button
                          onClick={() => handleRemoveFromList(film.film_id)}
                          className="rounded-full bg-[#3254FF] border-2 border-[#3254FF] text-white hover:bg-transparent hover:text-white text-xs"
                        >
                          Remove from List
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      )}
    </VerticalFilmLayout>
  );
};

export default UserFilmList;
