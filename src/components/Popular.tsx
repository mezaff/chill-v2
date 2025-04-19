import axios from "axios";
import { Card } from "./ui/card";
import { CarouselContent, CarouselItem } from "./ui/carousel";
import { useEffect, useState } from "react";
import VerticalFilmLayout from "./Layouts/VerticalFilmLayout";

const Popular = () => {
  const [movies, setMovies] = useState<
    {
      adult: boolean;
      backdrop_path: string;
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
    }[]
  >([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `${import.meta.env.VITE_TMDB_BASE_URL}/trending/movie/day`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_READ_TOKEN}`,
      },
    };
    axios
      .request(options)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <VerticalFilmLayout type="popular" sectionTitle="Trending Film">
      <CarouselContent>
        {movies.map((res, id) => (
          <CarouselItem key={id} className="basis-1/3 lg:basis-1/5 md:mx-2">
            <div className=" p-1">
              <Card
                style={{
                  backgroundImage: `url(${import.meta.env.VITE_TMDB_IMG_URL}/${
                    res.poster_path
                  })`,
                }}
                className={`w-[95px] h-[145px] md:w-[234px] md:h-[365px] bg-no-repeat bg-cover bg-center rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 p-0 flex `}
              >
                {/* <CardContent>
        {res.status === "new" ? (
          <div className="text-white text-center text-[5.74px] md:text-[14px] font-bold rounded-xl bg-[#0F1E93] py-[1.91px] px-[4.78px] md:py-[4px] md:px-[10px]">
            Episode Baru
          </div>
        ) : null}
        {res.status === "top" ? (
          <div className="text-white text-center text-[5.74px] md:text-[14px] rounded-tr-xs rounded-bl-xs md:rounded-tr-md md:rounded-bl-md bg-[#B71F1D] p-[1.91px] md:p-[4px]">
            Top <br />
            10
          </div>
        ) : null}
      </CardContent> */}
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </VerticalFilmLayout>
  );
};

export default Popular;
