import { Card, CardContent } from "./ui/card";
import { CarouselContent, CarouselItem } from "./ui/carousel";
import VerticalFilmLayout from "./Layouts/VerticalFilmLayout";
import { useFetchUpcomingMovies } from "@/services/useFetchUpcomingMovies";
import { useHoveredMovies } from "@/hooks/useHoveredMovies";
import { Button } from "./ui/button";
import { useLogedInUser } from "@/hooks/useLogedInUser";
import { useAddFilmToList } from "@/services/useAddFilmToList";

const UpComing = () => {
  const { upcomingMovies, upcomingMoviesError } = useFetchUpcomingMovies();
  const { handleMouseEnter, handleMouseLeave, hoveredId } = useHoveredMovies();
  const { logedInUser } = useLogedInUser();
  const { handleAddToList } = useAddFilmToList({
    userId: logedInUser?.id,
    movieId: hoveredId,
  });

  return (
    <div>
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
              <div className="group relative w-[95px] h-[145px] md:w-[234px] md:h-[365px] overflow-hidden rounded-2xl">
                <Card
                  onMouseEnter={() => handleMouseEnter(movie.id)}
                  onMouseLeave={() => handleMouseLeave()}
                  style={{
                    backgroundImage: `url(${
                      import.meta.env.VITE_TMDB_IMG_URL
                    }/${movie.poster_path})`,
                  }}
                  className={`flex items-center justify-center inset-0 z-0 transition-transform duration-300 hover:scale-110 bg-cover bg-center`}
                >
                  <CardContent
                    className={`absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 bg-cover bg-center `}
                  >
                    <CardContent
                      className={`absolute inset-0 z-10 grid place-content-center`}
                    >
                      {hoveredId === movie.id && (
                        <div className="flex flex-col gap-2 items-center justify-center md:justify-between w-[95px] h-[145px] md:w-[234px] md:h-[365px] md:py-15 md:px-5">
                          <p className="hidden md:block text-xl text-center font-semibold text-white">
                            {movie.title}
                          </p>
                          <Button onClick={handleAddToList}>Add to List</Button>
                        </div>
                      )}
                    </CardContent>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </VerticalFilmLayout>
    </div>
  );
};

export default UpComing;
