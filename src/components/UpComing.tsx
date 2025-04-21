import { Card, CardContent } from "./ui/card";
import { CarouselContent, CarouselItem } from "./ui/carousel";
import VerticalFilmLayout from "./Layouts/VerticalFilmLayout";
import { useFetchUpcomingMovies } from "@/services/useFetchUpcomingMovies";
import { useHoveredMovies } from "@/hooks/useHoveredMovies";

const UpComing = () => {
  const { upcomingMovies, upcomingMoviesError, upcomingMoviesIsLoading } =
    useFetchUpcomingMovies();
  const { handleMouseEnter, handleMouseLeave, hoveredId } = useHoveredMovies();

  return (
    <VerticalFilmLayout type="upcoming" sectionTitle="Up Coming Film">
      {upcomingMoviesError && (
        <p className="text-red-500 text-center self-center">
          {upcomingMoviesError}
        </p>
      )}
      <CarouselContent>
        {upcomingMovies.map((movie) => (
          <CarouselItem
            key={movie.id}
            className="basis-1/3 lg:basis-1/5 md:mx-2"
          >
            <div className=" p-1">
              <Card
                onMouseEnter={() => handleMouseEnter(movie.id)}
                onMouseLeave={() => handleMouseLeave()}
                style={{
                  backgroundImage: `url(${import.meta.env.VITE_TMDB_IMG_URL}/${
                    movie.poster_path
                  })`,
                }}
                className={`w-[95px] h-[145px] md:w-[234px] md:h-[365px] bg-no-repeat bg-cover bg-center rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 p-0 flex `}
              >
                {upcomingMoviesIsLoading ? (
                  <p>Loading...</p>
                ) : (
                  <CardContent
                    className={`hidden md:flex items-center justify-center w-full h-full rounded-lg ${
                      hoveredId === movie.id && "bg-black/80"
                    }`}
                  >
                    <div
                      className={`flex flex-col items-center justify-center w-[95px] h-[145px] md:w-[234px] md:h-[365px] font-semibold`}
                    >
                      {hoveredId === movie.id && (
                        <>
                          <p className="text-white text-center text-xs md:text-sm">
                            Release:{" "}
                            {new Date(movie.release_date).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </p>
                          <p className="text-white text-start text-xs md:text-sm">
                            Vote: {movie.vote_count}
                          </p>
                          <p className="text-white text-start text-xs md:text-sm">
                            Vote Avg: {movie.vote_average}
                          </p>
                        </>
                      )}
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

export default UpComing;
