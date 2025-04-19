import axios from "axios";
import { Card, CardContent } from "./ui/card";
import { CarouselContent, CarouselItem } from "./ui/carousel";
import { useEffect, useState } from "react";
import VerticalFilmLayout from "./Layouts/VerticalFilmLayout";

const Popular = () => {
  const [hoveredId, setHoveredId] = useState<number>(-1);
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
                onMouseEnter={() => setHoveredId(res.id)}
                onMouseLeave={() => setHoveredId(-1)}
                style={{
                  backgroundImage: `url(${import.meta.env.VITE_TMDB_IMG_URL}/${
                    res.poster_path
                  })`,
                }}
                className={`w-[95px] h-[145px] md:w-[234px] md:h-[365px] bg-no-repeat bg-cover bg-center rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 p-0 flex `}
              >
                {hoveredId === res.id && (
                  <CardContent className="hidden md:flex items-center justify-center w-full h-full bg-black/80 rounded-lg">
                    <div
                      className={`flex flex-col items-center justify-center w-[95px] h-[145px] md:w-[234px] md:h-[365px] font-semibold`}
                    >
                      <>
                        <p className="text-white text-start text-xs md:text-sm">
                          Release:{" "}
                          {new Date(res.release_date).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </p>
                        <p className="text-white text-start text-xs md:text-sm">
                          Vote: {res.vote_count}
                        </p>
                        <p className="text-white text-start text-xs md:text-sm">
                          Vote Avg: {res.vote_average}
                        </p>
                      </>
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </VerticalFilmLayout>
  );
};

export default Popular;
