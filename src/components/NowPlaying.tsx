import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useFetchNowPlayingMovies } from "@/services/useFetchNowPlayingMovies";
import { useHoveredMovies } from "@/hooks/useHoveredMovies";

type NowPlayingProps = {
  idSection: string;
  sectionTitle: string;
};

const NowPlaying = (props: NowPlayingProps) => {
  const { idSection, sectionTitle } = props;
  const { nowPlayingMovies, nowPlayingMoviesError, nowPlayingMoviesIsLoading } =
    useFetchNowPlayingMovies();
  const { handleMouseEnter, handleMouseLeave, hoveredId } = useHoveredMovies();
  return (
    <section
      id={idSection}
      className="flex flex-col items-center py-5 md:py-20 px-8 bg-[#181a1c]"
    >
      <div className="flex flex-col items-start justify-center w-full mb-5 md:ps-30">
        <h1 className="text-white text-start font-bold md:text-2xl">
          {sectionTitle}
        </h1>
      </div>
      <Carousel className="w-full max-w-lg md:max-w-2xl lg:max-w-7xl">
        {nowPlayingMoviesError && (
          <p className="text-red-500 text-center self-center">
            {nowPlayingMoviesError}
          </p>
        )}
        <CarouselContent>
          {nowPlayingMovies.map((movie) => (
            <CarouselItem key={movie.id} className="md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <Card
                  onMouseEnter={() => handleMouseEnter(movie.id)}
                  onMouseLeave={() => handleMouseLeave()}
                  className="w-[309px] h-[151px] md:w-[302px] md:h-[162px] bg-no-repeat bg-cover bg-center rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 p-0"
                  style={{
                    backgroundImage: `url(${
                      import.meta.env.VITE_TMDB_IMG_URL
                    }/${movie.backdrop_path})`,
                  }}
                >
                  {nowPlayingMoviesIsLoading ? (
                    <p>Loading...</p>
                  ) : (
                    <CardContent
                      className={`relative flex items-end justify-between h-full bg-gradient-to-t from-black to-transparent rounded-lg pb-2 ${
                        hoveredId === movie.id ? "bg-black/80" : ""
                      }`}
                    >
                      {hoveredId === movie.id && (
                        <p className="absolute top-15 text-white font-semibold transition-all duration-300 ease-in-out z-10">
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
                      )}

                      <p className="text-white text-[14px] md:text-[18px] font-bold z-10">
                        {movie.title}
                      </p>
                      <p className="text-white text-[14px] md:text-[18px] z-10 flex flex-row justify-between items-center gap-[4px]">
                        <img
                          src="/images/star.png"
                          alt="star"
                          className="w-[12px] md:w-[16px] h-[12px] md:h-[16px]"
                        />{" "}
                        {movie.vote_average}
                      </p>
                    </CardContent>
                  )}
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
};

export default NowPlaying;
