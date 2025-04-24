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
import { Button } from "./ui/button";
import { useLogedInUser } from "@/hooks/useLogedInUser";
import { useAddFilmToList } from "@/services/useAddFilmToList";

type NowPlayingProps = {
  idSection: string;
  sectionTitle: string;
};

const NowPlaying = (props: NowPlayingProps) => {
  const { idSection, sectionTitle } = props;
  const { nowPlayingMovies, nowPlayingMoviesError } =
    useFetchNowPlayingMovies();
  const { handleMouseEnter, handleMouseLeave, hoveredId } = useHoveredMovies();
  const { logedInUser } = useLogedInUser();
  const { handleAddToList } = useAddFilmToList({
    userId: logedInUser?.id,
    movieId: hoveredId,
  });
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
              <div className="group relative w-[309px] h-[151px] md:w-[302px] md:h-[162px] overflow-hidden  rounded-2xl">
                <Card
                  onMouseEnter={() => handleMouseEnter(movie.id)}
                  onMouseLeave={() => handleMouseLeave()}
                  style={{
                    backgroundImage: `url(${
                      import.meta.env.VITE_TMDB_IMG_URL
                    }/${movie.backdrop_path})`,
                  }}
                  className={`absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 bg-cover bg-center `}
                >
                  <CardContent
                    className={`absolute inset-0 z-10 grid place-content-center ${
                      hoveredId === movie.id
                        ? "bg-gradient-to-br from-white/20 to-white/0 backdrop-blur"
                        : ""
                    }`}
                  >
                    {hoveredId === movie.id && (
                      <div className="flex flex-col gap-2 items-center justify-between w-[309px] h-[151px] md:w-[302px] md:h-[162px] py-5 px-5">
                        <p className="text-white font-semibold transition-all duration-300 ease-in-out z-10">
                          {movie.title}
                        </p>
                        <Button
                          onClick={handleAddToList}
                          className="rounded-full bg-[#3254FF] border-2 border-[#3254FF] text-white hover:bg-transparent hover:text-white text-xs"
                        >
                          Add to List
                        </Button>
                      </div>
                    )}
                  </CardContent>
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
